import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { FamilyMemberHistory } from "fhir/R4/types/family-member-history";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'app-family-history-card',
    styleUrl: './family-history-card.component.scss',
    templateUrl: './family-history-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class FamilyHistoryCardComponent {
    hist = input.required<FamilyMemberHistory>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.hist()}})
    }
}