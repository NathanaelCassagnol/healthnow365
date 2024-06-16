import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockCondition1 } from "fhir/R4/mocks/condition/mock-condition-1";
import { mockCondition10 } from "fhir/R4/mocks/condition/mock-condition-10";
import { mockCondition11 } from "fhir/R4/mocks/condition/mock-condition-11";
import { mockCondition12 } from "fhir/R4/mocks/condition/mock-condition-12";
import { mockCondition2 } from "fhir/R4/mocks/condition/mock-condition-2";
import { mockCondition3 } from "fhir/R4/mocks/condition/mock-condition-3";
import { mockCondition4 } from "fhir/R4/mocks/condition/mock-condition-4";
import { mockCondition5 } from "fhir/R4/mocks/condition/mock-condition-5";
import { mockCondition6 } from "fhir/R4/mocks/condition/mock-condition-6";
import { mockCondition7 } from "fhir/R4/mocks/condition/mock-condition-7";
import { mockCondition8 } from "fhir/R4/mocks/condition/mock-condition-8";
import { mockCondition9 } from "fhir/R4/mocks/condition/mock-condition-9";

import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/condition.html

@Component({
    selector: 'app-condition',
    styleUrl: './condition.component.scss',
    templateUrl: './condition.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class ConditionComponent {
    myConditions = signal([mockCondition1, mockCondition2, mockCondition3, mockCondition4, mockCondition5, mockCondition6, mockCondition7, mockCondition8, mockCondition9, mockCondition10, mockCondition11, mockCondition12]);

    // TODO: See if clinicalStatus or verificationStatus are important
    // columns = ["clinicalStatus", "verificationStatus", "category", "severity", "code", "bodySite", "onset", "abatement", "recordedDate", "stage", "evidence", "notes"];
    columns = ["category", "severity", "code", "bodySite", "onset", "abatement", "recordedDate", "stage", "evidence", "notes"];
    data = computed(() => this.myConditions().map(s => ({
        clinicalStatus: codeableConceptToString(s.clinicalStatus),
        verificationStatus: codeableConceptToString(s.verificationStatus),
        category: (s.category ?? []).map(c => codeableConceptToString(c)),
        severity: codeableConceptToString(s.severity),
        code: codeableConceptToString(s.code),
        bodySite: codeableConceptToString(s.bodySite),
        onset: s.onsetDateTime ? dateTimeToString(s.onsetDateTime)
            : s.onsetAge ? quantityToString(s.onsetAge)
            : s.onsetPeriod ? periodToString(s.onsetPeriod)
            : s.onsetRange ? rangeToString(s.onsetRange)
            : s.onsetString ?? '',
        abatement: s.abatementDateTime ? dateTimeToString(s.abatementDateTime)
            : s.abatementAge ? quantityToString(s.abatementAge)
            : s.abatementPeriod ? periodToString(s.abatementPeriod)
            : s.abatementRange ? rangeToString(s.abatementRange)
            : s.abatementString ?? '',
        recordedDate: dateTimeToString(s.recordedDate),
        stage: s.stage?.map(st => 
            [codeableConceptToString(st.type), codeableConceptToString(st.summary)]
            .filter(x => x != '').join(' | ')) ?? '',
        evidence: s.evidence?.flatMap(e => codeableConceptToString(e.code)),
        notes: annotationToString(s.note)
    })));
    colData: MagicTableColumnData = {
    };
}