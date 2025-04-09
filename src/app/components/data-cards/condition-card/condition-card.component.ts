import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { Condition } from "fhir/R4/types/condition";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'app-condition-card',
    styleUrl: './condition-card.component.scss',
    templateUrl: './condition-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ConditionCardComponent {
    ConditionResource = input.required<Condition>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ConditionResource()}})
    }
}