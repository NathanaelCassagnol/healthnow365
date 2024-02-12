import { Identifier, Coding, Reference, dateTime, unsignedInt, CodeableConcept, Annotation, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type ImagingStudy = DomainResource & {
    resourceType: "ImagingStudy",
    identifier?: Identifier[],
    status: "registered" | "available" | "cancelled" | "entered-in-error" | "unknown",
    modality: Coding[],
    subject: Reference,
    encounter?: Reference,
    started?: dateTime,
    basedOn?: Reference[],
    referrer?: Reference,
    interpreter?: Reference[],
    endpoint?: Reference[],
    numberOfSeries?: unsignedInt,
    numberOfInstances?: unsignedInt,
    procedureReference?: Reference,
    procedureCode?: CodeableConcept[],
    location?: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    note?: Annotation[],
    description?: string,
    series?: Series[],
}

type Series = BackboneElement & {
    uid: string,
    number?: unsignedInt,
    modality: Coding,
    description?: string,
    numberOfInstances?: unsignedInt,
    endpoint?: Reference[],
    bodySite?: Coding,
    laterality?: Coding,
    specimen?: Reference[],
    started?: dateTime,
    performer?: Reference,
    instance?: Instance[],
}

type Instance = BackboneElement & {
    uid: string,
    sopClass: Coding,
    number?: unsignedInt,
    title?: string,
}