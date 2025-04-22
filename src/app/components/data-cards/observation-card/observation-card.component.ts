import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { Observation } from "fhir/R4/types/observation.types";

@Component({
    selector: 'app-observation-card',
    styleUrl: './observation-card.component.scss',
    templateUrl: './observation-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ProcedureCardComponent {
    ObservationResource = input.required<Observation>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ObservationResource()}})
    }
}