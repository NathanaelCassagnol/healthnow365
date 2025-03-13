import { Identifier, Reference, CodeableConcept, BackboneElement, dateTime, Annotation, Dosage, SimpleQuantity } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { DetectedIssue } from "./detected-issue";
import { Device } from "./device";
import { Encounter } from "./encounter";
import { EpisodeOfCare } from "./episode-of-care";
import { Group } from "./group";
import { MedicationRequest } from "./medication-request";
import { Medication } from "./medication.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Procedure } from "./procedure";
import { Provenance } from "./provenance";
import { RelatedPerson } from "./related-person";

export type MedicationDispense = DomainResource & {
    resourceType: "MedicationDispense",
    identifier?: Identifier[],
    partOf?: Reference<Procedure>[],
    status: "preparation" | "in-progress" | "cancelled" | "on-hold" | "completed" | "entered-in-error" | "stopped" | "declined" | "unknown",
    statusReasonCodeableConcept?: CodeableConcept,
    statusReasonReference?: Reference<DetectedIssue>,
    category?: CodeableConcept,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference<Medication>,
    subject?: Reference<Patient | Group>,
    context?: Reference<Encounter | EpisodeOfCare>,
    supportingInformation?: Reference<FHIRResource>[],
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference<Practitioner | PractitionerRole | Organization | Patient | Device | RelatedPerson>,
    })[],
    location?: Reference<Location>,
    authorizingPrescription?: Reference<MedicationRequest>[],
    type?: CodeableConcept,
    quantity?: SimpleQuantity,
    daysSupply?: SimpleQuantity,
    whenPrepared?: dateTime,
    whenHandedOver?: dateTime,
    destination?: Reference<Location>,
    receiver?: Reference<Patient | Practitioner>[],
    note?: Annotation[],
    dosageInstruction?: Dosage[],
    substitution?: (BackboneElement & {
        wasSubstituted: boolean,
        type?: CodeableConcept,
        reason?: CodeableConcept[],
        responsibleParty?: Reference<Practitioner | PractitionerRole>[],
    }),
    detectedIssue?: Reference<DetectedIssue>[],
    eventHistory?: Reference<Provenance>[]
};