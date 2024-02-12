import { Identifier, CodeableConcept, Reference, dateTime, Period, BackboneElement, uri } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type DetectedIssue = DomainResource & {
    resourceType: "DetectedIssue",
    identifier?: Identifier[],
    status: "registered" | "preliminary" | "final" | "amended" | "corrected" | "cancelled" | "entered-in-error" | "unknown",
    code?: CodeableConcept,
    severity?: "high" | "moderate" | "low",
    patient?: Reference,
    identifiedDateTime?: dateTime,
    identifiedPeriod?: Period,
    author?: Reference,
    implicated?: Reference[],
    evidence?: (BackboneElement & {
        code?: CodeableConcept[],
        detail?: Reference[],
    })[],
    detail?: string,
    reference?: uri,
    mitigation?: (BackboneElement & {
        action: CodeableConcept,
        date?: dateTime,
        author?: Reference
    })[]
}