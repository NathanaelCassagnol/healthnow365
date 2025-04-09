import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { ImmunizationRecommendation } from "fhir/R4/types/immunization-recommendation";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'app-immunization-rec-card',
    styleUrl: './immunization-rec-card.component.scss',
    templateUrl: './immunization-rec-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ImmunizationRecommendationCardComponent {
    // immunization = input.required<DisplayImmunizationRec>();
    immunizationResource = input.required<ImmunizationRecommendation>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        // this.dialog.open(immunizationDialog, {data: {Immunization: this.immunization()}})
        this.dialog.open(GenericDataDialog, {data: {Resource: this.immunizationResource()}})
    }
}