import { BackboneElement } from "../backboneElement.types"
import { Annotation, CodeableConcept, CodeableReference, dateTime, Identifier, Period, Reference, Age } from "../basic-types"
import { DomainResource } from "./resource.types"

// https://build.fhir.org/allergyintolerance.html
export type AllergyIntolerance = DomainResource & {
    resourceType?: "AllergyIntolerance",
    identifier?: Identifier[],
    clinicalStatus?: CodeableConcept, // active | inactive | resolved
    verificationStatus?: CodeableConcept, // unconfirmed | presumed | confirmed | refuted | entered-in-error
    type?: CodeableConcept, // allergy | intolerance - Underlying mechanism (if known)
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
    participant?: (BackboneElement & {
      function?: CodeableConcept,
      actor: Reference // required; Reference(CareTeam|Device|Organization|Patient|Practitioner|PractitionerRole|RelatedPerson)
    })[],
    lastOccurrence?: dateTime,
    note?: Annotation[],
    reaction?: (BackboneElement & {
      substance?: CodeableConcept, 
      manifestation: CodeableReference[], // Observation
      description?: string,
      onset?: dateTime,
      severity?: "mild" | "moderate" | "severe",
      exposureRoute?: CodeableConcept,
      note?: Annotation[]
    })[]
}
