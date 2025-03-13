import { Identifier, Reference, CodeableConcept, BackboneElement, Attachment, dateTime, Period, Annotation } from "./_basic-types";
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

export type CommunicationRequest = DomainResource & {
    resourceType: "CommunicationRequest",
    identifier?: Identifier[],
    basedOn?: Reference<FHIRResource>[],
    replaces?: Reference<CommunicationRequest>[],
    groupIdentifier?: Identifier,
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept,
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    doNotPerform?: boolean,
    medium?: CodeableConcept[],
    subject?: Reference<Patient | Group>,
    about?: Reference<FHIRResource>[],
    encounter?: Reference<Encounter>,
    payload?: (BackboneElement & {
        contentString?: string,
        contentAttachment?: Attachment,
        contentReference?: Reference<FHIRResource>,
    })[],
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    authoredOn?: dateTime,
    requester?: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device>,
    recipient?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson | Group | CareTeam | HealthcareService>[],
    sender?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson | HealthcareService>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
    note?: Annotation[]
};