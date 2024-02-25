import { Identifier, Reference, CodeableConcept, dateTime, Period, BackboneElement, Annotation, Quantity, Ratio, uri, SimpleQuantity } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MedicationAdministration = DomainResource & {
    resourceType: "MedicationAdministration",
    identifier?: Identifier[],
    instantiates?: uri[],
    partOf?: Reference[],
    status: "in-progress" | "not-done" | "on-hold" | "completed" | "entered-in-error" | "stopped" | "unknown",
    statusReason?: CodeableConcept[],
    category?: CodeableConcept,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference,
    subject: Reference,
    context?: Reference,
    supportingInformation?: Reference[],
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference,
    })[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    request?: Reference,
    device?: Reference[],
    note?: Annotation[],
    dosage?: (BackboneElement & {
        text?: string,
        site?: CodeableConcept,
        route?: CodeableConcept,
        method?: CodeableConcept,
        dose?: SimpleQuantity,
        rateRatio?: Ratio,
        rateQuantity?: SimpleQuantity,
    }),
    eventHistory?: Reference[]
};