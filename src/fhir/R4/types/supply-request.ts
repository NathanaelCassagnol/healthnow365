import { Identifier, CodeableConcept, Reference, Quantity, BackboneElement, dateTime, Period, Timing, Range } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type SupplyRequest = DomainResource & {
    resourceType: "SupplyRequest",
    identifier?: Identifier[],
    status?: "draft" | "active" | "suspended" | "cancelled" | "completed" | "entered-in-error" | "unknown",
    category?: CodeableConcept,
    priority?: "routine" | "urgent" | "asap" | "stat",
    itemCodeableConcept?: CodeableConcept,
    itemReference?: Reference,
    quantity: Quantity,
    parameter?: (BackboneElement & {
        code?: CodeableConcept,
        valueCodeableConcept?: CodeableConcept,
        valueQuantity?: Quantity,
        valueRange?: Range,
        valueBoolean?: boolean,
    })[],
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    authoredOn?: dateTime,
    requester?: Reference,
    supplier?: Reference[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    deliverFrom?: Reference,
    deliverTo?: Reference
};