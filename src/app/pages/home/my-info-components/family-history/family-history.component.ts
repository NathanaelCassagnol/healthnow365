import { Component, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FamilyHistoryCardComponent } from "app/components/data-cards/family-history-card/family-history-card.component";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { FHIRFamilyHistoryToDisplay } from "app/types/display-types";
import { FamilyMemberHistory } from "fhir/R4/types/family-member-history";

@Component({
    selector: 'app-family-history',
    styleUrl: './family-history.component.scss',
    templateUrl: './family-history.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule, MatIconModule, FamilyHistoryCardComponent],
    standalone: true,
})
export class FamilyHistoryComponent {
    myFamilyHistory = input.required<FamilyMemberHistory[]>();

    columns = ['status', 'date', 'name', 'relation', 'sex', 'born', 'age', 'deceased', 'reason', 'notes', 'condition'];
    // TODO: If reasonReference, add to reason
    data = computed(() => this.myFamilyHistory().map(FHIRFamilyHistoryToDisplay));
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