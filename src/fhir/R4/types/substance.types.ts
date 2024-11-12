import { BackboneElement, CodeableConcept, Identifier, Ratio, Reference, SimpleQuantity, dateTime } from "./_basic-types";
import { DomainResource } from "./_resource.types";

// https://build.fhir.org/substance.html
export type Substance = DomainResource & {
    resourceType: "Substance";
    identifier?: Identifier[];
    status?: "active" | "inactive" | "entered-in-error";
    category?: CodeableConcept[];
    code: CodeableConcept; // required
    description?: string;
    instance?: (BackboneElement & {
        identifier?: Identifier;
        expiry?: dateTime;
        quantity?: SimpleQuantity;
    })[];
    ingredient?: (BackboneElement & {
        quantity?: Ratio;
        // One of the following:
        substanceCodeableConcept?: CodeableConcept;
        substanceReference?: Reference; // Reference(Substance)
    })[];
}