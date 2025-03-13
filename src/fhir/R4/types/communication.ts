import { Identifier, Reference, CodeableConcept, dateTime, BackboneElement, Attachment, Annotation, canonical, uri } from "./_basic-types";
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
import { RelatedPerson } from "./related-person";

export type Communication = DomainResource & {
    resourceType: "Communication",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference<FHIRResource>[],
    partOf?: Reference<FHIRResource>[],
    inResponseTo?: Reference<Communication>[],
    status: "preparation" | "in-progress" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept,
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    medium?: CodeableConcept[],
    subject?: Reference<Patient | Group>,
    topic?: CodeableConcept,
    about?: Reference<FHIRResource>[],
    encounter?: Reference<Encounter>,
    sent?: dateTime,
    received?: dateTime,
    recipient?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson | Group | CareTeam | HealthcareService>[],
    sender?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson | HealthcareService>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
    payload?: (BackboneElement & {
        contentString?: string,
        contentAttachment?: Attachment,
        contentReference?: Reference<FHIRResource>,
    })[],
    note?: Annotation[]
};