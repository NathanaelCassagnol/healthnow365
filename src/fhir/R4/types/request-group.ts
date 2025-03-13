import { Identifier, Reference, CodeableConcept, dateTime, Annotation, BackboneElement, Duration, Age, Period, Timing, canonical, uri, RelatedArtifact, Expression, id } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Condition } from "aws-cdk-lib/aws-iam";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { Observation } from "./observation.types";
import { RelatedPerson } from "./related-person";
import { Device } from "./device";

export type RequestGroup = DomainResource & {
    resourceType: "RequestGroup",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference<FHIRResource>[],
    replaces?: Reference<FHIRResource>[],
    groupIdentifier?: Identifier,
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    priority?: "routine" | "urgent" | "asap" | "stat",
    code?: CodeableConcept,
    subject?: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    authoredOn?: dateTime,
    author?: Reference<Device | Practitioner | PractitionerRole>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
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
    participant?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Device>[],
    type?: CodeableConcept,
    groupingBehavior?: "visual-group" | "logical-group" | "sentence-group",
    selectionBehavior?: "any" | "all" | "all-or-none" | "exactly-one" | "at-most-one" | "one-or-more",
    requiredBehavior?: "must" | "could" | "must-unless-documented",
    precheckBehavior?: "yes" | "no",
    cardinalityBehavior?: "single" | "multiple",
    resource?: Reference<FHIRResource>,
    action?: RequestGroupAction[],
}