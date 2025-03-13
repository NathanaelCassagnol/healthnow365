import { Device } from "aws-cdk-lib/aws-ecs"
import { Group } from "aws-cdk-lib/aws-iam"
import { Identifier, canonical, uri, Reference, CodeableConcept, code, Period, dateTime, Annotation, positiveInt, integer, decimal, date, time, Attachment, Quantity, BackboneElement, anyBasicType } from "./_basic-types"
import { ClaimResponse, Coverage } from "./_missing-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { CareTeam } from "./care-team"
import { Encounter } from "./encounter"
import { HealthcareService } from "./healthcare-service"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { Provenance } from "./provenance"
import { RelatedPerson } from "./related-person"

export type Task = DomainResource & {
    resourceType: "Task",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical,
    instantiatesUri?: uri,
    basedOn?: Reference<FHIRResource>[],
    groupIdentifier?: Identifier,
    partOf?: Reference<Task>[],
    status: "draft" | "requested" | "received" | "accepted" | "rejected" | "ready" | "cancelled" | "in-progress" | "on-hold" | "failed" | "completed" | "entered-in-error",
    statusReason?: CodeableConcept,
    businessStatus?: CodeableConcept,
    intent: "unknown" | "proposal" | "plan" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    priority?: "routine" | "urgent" | "asap" | "stat",
    code?: CodeableConcept,
    description?: string,
    focus?: Reference<FHIRResource>,
    for?: Reference<FHIRResource>,
    encounter?: Reference<Encounter>,
    executionPeriod?: Period,
    authoredOn?: dateTime,
    lastModified?: dateTime,
    requester?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>,
    performerType?: CodeableConcept[],
    owner?: Reference<Practitioner | PractitionerRole | Organization | CareTeam | HealthcareService | Patient | Device | RelatedPerson>,
    location?: Reference<Location>,
    reasonCode?: CodeableConcept,
    reasonReference?: Reference<FHIRResource>,
    insurance?: Reference<Coverage | ClaimResponse>[],
    note?: Annotation[],
    relevantHistory?: Reference<Provenance>[],
    restriction?: BackboneElement & {
        repetitions?: positiveInt,
        period?: Period,
        recipient?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Group | Organization>[]
    },
    input?: (BackboneElement & {
        type: CodeableConcept,
        [key: `value${string}`]: anyBasicType
    })[],
    output?: (BackboneElement & {
        type: CodeableConcept,
        [key: `value${string}`]: anyBasicType
    })[]
}
