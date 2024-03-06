import { dateTime, ContactDetail, CodeableConcept, markdown, UsageContext, BackboneElement, Period, Reference } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type NamingSystem = DomainResource & {
    resourceType: "NamingSystem",
    name: string,
    status: "draft" | "active" | "retired" | "unknown",
    kind: "codesystem" | "identifier" | "root",
    date: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    responsible?: string,
    type?: CodeableConcept,
    description?: markdown,
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    usage?: string,
    uniqueId: (BackboneElement & {
        type: "oid" | "uuid" | "uri" | "other",
        value: string,
        preferred?: boolean,
        comment?: string,
        period?: Period,
    })[],
};