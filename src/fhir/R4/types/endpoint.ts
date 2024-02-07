import { Identifier, Coding, Reference, ContactPoint, Period, CodeableConcept, url, code } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type Endpoint = DomainResource & {
    resourceType: "Endpoint",
    identifier?: Identifier[],
    status: "active" | "suspended" | "error" | "off" | "entered-in-error" | "test",
    connectionType: Coding,
    name?: string,
    managingOrganization?: Reference,
    contact?: ContactPoint[],
    period?: Period,
    payloadType: CodeableConcept[],
    payloadMimeType?: code[],
    address: url,
    header?: string[]
}