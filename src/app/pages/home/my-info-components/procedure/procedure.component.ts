import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockProcedure1 } from "fhir/R4/mocks/procedure/mock-procedure-1";
import { mockProcedure10 } from "fhir/R4/mocks/procedure/mock-procedure-10";
import { mockProcedure11 } from "fhir/R4/mocks/procedure/mock-procedure-11";
import { mockProcedure12 } from "fhir/R4/mocks/procedure/mock-procedure-12";
import { mockProcedure13 } from "fhir/R4/mocks/procedure/mock-procedure-13";
import { mockProcedure14 } from "fhir/R4/mocks/procedure/mock-procedure-14";
import { mockProcedure15 } from "fhir/R4/mocks/procedure/mock-procedure-15";
import { mockProcedure16 } from "fhir/R4/mocks/procedure/mock-procedure-16";
import { mockProcedure2 } from "fhir/R4/mocks/procedure/mock-procedure-2";
import { mockProcedure3 } from "fhir/R4/mocks/procedure/mock-procedure-3";
import { mockProcedure4 } from "fhir/R4/mocks/procedure/mock-procedure-4";
import { mockProcedure5 } from "fhir/R4/mocks/procedure/mock-procedure-5";
import { mockProcedure6 } from "fhir/R4/mocks/procedure/mock-procedure-6";
import { mockProcedure7 } from "fhir/R4/mocks/procedure/mock-procedure-7";
import { mockProcedure8 } from "fhir/R4/mocks/procedure/mock-procedure-8";
import { mockProcedure9 } from "fhir/R4/mocks/procedure/mock-procedure-9";
import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/procedure.html

@Component({
    selector: 'app-procedure',
    styleUrl: './procedure.component.scss',
    templateUrl: './procedure.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class ProcedureComponent {
    myProcedures = signal([mockProcedure1, mockProcedure2, mockProcedure3, mockProcedure4, mockProcedure5, mockProcedure6, mockProcedure7, mockProcedure8, mockProcedure9, mockProcedure10, mockProcedure11, mockProcedure12, mockProcedure13, mockProcedure14, mockProcedure15, mockProcedure16]);

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