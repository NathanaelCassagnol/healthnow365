import { Identifier, CodeableConcept, Reference, integer, BackboneElement, dateTime, Period, decimal } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type BiologicallyDerivedProduct = DomainResource & {
    resourceType: "BiologicallyDerivedProduct",
    identifier?: Identifier[],
    productCategory?: "organ" | "tissue" | "fluid" | "cells" | "biologicalAgent",
    productCode?: CodeableConcept,
    status?: "available" | "unavailable",
    request?: Reference[],
    quantity?: integer,
    parent?: Reference[],
    collection?: BackboneElement & {
        collector?: Reference,
        source?: Reference,
        collectedDateTime?: dateTime,
        collectedPeriod?: Period
    },
    processing?: (BackboneElement & {
        description?: string,
        procedure?: CodeableConcept,
        additive?: Reference,
        timeDateTime?: dateTime,
        timePeriod?: Period
    })[],
    manipulation?: BackboneElement & {
        description?: string,
        timeDateTime?: dateTime,
        timePeriod?: Period
    },
    storage?: (BackboneElement & {
        description?: string,
        temperature?: decimal,
        scale?: "celsius" | "fahrenheit" | "kelvin"
        duration?: Period,
    })[]
}