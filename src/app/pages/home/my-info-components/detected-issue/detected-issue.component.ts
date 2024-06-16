import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockDetectedIssue1 } from "fhir/R4/mocks/detected-issue/mock-detected-issue-1";
import { mockDetectedIssue2 } from "fhir/R4/mocks/detected-issue/mock-detected-issue-2";
import { codeableConceptToString, dateTimeToString, periodToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/detectedissue.html

@Component({
    selector: 'app-detected-issue',
    styleUrl: './detected-issue.component.scss',
    templateUrl: './detected-issue.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class DetectedIssueComponent {
    myIssues = signal([mockDetectedIssue1, mockDetectedIssue2]);

    columns = ['status', 'code', 'severity', 'timeIdentified', 'evidence', 'detail', 'mitigation'];
    data = computed(() => this.myIssues().map(i => ({
        status: i.status,
        code: i.code ? codeableConceptToString(i.code) : '',
        severity: i.severity ?? '',
        timeIdentified: i.identifiedDateTime ? dateTimeToString(i.identifiedDateTime) : i.identifiedPeriod ? periodToString(i.identifiedPeriod) : '',
        evidence: (i.evidence??[]).flatMap(e => (e.code ?? []).map(c => codeableConceptToString(c))),
        detail: i.detail ?? '',
        mitigation: i.mitigation?.map(m => codeableConceptToString(m.action) + (m.date ? (' (given on '+dateTimeToString(m.date)+')') : '')),
    })));
    colData: MagicTableColumnData = {
    };
}