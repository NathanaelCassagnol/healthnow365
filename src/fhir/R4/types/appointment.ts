import { Identifier, CodeableConcept, Reference, instant, positiveInt, dateTime, Period, unsignedInt, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Appointment = DomainResource & {
    resourceType: "Appointment",
    identifier?: Identifier[],
    status: "proposed" | "pending" | "booked" | "arrived" | "fulfilled" | "cancelled" | "noshow" | "entered-in-error" | "checked-in" | "waitlist",
    cancelationReason?: CodeableConcept,
    serviceCategory?: CodeableConcept[],
    serviceType?: CodeableConcept[],
    specialty?: CodeableConcept[],
    appointmentType?: CodeableConcept,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    priority?: unsignedInt,
    description?: string,
    supportingInformation?: Reference[],
    start?: instant,
    end?: instant,
    minutesDuration?: positiveInt,
    slot?: Reference[],
    created?: dateTime,
    comment?: string,
    patientInstruction?: string;
    basedOn?: Reference[];
    participant: (BackboneElement & {
        type?: CodeableConcept[],
        actor?: Reference,
        required?: "required" | "optional" | "information-only",
        status: "accepted" | "declined" | "tentative" | "needs-action",
        period?: Period
    })[],
    requestedPeriod?: Period[]
}