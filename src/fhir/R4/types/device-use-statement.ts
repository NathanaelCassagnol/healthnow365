import { Identifier, Reference, Timing, Period, dateTime, CodeableConcept, Annotation } from "./_basic-types";
import { Claim } from "./_missing-types";
import { DomainResource } from "./_resource.types";
import { Condition } from "./condition";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { Group } from "./group";
import { Media } from "./media";
import { Observation } from "./observation.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Procedure } from "./procedure";
import { QuestionnaireResponse } from "./questionnaire-response";
import { RelatedPerson } from "./related-person";
import { ServiceRequest } from "./service-request";

export type DeviceUseStatement = DomainResource & {
    resourceType: "DeviceUseStatement",
    identifier?: Identifier[],
    basedOn?: Reference<ServiceRequest>[],
    status: "active" | "completed" | "entered-in-error" | "intended" | "stopped" | "on-hold",
    subject: Reference<Patient | Group>,
    derivedFrom?: Reference<ServiceRequest | Procedure | Claim | Observation | QuestionnaireResponse | DocumentReference>[],
    timingTiming?: Timing,
    timingPeriod?: Period,
    timingDateTime?: dateTime,
    recordedOn?: dateTime,
    source?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>,
    device: Reference<Device>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference | Media>[],
    bodySite?: CodeableConcept,
    note?: Annotation[]
};