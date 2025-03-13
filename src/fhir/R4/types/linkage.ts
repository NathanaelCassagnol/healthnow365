import { Reference, BackboneElement } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Organization } from "./organization.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";

export type Linkage = DomainResource & {
    resourceType: "Linkage",
    active?: boolean,
    author?: Reference<Practitioner | PractitionerRole | Organization>,
    item: (BackboneElement & {
        type: "source" | "alternate" | "historical",
        resource: Reference<FHIRResource>,
    })[],
};