import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { ImmunizationRecommendation } from "fhir/R4/types/immunization-recommendation";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { dateTimeToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-immunization-rec-card',
    styleUrl: './immunization-rec-card.component.scss',
    templateUrl: './immunization-rec-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ImmunizationRecommendationCardComponent {
    immunizationResource = input.required<ImmunizationRecommendation>();
    
    date = computed(() => dateTimeToString(this.immunizationResource().date));
    description = computed(() => this.immunizationResource().recommendation?.map(r => r.description).filter(x => !!x).join(', '));

    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.immunizationResource()}})
    }
}