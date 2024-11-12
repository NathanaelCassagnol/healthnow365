import { Identifier, Reference, dateTime, BackboneElement, CodeableConcept, positiveInt } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type ImmunizationRecommendation = DomainResource & {
    resourceType: "ImmunizationRecommendation",
    identifier?: Identifier[],
    patient: Reference,
    date: dateTime,
    authority?: Reference,
    recommendation: (BackboneElement & {
        vaccineCode?: CodeableConcept[],
        targetDisease?: CodeableConcept,
        contraindicatedVaccineCode?: CodeableConcept[],
        forecastStatus: CodeableConcept,
        forecastReason?: CodeableConcept[],
        dateCriterion?: (BackboneElement & {
            code: CodeableConcept,
            value: dateTime,
        })[],
        description?: string,
        series?: string,
        doseNumberString?: string,
        doseNumberPositiveInt?: positiveInt,
        seriesDosesString?: string,
        seriesDosesPositiveInt?: positiveInt,
        supportingImmunization?: Reference[],
        supportingPatientInformation?: Reference[],
    })[]
};