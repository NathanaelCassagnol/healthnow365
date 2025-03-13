import { Identifier, Reference, CodeableConcept, Quantity, Ratio, Range, dateTime, Period, Timing, Annotation, canonical, uri } from "./_basic-types";
import { Coverage, ClaimResponse } from "./_missing-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { CarePlan } from "./care-plan";
import { CareTeam } from "./care-team";
import { Condition } from "./condition";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { HealthcareService } from "./healthcare-service";
import { MedicationRequest } from "./medication-request";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Provenance } from "./provenance";
import { RelatedPerson } from "./related-person";
import { Specimen } from "./specimen";

export type ServiceRequest = DomainResource & {
    resourceType: "ServiceRequest",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference<CarePlan | ServiceRequest | MedicationRequest>[],
    replaces?: Reference<ServiceRequest>[],
    requisition?: Identifier,
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    doNotPerform?: boolean,
    code?: CodeableConcept,
    orderDetail?: CodeableConcept[],
    quantityQuantity?: Quantity,
    quantityRatio?: Ratio,
    quantityRange?: Range,
    subject: Reference<Patient | Group | Location | Device>,
    encounter?: Reference<Encounter>,
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    asNeededBoolean?: boolean,
    asNeededCodeableConcept?: CodeableConcept,
    authoredOn?: dateTime,
    requester?: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device>,
    performerType?: CodeableConcept,
    performer?: Reference<Practitioner | PractitionerRole | Organization | CareTeam | HealthcareService | Patient | Device | RelatedPerson>[],
    locationCode?: CodeableConcept[],
    locationReference?: Reference<Location>[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
    insurance?: Reference<Coverage | ClaimResponse>[],
    supportingInfo?: Reference<FHIRResource>[],
    specimen?: Reference<Specimen>[],
    bodySite?: CodeableConcept[],
    note?: Annotation[],
    patientInstruction?: string,
    relevantHistory?: Reference<Provenance>[]
};