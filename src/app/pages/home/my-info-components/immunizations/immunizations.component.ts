import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockImmunizationRecommendation1 } from "fhir/R4/mocks/immunization-recommendation/mock-immunization-recommendation-1";
import { mockImmunizationRecommendation2 } from "fhir/R4/mocks/immunization-recommendation/mock-immunization-recommendation-2";
import { mockImmunization1 } from "fhir/R4/mocks/immunization/mock-immunization-1";
import { mockImmunization2 } from "fhir/R4/mocks/immunization/mock-immunization-2";
import { mockImmunization3 } from "fhir/R4/mocks/immunization/mock-immunization-3";
import { mockImmunization4 } from "fhir/R4/mocks/immunization/mock-immunization-4";
import { mockImmunization5 } from "fhir/R4/mocks/immunization/mock-immunization-5";
import { annotationToString, codeableConceptToString, dateTimeToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-immunizations',
    styleUrl: './immunizations.component.scss',
    templateUrl: './immunizations.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class ImmunizationsComponent {
    myImmunizations = signal([
        mockImmunization1,
        mockImmunization2,
        mockImmunization3,
        mockImmunization4,
        mockImmunization5
    ]);
    myImmunizationRecs = signal([
        mockImmunizationRecommendation1,
        mockImmunizationRecommendation2,
    ]);

    takenColumns = ["name", "status", "occurrence", "expiration", "reason", "reactionCount", "notes"];
    takenData = computed(() => {
        return this.myImmunizations().map(i => ({
            name: codeableConceptToString(i.vaccineCode),
            status: i.status + (i.statusReason ? ` (${codeableConceptToString(i.statusReason)})` : ''),
            occurrence: i.occurrenceDateTime ? dateTimeToString(i.occurrenceDateTime) : i.occurrenceString,
            expiration: i.expirationDate ? dateTimeToString(i.expirationDate) : '',
            reason: i.reasonCode ? i.reasonCode.map(r => codeableConceptToString(r)) : '',
            reactionCount: i.reaction?.length ?? 0,
            notes: (i.note ?? []).map(n => annotationToString(n))
        }));
    })
    takenColData: MagicTableColumnData = {
        name: {
            applySearch: true,
            filterOn: ['includes', 'startsWith'],
            sortAs: 'text',
        },
        status: {
            filterOn: ['matches'],
            sortAs: 'text',
        },
        occurrence: {
            // Filter on before, after
            // Sort as FHIR datetime
        },
        expiration: {
            // Filter on before, after
            // Sort as FHIR datetime
        },
        reason: {
            applySearch: true,
            filterOn: ['includes'],
        },
        reactionCount: {
            title: "Reactions",
        },
        notes: {

        }
    }

    recommendedColumns = ["names", "description", "diseases", "contraindications", "forecast", "date", "series"];
    recommendedData = computed(() => this.myImmunizationRecs().map(set => set.recommendation.map(i => ({
        names: i.vaccineCode?.map(c => codeableConceptToString(c)) ?? '',
        description: i.description ?? '',
        diseases: i.targetDisease ? codeableConceptToString(i.targetDisease) : '',
        contraindications: i.contraindicatedVaccineCode?.map(c => codeableConceptToString(c)) ?? '',
        forecast: codeableConceptToString(i.forecastStatus) + (i.forecastReason ? ` (${codeableConceptToString(i.forecastReason![0])})` : ''),
        date: i.dateCriterion?.map(c => `${codeableConceptToString(c.code)}: ${dateTimeToString(c.value)}`) ?? '',
        series: i.series ?? ''
    }))).flat());
    recommendedColData: MagicTableColumnData = {
        names: {
            applySearch: true,
            sortAs: 'text',
            filterOn: ['includes', 'startsWith'],
        },
        description: {
            applySearch: true,
            filterOn: ['includes', 'startsWith'],
        }
    }

}