import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { DetectedIssue } from "fhir/R4/types/detected-issue";

@Component({
    selector: 'app-detected-issue-card',
    styleUrl: './detected-issue-card.component.scss',
    templateUrl: './detected-issue-card.component.html',
    standalone: true,
    imports: [MatButtonModule],
})
export class DetectedIssueCardComponent {
    IssueResource = input.required<DetectedIssue>();
    
    private dialog = inject(MatDialog);
    openDialog() {
        this.dialog.open(GenericDataDialog, {data: {Resource: this.IssueResource()}})
    }
}