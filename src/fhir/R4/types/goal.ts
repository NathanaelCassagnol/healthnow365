import { Identifier, CodeableConcept, Reference, date, BackboneElement, Quantity, integer, Ratio, Duration, Annotation, Range } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Goal = DomainResource & {
    resourceType: "Goal",
    identifier?: Identifier[],
    lifecycleStatus: "proposed" | "planned" | "accepted" | "active" | "on-hold" | "completed" | "cancelled" | "entered-in-error" | "rejected",
    achievementStatus?: CodeableConcept,
    category?: CodeableConcept[],
    priority?: CodeableConcept,
    description: CodeableConcept,
    subject: Reference,
    startDate?: date,
    startCodeableConcept?: CodeableConcept,
    target?: (BackboneElement & {
        measure?: CodeableConcept,
        detailQuantity?: Quantity,
        detailRange?: Range,
        detailCodeableConcept?: CodeableConcept,
        detailString?: string,
        detailBoolean?: boolean,
        detailInteger?: integer,
        detailRatio?: Ratio,
        dueDate?: date,
        dueDuration?: Duration,
    })[],
    statusDate?: date,
    statusReason?: string,
    expressedBy?: Reference,
    addresses?: Reference[],
    note?: Annotation[],
    outcomeCode?: CodeableConcept[],
    outcomeReference?: Reference[]
};