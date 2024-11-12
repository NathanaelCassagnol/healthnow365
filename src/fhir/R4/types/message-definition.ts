import { uri, Identifier, canonical, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, Coding, BackboneElement, code, unsignedInt } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MessageDefinition = DomainResource & {
    resourceType: "MessageDefinition",
    url?: uri,
    identifier?: Identifier[],
    version?: string,
    name?: string,
    title?: string,
    replaces?: canonical[],
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
    base?: canonical,
    parent?: canonical[],
    eventCoding?: Coding,
    eventUri?: uri,
    category?: "consequence" | "currency" | "notification",
    focus?: (BackboneElement & {
        code: code, // https://hl7.org/fhir/R4/valueset-resource-types.html
        profile?: canonical,
        min: unsignedInt,
        max?: string,
    })[],
    responseRequired?: "always" | "on-error" | "never" | "on-success",
    allowedResponse?: (BackboneElement & {
        message: canonical,
        situation?: markdown,
    })[],
    graph?: canonical[],
};