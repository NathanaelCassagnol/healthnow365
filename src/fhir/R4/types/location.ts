import { Identifier, Coding, CodeableConcept, ContactPoint, Address, decimal, Reference, time, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Location = DomainResource & {
    resourceType: "Location",
    identifier?: Identifier[],
    status?: "active" | "suspended" | "inactive",
    operationalStatus?: Coding,
    name?: string,
    alias?: string[],
    description?: string,
    mode?: "instance" | "kind",
    type?: CodeableConcept[],
    telecom?: ContactPoint[],
    address?: Address,
    physicalType?: CodeableConcept,
    position?: BackboneElement & {
      longitude: decimal,
      latitude: decimal,
      altitude?: decimal
    },
    managingOrganization?: Reference,
    partOf?: Reference,
    hoursOfOperation?: (BackboneElement & {
      daysOfWeek?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[],
      allDay?: boolean,
      openingTime?: time,
      closingTime?: time
    })[],
    availabilityExceptions?: string,
    endpoint?: Reference[]
}