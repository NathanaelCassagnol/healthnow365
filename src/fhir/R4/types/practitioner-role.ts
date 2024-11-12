import { BackboneElement, CodeableConcept, ContactPoint, Identifier, Period, Reference, time } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/practitionerrole.html

export type PractitionerRole = DomainResource & {
    resourceType: "PractitionerRole",
    identifier?: Identifier[],
    active?: boolean,
    period?: Period,
    practitioner?: Reference,
    organization?: Reference,
    code?: CodeableConcept[],
    specialty?: CodeableConcept[],
    location?: Reference[],
    healthcareService?: Reference[],
    telecom?: ContactPoint[],
    availableTime?: (BackboneElement & {
      daysOfWeek?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[],
      allDay?: boolean,
      availableStartTime?: time,
      availableEndTime?: time
    })[],
    notAvailable?: (BackboneElement & {
      description: string,
      during?: Period
    })[],
    availabilityExceptions?: string,
    endpoint?: Reference[]
}