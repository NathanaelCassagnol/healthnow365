import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { MedicationAdministration } from "fhir/R4/types/medication-administration";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { codeableConceptToString, dateTimeToString, annotationToString, periodToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'medication-administration-card',
    styleUrl: './medication-administration-card.component.scss',
    templateUrl: './medication-administration-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class MedicationAdministrationCardComponent {
    med = input.required<MedicationAdministration>();

    status = computed(() => this.med().status);
    dose = computed(() => this.med().dosage?.text);
    category = computed(() => codeableConceptToString(this.med().category));
    effective = computed(() => 
        dateTimeToString(this.med().effectiveDateTime) || 
        periodToString(this.med().effectivePeriod)
    );
    notes = computed(() => this.med().note?.map(annotationToString));


    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.med()}})
    }
}