import { Identifier, Reference, CodeableConcept, dateTime, Period, BackboneElement, decimal, Annotation, Range } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type RiskAssessment = DomainResource & {
    resourceType: "RiskAssessment",
    identifier?: Identifier[],
    basedOn?: Reference,
    parent?: Reference,
    status: "registered" | "preliminary" | "final" | "amended" | "corrected" | "cancelled" | "entered-in-error" | "unknown",
    method?: CodeableConcept,
    code?: CodeableConcept,
    subject: Reference,
    encounter?: Reference,
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    condition?: Reference,
    performer?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    basis?: Reference[],
    prediction?: (BackboneElement & {
        outcome?: CodeableConcept,
        probabilityDecimal?: decimal,
        probabilityRange?: Range,
        qualitativeRisk?: CodeableConcept,
        relativeRisk?: decimal,
        whenPeriod?: Period,
        whenRange?: Range,
        rationale?: string,
    })[],
    mitigation?: string,
    note?: Annotation[]
};