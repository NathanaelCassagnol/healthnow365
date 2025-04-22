import { CommonModule } from "@angular/common";
import { Component, inject, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ResourceCollectorService } from "app/services/resource-collector.service";
import { JoinPipe } from "app/shared/pipes/join.pipe";
import { getDisplayElements, getTitle, ObjectDisplayElements } from "app/types/fhir-info-functions";
import { FHIRResource } from "fhir/R4/types/_resource.types";
import { CamelTitlePipe } from "../../../shared/component-library/magic-table/camel-title.pipe";

@Component({
    selector: 'app-generic-data-dialog',
    templateUrl: './generic-data.dialog.html',
    styleUrl: './generic-data.dialog.scss',
    standalone: true,
    imports: [MatButtonModule, CommonModule, CamelTitlePipe],
})
export class GenericDataDialog {
    private dialogRef = inject(MatDialogRef);
    private resourceCollector = inject(ResourceCollectorService);

    resource: FHIRResource;
    resourceTitle = '';
    displayElements: ObjectDisplayElements[];

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { Resource: FHIRResource }) {
        this.resource = dialogData.Resource;
        this.resourceTitle = getTitle(this.resource);
        this.displayElements = getDisplayElements(this.resource);
        console.log(this.displayElements)
    }

    openReference(id: string) {
        const findResource = this.resourceCollector.getResourceByIdentifier(id);
        if (this.resourceCollector) {
            console.log(findResource);
        }
        else {
            console.log("Not found");
        }
    }

    close() {
        this.dialogRef.close();
    }
}
