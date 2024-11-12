import { uri, Identifier, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, BackboneElement, code, canonical } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type ExampleScenario = DomainResource & {
    resourceType: "ExampleScenario",
    url?: uri,
    identifier?: Identifier[],
    version?: string,
    name?: string,
    status: "draft" | "active" | "retired" | "unknown",
    experimental?: boolean,
    date?: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    copyright?: markdown,
    purpose?: markdown,
    actor?: (BackboneElement & {
        actorId: string,
        type: "person" | "entity",
        name?: string,
        description?: markdown,
    })[],
    instance?: (BackboneElement & {
        resourceId: string,
        resourceType: code, // https://hl7.org/fhir/R4/valueset-resource-types.html
        name?: string,
        description?: markdown,
        version?: (BackboneElement & {
            versionId: string,
            description: markdown,
        })[],
        containedInstance?: (BackboneElement & {
            resourceId: string,
            versionId?: string,
        })[],
    })[],
    process?: ExampleScenarioProcess[],
    workflow?: canonical[],
};

type ExampleScenarioProcess = BackboneElement & {
    title: string,
    description?: markdown,
    preConditions?: markdown,
    postConditions?: markdown,
    step?: ExampleScenarioStep[],
}

type ExampleScenarioStep = BackboneElement & {
    process?: ExampleScenarioProcess[],
    pause?: boolean,
    operation?: (BackboneElement & {
        number: string,
        type?: string,
        name?: string,
        initiator?: string,
        receiver?: string,
        description?: markdown,
        initiatorActive?: boolean,
        receiverActive?: boolean,
        request?: (BackboneElement & {
            resourceId: string,
            versionId?: string,
        }),
        response?: (BackboneElement & {
            resourceId: string,
            versionId?: string,
        }),
    }),
    alternative?: (BackboneElement & {
        title: string,
        description?: markdown,
        step?: ExampleScenarioStep[],
    })[],
}