import { BackboneElement } from "../backboneElement.types";
import { CodeableConcept, CodeableReference, Identifier, Ratio, Reference, SimpleQuantity, dateTime, markdown } from "../basic-types";
import { DomainResource } from "./resource.types";

// https://build.fhir.org/substance.html
export type Substance = DomainResource & {
    resourceType: "Substance";
    identifier?: Identifier;
    instance: boolean; // required
    status?: "active" | "inactive" | "entered-in-error";
    category?: CodeableConcept[];
    code: CodeableReference; // required; CodeableReference(SubstanceDefinition)
    description?: markdown;
    expiry?: dateTime;
    quantity?: SimpleQuantity;
    ingredient?: (BackboneElement & {
        quantity?: Ratio;
        // One of the following:
        substanceCodeableConcept?: CodeableConcept;
        substanceReference?: Reference; // Reference(Substance)
    })[]
}