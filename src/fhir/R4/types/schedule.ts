import { Identifier, CodeableConcept, Period, Reference } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Schedule = DomainResource & {
    resourceType: "Schedule",
    identifier?: Identifier[],
    active?: boolean,
    serviceCategory?: CodeableConcept[],
    serviceType?: CodeableConcept[],
    specialty?: CodeableConcept[],
    actor: Reference[],
    planningHorizon?: Period,
    comment?: string
}