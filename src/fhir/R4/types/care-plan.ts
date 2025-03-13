import { Condition } from "aws-cdk-lib/aws-iam";
import { Identifier, Reference, CodeableConcept, Period, dateTime, BackboneElement, Annotation, Timing, Quantity, canonical, uri, SimpleQuantity } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { CareTeam } from "./care-team";
import { Device } from "./device";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";
import { Goal } from "./goal";
import { RequestGroup } from "./request-group";
import { VisionPrescription } from "./vision-prescription";
import { ServiceRequest } from "./service-request";
import { Task } from "./task";
import { NutritionOrder } from "./nutrition-order";
import { MedicationRequest } from "./medication-request";
import { DeviceRequest } from "./device-request";
import { CommunicationRequest } from "./communication-request";
import { Appointment } from "./appointment";
import { Observation } from "./observation.types";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { HealthcareService } from "./healthcare-service";
import { Substance } from "./substance.types";
import { Medication } from "./medication.types";

export type CarePlan = DomainResource & {
    resourceType: "CarePlan",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference<CarePlan>[],
    replaces?: Reference<CarePlan>[],
    partOf?: Reference<CarePlan>[],
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "order" | "option",
    category?: CodeableConcept[],
    title?: string,
    description?: string,
    subject: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    period?: Period,
    created?: dateTime,
    author?: Reference<Patient | Practitioner | PractitionerRole | Device | RelatedPerson | Organization | CareTeam>,
    contributor?: Reference<Patient | Practitioner | PractitionerRole | Device | RelatedPerson | Organization | CareTeam>[],
    careTeam?: Reference<CareTeam>[],
    addresses?: Reference<Condition>[],
    supportingInfo?: Reference<FHIRResource>[],
    goal?: Reference<Goal>[],
    activity?: (BackboneElement & {
        outcomeCodeableConcept?: CodeableConcept[],
        outcomeReference?: Reference<FHIRResource>[],
        progress?: Annotation[],
        reference?: Reference<Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription | RequestGroup>,
        detail?: (BackboneElement & {
            kind?: 'Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription',
            instantiatesCanonical?: canonical[],
            instantiatesUri?: uri[],
            code?: CodeableConcept,
            reasonCode?: CodeableConcept[],
            reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
            goal?: Reference<Goal>[],
            status: "not-started" | "scheduled" | "in-progress" | "on-hold" | "completed" | "cancelled" | "stopped" | "unknown" | "entered-in-error",
            statusReason?: CodeableConcept,
            doNotPerform?: boolean,
            scheduledTiming?: Timing,
            scheduledPeriod?: Period,
            scheduledString?: string,
            location?: Reference<Location>,
            performer?: Reference<Practitioner | PractitionerRole | Organization | RelatedPerson | Patient | CareTeam | HealthcareService | Device>[],
            productCodeableConcept?: CodeableConcept,
            productReference?: Reference<Medication | Substance>,
            dailyAmount?: SimpleQuantity,
            quantity?: SimpleQuantity,
            description?: string,
        }),
    })[],
    note?: Annotation[]
};