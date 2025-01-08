import { Component, Inject, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AllergyIntolerance } from "fhir/R4/types/allergy-intolerance.types";
import { loadedAllergyType } from "../allergies.component";
import { MatButtonModule } from "@angular/material/button";
import { codeableConceptToString, codingToString } from "fhir/R4/utilities/validators-tostring.util";
import { BasicToStringPipe } from "app/pipes/basic-to-string.pipe";

@Component({
    selector: 'app-allergy-reaction-dialog',
    templateUrl: './allergy-reaction.dialog.html',
    styleUrl: './allergy-reaction.dialog.scss',
    standalone: true,
    imports: [MatButtonModule, BasicToStringPipe],
})
export class AllergyReactionDialog {
    ai: loadedAllergyType;
    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { AllergyIntolerance: loadedAllergyType }) {
        this.ai = dialogData.AllergyIntolerance;
    }


    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}