import { Identifier, Reference, CodeableConcept, BackboneElement, Quantity, dateTime, Period, Timing, SimpleQuantity } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type SupplyDelivery = DomainResource & {
    resourceType: "SupplyDelivery",
    identifier?: Identifier[],
    basedOn?: Reference[],
    partOf?: Reference[],
    status?: "in-progress" | "completed" | "abandoned" | "entered-in-error",
    patient?: Reference,
    type?: CodeableConcept,
    suppliedItem?: (BackboneElement & {
        quantity?: SimpleQuantity,
        itemCodeableConcept?: CodeableConcept,
        itemReference?: Reference,
    }),
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    supplier?: Reference,
    destination?: Reference,
    receiver?: Reference[]
};