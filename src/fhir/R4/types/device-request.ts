import { Identifier, Reference, CodeableConcept, dateTime, Period, Timing, Annotation, canonical, uri, BackboneElement, Quantity, Range } from "./_basic-types";
import { ClaimResponse, Coverage } from "./_missing-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { CareTeam } from "./care-team";
import { Condition } from "./condition";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { HealthcareService } from "./healthcare-service";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Provenance } from "./provenance";
import { RelatedPerson } from "./related-person";

export type DeviceRequest = DomainResource & {
    resourceType: "DeviceRequest",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference<FHIRResource>[],
    priorRequest?: Reference<FHIRResource>[],
    groupIdentifier?: Identifier,
    status?: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    priority?: "routine" | "urgent" | "asap" | "stat",
    codeReference?: Reference<Device>,
    codeCodeableConcept?: CodeableConcept,
    parameter?: (BackboneElement & {
        code?: CodeableConcept,
        valueCodeableConcept?: CodeableConcept,
        valueQuantity?: Quantity,
        valueRange?: Range,
        valueBoolean?: Boolean,
    })[];
    subject: Reference<Patient | Group | Location | Device>,
    encounter?: Reference<Encounter>,
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    authoredOn?: dateTime,
    requester?: Reference<Device | Practitioner | PractitionerRole | Organization>,
    performerType?: CodeableConcept,
    performer?: Reference<Practitioner | PractitionerRole | Organization | CareTeam | HealthcareService | Patient | Device | RelatedPerson>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
    insurance?: Reference<Coverage | ClaimResponse>[],
    supportingInfo?: Reference<FHIRResource>[],
    note?: Annotation[],
    relevantHistory?: Reference<Provenance>[]
};