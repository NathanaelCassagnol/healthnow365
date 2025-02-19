import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { AllergyReactionDialog } from "app/components/data-dialogs/allergy-intolerance-dialog/allergy-intolerance.dialog";
import { FamilyHistoryDialog } from "app/components/data-dialogs/family-history-dialog/family-history.dialog";
import { DisplayFamilyHistory } from "app/types/display-types";

@Component({
    selector: 'app-family-history-card',
    styleUrl: './family-history-card.component.scss',
    templateUrl: './family-history-card.component.html',
    standalone: true,
    imports: [MatButtonModule],
})
export class FamilyHistoryCardComponent {
    hist = input.required<DisplayFamilyHistory>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(FamilyHistoryDialog, {data: {History: this.hist()}})
    }
}