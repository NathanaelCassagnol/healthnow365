import { Address, BackboneElement, CodeableConcept, ContactPoint, HumanName, Identifier, Reference } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Endpoint } from "./endpoint";

// https://build.fhir.org/organization.html
export type Organization = DomainResource & {
    resourceType: "Organization";
    identifier?: Identifier[];
    active?: boolean;
    type?: CodeableConcept[];
    name?: string;
    alias?: string[];
    telecom?: ContactPoint[];
    address?: Address[];
    partOf?: Reference<Organization>;
    contact?: (BackboneElement & {
        purpose?: CodeableConcept;
        name?: HumanName;
        telecom?: ContactPoint[];
        address?: Address;
    })[],
    endpoint?: Reference<Endpoint>[];
}