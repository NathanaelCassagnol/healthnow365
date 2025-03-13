import { Identifier, Reference, dateTime, BackboneElement, CodeableConcept, positiveInt } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Immunization } from "./immunization";
import { ImmunizationEvaluation } from "./immunization-evaluation";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";

export type ImmunizationRecommendation = DomainResource & {
    resourceType: "ImmunizationRecommendation",
    identifier?: Identifier[],
    patient: Reference<Patient>,
    date: dateTime,
    authority?: Reference<Organization>,
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
        supportingImmunization?: Reference<Immunization | ImmunizationEvaluation>[],
        supportingPatientInformation?: Reference<FHIRResource>[],
    })[]
};