import { Device } from "aws-cdk-lib/aws-ecs"
import { Group } from "aws-cdk-lib/aws-iam"
import { Identifier, CodeableConcept, Reference, dateTime, BackboneElement, Period, Quantity, Annotation, Duration, SimpleQuantity } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Patient } from "./patient.types"
import { ServiceRequest } from "./service-request"
import { Substance } from "./substance.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"

export type Specimen = DomainResource & {
    resourceType: "Specimen",
    identifier?: Identifier[],
    accessionIdentifier?: Identifier,
    status?: "available" | "unavailable" | "unsatisfactory" | "entered-in-error",
    type?: CodeableConcept,
    subject?: Reference<Patient | Group | Device | Substance | Location>,
    receivedTime?: dateTime,
    parent?: Reference<Specimen>[],
    request?: Reference<ServiceRequest>[],
    collection?: BackboneElement & {
        collector?: Reference<Practitioner | PractitionerRole>,
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
        additive?: Reference<Substance>[],
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
        additiveReference?: Reference<Substance>
    })[],
    condition?: CodeableConcept[],
    note?: Annotation[]
}