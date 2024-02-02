import { Annotation, CodeableConcept, dateTime, Identifier, Period, Reference, Age, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/allergyintolerance.html
export type AllergyIntolerance = DomainResource & {
    resourceType?: "AllergyIntolerance",
    identifier?: Identifier[],
    clinicalStatus?: CodeableConcept, // active | inactive | resolved
    verificationStatus?: CodeableConcept, // unconfirmed | presumed | confirmed | refuted | entered-in-error
    type?: "allergy" | "intolerance",
    category?: ("food" | "medication" | "environment" | "biologic")[],
    criticality?: "low" | "high" | "unable-to-assess",
    code?: CodeableConcept,
    patient: Reference, // required; Reference(Patient)
    encounter?: Reference, // Reference(Encounter)
    // One of these 5:
    onsetDateTime?: dateTime,
    onsetAge?: Age,
    onsetPeriod?: Period,
    onsetRange?: Range,
    onsetString?: string,
    recordedDate?: dateTime,
    recorder?: Reference, // Reference(Practitioner | PractitionerRole | Patient | RelatedPerson)
    asserter?: Reference, // Reference(Patient | RelatedPerson | Practitioner | PractitionerRole)
    lastOccurrence?: dateTime,
    note?: Annotation[],
    reaction?: (BackboneElement & {
      substance?: CodeableConcept, 
      manifestation: CodeableConcept[], // Required
      description?: string,
      onset?: dateTime,
      severity?: "mild" | "moderate" | "severe",
      exposureRoute?: CodeableConcept,
      note?: Annotation[]
    })[]
}
