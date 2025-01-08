import { Component, computed, input, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { mockImmunizationRecommendation1 } from "fhir/R4/mocks/immunization-recommendation/mock-immunization-recommendation-1";
import { mockImmunizationRecommendation2 } from "fhir/R4/mocks/immunization-recommendation/mock-immunization-recommendation-2";
import { mockImmunization1 } from "fhir/R4/mocks/immunization/mock-immunization-1";
import { mockImmunization2 } from "fhir/R4/mocks/immunization/mock-immunization-2";
import { mockImmunization3 } from "fhir/R4/mocks/immunization/mock-immunization-3";
import { mockImmunization4 } from "fhir/R4/mocks/immunization/mock-immunization-4";
import { mockImmunization5 } from "fhir/R4/mocks/immunization/mock-immunization-5";
import { Immunization } from "fhir/R4/types/immunization";
import { ImmunizationRecommendation } from "fhir/R4/types/immunization-recommendation";
import { annotationToString, codeableConceptToString, dateTimeToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-immunizations',
    styleUrl: './immunizations.component.scss',
    templateUrl: './immunizations.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule],
    standalone: true,
})
export class ImmunizationsComponent {
    myImmunizations = input.required<Immunization[]>();
    myImmunizationRecs = input.required<ImmunizationRecommendation[]>();

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
            search: true,
            filter: ['includes', 'startsWith'],
            sort: 'text',
        },
        status: {
            filter: ['matches'],
            sort: 'text',
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
            search: true,
            filter: ['includes'],
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
            search: true,
            sort: 'text',
            filter: ['includes', 'startsWith'],
        },
        description: {
            search: true,
            filter: ['includes', 'startsWith'],
        }
    }

}