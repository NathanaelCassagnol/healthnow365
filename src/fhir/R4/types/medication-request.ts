import { Identifier, CodeableConcept, Reference, dateTime, Annotation, BackboneElement, Quantity, Duration, Period, unsignedInt, Dosage, canonical, uri, SimpleQuantity } from "./_basic-types";
import { Coverage, ClaimResponse } from "./_missing-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { CarePlan } from "./care-plan";
import { CareTeam } from "./care-team";
import { Condition } from "./condition";
import { DetectedIssue } from "./detected-issue";
import { Device } from "./device";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { ImmunizationRecommendation } from "./immunization-recommendation";
import { Medication } from "./medication.types";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Provenance } from "./provenance";
import { RelatedPerson } from "./related-person";
import { ServiceRequest } from "./service-request";

export type MedicationRequest = DomainResource & {
    resourceType: "MedicationRequest",
    identifier?: Identifier[],
    status: "active" | "on-hold" | "cancelled" | "completed" | "entered-in-error" | "stopped" | "draft" | "unknown",
    statusReason?: CodeableConcept,
    intent: "proposal" | "plan" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    doNotPerform?: boolean,
    reportedBoolean?: boolean,
    reportedReference?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Organization>,
    medicationCodeableConcept?: CodeableConcept,
    medicationReference?: Reference<Medication>,
    subject: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    supportingInformation?: Reference<FHIRResource>[],
    authoredOn?: dateTime,
    requester?: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device>,
    performer?: Reference<Practitioner | PractitionerRole | Organization | Patient | Device | RelatedPerson | CareTeam>,
    performerType?: CodeableConcept,
    recorder?: Reference<Practitioner | PractitionerRole>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation>[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference<CarePlan | MedicationRequest | ServiceRequest | ImmunizationRecommendation>[],
    groupIdentifier?: Identifier,
    courseOfTherapyType?: CodeableConcept,
    insurance?: Reference<Coverage | ClaimResponse>[],
    note?: Annotation[],
    dosageInstruction?: Dosage[],
    dispenseRequest?: (BackboneElement & {
        initialFill?: (BackboneElement & {
            quantity?: Quantity,
            duration?: Duration
        }),
        dispenseInterval?: Duration,
        validityPeriod?: Period,
        numberOfRepeatsAllowed?: unsignedInt,
        quantity?: SimpleQuantity,
        expectedSupplyDuration?: Duration,
        performer?: Reference<Organization>
    }),
    substitution?: (BackboneElement & {
        allowedBoolean?: boolean,
        allowedCodeableConcept?: CodeableConcept,
        reason?: CodeableConcept
    }),
    priorPrescription?: Reference<MedicationRequest>,
    detectedIssue?: Reference<DetectedIssue>[],
    eventHistory?: Reference<Provenance>[]
};