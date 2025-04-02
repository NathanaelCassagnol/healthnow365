import { Component, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { Procedure } from "fhir/R4/types/procedure";
import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString } from "fhir/R4/utilities/validators-tostring.util";
import { ProcedureCardComponent } from "../../../../components/data-cards/procedure-card/procedure-card.component";

// https://hl7.org/fhir/R4/procedure.html

@Component({
    selector: 'app-procedure',
    styleUrl: './procedure.component.scss',
    templateUrl: './procedure.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule, ProcedureCardComponent],
    standalone: true,
})
export class ProcedureComponent {
    myProcedures = input.required<Procedure[]>();

    columns = ["status", "category", "code", "performed", "reason", "bodySite", "outcome", "complications", "followUp", "notes"];
    // TODO: Add reasonReference, performer, complicationDetail
    data = computed(() => this.myProcedures().map(s => ({
        status: s.status + (s.statusReason ? ` (${codeableConceptToString(s.statusReason)})` : ''),
        category: s.category ? codeableConceptToString(s.category) : '',
        code: s.code ? codeableConceptToString(s.code) : '',
        performed: s.performedDateTime ? dateTimeToString(s.performedDateTime)
            : s.performedPeriod ? periodToString(s.performedPeriod)
            : s.performedAge ? quantityToString(s.performedAge)
            : s.performedRange ? rangeToString(s.performedRange)
            : s.performedString ?? '',
        reason: (s.reasonCode ?? []).map(r => codeableConceptToString(r)),
        bodySite: (s.bodySite ?? []).map(b => codeableConceptToString(b)),
        outcome: s.outcome ? codeableConceptToString(s.outcome) : '',
        complications: (s.complication ?? []).map(c => codeableConceptToString(c)),
        followUp: (s.followUp ?? []).map(f => codeableConceptToString(f)),
        notes: (s.note ?? []).map(n => annotationToString(n)),
    })));
    colData: MagicTableColumnData = {
    };
}