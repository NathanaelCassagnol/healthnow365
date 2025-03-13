import { Identifier, CodeableConcept, Period, Reference } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Device } from "./device"
import { HealthcareService } from "./healthcare-service"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { RelatedPerson } from "./related-person"

export type Schedule = DomainResource & {
    resourceType: "Schedule",
    identifier?: Identifier[],
    active?: boolean,
    serviceCategory?: CodeableConcept[],
    serviceType?: CodeableConcept[],
    specialty?: CodeableConcept[],
    actor: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Device | HealthcareService | Location>[],
    planningHorizon?: Period,
    comment?: string
}