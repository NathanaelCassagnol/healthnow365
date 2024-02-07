import { BackboneElement, CodeableConcept, Coding, ContactDetail, Reference, UsageContext, canonical, code, dateTime, markdown, unsignedInt, uri, url } from "./_basic-types";
import { DomainResource } from "./_resource.types";

// https://hl7.org/fhir/R4/capabilitystatement.html
export type CapabilityStatement = DomainResource & {
    resourceType: "CapabilityStatement",
    url?: uri;
    version?: string;
    name?: string;
    title?: string;
    status: "draft" | "active" | "retired" | "unknown"; // required
    experimental?: boolean;
    date: dateTime; // required
    publisher?: string;
    contact?: ContactDetail[];
    description?: markdown;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    purpose?: markdown;
    copyright?: markdown;
    kind: "instance" | "capability" | "requirements";
    instantiates?: canonical[]; // canonical(CapabilityStatement)
    imports?: canonical[]; // canonical(CapabilityStatement)
    software?: BackboneElement & {
        name: string; // required
        version?: string;
        releaseDate?: dateTime;
    };
    implementation?: BackboneElement & {
        description: string; // required
        url?: url;
        custodian?: Reference; // Reference(Organization)
    }
    fhirVersion: code; // required
    format: code[]; // required
    patchFormat?: code[];
    implementationGuide?: canonical[]; // canonical(ImplementationGuide)
    rest?: (BackboneElement & {
        mode: "client" | "server"; // required
        documentation?: markdown;
        security?: BackboneElement & {
            cors?: boolean;
            service?: CodeableConcept[];
            description?: markdown;
        }
        resource?: (BackboneElement & {
            type: code; // required
            profile?: canonical; // canonical(StructureDefinition)
            supportedProfile?: canonical[]; // canonical(StructureDefinition)
            documentation?: markdown;
            interaction?: (BackboneElement & {
                code: "read" | "vread" | "update" | "patch" | "delete" | "history-instance" | "history-type" | "create" | "search-type"; // required
                documentation?: markdown;
            })[];
            versioning?: "no-version" | "versioned" | "versioned-update";
            readHistory?: boolean;
            updateCreate?: boolean;
            conditionalCreate?: boolean;
            conditionalRead?: "not-supported" | "modified-since" | "not-match" | "full-support";
            conditionalUpdate?: boolean;
            conditionalDelete?: "not-supported" | "single" | "multiple";
            referencePolicy?: ("literal" | "logical" | "resolves" | "enforced" | "local")[];
            searchInclude?: string[];
            searchRevInclude?: string[];
            searchParam?: searchParamType[];
            operation?: operationType[];
        })[];
        interaction?: (BackboneElement & {
            code: "transaction" | "batch" | "search-system" | "history-system"; // required
            documentation?: markdown;
        })[];
        searchParam?: searchParamType[];
        operation?: operationType[];
        compartment?: canonical[]; // canonical(CompartmentDefinition)
    })[];
    messaging?: (BackboneElement & {
        endpoint?: (BackboneElement & {
            protocol: Coding; // required
            address: url; // required
        })[];
        reliableCache?: unsignedInt;
        documentation?: markdown;
        supportedMessage?: (BackboneElement & {
            mode: "sender" | "receiver"; // required
            definition: canonical; // required; canonical(MessageDefinition)
        })[];
    })[];
    document?: (BackboneElement & {
        mode: "producer" | "consumer"; // required
        documentation?: markdown;
        profile: canonical; // required; canonical(StructureDefinition)
    })[];
}

type searchParamType = BackboneElement & {
    name: string; // required
    definition?: canonical; // canonical(SearchParameter)
    type: "number" | "date" | "string" | "token" | "reference" | "composite" | "quantity" | "uri" | "special"; // required
    documentation?: markdown;
};
type operationType = BackboneElement & {
    name: string; // required
    definition: canonical; // required; canonical(OperationDefinition)
    documentation?: markdown;
};