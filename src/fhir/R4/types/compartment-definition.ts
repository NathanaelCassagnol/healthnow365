import { uri, dateTime, ContactDetail, markdown, UsageContext, BackboneElement, code } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type CompartmentDefinition = DomainResource & {
    resourceType: "CompartmentDefinition",
    url: uri,
    version?: string,
    name: string,
    status: "draft" | "active" | "retired" | "unknown",
    experimental?: boolean,
    date?: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    description?: markdown,
    useContext?: UsageContext[],
    purpose?: markdown,
    code: "Patient" | "Encounter" | "RelatedPerson" | "Practitioner" | "Device",
    search: boolean,
    resource?: (BackboneElement & {
        code: code,
        param?: string[],
        documentation?: string,
    })[],
};