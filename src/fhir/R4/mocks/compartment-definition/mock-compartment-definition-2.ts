import { CompartmentDefinition } from "fhir/R4/types/compartment-definition";

// https://hl7.org/fhir/R4/compartmentdefinition-practitioner.json.html
// Compartment Definition for practitioner

export const mockCompartmentDefinition2: CompartmentDefinition = {
    "resourceType" : "CompartmentDefinition",
    "id" : "practitioner",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "url" : "http://hl7.org/fhir/CompartmentDefinition/practitioner",
    "version" : "4.0.1",
    "name" : "Base FHIR compartment definition for Practitioner",
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
    "description" : "There is an instance of the practitioner compartment for each Practitioner resource, and the identity of the compartment is the same as the Practitioner. The set of resources associated with a particular practitioner",
    "code" : "Practitioner",
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
      "param" : ["recorder"]
    },
    {
      "code" : "AllergyIntolerance",
      "param" : ["recorder",
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
      "param" : ["agent"]
    },
    {
      "code" : "Basic",
      "param" : ["author"]
    },
    {
      "code" : "Binary"
    },
    {
      "code" : "BiologicallyDerivedProduct"
    },
    {
      "code" : "BodyStructure"
    },
    {
      "code" : "Bundle"
    },
    {
      "code" : "CapabilityStatement"
    },
    {
      "code" : "CarePlan",
      "param" : ["performer"]
    },
    {
      "code" : "CareTeam",
      "param" : ["participant"]
    },
    {
      "code" : "CatalogEntry"
    },
    {
      "code" : "ChargeItem",
      "param" : ["enterer",
      "performer-actor"]
    },
    {
      "code" : "ChargeItemDefinition"
    },
    {
      "code" : "Claim",
      "param" : ["enterer",
      "provider",
      "payee",
      "care-team"]
    },
    {
      "code" : "ClaimResponse",
      "param" : ["requestor"]
    },
    {
      "code" : "ClinicalImpression",
      "param" : ["assessor"]
    },
    {
      "code" : "CodeSystem"
    },
    {
      "code" : "Communication",
      "param" : ["sender",
      "recipient"]
    },
    {
      "code" : "CommunicationRequest",
      "param" : ["sender",
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
      "param" : ["asserter"]
    },
    {
      "code" : "Consent"
    },
    {
      "code" : "Contract"
    },
    {
      "code" : "Coverage"
    },
    {
      "code" : "CoverageEligibilityRequest",
      "param" : ["enterer",
      "provider"]
    },
    {
      "code" : "CoverageEligibilityResponse",
      "param" : ["requestor"]
    },
    {
      "code" : "DetectedIssue",
      "param" : ["author"]
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
      "param" : ["requester",
      "performer"]
    },
    {
      "code" : "DeviceUseStatement"
    },
    {
      "code" : "DiagnosticReport",
      "param" : ["performer"]
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
      "author",
      "authenticator"]
    },
    {
      "code" : "EffectEvidenceSynthesis"
    },
    {
      "code" : "Encounter",
      "param" : ["practitioner",
      "participant"]
    },
    {
      "code" : "Endpoint"
    },
    {
      "code" : "EnrollmentRequest"
    },
    {
      "code" : "EnrollmentResponse"
    },
    {
      "code" : "EpisodeOfCare",
      "param" : ["care-manager"]
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
      "param" : ["enterer",
      "provider",
      "payee",
      "care-team"]
    },
    {
      "code" : "FamilyMemberHistory"
    },
    {
      "code" : "Flag",
      "param" : ["author"]
    },
    {
      "code" : "Goal"
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
      "code" : "ImagingStudy"
    },
    {
      "code" : "Immunization",
      "param" : ["performer"]
    },
    {
      "code" : "ImmunizationEvaluation"
    },
    {
      "code" : "ImmunizationRecommendation"
    },
    {
      "code" : "ImplementationGuide"
    },
    {
      "code" : "InsurancePlan"
    },
    {
      "code" : "Invoice",
      "param" : ["participant"]
    },
    {
      "code" : "Library"
    },
    {
      "code" : "Linkage",
      "param" : ["author"]
    },
    {
      "code" : "List",
      "param" : ["source"]
    },
    {
      "code" : "Location"
    },
    {
      "code" : "Measure"
    },
    {
      "code" : "MeasureReport"
    },
    {
      "code" : "Media",
      "param" : ["subject",
      "operator"]
    },
    {
      "code" : "Medication"
    },
    {
      "code" : "MedicationAdministration",
      "param" : ["performer"]
    },
    {
      "code" : "MedicationDispense",
      "param" : ["performer",
      "receiver"]
    },
    {
      "code" : "MedicationKnowledge"
    },
    {
      "code" : "MedicationRequest",
      "param" : ["requester"]
    },
    {
      "code" : "MedicationStatement",
      "param" : ["source"]
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
      "code" : "MessageHeader",
      "param" : ["receiver",
      "author",
      "responsible",
      "enterer"]
    },
    {
      "code" : "MolecularSequence"
    },
    {
      "code" : "NamingSystem"
    },
    {
      "code" : "NutritionOrder",
      "param" : ["provider"]
    },
    {
      "code" : "Observation",
      "param" : ["performer"]
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
      "param" : ["general-practitioner"]
    },
    {
      "code" : "PaymentNotice",
      "param" : ["provider"]
    },
    {
      "code" : "PaymentReconciliation",
      "param" : ["requestor"]
    },
    {
      "code" : "Person",
      "param" : ["practitioner"]
    },
    {
      "code" : "PlanDefinition"
    },
    {
      "code" : "Practitioner",
      "param" : ["{def}"]
    },
    {
      "code" : "PractitionerRole",
      "param" : ["practitioner"]
    },
    {
      "code" : "Procedure",
      "param" : ["performer"]
    },
    {
      "code" : "Provenance",
      "param" : ["agent"]
    },
    {
      "code" : "Questionnaire"
    },
    {
      "code" : "QuestionnaireResponse",
      "param" : ["author",
      "source"]
    },
    {
      "code" : "RelatedPerson"
    },
    {
      "code" : "RequestGroup",
      "param" : ["participant",
      "author"]
    },
    {
      "code" : "ResearchDefinition"
    },
    {
      "code" : "ResearchElementDefinition"
    },
    {
      "code" : "ResearchStudy",
      "param" : ["principalinvestigator"]
    },
    {
      "code" : "ResearchSubject"
    },
    {
      "code" : "RiskAssessment",
      "param" : ["performer"]
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
      "param" : ["performer",
      "requester"]
    },
    {
      "code" : "Slot"
    },
    {
      "code" : "Specimen",
      "param" : ["collector"]
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
      "param" : ["supplier",
      "receiver"]
    },
    {
      "code" : "SupplyRequest",
      "param" : ["requester"]
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
      "param" : ["prescriber"]
    }]
  }