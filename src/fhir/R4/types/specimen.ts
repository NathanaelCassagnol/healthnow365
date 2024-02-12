import { Identifier, CodeableConcept, Reference, dateTime, BackboneElement, Period, Quantity, Annotation } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Specimen = DomainResource & {
    resourceType: "Specimen",
    identifier?: Identifier[],
    accessionIdentifier?: Identifier,
    status: "available" | "unavailable" | "unsatisfactory" | "entered-in-error",
    type?: CodeableConcept,
    subject?: Reference,
    receivedTime?: dateTime,
    parent?: Reference[],
    request?: Reference[],
    collection?: BackboneElement & {
        collector?: Reference,
        collectedDateTime?: dateTime,
        collectedPeriod?: Period,
        quantity?: Quantity,
        method?: CodeableConcept,
        bodySite?: CodeableConcept
    },
    processing?: BackboneElement & {
        description?: string,
        procedure?: CodeableConcept,
        additive?: Reference[],
        timeDateTime?: dateTime,
        timePeriod?: Period
    }[],
    container?: BackboneElement & {
        identifier?: Identifier[],
        description?: string,
        type?: CodeableConcept,
        capacity?: Quantity,
        specimenQuantity?: Quantity,
        additiveCodeableConcept?: CodeableConcept,
        additiveReference?: Reference
    }[],
    condition?: CodeableConcept[],
    note?: Annotation[]
}