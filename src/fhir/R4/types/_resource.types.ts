import { Extension, Element, id, uri, code, Narrative, instant, canonical, Coding } from "./_basic-types"
import { AllergyIntolerance } from "./allergy-intolerance.types";
import { Medication } from "./medication.types";
import { Substance } from "./substance.types";
import { Person } from "./person.types";
import { Organization } from "./organization.types";
import { Observation } from "./observation.types";
import { Patient } from "./patient.types";
import { Bundle } from "./bundle.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Endpoint } from "./endpoint";
import { Condition } from "./condition";
import { CareTeam } from "./care-team";
import { Goal } from "./goal";
import { Specimen } from "./specimen";
import { RelatedPerson } from "./related-person";
import { OrganizationAffiliation } from "./organization-affiliation";
import { HealthcareService } from "./healthcare-service";
import { BiologicallyDerivedProduct } from "./biologically-derived-product";
import { Group } from "./group";
import { DeviceMetric } from "./device-metric";
import { Device } from "./device";
import { Task } from "./task";
import { Appointment } from "./appointment";
import { AppointmentResponse } from "./appointment-response";
import { Schedule } from "./schedule";
import { Slot } from "./slot";
import { VerificationResult } from "./verification-result";
import { Encounter } from "./encounter";
import { EpisodeOfCare } from "./episode-of-care";
import { Flag } from "./flag";
import { List } from "./list";
import { Library } from "./library";
import { AdverseEvent } from "./adverse-event";
import { Procedure } from "./procedure";
import { FamilyMemberHistory } from "./family-member-history";
import { ClinicalImpression } from "./clinical-impression";
import { DetectedIssue } from "./detected-issue";
import { Media } from "./media";
import { DiagnosticReport } from "./diagnostic-report";
import { BodyStructure } from "./body-structure";
import { ImagingStudy } from "./imaging-study";
import { QuestionnaireResponse } from "./questionnaire-response";
import { MolecularSequence } from "./molecular-sequence";
import { MedicationRequest } from "./medication-request";
import { MedicationAdministration } from "./medication-administration";
import { MedicationDispense } from "./medication-dispense";
import { MedicationStatement } from "./medication-statement";
import { MedicationKnowledge } from "./medication-knowledge";
import { Immunization } from "./immunization";
import { ImmunizationEvaluation } from "./immunization-evaluation";
import { ImmunizationRecommendation } from "./immunization-recommendation";
import { CarePlan } from "./care-plan";
import { ServiceRequest } from "./service-request";
import { NutritionOrder } from "./nutrition-order";
import { VisionPrescription } from "./vision-prescription";
import { RiskAssessment } from "./risk-assessment";
import { RequestGroup } from "./request-group";

export type FHIRResource =
    // Foundation
    Bundle | 
    // Base
    Patient | Practitioner | PractitionerRole | RelatedPerson | Person | Group |
    Organization | OrganizationAffiliation | HealthcareService | Endpoint | Location |
    Substance | BiologicallyDerivedProduct | Device | DeviceMetric |
    Task | Appointment | AppointmentResponse | Schedule | Slot | VerificationResult |
    Encounter | EpisodeOfCare | Flag | List | Library |
    // Clinical
    AllergyIntolerance | AdverseEvent | Condition | Procedure | FamilyMemberHistory | ClinicalImpression | DetectedIssue |
    Observation | Media | DiagnosticReport | Specimen | BodyStructure | ImagingStudy | QuestionnaireResponse | MolecularSequence |
    MedicationRequest | MedicationAdministration | MedicationDispense | MedicationStatement | Medication | MedicationKnowledge |
    Immunization | ImmunizationEvaluation | ImmunizationRecommendation |
    CarePlan | CareTeam | Goal | ServiceRequest | NutritionOrder | VisionPrescription | RiskAssessment | RequestGroup;

// https://hl7.org/fhir/R4/resource.html
export type Resource = extendablePrimitives & {
    id?: id,
    meta?: Meta,
    implicitRules?: uri,
    languge?: code,
}
export type DomainResource = Resource & {
    text?: Narrative,
    contained?: FHIRResource[],
    extension?: Extension[],
    modifierExtension?: Extension[]
}
export type Meta = Element & {
    versionId?: id,
    lastUpdated?: instant,
    source?: uri,
    profile?: canonical[], // canonical(StructureDefinition)
    security?: Coding[],
    tag?: Coding[]
}

// A resource can have extensions to primitive elements, e.g. Patient.gender can be extended with Patient._gender, which is an Extension array
// Applied to Resource and Element so it reaches nested properties
/* Examples:
mock-patient-2._gender
mock-patient-3.contact[0].name._family
mock-patient-19._birthDate
mock-observation-assessment-3.contained[0]._birthDate*/
export type extendablePrimitives = {[key: `_${string}`]: {extension: Extension[]}};