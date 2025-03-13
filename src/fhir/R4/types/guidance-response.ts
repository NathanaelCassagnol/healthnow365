import { Annotation, CodeableConcept, DataRequirement, Identifier, Reference, canonical, dateTime, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Patient } from "./patient.types";
import { Encounter } from "./encounter";
import { Device } from "./device";
import { DiagnosticReport } from "./diagnostic-report";
import { DocumentReference } from "./document-reference";
import { Observation } from "./observation.types";
import { Condition } from "./condition";
import { Group } from "./group";
import { CarePlan } from "./care-plan";
import { RequestGroup } from "./request-group";
import { OperationsOutcome, Parameters } from "./_missing-types";

export type GuidanceResponse = DomainResource & {
    resourceType: "GuidanceResponse",
    identifier?: Identifier[],
    requestIdentifier?: Identifier,
    moduleUri?: uri,
    moduleCanonical?: canonical,
    moduleCodeableConcept?: CodeableConcept,
    status: "success" | "data-requested" | "data-required" | "in-progress" | "failure" | "entered-in-error",
    subject?: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    occurrenceDateTime?: dateTime,
    performer?: Reference<Device>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[],
    note?: Annotation[],
    evaluationMessage?: Reference<OperationsOutcome>[],
    outputParameters?: Reference<Parameters>,
    result?: Reference<CarePlan | RequestGroup>,
    dataRequirement?: DataRequirement[]
};