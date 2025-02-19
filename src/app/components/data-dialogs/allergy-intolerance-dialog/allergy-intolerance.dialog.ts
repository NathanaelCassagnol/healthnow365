import { Component, Inject, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { BasicToStringPipe } from "app/pipes/basic-to-string.pipe";
import { DisplayAllergy } from "app/types/display-types";

@Component({
    selector: 'app-allergy-intolerance-dialog',
    templateUrl: './allergy-intolerance.dialog.html',
    styleUrl: './allergy-intolerance.dialog.scss',
    standalone: true,
    imports: [MatButtonModule, BasicToStringPipe],
})
export class AllergyReactionDialog {
    ai: DisplayAllergy;
    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { AllergyIntolerance: DisplayAllergy }) {
        this.ai = dialogData.AllergyIntolerance;
    }


    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}