import { Identifier, Range, CodeableConcept, Reference, dateTime, Age, Period, BackboneElement, Annotation } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { ClinicalImpression } from "./clinical-impression";
import { DiagnosticReport } from "./diagnostic-report";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { Observation } from "./observation.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { RelatedPerson } from "./related-person";

export type Condition = DomainResource & {
    resourceType: "Condition",
    identifier?: Identifier[],
    clinicalStatus?: CodeableConcept,
    verificationStatus?: CodeableConcept,
    category?: CodeableConcept[],
    severity?: CodeableConcept,
    code?: CodeableConcept,
    bodySite?: CodeableConcept[],
    subject: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    onsetDateTime?: dateTime,
    onsetAge?: Age,
    onsetPeriod?: Period,
    onsetRange?: Range,
    onsetString?: string,
    abatementDateTime?: dateTime,
    abatementAge?: Age,
    abatementPeriod?: Period,
    abatementRange?: Range,
    abatementString?: string,
    recordedDate?: dateTime,
    recorder?: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson>,
    asserter?: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson>,
    stage?: (BackboneElement & {
        summary?: CodeableConcept,
        assessment?: Reference<ClinicalImpression | DiagnosticReport | Observation>[],
        type?: CodeableConcept
    })[],
    evidence?: (BackboneElement & {
        code?: CodeableConcept[],
        detail?: Reference<FHIRResource>[],
    })[],
    note?: Annotation[],
}