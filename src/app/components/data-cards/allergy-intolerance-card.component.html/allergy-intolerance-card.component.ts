import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { AllergyReactionDialog } from "app/components/data-dialogs/allergy-intolerance-dialog/allergy-intolerance.dialog";
import { DisplayAllergy } from "app/types/display-types";
import { AllergyIntolerance } from "fhir/R4/types/allergy-intolerance.types";

@Component({
    selector: 'app-allergy-intolerance-card',
    styleUrl: './allergy-intolerance-card.component.scss',
    templateUrl: './allergy-intolerance-card.component.html',
    standalone: true,
    imports: [MatButtonModule],
})
export class AllergyIntoleranceCard {
    allergy = input.required<DisplayAllergy>();
    allergyResource = input.required<AllergyIntolerance>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        // this.dialog.open(AllergyReactionDialog, {data: {AllergyIntolerance: this.allergy()}})
        this.dialog.open(GenericDataDialog, {data: {Resource: this.allergyResource()}})
    }
}