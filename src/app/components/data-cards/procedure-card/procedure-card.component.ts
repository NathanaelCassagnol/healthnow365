import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { Procedure } from "fhir/R4/types/procedure";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, rangeToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-procedure-card',
    styleUrl: './procedure-card.component.scss',
    templateUrl: './procedure-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ProcedureCardComponent {
    ProcedureResource = input.required<Procedure>();
    

    status = computed(() => this.ProcedureResource().status);
    category = computed(() => codeableConceptToString(this.ProcedureResource().category));
    performed = computed(() => 
        dateTimeToString(this.ProcedureResource().performedDateTime) ||
        periodToString(this.ProcedureResource().performedPeriod) || 
        rangeToString(this.ProcedureResource().performedRange) || 
        this.ProcedureResource().performedString
    );
    bodySite = computed(() => this.ProcedureResource().bodySite?.map(codeableConceptToString).join(', '));
    outcome = computed(() => codeableConceptToString(this.ProcedureResource().outcome));
    notes = computed(() => this.ProcedureResource().note?.map(annotationToString));



    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ProcedureResource()}})
    }
}