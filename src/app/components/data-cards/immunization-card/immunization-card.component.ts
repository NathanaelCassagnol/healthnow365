import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { immunizationDialog } from "app/components/data-dialogs/immunization-dialog/immunization.dialog";
import { DisplayImmunization } from "app/pages/home/my-info-components/immunizations/immunizations.component";

@Component({
    selector: 'app-immunization-card',
    styleUrl: './immunization-card.component.scss',
    templateUrl: './immunization-card.component.html',
    standalone: true,
    imports: [MatButtonModule],
})
export class ImmunizationCardComponent {
    immunization = input.required<DisplayImmunization>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(immunizationDialog, {data: {Immunization: this.immunization()}})
    }
}