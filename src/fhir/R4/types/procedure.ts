import { Age, Range, Annotation, BackboneElement, CodeableConcept, Identifier, Period, Reference, canonical, dateTime, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Procedure = DomainResource & {
    resourceType: "Procedure",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference[],
    partOf?: Reference[],
    status: "preparation" | "in-progress" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept,
    category?: CodeableConcept,
    code?: CodeableConcept,
    subject: Reference,
    encounter?: Reference,
    performedDateTime?: dateTime,
    performedPeriod?: Period,
    performedString?: string,
    performedAge?: Age,
    performedRange?: Range,
    recorder?: Reference,
    asserter?: Reference,
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference,
        onBehalfOf?: Reference
    })[],
    location?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    bodySite?: CodeableConcept[],
    outcome?: CodeableConcept,
    report?: Reference[],
    complication?: CodeableConcept[],
    complicationDetail?: Reference[],
    followUp?: CodeableConcept[],
    note?: Annotation[],
    focalDevice?: (BackboneElement & {
        action?: CodeableConcept,
        manipulated: Reference
    })[],
    usedReference?: Reference[],
    usedCode?: CodeableConcept[]
}