import { Identifier, Reference, CodeableConcept, BackboneElement, Attachment, dateTime, Period, Annotation } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type CommunicationRequest = DomainResource & {
    resourceType: "CommunicationRequest",
    identifier?: Identifier[],
    basedOn?: Reference[],
    replaces?: Reference[],
    groupIdentifier?: Identifier,
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept,
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    doNotPerform?: boolean,
    medium?: CodeableConcept[],
    subject?: Reference,
    about?: Reference[],
    encounter?: Reference,
    payload?: (BackboneElement & {
        contentString?: string,
        contentAttachment?: Attachment,
        contentReference?: Reference,
    })[],
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    authoredOn?: dateTime,
    requester?: Reference,
    recipient?: Reference[],
    sender?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    note?: Annotation[]
};