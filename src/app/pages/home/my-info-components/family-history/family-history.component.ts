import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockFamilyMemberHistory1 } from "fhir/R4/mocks/family-member-history/mock-family-member-history-1";
import { mockFamilyMemberHistory2 } from "fhir/R4/mocks/family-member-history/mock-family-member-history-2";
import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString, referenceToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-family-history',
    styleUrl: './family-history.component.scss',
    templateUrl: './family-history.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule, MatIconModule],
})
export class FamilyHistoryComponent {
    myFamilyHistory = signal([mockFamilyMemberHistory1, mockFamilyMemberHistory2]);

    columns = ['status', 'date', 'name', 'relation', 'sex', 'born', 'age', 'deceased', 'reason', 'notes', 'condition'];
    // TODO: If reasonReference, add to reason
    data = computed(() => this.myFamilyHistory().map(d => ({
        status: d.status + (d.dataAbsentReason ? ` (${codeableConceptToString(d.dataAbsentReason)})` : ''),
        date: d.date ? dateTimeToString(d.date) : '',
        name: d.name ?? '',
        relation: codeableConceptToString(d.relationship),
        sex: d.sex ? codeableConceptToString(d.sex) : 'Unknown',
        born: d.bornPeriod ? periodToString(d.bornPeriod) : d.bornDate ? dateTimeToString(d.bornDate) : d.bornString ?? '',
        age: (d.ageAge ? quantityToString(d.ageAge) : d.ageRange ? rangeToString(d.ageRange) : d.ageString ?? '') + (d.estimatedAge ? ' (estimated)' : '') ,
        deceased: d.deceasedAge ? quantityToString(d.deceasedAge) : d.deceasedRange ? rangeToString(d.deceasedRange) : d.deceasedDate ? dateTimeToString(d.deceasedDate) : d.deceasedBoolean ? 'Deceased' : d.deceasedString ?? '',
        reason: d.reasonCode,
        notes: d.note ? d.note.map(n => annotationToString(n)) : [],
        condition: d.condition?.map(c => ({
            code: c.code ? codeableConceptToString(c.code) : '',
            outcome: c.outcome ? codeableConceptToString(c.outcome) : '',
            contributedToDeath: !!c.contributedToDeath,
            onset: c.onsetAge ? quantityToString(c.onsetAge) : c.onsetRange ? rangeToString(c.onsetRange) : c.onsetPeriod ? periodToString(c.onsetPeriod) : c.onsetString ?? '',
            notes: c.note ? c.note.map(n => annotationToString(n)) : [],
        })) ?? []
    })));
    colData: MagicTableColumnData = {
    };

    getTooltip(c: {code: string, outcome: string, contributedToDeath: boolean, onset: string, notes: string[]}) {
        let ret = [];
        // if (c.code != '') ret.push(c.code);
        if (c.outcome != '') ret.push('Outcome: '+c.outcome);
        if (c.contributedToDeath) ret.push('Contributed to death');
        if (c.onset != '') ret.push('Onset: ' + c.onset);
        if (c.notes.length) ret.push(...c.notes.map(n => 'Note: '+n));
        // TODO: This should be newline but I can't figure out how to make it work
        return ret.join(' | ');
    }
}