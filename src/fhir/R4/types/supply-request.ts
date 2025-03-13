import { Identifier, CodeableConcept, Reference, Quantity, BackboneElement, dateTime, Period, Timing, Range } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Condition } from "./condition";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { HealthcareService } from "./healthcare-service";
import { Medication } from "./medication.types";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";
import { Substance } from "./substance.types";

export type SupplyRequest = DomainResource & {
    resourceType: "SupplyRequest",
    identifier?: Identifier[],
    status?: "draft" | "active" | "suspended" | "cancelled" | "completed" | "entered-in-error" | "unknown",
    category?: CodeableConcept,
    priority?: "routine" | "urgent" | "asap" | "stat",
    itemCodeableConcept?: CodeableConcept,
    itemReference?: Reference<Medication | Substance | Device>,
    quantity: Quantity,
    parameter?: (BackboneElement & {
        code?: CodeableConcept,
        valueCodeableConcept?: CodeableConcept,
        valueQuantity?: Quantity,
        valueRange?: Range,
        valueBoolean?: boolean,
    })[],
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    authoredOn?: dateTime,
    requester?: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device>,
    supplier?: Reference<Organization | HealthcareService>[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
    deliverFrom?: Reference<Organization | Location>,
    deliverTo?: Reference<Organization | Location | Patient>
};