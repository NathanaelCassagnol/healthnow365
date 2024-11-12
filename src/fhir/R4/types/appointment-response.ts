import { Identifier, Reference, instant, CodeableConcept, dateTime } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type AppointmentResponse = DomainResource & {
    resourceType: "AppointmentResponse",
    identifier?: Identifier[],
    appointment: Reference,
    start?: instant,
    end?: instant,
    participantType?: CodeableConcept[],
    actor?: Reference,
    participantStatus: "accepted" | "declined" | "tentative" | "needs-action",
    comment?: string,
}