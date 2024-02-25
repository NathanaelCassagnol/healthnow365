import { Address, Attachment, BackboneElement, CodeableConcept, ContactPoint, HumanName, Identifier, Period, Reference, date } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/practitioner.html
export type Practitioner = DomainResource & {
    resourceType: "Practitioner",
    identifier?: Identifier[],
    active?: boolean,
    name?: HumanName[],
    telecom?: ContactPoint[],
    address?: Address[],
    gender?: "male" | "female" | "other" | "unknown",
    birthDate?: date,
    photo?: Attachment[],
    qualification?: (BackboneElement & {
      identifier?: Identifier[],
      code: CodeableConcept,
      period?: Period,
      issuer?: Reference
    })[],
    communication?: CodeableConcept[]
}