import { CompartmentDefinition } from "fhir/R4/types/compartment-definition";

// https://hl7.org/fhir/R4/compartmentdefinition-patient.json.html
// Compartment Definition for patient

export const mockCompartmentDefinition1: CompartmentDefinition = {
  "resourceType" : "CompartmentDefinition",
  "id" : "patient",
  "text" : {
    "status" : "generated",
    "div" : "<div>!-- Snipped for Brevity --></div>"
  },
  "url" : "http://hl7.org/fhir/CompartmentDefinition/patient",
  "version" : "4.0.1",
  "name" : "Base FHIR compartment definition for Patient",
  "status" : "draft",
  "experimental" : true,
  "date" : "2019-11-01T09:29:23+11:00",
  "publisher" : "FHIR Project Team",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "http://hl7.org/fhir"
    }]
  }],
  "description" : "There is an instance of the patient compartment for each patient resource, and the identity of the compartment is the same as the patient. When a patient is linked to another patient, all the records associated with the linked patient are in the compartment associated with the target of the link.. The set of resources associated with a particular patient",
  "code" : "Patient",
  "search" : true,
  "resource" : [{
    "code" : "Account",
    "param" : ["subject"]
  },
  {
    "code" : "ActivityDefinition"
  },
  {
    "code" : "AdverseEvent",
    "param" : ["subject"]
  },
  {
    "code" : "AllergyIntolerance",
    "param" : ["patient",
    "recorder",
    "asserter"]
  },
  {
    "code" : "Appointment",
    "param" : ["actor"]
  },
  {
    "code" : "AppointmentResponse",
    "param" : ["actor"]
  },
  {
    "code" : "AuditEvent",
    "param" : ["patient"]
  },
  {
    "code" : "Basic",
    "param" : ["patient",
    "author"]
  },
  {
    "code" : "Binary"
  },
  {
    "code" : "BiologicallyDerivedProduct"
  },
  {
    "code" : "BodyStructure",
    "param" : ["patient"]
  },
  {
    "code" : "Bundle"
  },
  {
    "code" : "CapabilityStatement"
  },
  {
    "code" : "CarePlan",
    "param" : ["patient",
    "performer"]
  },
  {
    "code" : "CareTeam",
    "param" : ["patient",
    "participant"]
  },
  {
    "code" : "CatalogEntry"
  },
  {
    "code" : "ChargeItem",
    "param" : ["subject"]
  },
  {
    "code" : "ChargeItemDefinition"
  },
  {
    "code" : "Claim",
    "param" : ["patient",
    "payee"]
  },
  {
    "code" : "ClaimResponse",
    "param" : ["patient"]
  },
  {
    "code" : "ClinicalImpression",
    "param" : ["subject"]
  },
  {
    "code" : "CodeSystem"
  },
  {
    "code" : "Communication",
    "param" : ["subject",
    "sender",
    "recipient"]
  },
  {
    "code" : "CommunicationRequest",
    "param" : ["subject",
    "sender",
    "recipient",
    "requester"]
  },
  {
    "code" : "CompartmentDefinition"
  },
  {
    "code" : "Composition",
    "param" : ["subject",
    "author",
    "attester"]
  },
  {
    "code" : "ConceptMap"
  },
  {
    "code" : "Condition",
    "param" : ["patient",
    "asserter"]
  },
  {
    "code" : "Consent",
    "param" : ["patient"]
  },
  {
    "code" : "Contract"
  },
  {
    "code" : "Coverage",
    "param" : ["policy-holder",
    "subscriber",
    "beneficiary",
    "payor"]
  },
  {
    "code" : "CoverageEligibilityRequest",
    "param" : ["patient"]
  },
  {
    "code" : "CoverageEligibilityResponse",
    "param" : ["patient"]
  },
  {
    "code" : "DetectedIssue",
    "param" : ["patient"]
  },
  {
    "code" : "Device"
  },
  {
    "code" : "DeviceDefinition"
  },
  {
    "code" : "DeviceMetric"
  },
  {
    "code" : "DeviceRequest",
    "param" : ["subject",
    "performer"]
  },
  {
    "code" : "DeviceUseStatement",
    "param" : ["subject"]
  },
  {
    "code" : "DiagnosticReport",
    "param" : ["subject"]
  },
  {
    "code" : "DocumentManifest",
    "param" : ["subject",
    "author",
    "recipient"]
  },
  {
    "code" : "DocumentReference",
    "param" : ["subject",
    "author"]
  },
  {
    "code" : "EffectEvidenceSynthesis"
  },
  {
    "code" : "Encounter",
    "param" : ["patient"]
  },
  {
    "code" : "Endpoint"
  },
  {
    "code" : "EnrollmentRequest",
    "param" : ["subject"]
  },
  {
    "code" : "EnrollmentResponse"
  },
  {
    "code" : "EpisodeOfCare",
    "param" : ["patient"]
  },
  {
    "code" : "EventDefinition"
  },
  {
    "code" : "Evidence"
  },
  {
    "code" : "EvidenceVariable"
  },
  {
    "code" : "ExampleScenario"
  },
  {
    "code" : "ExplanationOfBenefit",
    "param" : ["patient",
    "payee"]
  },
  {
    "code" : "FamilyMemberHistory",
    "param" : ["patient"]
  },
  {
    "code" : "Flag",
    "param" : ["patient"]
  },
  {
    "code" : "Goal",
    "param" : ["patient"]
  },
  {
    "code" : "GraphDefinition"
  },
  {
    "code" : "Group",
    "param" : ["member"]
  },
  {
    "code" : "GuidanceResponse"
  },
  {
    "code" : "HealthcareService"
  },
  {
    "code" : "ImagingStudy",
    "param" : ["patient"]
  },
  {
    "code" : "Immunization",
    "param" : ["patient"]
  },
  {
    "code" : "ImmunizationEvaluation",
    "param" : ["patient"]
  },
  {
    "code" : "ImmunizationRecommendation",
    "param" : ["patient"]
  },
  {
    "code" : "ImplementationGuide"
  },
  {
    "code" : "InsurancePlan"
  },
  {
    "code" : "Invoice",
    "param" : ["subject",
    "patient",
    "recipient"]
  },
  {
    "code" : "Library"
  },
  {
    "code" : "Linkage"
  },
  {
    "code" : "List",
    "param" : ["subject",
    "source"]
  },
  {
    "code" : "Location"
  },
  {
    "code" : "Measure"
  },
  {
    "code" : "MeasureReport",
    "param" : ["patient"]
  },
  {
    "code" : "Media",
    "param" : ["subject"]
  },
  {
    "code" : "Medication"
  },
  {
    "code" : "MedicationAdministration",
    "param" : ["patient",
    "performer",
    "subject"]
  },
  {
    "code" : "MedicationDispense",
    "param" : ["subject",
    "patient",
    "receiver"]
  },
  {
    "code" : "MedicationKnowledge"
  },
  {
    "code" : "MedicationRequest",
    "param" : ["subject"]
  },
  {
    "code" : "MedicationStatement",
    "param" : ["subject"]
  },
  {
    "code" : "MedicinalProduct"
  },
  {
    "code" : "MedicinalProductAuthorization"
  },
  {
    "code" : "MedicinalProductContraindication"
  },
  {
    "code" : "MedicinalProductIndication"
  },
  {
    "code" : "MedicinalProductIngredient"
  },
  {
    "code" : "MedicinalProductInteraction"
  },
  {
    "code" : "MedicinalProductManufactured"
  },
  {
    "code" : "MedicinalProductPackaged"
  },
  {
    "code" : "MedicinalProductPharmaceutical"
  },
  {
    "code" : "MedicinalProductUndesirableEffect"
  },
  {
    "code" : "MessageDefinition"
  },
  {
    "code" : "MessageHeader"
  },
  {
    "code" : "MolecularSequence",
    "param" : ["patient"]
  },
  {
    "code" : "NamingSystem"
  },
  {
    "code" : "NutritionOrder",
    "param" : ["patient"]
  },
  {
    "code" : "Observation",
    "param" : ["subject",
    "performer"]
  },
  {
    "code" : "ObservationDefinition"
  },
  {
    "code" : "OperationDefinition"
  },
  {
    "code" : "OperationOutcome"
  },
  {
    "code" : "Organization"
  },
  {
    "code" : "OrganizationAffiliation"
  },
  {
    "code" : "Patient",
    "param" : ["link"]
  },
  {
    "code" : "PaymentNotice"
  },
  {
    "code" : "PaymentReconciliation"
  },
  {
    "code" : "Person",
    "param" : ["patient"]
  },
  {
    "code" : "PlanDefinition"
  },
  {
    "code" : "Practitioner"
  },
  {
    "code" : "PractitionerRole"
  },
  {
    "code" : "Procedure",
    "param" : ["patient",
    "performer"]
  },
  {
    "code" : "Provenance",
    "param" : ["patient"]
  },
  {
    "code" : "Questionnaire"
  },
  {
    "code" : "QuestionnaireResponse",
    "param" : ["subject",
    "author"]
  },
  {
    "code" : "RelatedPerson",
    "param" : ["patient"]
  },
  {
    "code" : "RequestGroup",
    "param" : ["subject",
    "participant"]
  },
  {
    "code" : "ResearchDefinition"
  },
  {
    "code" : "ResearchElementDefinition"
  },
  {
    "code" : "ResearchStudy"
  },
  {
    "code" : "ResearchSubject",
    "param" : ["individual"]
  },
  {
    "code" : "RiskAssessment",
    "param" : ["subject"]
  },
  {
    "code" : "RiskEvidenceSynthesis"
  },
  {
    "code" : "Schedule",
    "param" : ["actor"]
  },
  {
    "code" : "SearchParameter"
  },
  {
    "code" : "ServiceRequest",
    "param" : ["subject",
    "performer"]
  },
  {
    "code" : "Slot"
  },
  {
    "code" : "Specimen",
    "param" : ["subject"]
  },
  {
    "code" : "SpecimenDefinition"
  },
  {
    "code" : "StructureDefinition"
  },
  {
    "code" : "StructureMap"
  },
  {
    "code" : "Subscription"
  },
  {
    "code" : "Substance"
  },
  {
    "code" : "SubstanceNucleicAcid"
  },
  {
    "code" : "SubstancePolymer"
  },
  {
    "code" : "SubstanceProtein"
  },
  {
    "code" : "SubstanceReferenceInformation"
  },
  {
    "code" : "SubstanceSourceMaterial"
  },
  {
    "code" : "SubstanceSpecification"
  },
  {
    "code" : "SupplyDelivery",
    "param" : ["patient"]
  },
  {
    "code" : "SupplyRequest",
    "param" : ["subject"]
  },
  {
    "code" : "Task"
  },
  {
    "code" : "TerminologyCapabilities"
  },
  {
    "code" : "TestReport"
  },
  {
    "code" : "TestScript"
  },
  {
    "code" : "ValueSet"
  },
  {
    "code" : "VerificationResult"
  },
  {
    "code" : "VisionPrescription",
    "param" : ["patient"]
  }]
}