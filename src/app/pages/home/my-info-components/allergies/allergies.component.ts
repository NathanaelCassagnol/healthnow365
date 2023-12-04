import { Component, Input } from "@angular/core";
import { AllergyIntolerance } from "../../../../types/fhir/allergy-intolerance.types";
import { MatButtonModule } from "@angular/material/button";
import { TitleCasePipe } from "@angular/common";

@Component({
    selector: 'app-allergies',
    templateUrl: './allergies.component.html',
    styleUrls: ['./allergies.component.scss'],
    standalone: true,
    imports: [
        MatButtonModule,
        TitleCasePipe
    ],
})
export class AllergiesComponent {
    @Input() allergies: AllergyIntolerance[] = [];
}