import { uri, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, id, code, BackboneElement, canonical, Reference, url } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type ImplementationGuide = DomainResource & {
    resourceType: "ImplementationGuide",
    url: uri,
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
    copyright?: markdown,
    packageId: id,
    license?: code, // https://hl7.org/fhir/R4/valueset-spdx-license.html
    fhirVersion: code[],
    dependsOn?: (BackboneElement & {
        uri: canonical,
        packageId?: id,
        version?: string,
    })[],
    global?: (BackboneElement & {
        type: code,
        profile: canonical,
    })[],
    definition?: (BackboneElement & {
        grouping?: (BackboneElement & {
            name: string,
            description?: string,
        })[],
        resource: (BackboneElement & {
            reference: Reference,
            fhirVersion?: code[],
            name?: string,
            description?: string,
            exampleBoolean?: boolean,
            exampleCanonical?: canonical,
            groupingId?: id,
        })[],
        page?: ImplementationGuidePage,
        parameter?: (BackboneElement & {
            code: "apply" | "path-resource" | "path-pages" | "path-tx-cache" | "expansion-parameter" | "rule-broken-links" | "generate-xml" | "generate-json" | "generate-turtle" | "html-template",
            value: string,
        })[],
        template?: (BackboneElement & {
            code: code,
            source: string,
            scope?: string,
        })[],
    }),
    manifest?: (BackboneElement & {
        rendering?: url,
        resource: (BackboneElement & {
            reference: Reference,
            exampleBoolean?: boolean,
            exampleCanonical?: canonical,
            relativePath?: url,
        })[],
        page?: (BackboneElement & {
            name: string,
            title?: string,
            anchor?: string[],
        })[],
        image?: string[],
        other?: string[],
    }),
};

type ImplementationGuidePage = BackboneElement & {
    nameUrl?: url,
    nameReference?: Reference,
    title: string,
    generation: "html" | "markdown" | "xml" | "generated",
    page?: ImplementationGuidePage[],
}