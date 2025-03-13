import { Annotation, CodeableConcept, dateTime, Identifier, Period, Reference, Age, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Encounter } from "./encounter"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { RelatedPerson } from "./related-person"

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
    patient: Reference<Patient>,
    encounter?: Reference<Encounter>,
    onsetDateTime?: dateTime,
    onsetAge?: Age,
    onsetPeriod?: Period,
    onsetRange?: Range,
    onsetString?: string,
    recordedDate?: dateTime,
    recorder?: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson>,
    asserter?: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole>,
    lastOccurrence?: dateTime,
    note?: Annotation[],
    reaction?: AllergyIntoleranceReaction[]
}

export type AllergyIntoleranceReaction = BackboneElement & {
  substance?: CodeableConcept, 
  manifestation: CodeableConcept[],
  description?: string,
  onset?: dateTime,
  severity?: "mild" | "moderate" | "severe",
  exposureRoute?: CodeableConcept,
  note?: Annotation[]
}