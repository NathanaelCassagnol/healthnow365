import { Identifier, Reference, CodeableConcept, dateTime, Period, Timing, Annotation, canonical, uri, BackboneElement, Quantity, Range } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type DeviceRequest = DomainResource & {
    resourceType: "DeviceRequest",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference[],
    priorRequest?: Reference[],
    groupIdentifier?: Identifier,
    status?: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    priority?: "routine" | "urgent" | "asap" | "stat",
    codeReference?: Reference,
    codeCodeableConcept?: CodeableConcept,
    parameter?: (BackboneElement & {
        code?: CodeableConcept,
        valueCodeableConcept?: CodeableConcept,
        valueQuantity?: Quantity,
        valueRange?: Range,
        valueBoolean?: Boolean,
    })[];
    subject: Reference,
    encounter?: Reference,
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    authoredOn?: dateTime,
    requester?: Reference,
    performerType?: CodeableConcept,
    performer?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    insurance?: Reference[],
    supportingInfo?: Reference[],
    note?: Annotation[],
    relevantHistory?: Reference[]
};