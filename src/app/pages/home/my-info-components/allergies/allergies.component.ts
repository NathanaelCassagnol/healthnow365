import { Component, Signal, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AllergyIntolerance } from "fhir/R4/types/allergy-intolerance.types";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { DisplayAllergy, FHIRAllergyIntoleranceToDisplay } from "app/types/display-types";
import { AllergyIntoleranceCard } from "app/components/data-cards/allergy-intolerance-card.component.html/allergy-intolerance-card.component";

@Component({
    selector: 'app-allergies',
    templateUrl: './allergies.component.html',
    styleUrls: ['./allergies.component.scss'],
    imports: [
        MatButtonModule,
        MatIconModule,
        CommonModule,
        MatTooltipModule,
        MagicTableModule,
        AllergyIntoleranceCard,
    ],
    standalone: true,
})
export class AllergiesComponent {
    allergies = input<AllergyIntolerance[]>([]);

    allergiesTransform: Signal<DisplayAllergy[]> = computed(() => this.allergies().map(FHIRAllergyIntoleranceToDisplay));

    tableData: MagicTableColumnData = {
        allergenName: {
            title: "Allergen",
            search: true,
            sort: 'text',
            filter: ['includes', 'startsWith'],
        },
        reactionCount: {
            title: "Reactions",
            sort: 'number',
            filter: ['exists'],
        },
        criticality: {
            sort: ["low", "high", "unable-to-assess", "unknown"],
            filter: ["matches"],
        },
        category: {
            sort: 'text',
            filter: ["matches"],
        },
        lastOccurrence: {
            sort: 'text',
        },
        status: {
            sort: 'text',
            filter: ["matches"],
        }
    }
    columns = ["allergenName", "category", "criticality", "status", "lastOccurrence", "reactionCount", "notes"];
}
