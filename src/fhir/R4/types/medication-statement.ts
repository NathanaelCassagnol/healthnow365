import { Identifier, Reference, CodeableConcept, dateTime, Period, Annotation, Dosage } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MedicationStatement = DomainResource & {
    resourceType: "MedicationStatement",
    identifier?: Identifier[],
    basedOn?: Reference[],
    partOf?: Reference[],
    status: "active" | "completed" | "entered-in-error" | "intended" | "stopped" | "on-hold" | "unknown" | "not-taken",
    statusReason?: CodeableConcept[],
    category?: CodeableConcept,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference,
    subject: Reference,
    context?: Reference,
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    dateAsserted?: dateTime,
    informationSource?: Reference,
    derivedFrom?: Reference[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    note?: Annotation[],
    dosage?: Dosage[]
};