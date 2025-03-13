import { Identifier, CodeableConcept, Reference, Period, positiveInt, BackboneElement } from "./_basic-types"
import { Account } from "./_missing-types"
import { DomainResource } from "./_resource.types"
import { CareTeam } from "./care-team"
import { Condition } from "./condition"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { ServiceRequest } from "./service-request"

export type EpisodeOfCare = DomainResource & {
    resourceType: "EpisodeOfCare",
    identifier?: Identifier[],
    status: "planned" | "waitlist" | "active" | "onhold" | "finished" | "cancelled" | "entered-in-error",
    statusHistory?: (BackboneElement & {
        status: "planned" | "waitlist" | "active" | "onhold" | "finished" | "cancelled" | "entered-in-error" | "unknown",
        period: Period
    })[],
    type?: CodeableConcept[],
    diagnosis?: (BackboneElement & {
        condition: Reference<Condition>,
        role?: CodeableConcept,
        rank?: positiveInt
    })[],
    patient: Reference<Patient>,
    managingOrganization?: Reference<Organization>,
    period?: Period,
    referralRequest?: Reference<ServiceRequest>[],
    careManager?: Reference<Practitioner | PractitionerRole>,
    team?: Reference<CareTeam>[],
    account?: Reference<Account>[]
}
