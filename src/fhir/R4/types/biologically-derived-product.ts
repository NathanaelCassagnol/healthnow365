import { Identifier, CodeableConcept, Reference, integer, BackboneElement, dateTime, Period, decimal } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { ServiceRequest } from "./service-request"
import { Substance } from "./substance.types"

export type BiologicallyDerivedProduct = DomainResource & {
    resourceType: "BiologicallyDerivedProduct",
    identifier?: Identifier[],
    productCategory?: "organ" | "tissue" | "fluid" | "cells" | "biologicalAgent",
    productCode?: CodeableConcept,
    status?: "available" | "unavailable",
    request?: Reference<ServiceRequest>[],
    quantity?: integer,
    parent?: Reference<BiologicallyDerivedProduct>[],
    collection?: BackboneElement & {
        collector?: Reference<Practitioner | PractitionerRole>,
        source?: Reference<Patient | Organization>,
        collectedDateTime?: dateTime,
        collectedPeriod?: Period
    },
    processing?: (BackboneElement & {
        description?: string,
        procedure?: CodeableConcept,
        additive?: Reference<Substance>,
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