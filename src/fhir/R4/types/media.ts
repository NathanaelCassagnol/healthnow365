import { Identifier, Reference, CodeableConcept, dateTime, Period, instant, positiveInt, decimal, Attachment, Annotation } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Media = DomainResource & {
    resourceType: "Media",
    identifier?: Identifier[],
    basedOn?: Reference[],
    partOf?: Reference[],
    status: "preparation" | "in-progress" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error" | "unknown",
    type?: CodeableConcept,
    modality?: CodeableConcept,
    view?: CodeableConcept,
    subject?: Reference,
    encounter?: Reference,
    createdDateTime?: dateTime,
    createdPeriod?: Period,
    issued?: instant,
    operator?: Reference,
    reasonCode?: CodeableConcept[],
    bodySite?: CodeableConcept,
    deviceName?: string,
    device?: Reference,
    height?: positiveInt,
    width?: positiveInt,
    frames?: positiveInt,
    duration?: decimal,
    content: Attachment,
    note?: Annotation[]
}