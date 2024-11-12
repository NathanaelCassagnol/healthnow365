import { Identifier, CodeableConcept, Reference, dateTime, Period, BackboneElement, uri, Annotation } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type ClinicalImpression = DomainResource & {
    resourceType: "ClinicalImpression",
    identifier?: Identifier[],
    status: "in-progress" | "completed" | "entered-in-error",
    statusReason?: CodeableConcept,
    code?: CodeableConcept,
    description?: string,
    subject: Reference,
    encounter?: Reference,
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    date?: dateTime,
    assessor?: Reference,
    previous?: Reference,
    problem?: Reference[],
    investigation?: (BackboneElement & {
        code: CodeableConcept,
        item?: Reference[],
    })[],
    protocol?: uri[],
    summary?: string,
    finding?: (BackboneElement & {
        itemCodeableConcept?: CodeableConcept,
        itemReference?: Reference,
        basis?: string
    })[],
    prognosisCodeableConcept?: CodeableConcept[],
    prognosisReference?: Reference[],
    supportingInfo?: Reference[],
    note?: Annotation[]
}