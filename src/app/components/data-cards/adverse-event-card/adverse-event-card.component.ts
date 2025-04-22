import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { AdverseEvent } from "fhir/R4/types/adverse-event";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { codeableConceptToString, dateTimeToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-adverse-event-card',
    styleUrl: './adverse-event-card.component.scss',
    templateUrl: './adverse-event-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class AdverseEventCardComponent {
    AdverseEventResource = input.required<AdverseEvent>();
    
    category = computed(() => this.AdverseEventResource().category?.map(codeableConceptToString).join(', '));
    date = computed(() => dateTimeToString(this.AdverseEventResource().date || this.AdverseEventResource().recordedDate));
    seriousnessSeverity = computed(() => [
        codeableConceptToString(this.AdverseEventResource().seriousness),
        codeableConceptToString(this.AdverseEventResource().severity)
    ].filter(x => !!x).join(', '));

    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.AdverseEventResource()}})
    }
}