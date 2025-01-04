import { Component, computed, input, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { AdverseEvent } from "fhir/R4/types/adverse-event";

import { codeableConceptToString, dateTimeToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/adverseevent.html

@Component({
    selector: 'app-adverse-event',
    styleUrl: './adverse-event.component.scss',
    templateUrl: './adverse-event.component.html',
    imports: [MatButtonModule, MatTooltipModule, MagicTableModule],
    standalone: true,
})
export class AdverseEventComponent {
    myAdverseEvents = input.required<AdverseEvent[]>();

    columns = [];
    data = computed(() => this.myAdverseEvents().map(e => ({
        actuality: e.actuality,
        category: codeableConceptToString(e.category),
        event: codeableConceptToString(e.event),
        occurred: dateTimeToString(e.date),
        detected: dateTimeToString(e.detected),
        recorded: dateTimeToString(e.recordedDate),
        seriousness: codeableConceptToString(e.seriousness),
        severity: codeableConceptToString(e.severity),
        outcome: codeableConceptToString(e.outcome),
        suspectedEntities: e.suspectEntity?.flatMap(se => se.causality?.map(c => 
            [c.assessment, c.productRelatedness, c.method].join(" | "))),
    })));
    colData: MagicTableColumnData = {
    };
}