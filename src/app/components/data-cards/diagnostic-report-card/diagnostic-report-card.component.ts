import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { DiagnosticReport } from "fhir/R4/types/diagnostic-report";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { codeableConceptToString, dateTimeToString, periodToString } from "fhir/R4/utilities/validators-tostring.util";
import { BasicToString } from "app/pipes/basic-to-string.pipe";

@Component({
    selector: 'app-diagnostic-report-card',
    styleUrl: './diagnostic-report-card.component.scss',
    templateUrl: './diagnostic-report-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class DiagnosticReportCardComponent {
    ReportResource = input.required<DiagnosticReport>();
    
    status = computed(() => this.ReportResource().status);
    category = computed(() => 
        this.ReportResource().category?.map(codeableConceptToString).join(', '));
    timestamp = computed(() =>
        dateTimeToString(this.ReportResource().effectiveDateTime) ||
        periodToString(this.ReportResource().effectivePeriod) ||
        dateTimeToString(this.ReportResource().issued));
    conclusion = computed(() => this.ReportResource().conclusion ||
        this.ReportResource().conclusionCode?.map(codeableConceptToString).join(', '));

    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ReportResource()}})
    }
}