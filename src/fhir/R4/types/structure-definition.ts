import { BackboneElement, CodeableConcept, Coding, ContactDetail, Identifier, UsageContext, canonical, code, dateTime, id, markdown, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";

// https://hl7.org/fhir/R4/structuredefinition.html
export type StructureDefinition = DomainResource & {
    url: uri; // required
    identifier?: Identifier[];
    version?: string;
    name: string; // required
    title?: string;
    status: "draft" | "active" | "retired" | "unknown"; // required
    experimental?: boolean;
    date?: dateTime;
    publisher?: string;
    contact?: ContactDetail[];
    description?: markdown;
    useContext?: UsageContext[];
    juristiction?: CodeableConcept[];
    purpose?: markdown;
    copyright?: markdown;
    keyword?: Coding[];
    fhirVersion?: code;
    mapping?: (BackboneElement & {
        identity: id; // required
        uri?: uri;
        name?: string;
        comment?: string;
    })[];
    kind: "primitive-type" | "complex-type" | "resource" | "logical"; // required
    abstract: boolean; // required
    context?: (BackboneElement & {
        type: "fhirpath" | "element" | "extension"; // required;
        expression: string; // required
    })[];
    contextInvariant?: string;
    type: uri; // required
    baseDefinition?: canonical; // canonical(StructureDefinition)
    derivation?: "specialization" | "constraint";
    snapshot?: BackboneElement & {
        element: ElementDefinition[]; // required
    };
    differential?: BackboneElement & {
        element: ElementDefinition[]; // required
    };
}