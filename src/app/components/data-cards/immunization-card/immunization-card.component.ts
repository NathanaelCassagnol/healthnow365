import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { Immunization } from "fhir/R4/types/immunization";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { annotationToString, codeableConceptToString, dateTimeToString, quantityToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-immunization-card',
    styleUrl: './immunization-card.component.scss',
    templateUrl: './immunization-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ImmunizationCardComponent {
    immunizationResource = input.required<Immunization>();
    
    status = computed(() => this.immunizationResource().status);
    site = computed(() => codeableConceptToString(this.immunizationResource().site));
    route = computed(() => codeableConceptToString(this.immunizationResource().route));
    dose = computed(() => quantityToString(this.immunizationResource().doseQuantity));
    occurrence = computed(() => 
        dateTimeToString(this.immunizationResource().occurrenceDateTime) || 
        this.immunizationResource().occurrenceString
    );
    notes = computed(() => this.immunizationResource().note?.map(annotationToString));

    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.immunizationResource()}})
    }
}