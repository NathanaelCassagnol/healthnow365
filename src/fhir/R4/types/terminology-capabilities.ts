import { uri, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, BackboneElement, code, url, canonical } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type TerminologyCapabilities = DomainResource & {
    resourceType: "TerminologyCapabilities",
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
    software?: BackboneElement & {
        name: string,
        version?: string,
    },
    implementation?: BackboneElement & {
        description: string,
        url?: url,
    }
    lockedDate?: boolean,
    codeSystem?: (BackboneElement & {
        uri: canonical,
        version?: (BackboneElement & {
            code?: string,
            isDefault?: boolean,
            compositional?: boolean,
            language?: code[],
            filter?: (BackboneElement & {
                code: code,
                op: code[],
            })[],
            property?: code[],
        })[],
        subsumption?: boolean,
    })[],
    expansion?: (BackboneElement & {
        hierarchical?: boolean,
        paging?: boolean,
        incomplete?: boolean,
        parameter?: (BackboneElement & {
            name: code,
            documentation?: string,
        })[],
        textFilter?: markdown,
    }),
    codeSearch?: "explicit" | "all",
    validateCode?: (BackboneElement & {
        translations: boolean,
    }),
    translation?: (BackboneElement & {
        needsMap: boolean,
    }),
    closure?: (BackboneElement & {
        translation?: boolean,
    }),
};