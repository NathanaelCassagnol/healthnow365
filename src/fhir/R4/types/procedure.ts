import { Age, Range, Annotation, BackboneElement, CodeableConcept, Identifier, Period, Reference, canonical, dateTime, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { CarePlan } from "./care-plan";
import { Composition } from "./composition";
import { Condition } from "./condition";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { Medication } from "./medication.types";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";
import { ServiceRequest } from "./service-request";
import { Substance } from "./substance.types";

export type Procedure = DomainResource & {
    resourceType: "Procedure",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    basedOn?: Reference<CarePlan | ServiceRequest>[],
    partOf?: Reference<Procedure | Observation>[],
    status: "preparation" | "in-progress" | "not-done" | "on-hold" | "stopped" | "completed" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept,
    category?: CodeableConcept,
    code?: CodeableConcept,
    subject: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    performedDateTime?: dateTime,
    performedPeriod?: Period,
    performedString?: string,
    performedAge?: Age,
    performedRange?: Range,
    recorder?: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole>,
    asserter?: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole>,
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device>,
        onBehalfOf?: Reference<Organization>
    })[],
    location?: Reference<Location>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | Procedure | DiagnosticReport | DocumentReference>[],
    bodySite?: CodeableConcept[],
    outcome?: CodeableConcept,
    report?: Reference<DiagnosticReport | DocumentReference | Composition>[],
    complication?: CodeableConcept[],
    complicationDetail?: Reference<Condition>[],
    followUp?: CodeableConcept[],
    note?: Annotation[],
    focalDevice?: (BackboneElement & {
        action?: CodeableConcept,
        manipulated: Reference<Device>
    })[],
    usedReference?: Reference<Device | Medication | Substance>[],
    usedCode?: CodeableConcept[]
}