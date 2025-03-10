import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { DisplayMedicationDispense } from "app/types/display-types";
import { JoinPipe } from "../../../shared/pipes/join.pipe";
import { MedicationDispenseDialog } from "app/components/data-dialogs/medication-dispense-dialog/medication-dispense.dialog";

@Component({
    selector: 'medication-dispense-card',
    styleUrl: './medication-dispense-card.component.scss',
    templateUrl: './medication-dispense-card.component.html',
    standalone: true,
    imports: [MatButtonModule, JoinPipe],
})
export class MedicationDispenseCardComponent {
    med = input.required<DisplayMedicationDispense>();

    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(MedicationDispenseDialog, {data: {Medication: this.med()}})
    }
}