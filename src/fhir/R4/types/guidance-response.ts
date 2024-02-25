import { Annotation, CodeableConcept, DataRequirement, Identifier, Reference, canonical, dateTime, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type GuidanceResponse = DomainResource & {
    resourceType: "GuidanceResponse",
    identifier?: Identifier[],
    requestIdentifier?: Identifier,
    moduleUri?: uri,
    moduleCanonical?: canonical,
    moduleCodeableConcept?: CodeableConcept,
    status: "success" | "data-requested" | "data-required" | "in-progress" | "failure" | "entered-in-error",
    subject?: Reference,
    encounter?: Reference,
    occurrenceDateTime?: dateTime,
    performer?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    note?: Annotation[],
    evaluationMessage?: Reference[],
    outputParameters?: Reference,
    result?: Reference,
    dataRequirement?: DataRequirement[]
};