import { Component, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { ImagingStudy } from "fhir/R4/types/imaging-study";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";
import { annotationToString, codingToString, dateTimeToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-imaging-card',
    styleUrl: './imaging-card.component.scss',
    templateUrl: './imaging-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class ImagingCardComponent {
    ImagingResource = input.required<ImagingStudy>();
    
    status = computed(() => this.ImagingResource().status);
    started = computed(() => dateTimeToString(this.ImagingResource().started));
    modality = computed(() => 
        this.ImagingResource().modality?.map(codingToString).join(',') ||
        this.ImagingResource().series?.map(s => codingToString(s.modality)).join(', ')
    );
    description = computed(() => 
        this.ImagingResource().description ||
        this.ImagingResource().series?.map(s => s.description).join(', ')
    );
    notes = computed(() => this.ImagingResource().note?.map(annotationToString));

    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.ImagingResource()}})
    }
}