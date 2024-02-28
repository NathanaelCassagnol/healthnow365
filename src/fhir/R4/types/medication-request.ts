import { Identifier, CodeableConcept, Reference, dateTime, Annotation, BackboneElement, Quantity, Duration, Period, unsignedInt, Dosage, canonical, uri, SimpleQuantity } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MedicationRequest = DomainResource & {
    resourceType: "MedicationRequest",
    identifier?: Identifier[],
    status: "active" | "on-hold" | "cancelled" | "completed" | "entered-in-error" | "stopped" | "draft" | "unknown",
    statusReason?: CodeableConcept,
    intent: "proposal" | "plan" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    doNotPerform?: boolean,
    reportedBoolean?: boolean,
    reportedReference?: Reference,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference,
    subject: Reference,
    encounter?: Reference,
    supportingInformation?: Reference[],
    authoredOn?: dateTime,
    requester?: Reference,
    performer?: Reference,
    performerType?: CodeableConcept,
    recorder?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference[],
    groupIdentifier?: Identifier,
    courseOfTherapyType?: CodeableConcept,
    insurance?: Reference[],
    note?: Annotation[],
    dosageInstruction?: Dosage[],
    dispenseRequest?: (BackboneElement & {
        initialFill?: (BackboneElement & {
            quantity?: Quantity,
            duration?: Duration
        }),
        dispenseInterval?: Duration,
        validityPeriod?: Period,
        numberOfRepeatsAllowed?: unsignedInt,
        quantity?: SimpleQuantity,
        expectedSupplyDuration?: Duration,
        performer?: Reference
    }),
    substitution?: (BackboneElement & {
        allowedBoolean?: boolean,
        allowedCodeableConcept?: CodeableConcept,
        reason?: CodeableConcept
    }),
    priorPrescription?: Reference,
    detectedIssue?: Reference[],
    eventHistory?: Reference[]
};