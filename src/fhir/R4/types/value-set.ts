import { uri, Identifier, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, BackboneElement, date, code, Coding, canonical, integer, decimal } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type ValueSet = DomainResource & {
    resourceType: "ValueSet",
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
    immutable?: boolean,
    purpose?: markdown,
    copyright?: markdown,
    compose?: BackboneElement & {
        lockedDate?: date,
        inactive?: boolean,
        include: ComposeIncludeExclude[],
        exclude?: ComposeIncludeExclude[],
    },
    expansion?: BackboneElement & {
        identifier?: uri,
        timestamp: dateTime,
        total?: integer,
        offset?: integer,
        parameter?: (BackboneElement & {
            name: string,
            valueString?: string,
            valueBoolean?: boolean,
            valueInteger?: integer,
            valueDecimal?: decimal,
            valueUri?: uri,
            valueCode?: code,
            valueDateTime?: dateTime,
        })[],
        contains?: ExpansionContains[],
    },
};

type ExpansionContains = BackboneElement & {
    system?: uri,
    abstract?: boolean,
    inactive?: boolean,
    version?: string,
    code?: code,
    display?: string,
    designation?: (BackboneElement & {
        language?: code,
        use?: Coding,
        value: string,
    })[],
    contains?: ExpansionContains[],
}

type ComposeIncludeExclude = BackboneElement & {
    system?: uri,
    version?: string,
    concept?: (BackboneElement & {
        code: code,
        display?: string,
        designation?: (BackboneElement & {
            language?: code,
            use?: Coding,
            value: string,
        })[],
    })[],
    filter?: (BackboneElement & {
        property: code,
        op: "=" | "is-a" | "descendent-of" | "is-not-a" | "regex" | "in" | "not-in" | "generalizes" | "exists",
        value: string,
    })[],
    valueSet?: canonical[],
}