import { uri, Identifier, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, canonical, unsignedInt, BackboneElement, code, Coding, integer, decimal } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type CodeSystem = DomainResource & {
    resourceType: "CodeSystem",
    url?: uri,
    identifier?: Identifier[],
    version?: string,
    name?: string,
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
    caseSensitive?: boolean,
    valueSet?: canonical,
    hierarchyMeaning?: "grouped-by" | "is-a" | "part-of" | "classified-with",
    compositional?: boolean,
    versionNeeded?: boolean,
    content: "not-present" | "example" | "fragment" | "complete" | "supplement",
    supplements?: canonical,
    count?: unsignedInt,
    filter?: (BackboneElement & {
        code: code,
        description?: string,
        operator: ("=" | "is-a" | "descendent-of" | "is-not-a" | "regex" | "in" | "not-in" | "generalizes" | "exists")[],
        value: string,
    })[],
    property?: (BackboneElement & {
        code: code,
        uri?: uri,
        description?: string,
        type: "code" | "Coding" | "string" | "integer" | "boolean" | "dateTime" | "decimal",
    })[],
    concept?: CodeSystemConcept[],
};

type CodeSystemConcept = BackboneElement & {
    code: code,
    display?: string,
    definition?: string,
    designation?: (BackboneElement & {
        language?: code,
        use?: Coding,
        value: string,
    })[],
    property?: (BackboneElement & {
        code: code,
        valueCode?: code,
        valueCoding?: Coding,
        valueString?: string,
        valueInteger?: integer,
        valueBoolean?: boolean,
        valueDateTime?: dateTime,
        valueDecimal?: decimal,
    })[],
    concept?: CodeSystemConcept[],
}