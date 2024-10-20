import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { CreateUser, CreateUserData } from "api/Users";
import { confirmSignIn, signIn } from 'aws-amplify/auth'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    ClientIdProduction = "0fa8a9a9-ae78-44ff-8d9d-5b25ac54decd";
    ClientIdNonProduction = "a230bb8e-0b8d-4349-9ee3-7720813fe6f0";
    RedirectUrl = "www.healthnow.org/callback";

    http = inject(HttpClient);
    SendConnectionRequest() {
        //https://fhir.epic.com/interconnect-fhir-oauth/oauth2/authorize?response_type=code&redirect_uri=[redirect_uri]&client_id=[client_id]&state=[state]&aud=[audience]
        const url = `https://fhir.epic.com/interconnect-fhir-oauth/oauth2/authorize?response_type=code&redirect_uri=${this.RedirectUrl}&client_id=${this.ClientIdNonProduction}`;
        this.http.get(url).subscribe(v => console.log(v));
    }
    CreateUser = (input: CreateUserData) => {
        return CreateUser(input);
    }
    SignIn = async (username: string, password: string): Promise<boolean> => {
        const { isSignedIn, nextStep } = await signIn({
            username,
            password,
        })

        // TODO Implement any required next steps
        // "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE" | "CONTINUE_SIGN_IN_WITH_MFA_SELECTION" | "CONFIRM_SIGN_IN_WITH_SMS_CODE" | "CONFIRM_SIGN_IN_WITH_TOTP_CODE" | "CONTINUE_SIGN_IN_WITH_TOTP_SETUP" | "CONFIRM_SIGN_UP" | "RESET_PASSWORD" | "DONE" | "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
        // if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE') {
        //     await confirmSignIn({
        //         challengeResponse: "12345"
        //     })
        // }

        return isSignedIn;
    }
    SignOut = () => {
        
    }
}