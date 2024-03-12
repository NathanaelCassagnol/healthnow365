import { uri, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, code, canonical, BackboneElement, integer } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type GraphDefinition = DomainResource & {
    resourceType: "GraphDefinition",
    url?: uri,
    version?: string,
    name: string,
    status: "draft" | "active" | "retired" | "unknown",
    experimental?: boolean,
    date?: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    description?: markdown,
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    purpose?: markdown,
    start: code, // https://hl7.org/fhir/R4/valueset-resource-types.html
    profile?: canonical,
    link?: GraphDefinitionLink[],
};

type GraphDefinitionLink = BackboneElement & {
    path?: string,
    sliceName?: string,
    min?: integer,
    max?: string,
    description?: string,
    target?: (BackboneElement & {
        type: code, // https://hl7.org/fhir/R4/valueset-resource-types.html
        params?: string,
        profile?: canonical,
        compartment?: (BackboneElement & {
            use: "condition" | "requirement",
            code: "Patient" | "Encounter" | "RelatedPerson" | "Practitioner" | "Device",
            rule: "identical" | "matching" | "different" | "custom",
            expression?: string,
            description?: string,
        })[],
        link?: GraphDefinitionLink[],
    })[],
}