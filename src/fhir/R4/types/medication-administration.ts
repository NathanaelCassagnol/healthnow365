import { Identifier, Reference, CodeableConcept, dateTime, Period, BackboneElement, Annotation, Ratio, uri, SimpleQuantity } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Condition } from "./condition";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { Encounter } from "./encounter";
import { EpisodeOfCare } from "./episode-of-care";
import { Group } from "./group";
import { MedicationRequest } from "./medication-request";
import { Medication } from "./medication.types";
import { Observation } from "./observation.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Procedure } from "./procedure";
import { Provenance } from "./provenance";
import { RelatedPerson } from "./related-person";

export type MedicationAdministration = DomainResource & {
    resourceType: "MedicationAdministration",
    identifier?: Identifier[],
    instantiates?: uri[],
    partOf?: Reference<MedicationAdministration | Procedure>[],
    status: "in-progress" | "not-done" | "on-hold" | "completed" | "entered-in-error" | "stopped" | "unknown",
    statusReason?: CodeableConcept[],
    category?: CodeableConcept,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference<Medication>,
    subject: Reference<Patient | Group>,
    context?: Reference<Encounter | EpisodeOfCare>,
    supportingInformation?: Reference<FHIRResource>[],
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson | Device>,
    })[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport>[],
    request?: Reference<MedicationRequest>,
    device?: Reference<Device>[],
    note?: Annotation[],
    dosage?: (BackboneElement & {
        text?: string,
        site?: CodeableConcept,
        route?: CodeableConcept,
        method?: CodeableConcept,
        dose?: SimpleQuantity,
        rateRatio?: Ratio,
        rateQuantity?: SimpleQuantity,
    }),
    eventHistory?: Reference<Provenance>[]
};