import { Identifier, dateTime, Reference, BackboneElement, CodeableConcept, decimal, integer, Annotation, SimpleQuantity } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Encounter } from "./encounter";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";

export type VisionPrescription = DomainResource & {
    resourceType: "VisionPrescription",
    identifier?: Identifier[],
    status: "active" | "cancelled" | "draft" | "entered-in-error",
    created: dateTime,
    patient: Reference<Patient>,
    encounter?: Reference<Encounter>,
    dateWritten: dateTime,
    prescriber: Reference<Practitioner | PractitionerRole>,
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