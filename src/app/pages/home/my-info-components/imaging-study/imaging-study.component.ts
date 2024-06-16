import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockFamilyMemberHistory1 } from "fhir/R4/mocks/family-member-history/mock-family-member-history-1";
import { mockFamilyMemberHistory2 } from "fhir/R4/mocks/family-member-history/mock-family-member-history-2";
import { mockImagingStudy1 } from "fhir/R4/mocks/imaging-study/mock-imaging-study-1";
import { mockImagingStudy2 } from "fhir/R4/mocks/imaging-study/mock-imaging-study-2";
import { annotationToString, codeableConceptToString, codingToString, dateTimeToString, periodToString, quantityToString, rangeToString, referenceToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/imagingstudy.html

@Component({
    selector: 'app-imaging-study',
    styleUrl: './imaging-study.component.scss',
    templateUrl: './imaging-study.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class ImagingStudyComponent {
    myStudies = signal([mockImagingStudy1, mockImagingStudy2]);

    columns = ['description', 'status', 'modality', 'started', 'procedure', 'reason', 'notes', 'series'];
    // TODO: Add procedureReference to procedure, reasonReference to reason
    // TODO: Make Series viewable
    data = computed(() => this.myStudies().map(s => ({
        status: s.status,
        modality: s.modality?.map(m => codingToString(m)) ?? [],
        started: s.started ? dateTimeToString(s.started) : '',
        procedure: (s.procedureCode ?? []).map(s => codeableConceptToString(s)),
        reason: (s.reasonCode ?? []).map(r => codeableConceptToString(r)),
        notes: (s.note ?? []).map(n => annotationToString(n)),
        description: s.description ?? '',
        series: s.series
    })));
    colData: MagicTableColumnData = {
    };
}