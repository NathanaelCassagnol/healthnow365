import { Identifier, Period, Reference, CodeableConcept, ContactPoint } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Endpoint } from "./endpoint"
import { HealthcareService } from "./healthcare-service"
import { Organization } from "./organization.types"

// https://hl7.org/fhir/R4/organizationaffiliation.html

export type OrganizationAffiliation = DomainResource & {
    resourceType: "OrganizationAffiliation",
    identifier?: Identifier[],
    active?: boolean,
    period?: Period,
    organization?: Reference<Organization>,
    participatingOrganization?: Reference<Organization>,
    network?: Reference<Organization>[],
    code?: CodeableConcept[],
    specialty?: CodeableConcept[],
    location?: Reference<Location>[],
    healthcareService?: Reference<HealthcareService>[],
    telecom?: ContactPoint[],
    endpoint?: Reference<Endpoint>[]
}