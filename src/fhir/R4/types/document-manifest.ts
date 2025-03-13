import { Identifier, CodeableConcept, Reference, dateTime, uri, BackboneElement, Attachment } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Device } from "./device";
import { Group } from "./group";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";

export type DocumentManifest = DomainResource & {
    resourceType: "DocumentManifest",
    masterIdentifier?: Identifier,
    identifier?: Identifier[],
    status: "current" | "superseded" | "entered-in-error",
    type?: CodeableConcept,
    subject?: Reference<Patient | Practitioner | Group | Device>,
    created?: dateTime,
    author?: Reference<Practitioner | PractitionerRole | Organization | Device | Patient | RelatedPerson>[],
    recipient?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Organization>[],
    source?: uri,
    description?: string,
    content: Reference<FHIRResource>[],
    related?: (BackboneElement & {
        identifier?: Identifier,
        ref?: Reference<FHIRResource>,
    })[],
};