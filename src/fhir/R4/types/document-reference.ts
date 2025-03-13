import { Identifier, CodeableConcept, Reference, dateTime, BackboneElement, Attachment, Coding, Period, instant } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Device } from "./device";
import { Encounter } from "./encounter";
import { EpisodeOfCare } from "./episode-of-care";
import { Group } from "./group";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";

export type DocumentReference = DomainResource & {
    resourceType: "DocumentReference",
    masterIdentifier?: Identifier,
    identifier?: Identifier[],
    status: "current" | "superseded" | "entered-in-error",
    docStatus?: "preliminary" | "final" | "amended" | "entered-in-error",
    type?: CodeableConcept,
    category?: CodeableConcept[],
    subject?: Reference<Patient | Practitioner | Group | Device>,
    date?: instant,
    author?: Reference<Patient | Practitioner | Group | Device>[],
    authenticator?: Reference<Practitioner | PractitionerRole | Organization>,
    custodian?: Reference<Organization>,
    relatesTo?: (BackboneElement & {
        code: "replaces" | "transforms" | "signs" | "appends",
        target: Reference<DocumentReference>,
    })[],
    description?: string,
    securityLabel?: CodeableConcept[],
    content: (BackboneElement & {
        attachment: Attachment,
        format?: Coding,
    })[],
    context?: (BackboneElement & {
        encounter?: Reference<Encounter | EpisodeOfCare>[],
        event?: CodeableConcept[],
        period?: Period,
        facilityType?: CodeableConcept,
        practiceSetting?: CodeableConcept,
        sourcePatientInfo?: Reference<Patient>,
        related?: Reference<FHIRResource>[],
    }),
};