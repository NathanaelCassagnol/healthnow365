import { Component, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";

import { DiagnosticReport } from "fhir/R4/types/diagnostic-report";

import { codeableConceptsToString, codeableConceptToString, dateTimeToString, periodToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/diagnosticreport.html

@Component({
    selector: 'app-diagnostic-report',
    styleUrl: './diagnostic-report.component.scss',
    templateUrl: './diagnostic-report.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule],
    standalone: true,
})
export class DiagnosticReportComponent {
    myDiagnosticReports = input.required<DiagnosticReport[]>();

    columns = [];
    data = computed(() => this.myDiagnosticReports().map(e => ({
        status: e.status,
        category: codeableConceptsToString(e.category),
        code: codeableConceptToString(e.code),
        effective: e.effectiveDateTime ? dateTimeToString(e.effectiveDateTime)
            : e.effectivePeriod ? periodToString(e.effectivePeriod) : '',
        conclusion: e.conclusion,
        conclusionCode: codeableConceptsToString(e.conclusionCode)
    })));
    colData: MagicTableColumnData = {
    };
}