import { Device } from "aws-cdk-lib/aws-ecs";
import { Identifier, CodeableConcept, Reference, instant, positiveInt, dateTime, Period, unsignedInt, BackboneElement } from "./_basic-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { Condition } from "./condition";
import { HealthcareService } from "./healthcare-service";
import { ImmunizationRecommendation } from "./immunization-recommendation";
import { Observation } from "./observation.types";
import { Procedure } from "./procedure";
import { ServiceRequest } from "./service-request";
import { Slot } from "./slot";
import { RelatedPerson } from "./related-person";
import { PractitionerRole } from "./practitioner-role";
import { Practitioner } from "./practitioner";
import { Patient } from "./patient.types";

export type Appointment = DomainResource & {
    resourceType: "Appointment",
    identifier?: Identifier[],
    status: "proposed" | "pending" | "booked" | "arrived" | "fulfilled" | "cancelled" | "noshow" | "entered-in-error" | "checked-in" | "waitlist",
    cancelationReason?: CodeableConcept,
    serviceCategory?: CodeableConcept[],
    serviceType?: CodeableConcept[],
    specialty?: CodeableConcept[],
    appointmentType?: CodeableConcept,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Procedure | Observation | ImmunizationRecommendation>[],
    priority?: unsignedInt,
    description?: string,
    supportingInformation?: Reference<FHIRResource>[],
    start?: instant,
    end?: instant,
    minutesDuration?: positiveInt,
    slot?: Reference<Slot>[],
    created?: dateTime,
    comment?: string,
    patientInstruction?: string;
    basedOn?: Reference<ServiceRequest>[];
    participant: (BackboneElement & {
        type?: CodeableConcept[],
        actor?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Device | HealthcareService | Location>,
        required?: "required" | "optional" | "information-only",
        status: "accepted" | "declined" | "tentative" | "needs-action",
        period?: Period
    })[],
    requestedPeriod?: Period[]
}