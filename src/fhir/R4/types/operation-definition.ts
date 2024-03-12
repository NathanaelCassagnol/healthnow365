import { uri, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, code, canonical, BackboneElement, integer } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type OperationDefinition = DomainResource & {
    resourceType: "OperationDefinition",
    url?: uri,
    version?: string,
    name: string,
    title?: string,
    status: "draft" | "active" | "retired" | "unknown",
    kind: "operation" | "query",
    experimental?: boolean,
    date?: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    description?: markdown,
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    purpose?: markdown,
    affectsState?: boolean,
    code: code,
    comment?: markdown,
    base?: canonical,
    resource?: code[],
    system: boolean,
    type: boolean,
    instance: boolean,
    inputProfile?: canonical,
    outputProfile?: canonical,
    parameter?: OperationDefinitionParameter[],
    overload?: (BackboneElement & {
        parameterName?: string[],
        comment?: string,
    })[];
};

type OperationDefinitionParameter = BackboneElement & {
    name: code,
    use: "in" | "out",
    min: integer,
    max: string,
    documentation?: string,
    type?: code,
    targetProfile?: canonical[],
    searchType?: "number" | "date" | "string" | "token" | "reference" | "composite" | "quantity" | "uri" | "special",
    binding?: (BackboneElement & {
        strength: "required" | "extensible" | "preferred" | "example",
        valueSet: canonical,
    }),
    referencedFrom?: (BackboneElement & {
        source: string,
        sourceId?: string,
    })[],
    part?: OperationDefinitionParameter[],
}