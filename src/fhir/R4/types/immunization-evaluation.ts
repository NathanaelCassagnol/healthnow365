import { Identifier, Reference, dateTime, CodeableConcept, positiveInt } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Immunization } from "./immunization";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";

export type ImmunizationEvaluation = DomainResource & {
    resourceType: "ImmunizationEvaluation",
    identifier?: Identifier[],
    status: "completed" | "entered-in-error",
    patient: Reference<Patient>,
    date?: dateTime,
    authority?: Reference<Organization>,
    targetDisease: CodeableConcept,
    immunizationEvent: Reference<Immunization>,
    doseStatus: CodeableConcept,
    doseStatusReason?: CodeableConcept[],
    description?: string,
    series?: string,
    doseNumberPositiveInt?: positiveInt,
    doseNumberString?: string,
    seriesDosesPositiveInt?: positiveInt,
    seriesDosesString?: string,
};