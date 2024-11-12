import { Identifier, Reference, CodeableConcept, dateTime, Annotation, BackboneElement, Duration, Age, Period, Timing, canonical, uri, RelatedArtifact, Expression, id } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type RequestGroup = DomainResource & {
    resourceType: "RequestGroup",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference[],
    replaces?: Reference[],
    groupIdentifier?: Identifier,
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    priority?: "routine" | "urgent" | "asap" | "stat",
    code?: CodeableConcept,
    subject?: Reference,
    encounter?: Reference,
    authoredOn?: dateTime,
    author?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    note?: Annotation[],
    action?: RequestGroupAction[]
};

type RequestGroupAction = BackboneElement & {
    prefix?: string,
    title?: string,
    description?: string,
    textEquivalent?: string,
    priority?: "routine" | "urgent" | "asap" | "stat",
    code?: CodeableConcept[],
    documentation?: RelatedArtifact[],
    condition?: (BackboneElement & {
        kind: "applicability" | "start" | "stop",
        expression?: Expression,
    })[],
    relatedAction?: (BackboneElement & {
        actionId: id,
        relationship: "before-start" | "before" | "before-end" | "concurrent-with-start" | "concurrent" | "concurrent-with-end" | "after-start" | "after" | "after-end",
        offsetDuration?: Duration,
        offsetRange?: Range,
    })[],
    timingDateTime?: dateTime,
    timingAge?: Age,
    timingPeriod?: Period,
    timingDuration?: Duration,
    timingRange?: Range,
    timingTiming?: Timing,
    participant?: Reference[],
    type?: CodeableConcept,
    groupingBehavior?: "visual-group" | "logical-group" | "sentence-group",
    selectionBehavior?: "any" | "all" | "all-or-none" | "exactly-one" | "at-most-one" | "one-or-more",
    requiredBehavior?: "must" | "could" | "must-unless-documented",
    precheckBehavior?: "yes" | "no",
    cardinalityBehavior?: "single" | "multiple",
    resource?: Reference,
    action?: RequestGroupAction[],
}