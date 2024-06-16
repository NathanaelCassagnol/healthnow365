import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockDiagnosticReport1Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-1";
import { mockDiagnosticReport10Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-10";
import { mockDiagnosticReport11 } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-11";
import { mockDiagnosticReport12 } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-12";
import { mockDiagnosticReport13Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-13";
import { mockDiagnosticReport14Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-14";
import { mockDiagnosticReport15Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-15";
import { mockDiagnosticReport16 } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-16";
import { mockDiagnosticReport17Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-17";
import { mockDiagnosticReport2Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-2";
import { mockDiagnosticReport3Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-3";
import { mockDiagnosticReport4 } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-4";
import { mockDiagnosticReport6 } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-6";
import { mockDiagnosticReport7Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-7";
import { mockDiagnosticReport8Bundle } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-8";
import { mockDiagnosticReport9 } from "fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-9";
import { DiagnosticReport } from "fhir/R4/types/diagnostic-report";

import { codeableConceptToString, dateTimeToString, periodToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/diagnosticreport.html

@Component({
    selector: 'app-diagnostic-report',
    styleUrl: './diagnostic-report.component.scss',
    templateUrl: './diagnostic-report.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class DiagnosticReportComponent {
    myAdverseEvents = signal([
        ...(mockDiagnosticReport1Bundle.entry ?? []).map(e => e.resource),
        ...(mockDiagnosticReport2Bundle.entry ?? []).map(e => e.resource),
        ...(mockDiagnosticReport3Bundle.entry ?? []).map(e => e.resource),
        mockDiagnosticReport4,
        mockDiagnosticReport6,
        ...(mockDiagnosticReport7Bundle.entry ?? []).map(e => e.resource),
        ...(mockDiagnosticReport8Bundle.entry ?? []).map(e => e.resource),
        mockDiagnosticReport9,
        ...(mockDiagnosticReport10Bundle.entry ?? []).map(e => e.resource),
        mockDiagnosticReport11,
        mockDiagnosticReport12,
        ...(mockDiagnosticReport13Bundle.entry ?? []).map(e => e.resource),
        ...(mockDiagnosticReport14Bundle.entry ?? []).map(e => e.resource),
        ...(mockDiagnosticReport15Bundle.entry ?? []).map(e => e.resource),
        mockDiagnosticReport16,
        ...(mockDiagnosticReport17Bundle.entry ?? []).map(e => e.resource)] as DiagnosticReport[]);

    columns = [];
    data = computed(() => this.myAdverseEvents().map(e => ({
        status: e.status,
        category: codeableConceptToString(e.category),
        code: codeableConceptToString(e.code),
        effective: e.effectiveDateTime ? dateTimeToString(e.effectiveDateTime)
            : e.effectivePeriod ? periodToString(e.effectivePeriod) : '',
        conclusion: e.conclusion,
        conclusionCode: codeableConceptToString(e.conclusionCode)
    })));
    colData: MagicTableColumnData = {
    };
}