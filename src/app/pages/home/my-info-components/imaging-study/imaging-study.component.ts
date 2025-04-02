import { Component, computed, input, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { mockImagingStudy1 } from "fhir/R4/mocks/imaging-study/mock-imaging-study-1";
import { mockImagingStudy2 } from "fhir/R4/mocks/imaging-study/mock-imaging-study-2";
import { ImagingStudy } from "fhir/R4/types/imaging-study";
import { annotationToString, codeableConceptToString, codingToString, dateTimeToString, periodToString, quantityToString, rangeToString, referenceToString } from "fhir/R4/utilities/validators-tostring.util";
import { ImagingCardComponent } from "../../../../components/data-cards/imaging-card/imaging-card.component";

// https://hl7.org/fhir/R4/imagingstudy.html

@Component({
    selector: 'app-imaging-study',
    styleUrl: './imaging-study.component.scss',
    templateUrl: './imaging-study.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule, ImagingCardComponent],
    standalone: true,
})
export class ImagingStudyComponent {
    myStudies = input.required<ImagingStudy[]>();

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