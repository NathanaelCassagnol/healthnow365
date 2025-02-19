import { JsonPipe } from "@angular/common";
import { Component, Inject, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DisplayFamilyHistory } from "app/types/display-types";

@Component({
    selector: 'app-family-history-dialog',
    templateUrl: './family-history.dialog.html',
    styleUrl: './family-history.dialog.scss',
    standalone: true,
    imports: [MatButtonModule],
})
export class FamilyHistoryDialog {
    hist: DisplayFamilyHistory;

    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: { History: DisplayFamilyHistory }) {
        this.hist = dialogData.History;
    }

    private dialogRef = inject(MatDialogRef);
    close() {
        this.dialogRef.close();
    }
}