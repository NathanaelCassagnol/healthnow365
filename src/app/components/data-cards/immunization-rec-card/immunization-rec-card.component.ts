import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { immunizationDialog } from "app/components/data-dialogs/immunization-dialog/immunization.dialog";
import { DisplayImmunizationRec } from "app/pages/home/my-info-components/immunizations/immunizations.component";
import { JoinPipe } from "../../../shared/pipes/join.pipe";

@Component({
    selector: 'app-immunization-rec-card',
    styleUrl: './immunization-rec-card.component.scss',
    templateUrl: './immunization-rec-card.component.html',
    standalone: true,
    imports: [MatButtonModule, JoinPipe],
})
export class ImmunizationRecommendationCardComponent {
    immunization = input.required<DisplayImmunizationRec>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(immunizationDialog, {data: {Immunization: this.immunization()}})
    }
}