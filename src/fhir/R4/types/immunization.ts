import { Identifier, CodeableConcept, Reference, dateTime, date, BackboneElement, Annotation, positiveInt, SimpleQuantity, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Condition } from "./condition";
import { DiagnosticReport } from "./diagnostic-report";
import { Encounter } from "./encounter";
import { Observation } from "./observation.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";

export type Immunization = DomainResource & {
    resourceType: "Immunization",
    identifier?: Identifier[],
    status: "completed" | "entered-in-error" | "not-done",
    statusReason?: CodeableConcept,
    vaccineCode: CodeableConcept,
    patient: Reference<Patient>,
    encounter?: Reference<Encounter>,
    occurrenceDateTime?: dateTime,
    occurrenceString?: string,
    recorded?: dateTime,
    primarySource?: boolean,
    reportOrigin?: CodeableConcept,
    location?: Reference<Location>,
    manufacturer?: Reference<Organization>,
    lotNumber?: string,
    expirationDate?: date,
    site?: CodeableConcept,
    route?: CodeableConcept,
    doseQuantity?: SimpleQuantity,
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference<Practitioner | PractitionerRole | Organization>,
    })[],
    note?: Annotation[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | DiagnosticReport>[],
    isSubpotent?: boolean,
    subpotentReason?: CodeableConcept[],
    education?: (BackboneElement & {
        documentType?: string,
        reference?: uri,
        publicationDate?: dateTime,
        presentationDate?: dateTime,
    })[],
    programEligibility?: CodeableConcept[],
    fundingSource?: CodeableConcept,
    reaction?: (BackboneElement & {
        date?: dateTime,
        detail?: Reference<Observation>,
        reported?: boolean,
    })[],
    protocolApplied?: (BackboneElement & {
        series?: string,
        authority?: Reference<Organization>,
        targetDisease?: CodeableConcept[],
        doseNumberString?: string,
        doseNumberPositiveInt?: positiveInt,
        seriesDosesString?: string,
        seriesDosesPositiveInt?: positiveInt,
    })[]
};