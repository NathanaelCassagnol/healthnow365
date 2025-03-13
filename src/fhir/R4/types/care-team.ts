import { Identifier, CodeableConcept, Reference, Period, BackboneElement, ContactPoint, Annotation } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Condition } from "./condition";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";

export type CareTeam = DomainResource & {
    resourceType: "CareTeam",
    identifier?: Identifier[],
    status?: "proposed" | "active" | "suspended" | "inactive" | "entered-in-error",
    category?: CodeableConcept[],
    name?: string,
    subject?: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    period?: Period,
    participant?: (BackboneElement & {
        role?: CodeableConcept[],
        member?: Reference<Practitioner | PractitionerRole | RelatedPerson | Patient | Organization | CareTeam>,
        onBehalfOf?: Reference<Organization>,
        period?: Period,
    })[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition>[],
    managingOrganization?: Reference<Organization>[],
    telecom?: ContactPoint[],
    note?: Annotation[]
};