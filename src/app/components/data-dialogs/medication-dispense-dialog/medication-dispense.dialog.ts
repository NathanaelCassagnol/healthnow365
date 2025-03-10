import { Component, Inject, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DisplayMedicationDispense } from "app/types/display-types";
import { JoinPipe } from "../../../shared/pipes/join.pipe";

@Component({
    selector: 'app-medication-dispense-dialog',
    templateUrl: './medication-dispense.dialog.html',
    styleUrl: './medication-dispense.dialog.scss',
    standalone: true,
    imports: [MatButtonModule, JoinPipe],
})
export class MedicationDispenseDialog {
    med: DisplayMedicationDispense;
    dosageText = '';

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { Medication: DisplayMedicationDispense }) {
        this.med = dialogData.Medication;
    }


    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}