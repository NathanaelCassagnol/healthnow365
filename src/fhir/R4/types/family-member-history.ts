import { Identifier, canonical, uri, CodeableConcept, Reference, dateTime, Period, date, Age, Annotation, BackboneElement, Range } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { AllergyIntolerance } from "./allergy-intolerance.types"
import { Condition } from "./condition"
import { DiagnosticReport } from "./diagnostic-report"
import { DocumentReference } from "./document-reference"
import { Observation } from "./observation.types"
import { Patient } from "./patient.types"
import { QuestionnaireResponse } from "./questionnaire-response"

export type FamilyMemberHistory = DomainResource & {
    resourceType: "FamilyMemberHistory",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    status: "partial" | "completed" | "entered-in-error" | "health-unknown",
    dataAbsentReason?: CodeableConcept,
    patient: Reference<Patient>,
    date?: dateTime,
    name?: string,
    relationship: CodeableConcept,
    sex?: CodeableConcept,
    bornPeriod?: Period,
    bornDate?: date,
    bornString?: string,
    ageAge?: Age,
    ageRange?: Range,
    ageString?: string,
    estimatedAge?: boolean,
    deceasedBoolean?: boolean,
    deceasedAge?: Age,
    deceasedRange?: Range,
    deceasedDate?: date,
    deceasedString?: string,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | AllergyIntolerance | QuestionnaireResponse | DiagnosticReport | DocumentReference>[],
    note?: Annotation[],
    condition?: (BackboneElement & {
        code: CodeableConcept,
        outcome?: CodeableConcept,
        contributedToDeath?: boolean,
        onsetAge?: Age,
        onsetRange?: Range,
        onsetPeriod?: Period,
        onsetString?: string,
        note?: Annotation[]
    })[]
}