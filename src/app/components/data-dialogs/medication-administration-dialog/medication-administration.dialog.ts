import { Component, Inject, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DisplayMedicationAdministration } from "app/types/display-types";
import { JoinPipe } from "../../../shared/pipes/join.pipe";

@Component({
    selector: 'app-medication-administration-dialog',
    templateUrl: './medication-administration.dialog.html',
    styleUrl: './medication-administration.dialog.scss',
    standalone: true,
    imports: [MatButtonModule, JoinPipe],
})
export class MedicationAdministrationDialog {
    med: DisplayMedicationAdministration;
    dosageText = '';

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { Medication: DisplayMedicationAdministration }) {
        this.med = dialogData.Medication;

        const dosageTextParts: string[] = [];
        if (this.med.dosage.text.length) dosageTextParts.push(this.med.dosage.text);
        if (this.med.dosage.site.length) dosageTextParts.push('Site: '+this.med.dosage.site);
        if (this.med.dosage.route.length) dosageTextParts.push('Route: '+this.med.dosage.route);
        if (this.med.dosage.method.length) dosageTextParts.push('Method: '+this.med.dosage.method);
        if (this.med.dosage.dose.length) dosageTextParts.push('Dose: '+this.med.dosage.dose);
        if (this.med.dosage.rate.length) dosageTextParts.push('Rate: '+this.med.dosage.rate);
        this.dosageText = dosageTextParts.join(' | ');
    }


    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}