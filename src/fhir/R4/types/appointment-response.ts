import { Identifier, Reference, instant, CodeableConcept } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Appointment } from "./appointment"
import { Device } from "./device"
import { HealthcareService } from "./healthcare-service"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { RelatedPerson } from "./related-person"

export type AppointmentResponse = DomainResource & {
    resourceType: "AppointmentResponse",
    identifier?: Identifier[],
    appointment: Reference<Appointment>,
    start?: instant,
    end?: instant,
    participantType?: CodeableConcept[],
    actor?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Device | HealthcareService | Location>,
    participantStatus: "accepted" | "declined" | "tentative" | "needs-action",
    comment?: string,
}