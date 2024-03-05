import { Coding, uri, BackboneElement, Reference, url, ContactPoint, CodeableConcept, id, canonical } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MessageHeader = DomainResource & {
    resourceType: "MessageHeader",
    eventCoding?: Coding,
    eventUri?: uri,
    destination?: (BackboneElement & {
        name?: string,
        target?: Reference,
        endpoint: url,
        receiver?: Reference,
    })[],
    sender?: Reference,
    enterer?: Reference,
    author?: Reference,
    source: (BackboneElement & {
        name?: string,
        software?: string,
        version?: string,
        contact?: ContactPoint,
        endpoint: url,
    }),
    responsible?: Reference,
    reason?: CodeableConcept,
    response?: (BackboneElement & {
        identifier: id,
        code: "ok" | "transient-error" | "fatal-error",
        details?: Reference,
    }),
    focus?: Reference[],
    definition?: canonical,
};