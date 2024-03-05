import { Identifier, CodeableConcept, Reference, dateTime, uri, BackboneElement, Attachment } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type DocumentManifest = DomainResource & {
    resourceType: "DocumentManifest",
    masterIdentifier?: Identifier,
    identifier?: Identifier[],
    status: "current" | "superseded" | "entered-in-error",
    type?: CodeableConcept,
    subject?: Reference,
    created?: dateTime,
    author?: Reference[],
    recipient?: Reference[],
    source?: uri,
    description?: string,
    content: Reference[],
    related?: (BackboneElement & {
        identifier?: Identifier,
        ref?: Reference,
    })[],
};