import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { DisplayImmunization } from "app/pages/home/my-info-components/immunizations/immunizations.component";
import { Immunization } from "fhir/R4/types/immunization";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'app-immunization-card',
    styleUrl: './immunization-card.component.scss',
    templateUrl: './immunization-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ImmunizationCardComponent {
    // immunization = input.required<DisplayImmunization>();
    immunizationResource = input.required<Immunization>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.immunizationResource()}})
    }
}