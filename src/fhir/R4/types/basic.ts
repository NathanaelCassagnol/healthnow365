import { Identifier, CodeableConcept, Reference, date } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";

export type Basic = DomainResource & {
    resourceType: "Basic",
    identifier?: Identifier[],
    code: CodeableConcept,
    subject?: Reference<FHIRResource>,
    created?: date,
    author?: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson | Organization>,
};