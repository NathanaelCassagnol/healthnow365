import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MedicationDispense } from "fhir/R4/types/medication-dispense";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'medication-dispense-card',
    styleUrl: './medication-dispense-card.component.scss',
    templateUrl: './medication-dispense-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class MedicationDispenseCardComponent {
    med = input.required<MedicationDispense>();

    private dialog = inject(MatDialog);
    openDialog() {
        // this.dialog.open(MedicationDispenseDialog, {data: {Medication: this.med()}})
        this.dialog.open(GenericDataDialog, {data: {Resource: this.med()}})
    }
}