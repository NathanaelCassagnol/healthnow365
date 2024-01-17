import { BackboneElement } from "../backboneElement.types";
import { CodeableConcept, ExtendedContactDetail, Identifier, Period, Reference, markdown } from "../basic-types";
import { DomainResource } from "./resource.types";

// https://build.fhir.org/organization.html
export type Organization = DomainResource & {
    resourceType: "Organization";
    identifier?: Identifier[];
    active?: boolean;
    type?: CodeableConcept[];
    name?: string;
    alias?: string[];
    description?: markdown;
    contact?: ExtendedContactDetail[];
    partOf?: Reference; // Reference(Organization)
    endpoint?: Reference[]; // Reference(Endpoint)
    qualification?: (BackboneElement & {
        identifier?: Identifier[];
        code: CodeableConcept;
        status?: CodeableConcept;
        period?: Period;
        issuer?: Reference; // Reference(Organization)
    })[];
}