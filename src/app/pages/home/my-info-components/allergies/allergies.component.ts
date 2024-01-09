import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AllergyIntolerance } from "../../../../types/fhir/allergy-intolerance.types";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
    selector: 'app-allergies',
    templateUrl: './allergies.component.html',
    styleUrls: ['./allergies.component.scss'],
    standalone: true,
    imports: [
        MatButtonModule,
        TitleCasePipe,
        MatIconModule,
        CommonModule,
        MatTooltipModule,
    ],
})
export class AllergiesComponent implements OnChanges {
    @Input() allergies: AllergyIntolerance[] = [];
    loadedAllergyData: loadedAllergyType[] = []

    ngOnChanges(changes: SimpleChanges): void {
        this.setAllergyData();
    }
    setAllergyData() {
        this.loadedAllergyData = this.allergies.map((a, i) => {
            let allergenName = a.code?.coding?.at(0)?.display ?? "Unknown";
            let category = (a.category??[]).reduce((a, b) => a+", "+b, "").slice(2);
            let status = a.clinicalStatus?.coding?.at(0)?.display ?? "Unknown";
            let lastOccurrence = a.lastOccurrence ?? "Unknown";
            let reactionCount = a.reaction?.length ?? 0;
            let criticality = a.criticality ?? "Unknown";
            let notes = (a.note??[]).map(n => n.text).filter(n => n.length > 0);
            return {
                allergenName,
                category,
                status,
                lastOccurrence,
                reactionCount,
                criticality,
                id: i,
                notes,
            }
        })
    }
}

type loadedAllergyType = {
    allergenName: string,
    category: string,
    status: string,
    lastOccurrence: string,
    reactionCount: number,
    criticality: string,
    id: number,
    notes: string[],
}