import { BackboneElement, CodeableConcept, Coding, ContactDetail, Reference, UsageContext, base64Binary, canonical, code, dateTime, markdown, unsignedInt, uri, url } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type CapabilityStatement = DomainResource & {
    resourceType: "CapabilityStatement",
    url?: uri,
    version?: string,
    name?: string,
    title?: string,
    status: "draft" | "active" | "retired" | "unknown",
    experimental?: boolean,
    date: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    description?: markdown,
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    purpose?: markdown,
    copyright?: markdown,
    kind: "instance" | "capability" | "requirements",
    instantiates?: canonical[],
    imports?: canonical[],
    software?: (BackboneElement & {
        name: string,
        version?: string,
        releaseDate?: dateTime,
    }),
    implementation?: (BackboneElement & {
        description: string,
        url?: url,
        custodian?: Reference,
    }),
    fhirVersion: code,
    format: code[],
    patchFormat?: code[],
    implementationGuide?: canonical[],
    rest?: (BackboneElement & {
        mode: "client" | "server",
        documentation?: markdown,
        security?: (BackboneElement & {
            cors?: boolean,
            service?: CodeableConcept[],
            description?: markdown,
        }),
        resource?: (BackboneElement & {
            type: code,
            profile?: canonical,
            supportedProfile?: canonical[],
            documentation?: markdown,
            interaction?: (BackboneElement & {
                code: "read" | "vread" | "update" | "patch" | "delete" | "history-instance" | "history-type" | "create" | "search-type",
                documentation?: markdown,
            })[],
            versioning?: "no-version" | "versioned" | "versioned-update",
            readHistory?: boolean,
            updateCreate?: boolean,
            conditionalCreate?: boolean,
            conditionalRead?: "not-supported" | "modified-since" | "not-match" | "full-support",
            conditionalUpdate?: boolean,
            conditionalDelete?: "not-supported" | "single" | "multiple",
            referencePolicy?: ("literal" | "logical" | "resolves" | "enforced" | "local")[],
            searchInclude?: string[],
            searchRevInclude?: string[],
            searchParam?: CapabilityStatementSearchParam[],
            operation?: CapabilityStatementOperation[],
        })[],
        interaction?: (BackboneElement & {
            code: "transaction" | "batch" | "search-system" | "history-system",
            documentation?: markdown,
        })[],
        searchParam?: CapabilityStatementSearchParam[],
        operation?: CapabilityStatementOperation[],
        compartment?: canonical[],
    })[],
    messaging?: (BackboneElement & {
        endpoint?: (BackboneElement & {
            protocol: Coding,
            address: url,
        })[],
        reliableCache?: unsignedInt,
        documentation?: markdown,
        supportedMessage?: (BackboneElement & {
            mode: "sender" | "receiver",
            definition: canonical,
        })[],
    })[],
    document?: (BackboneElement & {
        mode: "producer" | "consumer",
        documentation?: markdown,
        profile: canonical,
    })[],
};

type CapabilityStatementSearchParam = BackboneElement & {
    name: string,
    definition?: canonical,
    type: "number" | "date" | "string" | "token" | "reference" | "composite" | "quantity" | "uri" | "special",
    documentation?: markdown,
}

type CapabilityStatementOperation = BackboneElement & {
    name: string,
    definition: canonical,
    documentation?: markdown,
}