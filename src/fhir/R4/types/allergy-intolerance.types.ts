import { Annotation, CodeableConcept, dateTime, Identifier, Period, Reference, Age, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/allergyintolerance.html
export type AllergyIntolerance = DomainResource & {
    resourceType: "AllergyIntolerance",
    identifier?: Identifier[],
    clinicalStatus?: CodeableConcept,
    verificationStatus?: CodeableConcept,
    type?: "allergy" | "intolerance",
    category?: ("food" | "medication" | "environment" | "biologic")[],
    criticality?: "low" | "high" | "unable-to-assess",
    code?: CodeableConcept,
    patient: Reference,
    encounter?: Reference,
    onsetDateTime?: dateTime,
    onsetAge?: Age,
    onsetPeriod?: Period,
    onsetRange?: Range,
    onsetString?: string,
    recordedDate?: dateTime,
    recorder?: Reference,
    asserter?: Reference,
    lastOccurrence?: dateTime,
    note?: Annotation[],
    reaction?: (BackboneElement & {
      substance?: CodeableConcept, 
      manifestation: CodeableConcept[],
      description?: string,
      onset?: dateTime,
      severity?: "mild" | "moderate" | "severe",
      exposureRoute?: CodeableConcept,
      note?: Annotation[]
    })[]
}
