import { Identifier, Reference, CodeableConcept, markdown, Attachment, ContactPoint, time, Period, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/healthcareservice.html

export type HealthcareService = DomainResource & {
    resourceType: "HealthcareService",
    identifier?: Identifier[],
    active?: boolean,
    providedBy?: Reference,
    category?: CodeableConcept[],
    type?: CodeableConcept[],
    specialty?: CodeableConcept[],
    location?: Reference[],
    name?: string,
    comment?: string,
    extraDetails?: markdown,
    photo?: Attachment,
    telecom?: ContactPoint[],
    coverageArea?: Reference[],
    serviceProvisionCode?: CodeableConcept[],
    eligibility?: (BackboneElement & {
      code?: CodeableConcept,
      comment?: markdown
    })[],
    program?: CodeableConcept[],
    characteristic?: CodeableConcept[],
    communication?: CodeableConcept[],
    referralMethod?: CodeableConcept[],
    appointmentRequired?: boolean,
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