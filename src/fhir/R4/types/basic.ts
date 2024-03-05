import { Identifier, CodeableConcept, Reference, date } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Basic = DomainResource & {
    resourceType: "Basic",
    identifier?: Identifier[],
    code: CodeableConcept,
    subject?: Reference,
    created?: date,
    author?: Reference,
};