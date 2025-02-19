import { Component, Inject, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DisplayImmunizationRec } from "app/pages/home/my-info-components/immunizations/immunizations.component";
import { JoinPipe } from "../../../shared/pipes/join.pipe";

@Component({
    selector: 'app-immunization-rec-dialog',
    templateUrl: './immunization-rec.dialog.html',
    styleUrl: './immunization-rec.dialog.scss',
    standalone: true,
    imports: [MatButtonModule, JoinPipe],
})
export class ImmunizationRecommendationDialog {
    immunization: DisplayImmunizationRec;

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { Immunization: DisplayImmunizationRec }) {
        this.immunization = dialogData.Immunization;
    }

    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}