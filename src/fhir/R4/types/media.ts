import { Identifier, Reference, CodeableConcept, dateTime, Period, instant, positiveInt, decimal, Attachment, Annotation } from "./_basic-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { CarePlan } from "./care-plan"
import { CareTeam } from "./care-team"
import { Device } from "./device"
import { DeviceMetric } from "./device-metric"
import { Encounter } from "./encounter"
import { Group } from "./group"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { RelatedPerson } from "./related-person"
import { ServiceRequest } from "./service-request"
import { Specimen } from "./specimen"

export type Media = DomainResource & {
    resourceType: "Media",
    identifier?: Identifier[],
    basedOn?: Reference<ServiceRequest | CarePlan>[],
    partOf?: Reference<FHIRResource>[],
    status: "preparation" | "in-progress" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error" | "unknown",
    type?: CodeableConcept,
    modality?: CodeableConcept,
    view?: CodeableConcept,
    subject?: Reference<Patient | Practitioner | PractitionerRole | Group | Device | Specimen | Location>,
    encounter?: Reference<Encounter>,
    createdDateTime?: dateTime,
    createdPeriod?: Period,
    issued?: instant,
    operator?: Reference<Practitioner | PractitionerRole | Organization | CareTeam | Patient | Device | RelatedPerson>,
    reasonCode?: CodeableConcept[],
    bodySite?: CodeableConcept,
    deviceName?: string,
    device?: Reference<Device | DeviceMetric | Device>,
    height?: positiveInt,
    width?: positiveInt,
    frames?: positiveInt,
    duration?: decimal,
    content: Attachment,
    note?: Annotation[]
}