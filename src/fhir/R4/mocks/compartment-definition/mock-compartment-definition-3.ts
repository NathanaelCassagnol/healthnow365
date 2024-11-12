import { CompartmentDefinition } from "fhir/R4/types/compartment-definition";

// https://hl7.org/fhir/R4/compartmentdefinition-relatedperson.json.html
// Compartment Definition for relatedPerson

export const mockCompartmentDefinition3: CompartmentDefinition = {
    "resourceType" : "CompartmentDefinition",
    "id" : "relatedPerson",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "url" : "http://hl7.org/fhir/CompartmentDefinition/relatedPerson",
    "version" : "4.0.1",
    "name" : "Base FHIR compartment definition for RelatedPerson",
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
    "description" : "There is an instance of the relatedPerson compartment for each relatedPerson resource, and the identity of the compartment is the same as the relatedPerson. The set of resources associated with a particular 'related person'",
    "code" : "RelatedPerson",
    "search" : true,
    "resource" : [{
      "code" : "Account"
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
      "param" : ["asserter"]
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
      "code" : "AuditEvent"
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
      "param" : ["payee"]
    },
    {
      "code" : "ClaimResponse"
    },
    {
      "code" : "ClinicalImpression"
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
      "param" : ["author"]
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
      "code" : "Coverage",
      "param" : ["policy-holder",
      "subscriber",
      "payor"]
    },
    {
      "code" : "CoverageEligibilityRequest"
    },
    {
      "code" : "CoverageEligibilityResponse"
    },
    {
      "code" : "DetectedIssue"
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
      "code" : "DeviceRequest"
    },
    {
      "code" : "DeviceUseStatement"
    },
    {
      "code" : "DiagnosticReport"
    },
    {
      "code" : "DocumentManifest",
      "param" : ["author",
      "recipient"]
    },
    {
      "code" : "DocumentReference",
      "param" : ["author"]
    },
    {
      "code" : "EffectEvidenceSynthesis"
    },
    {
      "code" : "Encounter",
      "param" : ["participant"]
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
      "code" : "EpisodeOfCare"
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
      "param" : ["payee"]
    },
    {
      "code" : "FamilyMemberHistory"
    },
    {
      "code" : "Flag"
    },
    {
      "code" : "Goal"
    },
    {
      "code" : "GraphDefinition"
    },
    {
      "code" : "Group"
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
      "code" : "Immunization"
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
      "param" : ["recipient"]
    },
    {
      "code" : "Library"
    },
    {
      "code" : "Linkage"
    },
    {
      "code" : "List"
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
      "code" : "Media"
    },
    {
      "code" : "Medication"
    },
    {
      "code" : "MedicationAdministration",
      "param" : ["performer"]
    },
    {
      "code" : "MedicationDispense"
    },
    {
      "code" : "MedicationKnowledge"
    },
    {
      "code" : "MedicationRequest"
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
      "code" : "MessageHeader"
    },
    {
      "code" : "MolecularSequence"
    },
    {
      "code" : "NamingSystem"
    },
    {
      "code" : "NutritionOrder"
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
      "param" : ["link"]
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
      "code" : "RelatedPerson",
      "param" : ["{def}"]
    },
    {
      "code" : "RequestGroup",
      "param" : ["participant"]
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
      "code" : "ResearchSubject"
    },
    {
      "code" : "RiskAssessment"
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
      "param" : ["performer"]
    },
    {
      "code" : "Slot"
    },
    {
      "code" : "Specimen"
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
      "code" : "SupplyDelivery"
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
      "code" : "VisionPrescription"
    }]
  }