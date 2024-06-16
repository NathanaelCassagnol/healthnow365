import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

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
}