import { BackboneElement, CodeableConcept, ContactPoint, Identifier, Period, Reference, time } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Endpoint } from "./endpoint"
import { HealthcareService } from "./healthcare-service"
import { Organization } from "./organization.types"
import { Practitioner } from "./practitioner"

// https://hl7.org/fhir/R4/practitionerrole.html

export type PractitionerRole = DomainResource & {
    resourceType: "PractitionerRole",
    identifier?: Identifier[],
    active?: boolean,
    period?: Period,
    practitioner?: Reference<Practitioner>,
    organization?: Reference<Organization>,
    code?: CodeableConcept[],
    specialty?: CodeableConcept[],
    location?: Reference<Location>[],
    healthcareService?: Reference<HealthcareService>[],
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
    endpoint?: Reference<Endpoint>[]
}