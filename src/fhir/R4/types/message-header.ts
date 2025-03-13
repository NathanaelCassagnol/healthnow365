import { Coding, uri, BackboneElement, Reference, url, ContactPoint, CodeableConcept, id, canonical } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Device } from "./device";
import { OperationOutcome } from "./operation-outcome";
import { Organization } from "./organization.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";

export type MessageHeader = DomainResource & {
    resourceType: "MessageHeader",
    eventCoding?: Coding,
    eventUri?: uri,
    destination?: (BackboneElement & {
        name?: string,
        target?: Reference<Device>,
        endpoint: url,
        receiver?: Reference<Practitioner | PractitionerRole | Organization>,
    })[],
    sender?: Reference<Practitioner | PractitionerRole | Organization>,
    enterer?: Reference<Practitioner | PractitionerRole>,
    author?: Reference<Practitioner | PractitionerRole>,
    source: (BackboneElement & {
        name?: string,
        software?: string,
        version?: string,
        contact?: ContactPoint,
        endpoint: url,
    }),
    responsible?: Reference<Practitioner | PractitionerRole | Organization>,
    reason?: CodeableConcept,
    response?: (BackboneElement & {
        identifier: id,
        code: "ok" | "transient-error" | "fatal-error",
        details?: Reference<OperationOutcome>,
    }),
    focus?: Reference<FHIRResource>[],
    definition?: canonical,
};