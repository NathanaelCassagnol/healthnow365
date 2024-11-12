import { BackboneElement, code, CodeableConcept } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type OperationOutcome = DomainResource & {
    resourceType: "OperationOutcome",
    issue: (BackboneElement & {
        severity: "fatal" | "error" | "warning" | "information",
        code: code, // https://hl7.org/fhir/R4/valueset-issue-type.html
        details?: CodeableConcept,
        diagnostics?: string,
        location?: string[],
        expression?: string[],
    })[],
};