import { Identifier, CodeableConcept, Reference, dateTime, Annotation, BackboneElement } from "./_basic-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { Device } from "./device"
import { Encounter } from "./encounter"
import { Group } from "./group"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"

export type List = DomainResource & {
    resourceType: "List",
    identifier?: Identifier[],
    status: "current" | "retired" | "entered-in-error",
    mode: "working" | "snapshot" | "changes",
    title?: string,
    code?: CodeableConcept,
    subject?: Reference<Patient | Group | Device | Location>,
    encounter?: Reference<Encounter>,
    date?: dateTime,
    source?: Reference<Practitioner | PractitionerRole | Patient | Device>,
    orderedBy?: CodeableConcept,
    note?: Annotation[],
    entry?: (BackboneElement & {
        flag?: CodeableConcept,
        deleted?: boolean,
        date?: dateTime,
        item: Reference<FHIRResource>
    })[],
    emptyReason?: CodeableConcept
}