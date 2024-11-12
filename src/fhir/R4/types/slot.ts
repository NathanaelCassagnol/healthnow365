import { Identifier, CodeableConcept, Reference, instant } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Slot = DomainResource & {
    resourceType: "Slot",
    identifier?: Identifier[],
    serviceCategory?: CodeableConcept[],
    serviceType?: CodeableConcept[],
    specialty?: CodeableConcept[],
    appointmentType?: CodeableConcept,
    schedule: Reference,
    status: "busy" | "free" | "busy-unavailable" | "busy-tentative" | "entered-in-error",
    start: instant,
    end: instant,
    overbooked?: boolean,
    comment?: string
}