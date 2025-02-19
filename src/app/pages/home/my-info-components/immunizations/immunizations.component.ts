import { Component, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ImmunizationCardComponent } from "app/components/data-cards/immunization-card/immunization-card.component";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { CloudFrontAllowedCachedMethods } from "aws-cdk-lib/aws-cloudfront";
import { Immunization } from "fhir/R4/types/immunization";
import { ImmunizationRecommendation } from "fhir/R4/types/immunization-recommendation";
import { annotationToString, codeableConceptToString, dateTimeToString, quantityToString } from "fhir/R4/utilities/validators-tostring.util";
import { ImmunizationRecommendationCardComponent } from "../../../../components/data-cards/immunization-rec-card/immunization-rec-card.component";

@Component({
    selector: 'app-immunizations',
    styleUrl: './immunizations.component.scss',
    templateUrl: './immunizations.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule, ImmunizationCardComponent, ImmunizationRecommendationCardComponent],
    standalone: true,
})
export class ImmunizationsComponent {
    myImmunizations = input.required<Immunization[]>();
    myImmunizationRecs = input.required<ImmunizationRecommendation[]>();

    takenColumns = ["name", "status", "occurrence", "expiration", "reason", "reactionCount", "notes"];
    takenData = computed<DisplayImmunization[]>(() => {
        return this.myImmunizations().map(i => ({
            name: codeableConceptToString(i.vaccineCode),
            status: this.getStatusText(i.status) + (i.statusReason ? ` (${codeableConceptToString(i.statusReason)})` : ''),
            occurrence: i.occurrenceDateTime ? dateTimeToString(i.occurrenceDateTime) : i.occurrenceString,
            expiration: i.expirationDate ? dateTimeToString(i.expirationDate) : '',
            // TODO Process reasonReference
            reason: i.reasonCode ? i.reasonCode.map(r => codeableConceptToString(r)) : '',
            reactionCount: i.reaction?.length ?? 0,
            notes: (i.note ?? []).map(n => annotationToString(n)),
            reportOrigin: codeableConceptToString(i.reportOrigin),
            site: codeableConceptToString(i.site),
            route: codeableConceptToString(i.route),
            dose: quantityToString(i.doseQuantity),
            isSubpotent: i.isSubpotent ?? false,
            subpotentReason: i.subpotentReason?.map(x => codeableConceptToString(x)).filter(x => !!x) ?? '',
            programEligibility: i.programEligibility?.map(x => codeableConceptToString(x)).filter(x => !!x) ?? '',
            fundingSource: codeableConceptToString(i.fundingSource),
        } as DisplayImmunization));
    })

    private getStatusText = (input?: string) => {
        if (!input) return '';
        if (input === 'completed') return 'Completed';
        if (input === 'entered-in-error') return 'Entered in Error';
        if (input === 'not-done') return 'Not Done';
        return '';

    }

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
        vaccineCodes: i.vaccineCode?.map(c => codeableConceptToString(c)) ?? [],
        targetDisease: codeableConceptToString(i.targetDisease) ?? '',
        contraindicatedVaccines: i.contraindicatedVaccineCode?.map(c => codeableConceptToString(c)) ?? [],
        description: i.description ?? '',
        forecastStatus: codeableConceptToString(i.forecastStatus) + (i.forecastReason ? ` (${codeableConceptToString(i.forecastReason![0])})` : ''),
        date: i.dateCriterion?.map(c => `${codeableConceptToString(c.code)}: ${dateTimeToString(c.value)}`) ?? '',
        series: i.series ?? '',
        doseNumber: i.doseNumberString ?? i.doseNumberPositiveInt?.toString() ?? '',
        seriesDoses: i.seriesDosesString ?? i.seriesDosesPositiveInt?.toString() ?? '',
    } as DisplayImmunizationRec))).flat());

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

export type DisplayImmunization = {
    name: string;
    status: string;
    occurrence: string;
    reportOrigin: string;
    expiration: string;
    site: string;
    route: string;
    notes: string[];
    reason: string;
    reactionCount: number;
    dose: string;
    isSubpotent: boolean;
    subpotentReason: string[];
    programEligibility: string[];
    fundingSource: string;
}

// Each ImmunizationRecommendation can contain multiple recommendations
// They are extrapolated into unique elements
export type DisplayImmunizationRec = {
    vaccineCodes: string[],
    targetDisease: string,
    contraindicatedVaccines: string[],
    description: string,
    forecastStatus: string,
    date: string,
    series: string,
    doseNumber: string,
    seriesDoses: string,
}
