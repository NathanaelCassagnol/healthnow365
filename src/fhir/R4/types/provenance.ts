import { Reference, Period, dateTime, instant, uri, CodeableConcept, BackboneElement, Signature } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Device } from "./device";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";

export type Provenance = DomainResource & {
    resourceType: "Provenance",
    target: Reference<FHIRResource>[],
    occurredPeriod?: Period,
    occurredDateTime?: dateTime,
    recorded: instant,
    policy?: uri[],
    location?: Reference<Location>,
    reason?: CodeableConcept[],
    activity?: CodeableConcept,
    agent: (BackboneElement & {
        type?: CodeableConcept,
        role?: CodeableConcept[],
        who: Reference<Practitioner | PractitionerRole | RelatedPerson | Patient | Device | Organization>,
        onBehalfOf?: Reference<Practitioner | PractitionerRole | RelatedPerson | Patient | Device | Organization>,
    })[],
    entity?: (BackboneElement & {
        role: "derivation" | "revision" | "quotation" | "source" | "removal",
        what: Reference<FHIRResource>,
        agent?: (BackboneElement & {
            type?: CodeableConcept,
            role?: CodeableConcept[],
            who: Reference<Practitioner | PractitionerRole | RelatedPerson | Patient | Device | Organization>,
            onBehalfOf?: Reference<Practitioner | PractitionerRole | RelatedPerson | Patient | Device | Organization>,
        })[],
    })[],
    signature?: Signature[],
};