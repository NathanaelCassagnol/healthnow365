import { Identifier, CodeableConcept, Reference, dateTime, Attachment, BackboneElement, uri, Period, Coding } from "./_basic-types";
import { Contract } from "./_missing-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { CareTeam } from "./care-team";
import { Device } from "./device";
import { DocumentReference } from "./document-reference";
import { Group } from "./group";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { QuestionnaireResponse } from "./questionnaire-response";
import { RelatedPerson } from "./related-person";

export type Consent = DomainResource & {
    resourceType: "Consent",
    identifier?: Identifier[],
    status: "draft" | "proposed" | "active" | "rejected" | "inactive" | "entered-in-error",
    scope: CodeableConcept,
    category: CodeableConcept[],
    patient?: Reference<Patient>,
    dateTime?: dateTime,
    performer?: Reference<Organization | Patient | Practitioner | RelatedPerson | PractitionerRole>[],
    organization?: Reference<Organization>[],
    sourceAttachment?: Attachment,
    sourceReference?: Reference<Consent | DocumentReference | Contract | QuestionnaireResponse>,
    policy?: (BackboneElement & {
        authority?: uri,
        uri?: uri,
    })[],
    policyRule?: CodeableConcept,
    verification?: (BackboneElement & {
        verified: boolean,
        verifiedWith?: Reference<Patient | RelatedPerson>,
        verificationDate?: dateTime,
    })[],
    provision?: ConsentProvision,
};
type ConsentProvision = BackboneElement & {
    type?: "deny" | "permit",
    period?: Period,
    actor?: (BackboneElement & {
        role: CodeableConcept,
        reference: Reference<Device | Group | CareTeam | Organization | Patient | Practitioner | RelatedPerson | PractitionerRole>,
    })[],
    action?: CodeableConcept[],
    securityLabel?: Coding[],
    purpose?: Coding[],
    class?: Coding[],
    code?: CodeableConcept[],
    dataPeriod?: Period,
    data?: (BackboneElement & {
        meaning: "instance" | "related" | "dependents" | "authoredby",
        reference: Reference<FHIRResource>,
    })[],
    provision?: ConsentProvision[],
}