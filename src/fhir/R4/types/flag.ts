import { Identifier, CodeableConcept, Reference, Period, Annotation } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Flag = DomainResource & {
    resourceType: "Flag",
    identifier?: Identifier[],
    status: "active" | "inactive" | "entered-in-error",
    category?: CodeableConcept[],
    code: CodeableConcept,
    subject: Reference,
    period?: Period,
    encounter?: Reference,
    author?: Reference,
}