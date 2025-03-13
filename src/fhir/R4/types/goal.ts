import { Identifier, CodeableConcept, Reference, date, BackboneElement, Quantity, integer, Ratio, Duration, Annotation, Range } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Condition } from "./condition";
import { Group } from "./group";
import { MedicationStatement } from "./medication-statement";
import { NutritionOrder } from "./nutrition-order";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";
import { RiskAssessment } from "./risk-assessment";
import { ServiceRequest } from "./service-request";

export type Goal = DomainResource & {
    resourceType: "Goal",
    identifier?: Identifier[],
    lifecycleStatus: "proposed" | "planned" | "accepted" | "active" | "on-hold" | "completed" | "cancelled" | "entered-in-error" | "rejected",
    achievementStatus?: CodeableConcept,
    category?: CodeableConcept[],
    priority?: CodeableConcept,
    description: CodeableConcept,
    subject: Reference<Patient | Group | Organization>,
    startDate?: date,
    startCodeableConcept?: CodeableConcept,
    target?: (BackboneElement & {
        measure?: CodeableConcept,
        detailQuantity?: Quantity,
        detailRange?: Range,
        detailCodeableConcept?: CodeableConcept,
        detailString?: string,
        detailBoolean?: boolean,
        detailInteger?: integer,
        detailRatio?: Ratio,
        dueDate?: date,
        dueDuration?: Duration,
    })[],
    statusDate?: date,
    statusReason?: string,
    expressedBy?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>,
    addresses?: Reference<Condition | Observation | MedicationStatement | NutritionOrder | ServiceRequest | RiskAssessment>[],
    note?: Annotation[],
    outcomeCode?: CodeableConcept[],
    outcomeReference?: Reference<Observation>[]
};