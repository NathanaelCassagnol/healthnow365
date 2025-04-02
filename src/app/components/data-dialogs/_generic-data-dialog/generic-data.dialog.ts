import { CommonModule, JsonPipe } from "@angular/common";
import { Component, inject, Inject } from "@angular/core";
import { ValueChangeEvent } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { JoinPipe } from "app/shared/pipes/join.pipe";
import { FHIRResource } from "fhir/R4/types/_resource.types";
import { codeableConceptToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-generic-data-dialog',
    templateUrl: './generic-data.dialog.html',
    styleUrl: './generic-data.dialog.scss',
    standalone: true,
    imports: [JoinPipe, MatButtonModule, CommonModule, JsonPipe],
})
export class GenericDataDialog {
    resource: FHIRResource;
    resourceTitle = '';
    displayElements: ObjectDisplayElements[];

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { Resource: FHIRResource }) {
        this.resource = dialogData.Resource;
        this.resourceTitle = this.getTitle(this.resource);
        this.displayElements = this.getDisplayElements(this.resource);
    }

    private getTitle(resource: FHIRResource) {
        switch (resource.resourceType) {
            case 'Immunization':
                return codeableConceptToString(resource.vaccineCode);
            default:
                return '';
        }
    }

    private getDisplayElements(resource: Object) {
        const ret: ObjectDisplayElements[] = [];
        const entries = Object.entries(resource);
        entries.forEach(([key, value]) => {
            if (['resourceType', 'id', 'identifier'].includes(key)) return;
            if (key === 'text' && typeof value === 'object' && Object.hasOwn(value, 'div')) return;
            if (Array.isArray(value)) {
                const anyObject = value.find(e => typeof e === 'object') != null;
                if (anyObject) {
                    const addToRet: ObjectDisplayElements[][] = [];
                    value.forEach(element => {
                        addToRet.push(this.getDisplayElements(element));
                    })
                    ret.push({
                        title: key, 
                        type: 'objectArray',
                        value: addToRet
                    });
                }
                else {
                    const addToRet = value.map(v => v+'');
                    ret.push({
                        title: key, 
                        type: 'valueArray',
                        value: addToRet
                    });
                }
            }
            else if (typeof value === 'object') {
                const subvalue = this.getDisplayElements(value);
                ret.push({
                    title: key,
                    type: 'object',
                    value: subvalue
                })
            }
            else {
                ret.push({
                    title: key,
                    type: 'value',
                    value: value+''
                });
            }
        });

        return ret;
    }

    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}

type ObjectDisplayElements = {
    type: 'value';
    title: string;
    value: string;
} | {
    type: 'valueArray';
    title: string;
    value: string[];
} | {
    type: 'object';
    title: string;
    value: ObjectDisplayElements[];
} | {
    type: 'objectArray';
    title: string;
    value: ObjectDisplayElements[][];
}