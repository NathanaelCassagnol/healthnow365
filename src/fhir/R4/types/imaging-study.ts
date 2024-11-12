import { Identifier, Coding, Reference, dateTime, unsignedInt, CodeableConcept, Annotation, BackboneElement, id } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type ImagingStudy = DomainResource & {
    resourceType: "ImagingStudy",
    identifier?: Identifier[],
    status: "registered" | "available" | "cancelled" | "entered-in-error" | "unknown",
    modality?: Coding[],
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
    series?: (BackboneElement & {
        uid: id,
        number?: unsignedInt,
        modality: Coding,
        description?: string,
        numberOfInstances?: unsignedInt,
        endpoint?: Reference[],
        bodySite?: Coding,
        laterality?: Coding,
        specimen?: Reference[],
        started?: dateTime,
        performer?: (BackboneElement & {
            function?: CodeableConcept,
            actor: Reference
        })[],
        instance?: (BackboneElement & {
            uid: id,
            sopClass: Coding,
            number?: unsignedInt,
            title?: string,
        })[],
    })[],
}
