import { Identifier, CodeableConcept, Reference, Period, BackboneElement, ContactPoint, Annotation } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type CareTeam = DomainResource & {
    resourceType: "CareTeam",
    identifier?: Identifier[],
    status?: "proposed" | "active" | "suspended" | "inactive" | "entered-in-error",
    category?: CodeableConcept[],
    name?: string,
    subject?: Reference,
    encounter?: Reference,
    period?: Period,
    participant?: (BackboneElement & {
        role?: CodeableConcept[],
        member?: Reference,
        onBehalfOf?: Reference,
        period?: Period,
    })[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    managingOrganization?: Reference[],
    telecom?: ContactPoint[],
    note?: Annotation[]
};