import { Component, Signal, computed, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AllergyIntolerance, AllergyIntoleranceReaction } from "fhir/R4/types/allergy-intolerance.types";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { MatDialog } from "@angular/material/dialog";
import { AllergyReactionDialog } from "./allergy-reaction-dialog/allergy-reaction.dialog";
import { BasicToString } from "app/pipes/basic-to-string.pipe";

@Component({
    selector: 'app-allergies',
    templateUrl: './allergies.component.html',
    styleUrls: ['./allergies.component.scss'],
    imports: [
        MatButtonModule,
        MatIconModule,
        CommonModule,
        MatTooltipModule,
        MagicTableModule
    ],
    standalone: true,
})
export class AllergiesComponent {
    allergies = input<AllergyIntolerance[]>([]);

    toTitle = new TitleCasePipe().transform;
    allergiesTransform: Signal<loadedAllergyType[]> = computed(() => this.allergies().map((a, i) => ({
        allergenName: BasicToString(a.code),
        category: (a.category??[]).map(this.toTitle).join(", "),
        status: (a.clinicalStatus == undefined) ? undefined : BasicToString(a.clinicalStatus),
        lastOccurrence: a.lastOccurrence,
        reactionCount: a.reaction?.length ?? 0,
        criticality: (a.criticality == undefined) ? undefined : this.toTitle(a.criticality),
        notes: (a.note??[]).map(n => n.text).filter(n => n.length > 0),
        type: a.type == 'intolerance' ? 'Intolerance' : 'Allergy',
        reactions: a.reaction,

        categoryImage: this.getCategoryImage(a.category),
        criticalityColor: this.getCriticalityColor(a.criticality),
    } as loadedAllergyType)));

    getCategoryImage(input?: ("food" | "medication" | "environment" | "biologic")[]) {
        if (input == null || input.length === 0)
            return 'assets/svg-watermarks/question-mark-circle.svg';
        if (input[0] === 'food')
            return 'assets/svg-watermarks/fast-food-outline.svg';
        if (input[0] === 'medication')
            return 'assets/svg-watermarks/medication.svg';
        if (input[0] === 'environment')
            return 'assets/svg-watermarks/plant.svg';
        if (input[0] === 'biologic')
            return 'assets/svg-watermarks/biology-dna.svg';
        return 'assets/svg-watermarks/question-mark-circle.svg';
    }
    getCriticalityColor(input?: "low" | "high" | "unable-to-assess") {
        if (input == null || input == 'unable-to-assess') return 'purple';
        if (input == 'low') return 'yellow';
        if (input == 'high') return 'red';
        return 'purple';
    }

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

    private dialog = inject(MatDialog);
    openAllergyIntolerance(allergy: loadedAllergyType) {
        this.dialog.open(AllergyReactionDialog, {data: {AllergyIntolerance: allergy}})
    }
}

export type loadedAllergyType = {
    allergenName: string,
    category: string,
    status?: string,
    lastOccurrence?: string,
    reactionCount: number,
    criticality?: string,
    notes: string[],
    categoryImage: string,
    criticalityColor: string,
    type: "Allergy" | "Intolerance",
    reactions?: AllergyIntoleranceReaction[],
}