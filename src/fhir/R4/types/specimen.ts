import { Identifier, CodeableConcept, Reference, dateTime, BackboneElement, Period, Quantity, Annotation, Duration, SimpleQuantity } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Specimen = DomainResource & {
    resourceType: "Specimen",
    identifier?: Identifier[],
    accessionIdentifier?: Identifier,
    status?: "available" | "unavailable" | "unsatisfactory" | "entered-in-error",
    type?: CodeableConcept,
    subject?: Reference,
    receivedTime?: dateTime,
    parent?: Reference[],
    request?: Reference[],
    collection?: BackboneElement & {
        collector?: Reference,
        collectedDateTime?: dateTime,
        collectedPeriod?: Period,
        duration?: Duration,
        quantity?: Quantity,
        method?: CodeableConcept,
        bodySite?: CodeableConcept,
        fastingStatusCodeableConcept?: CodeableConcept,
        fastingStatusDuration?: Duration,
    },
    processing?: (BackboneElement & {
        description?: string,
        procedure?: CodeableConcept,
        additive?: Reference[],
        timeDateTime?: dateTime,
        timePeriod?: Period
    })[],
    container?: (BackboneElement & {
        identifier?: Identifier[],
        description?: string,
        type?: CodeableConcept,
        capacity?: SimpleQuantity,
        specimenQuantity?: SimpleQuantity,
        additiveCodeableConcept?: CodeableConcept,
        additiveReference?: Reference
    })[],
    condition?: CodeableConcept[],
    note?: Annotation[]
}