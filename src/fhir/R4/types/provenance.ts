import { Reference, Period, dateTime, instant, uri, CodeableConcept, BackboneElement, Signature } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Provenance = DomainResource & {
    resourceType: "Provenance",
    target: Reference[],
    occurredPeriod?: Period,
    occurredDateTime?: dateTime,
    recorded: instant,
    policy?: uri[],
    location?: Reference,
    reason?: CodeableConcept[],
    activity?: CodeableConcept,
    agent: (BackboneElement & {
        type?: CodeableConcept,
        role?: CodeableConcept[],
        who: Reference,
        onBehalfOf?: Reference,
    })[],
    entity?: (BackboneElement & {
        role: "derivation" | "revision" | "quotation" | "source" | "removal",
        what: Reference,
        agent?: (BackboneElement & {
            type?: CodeableConcept,
            role?: CodeableConcept[],
            who: Reference,
            onBehalfOf?: Reference,
        })[],
    })[],
    signature?: Signature[],
};