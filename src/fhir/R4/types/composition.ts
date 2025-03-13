import { Identifier, CodeableConcept, Reference, dateTime, code, BackboneElement, Period, Narrative } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Device } from "./device";
import { Encounter } from "./encounter";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";

export type Composition = DomainResource & {
    resourceType: "Composition",
    identifier?: Identifier,
    status: "preliminary" | "final" | "amended" | "entered-in-error",
    type: CodeableConcept,
    category?: CodeableConcept[],
    subject?: Reference<FHIRResource>,
    encounter?: Reference<Encounter>,
    date: dateTime,
    author: Reference<Practitioner | PractitionerRole | Device | Patient | RelatedPerson | Organization>[],
    title: string,
    confidentiality?: "U" | "L" | "M" | "N" | "R" | "V",
    attester?: (BackboneElement & {
        mode: "personal" | "professional" | "legal" | "official",
        time?: dateTime,
        party: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole | Organization>,
    })[],
    custodian?: Reference<Organization>,
    relatesTo?: (BackboneElement & {
        code: "replaces" | "transforms" | "signs" | "appends",
        targetIdentifier?: Identifier,
        targetReference?: Reference<Composition>,
    })[],
    event?: (BackboneElement & {
        code?: CodeableConcept[],
        period?: Period,
        detail?: Reference<FHIRResource>[],
    })[],
    section?: CompositionSection[],
};

type CompositionSection = BackboneElement & {
    title?: string,
    code?: CodeableConcept,
    author?: Reference<Practitioner | PractitionerRole | Device | Patient | RelatedPerson | Organization>[],
    focus?: Reference<FHIRResource>,
    text?: Narrative,
    mode?: "working" | "snapshot" | "changes",
    orderedBy?: CodeableConcept,
    entry?: Reference<FHIRResource>[],
    emptyReason?: CodeableConcept,
    section?: CompositionSection[],
}