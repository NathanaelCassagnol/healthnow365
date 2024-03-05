import { Identifier, CodeableConcept, Reference, dateTime, BackboneElement, Attachment, Coding, Period, instant } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type DocumentReference = DomainResource & {
    resourceType: "DocumentReference",
    masterIdentifier?: Identifier,
    identifier?: Identifier[],
    status: "current" | "superseded" | "entered-in-error",
    docStatus?: "preliminary" | "final" | "amended" | "entered-in-error",
    type?: CodeableConcept,
    category?: CodeableConcept[],
    subject?: Reference,
    date?: instant,
    author?: Reference[],
    authenticator?: Reference,
    custodian?: Reference,
    relatesTo?: (BackboneElement & {
        code: "replaces" | "transforms" | "signs" | "appends",
        target: Reference,
    })[],
    description?: string,
    securityLabel?: CodeableConcept[],
    content: (BackboneElement & {
        attachment: Attachment,
        format?: Coding,
    })[],
    context?: (BackboneElement & {
        encounter?: Reference[],
        event?: CodeableConcept[],
        period?: Period,
        facilityType?: CodeableConcept,
        practiceSetting?: CodeableConcept,
        sourcePatientInfo?: Reference,
        related?: Reference[],
    }),
};