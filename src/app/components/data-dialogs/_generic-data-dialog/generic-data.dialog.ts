import { CommonModule } from "@angular/common";
import { Component, inject, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { JoinPipe } from "app/shared/pipes/join.pipe";
import { getDisplayElements, getTitle, ObjectDisplayElements } from "app/types/fhir-info-functions";
import { FHIRResource } from "fhir/R4/types/_resource.types";

@Component({
    selector: 'app-generic-data-dialog',
    templateUrl: './generic-data.dialog.html',
    styleUrl: './generic-data.dialog.scss',
    standalone: true,
    imports: [JoinPipe, MatButtonModule, CommonModule],
})
export class GenericDataDialog {
    resource: FHIRResource;
    resourceTitle = '';
    displayElements: ObjectDisplayElements[];

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { Resource: FHIRResource }) {
        this.resource = dialogData.Resource;
        this.resourceTitle = getTitle(this.resource);
        this.displayElements = getDisplayElements(this.resource);
    }

    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}
