import { Address, Attachment, BackboneElement, CodeableConcept, ContactPoint, HumanName, Identifier, Period, Reference, date } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/relatedperson.html

export type RelatedPerson = DomainResource & {
    resourceType: "RelatedPerson",
    identifier?: Identifier[],
    active?: boolean,
    patient: Reference,
    relationship?: CodeableConcept[],
    name?: HumanName[],
    telecom?: ContactPoint[],
    gender?: "male" | "female" | "other" | "unknown",
    birthDate?: date,
    address?: Address[],
    photo?: Attachment[],
    period?: Period,
    communication?: (BackboneElement & {
      language: CodeableConcept,
      preferred?: boolean
    })[]
}