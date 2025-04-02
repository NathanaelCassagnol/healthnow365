import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { Procedure } from "fhir/R4/types/procedure";

@Component({
    selector: 'app-procedure-card',
    styleUrl: './procedure-card.component.scss',
    templateUrl: './procedure-card.component.html',
    standalone: true,
    imports: [MatButtonModule],
})
export class ProcedureCardComponent {
    ProcedureResource = input.required<Procedure>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ProcedureResource()}})
    }
}