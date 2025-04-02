import { Component, computed, input, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { mockDetectedIssue1 } from "fhir/R4/mocks/detected-issue/mock-detected-issue-1";
import { mockDetectedIssue2 } from "fhir/R4/mocks/detected-issue/mock-detected-issue-2";
import { DetectedIssue } from "fhir/R4/types/detected-issue";
import { codeableConceptToString, dateTimeToString, periodToString } from "fhir/R4/utilities/validators-tostring.util";
import { DetectedIssueCardComponent } from "../../../../components/data-cards/detected-issue-card/detected-issue-card.component";

// https://hl7.org/fhir/R4/detectedissue.html

@Component({
    selector: 'app-detected-issue',
    styleUrl: './detected-issue.component.scss',
    templateUrl: './detected-issue.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule, DetectedIssueCardComponent],
    standalone: true,
})
export class DetectedIssueComponent {
    myIssues = input.required<DetectedIssue[]>();

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