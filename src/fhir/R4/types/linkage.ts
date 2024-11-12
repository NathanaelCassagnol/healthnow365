import { Reference, BackboneElement } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Linkage = DomainResource & {
    resourceType: "Linkage",
    active?: boolean,
    author?: Reference,
    item: (BackboneElement & {
        type: "source" | "alternate" | "historical",
        resource: Reference,
    })[],
};