import { Identifier, Reference, CodeableConcept, dateTime, BackboneElement, Attachment, Annotation, canonical, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Communication = DomainResource & {
    resourceType: "Communication",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference[],
    partOf?: Reference[],
    inResponseTo?: Reference[],
    status: "preparation" | "in-progress" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept,
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    medium?: CodeableConcept[],
    subject?: Reference,
    topic?: CodeableConcept,
    about?: Reference[],
    encounter?: Reference,
    sent?: dateTime,
    received?: dateTime,
    recipient?: Reference[],
    sender?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    payload?: (BackboneElement & {
        contentString?: string,
        contentAttachment?: Attachment,
        contentReference?: Reference,
    })[],
    note?: Annotation[]
};