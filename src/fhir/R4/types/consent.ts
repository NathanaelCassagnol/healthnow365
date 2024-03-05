import { Identifier, CodeableConcept, Reference, dateTime, Attachment, BackboneElement, uri, Period, Coding } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Consent = DomainResource & {
    resourceType: "Consent",
    identifier?: Identifier[],
    status: "draft" | "proposed" | "active" | "rejected" | "inactive" | "entered-in-error",
    scope: CodeableConcept,
    category: CodeableConcept[],
    patient?: Reference,
    dateTime?: dateTime,
    performer?: Reference[],
    organization?: Reference[],
    sourceAttachment?: Attachment,
    sourceReference?: Reference,
    policy?: (BackboneElement & {
        authority?: uri,
        uri?: uri,
    })[],
    policyRule?: CodeableConcept,
    verification?: (BackboneElement & {
        verified: boolean,
        verifiedWith?: Reference,
        verificationDate?: dateTime,
    })[],
    provision?: ConsentProvision,
};
type ConsentProvision = BackboneElement & {
    type?: "deny" | "permit",
    period?: Period,
    actor?: (BackboneElement & {
        role: CodeableConcept,
        reference: Reference,
    })[],
    action?: CodeableConcept[],
    securityLabel?: Coding[],
    purpose?: Coding[],
    class?: Coding[],
    code?: CodeableConcept[],
    dataPeriod?: Period,
    data?: (BackboneElement & {
        meaning: "instance" | "related" | "dependents" | "authoredby",
        reference: Reference,
    })[],
    provision?: ConsentProvision[],
}