import { Identifier, Reference, CodeableConcept, dateTime, Period, BackboneElement, decimal, Annotation, Range } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { Condition } from "./condition";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { Observation } from "./observation.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";

export type RiskAssessment = DomainResource & {
    resourceType: "RiskAssessment",
    identifier?: Identifier[],
    basedOn?: Reference<FHIRResource>,
    parent?: Reference<FHIRResource>,
    status: "registered" | "preliminary" | "final" | "amended" | "corrected" | "cancelled" | "entered-in-error" | "unknown",
    method?: CodeableConcept,
    code?: CodeableConcept,
    subject: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    condition?: Reference<Condition>,
    performer?: Reference<Practitioner | PractitionerRole | Device>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
    basis?: Reference<FHIRResource>[],
    prediction?: (BackboneElement & {
        outcome?: CodeableConcept,
        probabilityDecimal?: decimal,
        probabilityRange?: Range,
        qualitativeRisk?: CodeableConcept,
        relativeRisk?: decimal,
        whenPeriod?: Period,
        whenRange?: Range,
        rationale?: string,
    })[],
    mitigation?: string,
    note?: Annotation[]
};