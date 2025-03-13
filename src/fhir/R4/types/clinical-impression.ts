import { Condition } from "aws-cdk-lib/aws-iam"
import { Identifier, CodeableConcept, Reference, dateTime, Period, BackboneElement, uri, Annotation } from "./_basic-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { AllergyIntolerance } from "./allergy-intolerance.types"
import { Encounter } from "./encounter"
import { Group } from "./group"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { Media } from "./media"
import { ImagingStudy } from "./imaging-study"
import { RiskAssessment } from "./risk-assessment"
import { DiagnosticReport } from "./diagnostic-report"
import { FamilyMemberHistory } from "./family-member-history"
import { QuestionnaireResponse } from "./questionnaire-response"
import { Observation } from "./observation.types"

export type ClinicalImpression = DomainResource & {
    resourceType: "ClinicalImpression",
    identifier?: Identifier[],
    status: "in-progress" | "completed" | "entered-in-error",
    statusReason?: CodeableConcept,
    code?: CodeableConcept,
    description?: string,
    subject: Reference<Patient | Group>,
    encounter?: Reference<Encounter>,
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    date?: dateTime,
    assessor?: Reference<Practitioner | PractitionerRole>,
    previous?: Reference<ClinicalImpression>,
    problem?: Reference<Condition | AllergyIntolerance>[],
    investigation?: (BackboneElement & {
        code: CodeableConcept,
        item?: Reference<Observation | QuestionnaireResponse | FamilyMemberHistory | DiagnosticReport | RiskAssessment | ImagingStudy | Media>[],
    })[],
    protocol?: uri[],
    summary?: string,
    finding?: (BackboneElement & {
        itemCodeableConcept?: CodeableConcept,
        itemReference?: Reference<Condition | Observation | Media>,
        basis?: string
    })[],
    prognosisCodeableConcept?: CodeableConcept[],
    prognosisReference?: Reference<RiskAssessment>[],
    supportingInfo?: Reference<FHIRResource>[],
    note?: Annotation[]
}