import { uri, Identifier, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, Coding, BackboneElement, id, canonical, code } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { ElementDefinition } from "./element-definition";

export type StructureDefinition = DomainResource & {
    resourceType: "StructureDefinition",
    url: uri,
    identifier?: Identifier[],
    version?: string,
    name: string,
    title?: string,
    status: "draft" | "active" | "retired" | "unknown",
    experimental?: boolean,
    date?: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    description?: markdown,
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    purpose?: markdown,
    copyright?: markdown,
    keyword?: Coding[],
    fhirVersion?: code,
    mapping?: (BackboneElement & {
        identity: id,
        uri?: uri,
        name?: string,
        comment?: string,
    })[],
    kind: "primitive-type" | "complex-type" | "resource" | "logical",
    abstract: boolean,
    context?: (BackboneElement & {
        type: "fhirpath" | "element" | "extension",
        expression: string,
    })[],
    contextInvariant?: string[],
    type: uri,
    baseDefinition?: canonical,
    derivation?: "specialization" | "constraint",
    snapshot?: (BackboneElement & {
        element: ElementDefinition[],
    }),
    differential?: (BackboneElement & {
        element: ElementDefinition[],
    }),
};