import { Component, Signal, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AllergyIntolerance } from "fhir/R4/types/allergy-intolerance.types";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";

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
        MagicTableComponent,
        MagicTableBodyDirective,
    ],
})
export class AllergiesComponent {
    toTitle = new TitleCasePipe().transform;
    allergies = input<AllergyIntolerance[]>([]);
    allergiesTransform: Signal<loadedAllergyType[]> = computed(() => this.allergies().map((a, i) => ({
        allergenName: a.code?.coding?.at(0)?.display ?? "Unknown",
        category: (a.category??[]).map(this.toTitle).join(", "),
        status: this.toTitle(a.clinicalStatus?.coding?.at(0)?.display ?? "Unknown"),
        lastOccurrence: a.lastOccurrence ?? "Unknown",
        reactionCount: a.reaction?.length ?? 0,
        criticality: this.toTitle(a.criticality ?? "Unknown"),
        notes: (a.note??[]).map(n => n.text).filter(n => n.length > 0),
    } as loadedAllergyType)));

    tableData: MagicTableColumnData = {
        allergenName: {
            title: "Allergen",
            applySearch: true,
            sortAs: 'text',
            filterOn: ['includes', 'startsWith'],
        },
        reactionCount: {
            title: "Reactions",
            sortAs: 'number',
            filterOn: ['exists'],
        },
        criticality: {
            sortAs: ["low", "high", "unable-to-assess", "unknown"],
            filterOn: ["matches"],
        },
        category: {
            sortAs: 'text',
            filterOn: ["matches"],
        },
        lastOccurrence: {
            sortAs: 'text',
        },
        status: {
            sortAs: 'text',
            filterOn: ["matches"],
        }
    }
    columns = ["allergenName", "category", "criticality", "status", "lastOccurrence", "reactionCount", "notes"];
}

type loadedAllergyType = {
    allergenName: string,
    category: string,
    status: string,
    lastOccurrence: string,
    reactionCount: number,
    criticality: string,
    notes: string[],
}