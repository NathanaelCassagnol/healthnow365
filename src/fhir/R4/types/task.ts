import { Identifier, canonical, uri, Reference, CodeableConcept, code, Period, dateTime, Annotation, positiveInt, integer, decimal, date, time, Attachment, Quantity, BackboneElement, anyBasicType } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Task = DomainResource & {
    resourceType: "Task",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical,
    instantiatesUri?: uri,
    basedOn?: Reference[],
    groupIdentifier?: Identifier,
    partOf?: Reference[],
    status: "draft" | "requested" | "received" | "accepted" | "rejected" | "ready" | "cancelled" | "in-progress" | "on-hold" | "failed" | "completed" | "entered-in-error",
    statusReason?: CodeableConcept,
    businessStatus?: CodeableConcept,
    intent: "unknown" | "proposal" | "plan" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    priority?: "routine" | "urgent" | "asap" | "stat",
    code?: CodeableConcept,
    description?: string,
    focus?: Reference,
    for?: Reference,
    encounter?: Reference,
    executionPeriod?: Period,
    authoredOn?: dateTime,
    lastModified?: dateTime,
    requester?: Reference,
    performerType?: CodeableConcept[],
    owner?: Reference,
    location?: Reference,
    reasonCode?: CodeableConcept,
    reasonReference?: Reference,
    insurance?: Reference[],
    note?: Annotation[],
    relevantHistory?: Reference[],
    restriction?: BackboneElement & {
        repetitions?: positiveInt,
        period?: Period,
        recipient?: Reference[]
    },
    input?: (BackboneElement & {
        type: CodeableConcept,
        [key: `value${string}`]: anyBasicType
    })[],
    output?: (BackboneElement & {
        type: CodeableConcept,
        [key: `value${string}`]: anyBasicType
    })[]
}
