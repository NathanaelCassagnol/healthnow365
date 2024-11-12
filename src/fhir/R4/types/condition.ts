import { Identifier, Range, CodeableConcept, Reference, dateTime, Age, Period, BackboneElement, Annotation } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Condition = DomainResource & {
    resourceType: "Condition",
    identifier?: Identifier[],
    clinicalStatus?: CodeableConcept,
    verificationStatus?: CodeableConcept,
    category?: CodeableConcept[],
    severity?: CodeableConcept,
    code?: CodeableConcept,
    bodySite?: CodeableConcept[],
    subject: Reference,
    encounter?: Reference,
    onsetDateTime?: dateTime,
    onsetAge?: Age,
    onsetPeriod?: Period,
    onsetRange?: Range,
    onsetString?: string,
    abatementDateTime?: dateTime,
    abatementAge?: Age,
    abatementPeriod?: Period,
    abatementRange?: Range,
    abatementString?: string,
    recordedDate?: dateTime,
    recorder?: Reference,
    asserter?: Reference,
    stage?: (BackboneElement & {
        summary?: CodeableConcept,
        assessment?: Reference[],
        type?: CodeableConcept
    })[],
    evidence?: (BackboneElement & {
        code?: CodeableConcept[],
        detail?: Reference[],
    })[],
    note?: Annotation[],
}