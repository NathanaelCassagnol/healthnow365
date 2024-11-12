import { Identifier, Period, Reference, CodeableConcept, ContactPoint } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/organizationaffiliation.html

export type OrganizationAffiliation = DomainResource & {
    resourceType: "OrganizationAffiliation",
    identifier?: Identifier[],
    active?: boolean,
    period?: Period,
    organization?: Reference,
    participatingOrganization?: Reference,
    network?: Reference[],
    code?: CodeableConcept[],
    specialty?: CodeableConcept[],
    location?: Reference[],
    healthcareService?: Reference[],
    telecom?: ContactPoint[],
    endpoint?: Reference[]
}