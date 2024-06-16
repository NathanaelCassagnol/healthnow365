import { Identifier, canonical, uri, CodeableConcept, Reference, dateTime, Period, date, Age, Annotation, BackboneElement, Range } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type FamilyMemberHistory = DomainResource & {
    resourceType: "FamilyMemberHistory",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    status: "partial" | "completed" | "entered-in-error" | "health-unknown",
    dataAbsentReason?: CodeableConcept,
    patient: Reference,
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
    reasonReference?: Reference[],
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