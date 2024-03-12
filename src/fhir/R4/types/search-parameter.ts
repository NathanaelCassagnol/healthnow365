import { uri, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, code, BackboneElement, canonical } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type SearchParameter = DomainResource & {
    resourceType: "SearchParameter",
    url: uri,
    version?: string,
    name: string,
    derivedFrom?: canonical,
    status: "draft" | "active" | "retired" | "unknown",
    experimental?: boolean,
    date?: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    description: markdown,
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    purpose?: markdown,
    code: code,
    base: code[],
    type: "number" | "date" | "string" | "token" | "reference" | "composite" | "quantity" | "uri" | "special",
    expression?: string,
    xpath?: string,
    xpathUsage?: "normal" | "phonetic" | "nearby" | "distance" | "other",
    target?: code[],
    multipleOr?: boolean,
    multipleAnd?: boolean,
    comparator?: ("eq" | "ne" | "gt" | "lt" | "ge" | "le" | "sa" | "eb" | "ap")[],
    modifier?: ("missing" | "exact" | "contains" | "not" | "text" | "in" | "not-in" | "below" | "above" | "type" | "identifier" | "ofType")[],
    chain?: string[],
    component?: (BackboneElement & {
        definition: canonical,
        expression: string,
    })[],
};