import { Coding, Period, instant, CodeableConcept, BackboneElement, Reference, uri, base64Binary } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Device } from "./device";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";

export type AuditEvent = DomainResource & {
    resourceType: "AuditEvent",
    type: Coding,
    subtype?: Coding[],
    action?: "C" | "R" | "U" | "D" | "E",
    period?: Period,
    recorded: instant,
    outcome?: "0" | "4" | "8" | "12",
    outcomeDesc?: string,
    purposeOfEvent?: CodeableConcept[],
    agent: (BackboneElement & {
        type?: CodeableConcept,
        role?: CodeableConcept[],
        who?: Reference<PractitionerRole | Practitioner | Organization | Device | Patient | RelatedPerson>,
        altId?: string,
        name?: string,
        requestor: boolean,
        location?: Reference<Location>,
        policy?: uri[],
        media?: Coding,
        network?: (BackboneElement & {
            address?: string,
            type?: "1" | "2" | "3" | "4" | "5",
        }),
        purposeOfUse?: CodeableConcept[],
    })[],
    source: (BackboneElement & {
        site?: string,
        observer: Reference<PractitionerRole | Practitioner | Organization | Device | Patient | RelatedPerson>,
        type?: Coding[],
    }),
    entity?: (BackboneElement & {
        what?: Reference<FHIRResource>,
        type?: Coding,
        role?: Coding,
        lifecycle?: Coding,
        securityLabel?: Coding[],
        name?: string,
        description?: string,
        query?: base64Binary,
        detail?: (BackboneElement & {
            type: string,
            valueString?: string,
            valueBase64Binary?: base64Binary,
        })[],
    })[],
};