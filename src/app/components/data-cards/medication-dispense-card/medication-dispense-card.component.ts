import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MedicationDispense } from "fhir/R4/types/medication-dispense";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { annotationToString, codeableConceptToString, dateTimeToString, quantityToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'medication-dispense-card',
    styleUrl: './medication-dispense-card.component.scss',
    templateUrl: './medication-dispense-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class MedicationDispenseCardComponent {
    med = input.required<MedicationDispense>();

    status = computed(() => this.med().status);
    type = computed(() => codeableConceptToString(this.med().type));
    quantity = computed(() => quantityToString(this.med().quantity));
    category = computed(() => codeableConceptToString(this.med().category));
    time = computed(() => 
        dateTimeToString(this.med().whenHandedOver) || 
        dateTimeToString(this.med().whenPrepared)
    );
    notes = computed(() => this.med().note?.map(annotationToString));

    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.med()}})
    }
}