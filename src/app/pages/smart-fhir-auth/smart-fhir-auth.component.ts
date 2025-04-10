import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-smart-fhir-auth',
  templateUrl: './smart-fhir-auth.component.html',
  styleUrls: ['./smart-fhir-auth.component.css']
})
export class SmartFhirAuthComponent implements OnInit {
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oauthService: OAuthService
  ) {
    this.configureOAuth();
  }

  ngOnInit(): void {
    this.setupOAuthEvents();

    this.route.queryParams.subscribe(params => {
      if (params['error']) {
        this.handleError(params['error'], params['error_description']);
        return;
      }

      if (params['code']) {
        this.completeOAuthFlow();
      } else {
        this.startOAuthFlow();
      }
    });
  }

  private configureOAuth(): void {
    const authConfig: AuthConfig = {
      issuer: environment.authServerUrl,
      clientId: environment.fhirClientId,
      redirectUri: window.location.origin + environment.baseHref + 'auth/callback',
      responseType: 'code',
      scope: 'patient.read launch openid fhirUser',
      customQueryParams: {
        aud: environment.fhirServerUrl
      },
      oidc: true,
      requireHttps: true,
      showDebugInformation: !environment.production,
      strictDiscoveryDocumentValidation: false
    };

    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocument(`${environment.authServerUrl}/.well-known/openid-configuration`);
    this.oauthService.setupAutomaticSilentRefresh();
  }

  private setupOAuthEvents(): void {
    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received') {
        this.handleSuccessfulLogin();
      }

      if (event.type === 'token_refresh_error') {
        this.handleError('token_refresh_failed', 'Failed to refresh token');
      }
    });
  }

  startOAuthFlow(): void {
    this.loading = true;

    this.oauthService.loadDiscoveryDocument().then(() => {
      const additionalParams = {
        aud: environment.fhirServerUrl,
        ...(this.route.snapshot.queryParams['launch'] && {
          launch: this.route.snapshot.queryParams['launch']
        })
      };

      this.oauthService.initCodeFlow(undefined, additionalParams);
    }).catch(err => {
      this.handleError('discovery_failed', err.message);
    });
  }

  completeOAuthFlow(): void {
    this.loading = true;

    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        this.handleSuccessfulLogin();
      } else {
        this.handleError('auth_failed', 'Failed to obtain access token');
      }
    }).catch(err => {
      this.handleError('token_exchange_failed', err.message);
    });
  }

  private handleSuccessfulLogin(): void {
    const claims = this.oauthService.getIdentityClaims() as any;

    if (claims?.fhirUser) {
      sessionStorage.setItem('fhir_user', claims.fhirUser);
    }
    if (claims?.patient) {
      sessionStorage.setItem('fhir_patient_id', claims.patient);
    }

    this.loading = false;
    this.router.navigate(['/dashboard']);
  }

  private handleError(errorCode: string, errorDescription?: string): void {
    this.loading = false;
    this.error = errorDescription || `Authorization error: ${errorCode}`;
    console.error('Epic FHIR Auth Error:', errorCode, errorDescription);
  }
}
