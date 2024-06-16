import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockAdverseEvent1 } from "fhir/R4/mocks/adverse-event/mock-adverse-event-1";

import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString } from "fhir/R4/utilities/validators-tostring.util";

// https://hl7.org/fhir/R4/adverseevent.html

@Component({
    selector: 'app-adverse-event',
    styleUrl: './adverse-event.component.scss',
    templateUrl: './adverse-event.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class AdverseEventComponent {
    myAdverseEvents = signal([mockAdverseEvent1]);

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