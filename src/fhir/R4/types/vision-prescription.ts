import { Identifier, dateTime, Reference, BackboneElement, CodeableConcept, decimal, integer, Annotation, SimpleQuantity } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type VisionPrescription = DomainResource & {
    resourceType: "VisionPrescription",
    identifier?: Identifier[],
    status: "active" | "cancelled" | "draft" | "entered-in-error",
    created: dateTime,
    patient: Reference,
    encounter?: Reference,
    dateWritten: dateTime,
    prescriber: Reference,
    lensSpecification: (BackboneElement & {
        product: CodeableConcept,
        eye: "right" | "left",
        sphere?: decimal,
        cylinder?: decimal,
        axis?: integer,
        prism?: (BackboneElement & {
            amount: decimal,
            base: "up" | "down" | "in" | "out",
        })[],
        add?: decimal,
        power?: decimal,
        backCurve?: decimal,
        diameter?: decimal,
        duration?: SimpleQuantity,
        color?: string,
        brand?: string,
        note?: Annotation[],
    })[]
};