import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { AdverseEvent } from "fhir/R4/types/adverse-event";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'app-adverse-event-card',
    styleUrl: './adverse-event-card.component.scss',
    templateUrl: './adverse-event-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class AdverseEventCardComponent {
    AdverseEventResource = input.required<AdverseEvent>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.AdverseEventResource()}})
    }
}