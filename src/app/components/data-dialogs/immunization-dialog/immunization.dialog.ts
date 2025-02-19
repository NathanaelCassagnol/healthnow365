import { JsonPipe } from "@angular/common";
import { Component, Inject, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DisplayImmunization } from "app/pages/home/my-info-components/immunizations/immunizations.component";
import { DisplayFamilyHistory } from "app/types/display-types";

@Component({
    selector: 'app-immunization-dialog',
    templateUrl: './immunization.dialog.html',
    styleUrl: './immunization.dialog.scss',
    standalone: true,
    imports: [MatButtonModule],
})
export class immunizationDialog {
    immunization: DisplayImmunization;

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { Immunization: DisplayImmunization }) {
        this.immunization = dialogData.Immunization;
    }

    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}