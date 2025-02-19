import { Component, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { Condition } from "fhir/R4/types/condition";

import { annotationsToString, codeableConceptsToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/condition.html

@Component({
    selector: 'app-condition',
    styleUrl: './condition.component.scss',
    templateUrl: './condition.component.html',
    imports: [MatButtonModule, MatTooltipModule, MagicTableModule],
    standalone: true,
})
export class ConditionComponent {
    myConditions = input.required<Condition[]>();
    
    // TODO: See if clinicalStatus or verificationStatus are important
    // columns = ["clinicalStatus", "verificationStatus", "category", "severity", "code", "bodySite", "onset", "abatement", "recordedDate", "stage", "evidence", "notes"];
    columns = ["category", "severity", "code", "bodySite", "onset", "abatement", "recordedDate", "stage", "evidence", "notes"];
    data = computed(() => this.myConditions().map(s => ({
        clinicalStatus: codeableConceptToString(s.clinicalStatus),
        verificationStatus: codeableConceptToString(s.verificationStatus),
        category: (s.category ?? []).map(c => codeableConceptToString(c)),
        severity: codeableConceptToString(s.severity),
        code: codeableConceptToString(s.code),
        bodySite: codeableConceptsToString(s.bodySite),
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
        evidence: s.evidence?.flatMap(e => codeableConceptsToString(e.code)),
        notes: annotationsToString(s.note)
    })));
    colData: MagicTableColumnData = {
    };
}