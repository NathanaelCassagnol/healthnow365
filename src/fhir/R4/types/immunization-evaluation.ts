import { Identifier, Reference, dateTime, CodeableConcept, positiveInt } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type ImmunizationEvaluation = DomainResource & {
    resourceType: "ImmunizationEvaluation",
    identifier?: Identifier[],
    status: "completed" | "entered-in-error",
    patient: Reference,
    date?: dateTime,
    authority?: Reference,
    targetDisease: CodeableConcept,
    immunizationEvent: Reference,
    doseStatus: CodeableConcept,
    doseStatusReason?: CodeableConcept[],
    description?: string,
    series?: string,
    doseNumberPositiveInt?: positiveInt,
    doseNumberString?: string,
    seriesDosesPositiveInt?: positiveInt,
    seriesDosesString?: string,
};