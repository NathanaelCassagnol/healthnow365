import { Identifier, CodeableConcept, Reference, dateTime, Annotation, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type List = DomainResource & {
    resourceType: "List",
    identifier?: Identifier[],
    status: "current" | "retired" | "entered-in-error",
    mode: "working" | "snapshot" | "changes",
    title?: string,
    code?: CodeableConcept,
    subject?: Reference,
    encounter?: Reference,
    date?: dateTime,
    source?: Reference,
    orderedBy?: CodeableConcept,
    note?: Annotation[],
    entry?: (BackboneElement & {
        flag?: CodeableConcept,
        deleted?: boolean,
        date?: dateTime,
        item: Reference
    })[],
    emptyReason?: CodeableConcept
}