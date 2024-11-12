import { Identifier, CodeableConcept, Reference, Period, positiveInt, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

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
        condition: Reference,
        role?: CodeableConcept,
        rank?: positiveInt
    })[],
    patient: Reference,
    managingOrganization?: Reference,
    period?: Period,
    referralRequest?: Reference[],
    careManager?: Reference,
    team?: Reference[],
    account?: Reference[]
}
