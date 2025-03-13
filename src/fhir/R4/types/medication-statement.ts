import { Identifier, Reference, CodeableConcept, dateTime, Period, Annotation, Dosage } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { CarePlan } from "./care-plan";
import { Condition } from "./condition";
import { DiagnosticReport } from "./diagnostic-report";
import { Encounter } from "./encounter";
import { EpisodeOfCare } from "./episode-of-care";
import { Group } from "./group";
import { MedicationAdministration } from "./medication-administration";
import { MedicationDispense } from "./medication-dispense";
import { MedicationRequest } from "./medication-request";
import { Medication } from "./medication.types";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Procedure } from "./procedure";
import { RelatedPerson } from "./related-person";
import { ServiceRequest } from "./service-request";

export type MedicationStatement = DomainResource & {
    resourceType: "MedicationStatement",
    identifier?: Identifier[],
    basedOn?: Reference<MedicationRequest | CarePlan | ServiceRequest>[],
    partOf?: Reference<MedicationAdministration | MedicationDispense | MedicationStatement | Procedure | Observation>[],
    status: "active" | "completed" | "entered-in-error" | "intended" | "stopped" | "on-hold" | "unknown" | "not-taken",
    statusReason?: CodeableConcept[],
    category?: CodeableConcept,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference<Medication>,
    subject: Reference<Patient | Group>,
    context?: Reference<Encounter | EpisodeOfCare>,
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    dateAsserted?: dateTime,
    informationSource?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Organization>,
    derivedFrom?: Reference<FHIRResource>[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport>[],
    note?: Annotation[],
    dosage?: Dosage[]
};