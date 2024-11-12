import { Identifier, Reference, CodeableConcept, BackboneElement, Quantity, dateTime, Annotation, Dosage, SimpleQuantity } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MedicationDispense = DomainResource & {
    resourceType: "MedicationDispense",
    identifier?: Identifier[],
    partOf?: Reference[],
    status: "preparation" | "in-progress" | "cancelled" | "on-hold" | "completed" | "entered-in-error" | "stopped" | "declined" | "unknown",
    statusReasonCodeableConcept?: CodeableConcept,
    statusReasonReference?: Reference,
    category?: CodeableConcept,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference,
    subject?: Reference,
    context?: Reference,
    supportingInformation?: Reference[],
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference,
    })[],
    location?: Reference,
    authorizingPrescription?: Reference[],
    type?: CodeableConcept,
    quantity?: SimpleQuantity,
    daysSupply?: SimpleQuantity,
    whenPrepared?: dateTime,
    whenHandedOver?: dateTime,
    destination?: Reference,
    receiver?: Reference[],
    note?: Annotation[],
    dosageInstruction?: Dosage[],
    substitution?: (BackboneElement & {
        wasSubstituted: boolean,
        type?: CodeableConcept,
        reason?: CodeableConcept[],
        responsibleParty?: Reference[],
    }),
    detectedIssue?: Reference[],
    eventHistory?: Reference[]
};