import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { DiagnosticReport } from "fhir/R4/types/diagnostic-report";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'app-diagnostic-report-card',
    styleUrl: './diagnostic-report-card.component.scss',
    templateUrl: './diagnostic-report-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class DiagnosticReportCardComponent {
    ReportResource = input.required<DiagnosticReport>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ReportResource()}})
    }
}