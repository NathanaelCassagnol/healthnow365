import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { ImagingStudy } from "fhir/R4/types/imaging-study";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'app-imaging-card',
    styleUrl: './imaging-card.component.scss',
    templateUrl: './imaging-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ImagingCardComponent {
    ImagingResource = input.required<ImagingStudy>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ImagingResource()}})
    }
}