import { FHIRResource } from "../types/_resource.types";
import { mockAdverseEvent1 } from "./adverse-event/mock-adverse-event-1";
import { mockAllergyIntolerance1 } from "./allergy-intolerance/mock-allergy-intolerance-1";
import { mockAllergyIntolerance2 } from "./allergy-intolerance/mock-allergy-intolerance-2";
import { mockAllergyIntolerance3 } from "./allergy-intolerance/mock-allergy-intolerance-3";
import { mockAllergyIntoleranceNoKnownAllergy } from "./allergy-intolerance/no-known-allergy";
import { mockAllergyIntoleranceNoKnownDrugAllergy } from "./allergy-intolerance/no-known-drug-allergy";
import { mockAllergyIntoleranceNoKnownLatexAllergy } from "./allergy-intolerance/no-known-latex-allergy";
import { mockAppointmentResponse1 } from "./appointment-response/mock-appointment-response-1";
import { mockAppointmentResponse2 } from "./appointment-response/mock-appointment-response-2";
import { mockAppointment1 } from "./appointment/mock-appointment-1";
import { mockAppointment2 } from "./appointment/mock-appointment-2";
import { mockAppointment3 } from "./appointment/mock-appointment-3";
import { mockAuditEvent1 } from "./audit-event/mock-audit-event-1";
import { mockAuditEvent2 } from "./audit-event/mock-audit-event-2";
import { mockAuditEvent3 } from "./audit-event/mock-audit-event-3";
import { mockAuditEvent4 } from "./audit-event/mock-audit-event-4";
import { mockAuditEvent5 } from "./audit-event/mock-audit-event-5";
import { mockAuditEvent6 } from "./audit-event/mock-audit-event-6";
import { mockAuditEvent7 } from "./audit-event/mock-audit-event-7";
import { mockAuditEvent8 } from "./audit-event/mock-audit-event-8";
import { mockAuditEvent9 } from "./audit-event/mock-audit-event-9";
import { mockBasic1 } from "./basic/mock-basic-1";
import { mockBasic2 } from "./basic/mock-basic-2";
import { mockBasic3 } from "./basic/mock-basic-3";
import { mockBinary1 } from "./binary/mock-binary-1";
import { mockBinary2 } from "./binary/mock-binary-2";
import { BiologicallyDerivedProduct1 } from "./biologically-derived-product/biologically-derived-product-1";
import { mockBodyStructure1 } from "./body-structure/mock-body-structure-1";
import { mockBodyStructure2 } from "./body-structure/mock-body-structure-2";
import { mockBodyStructure3 } from "./body-structure/mock-body-structure-3";
import { mockBundle1 } from "./bundle/mock-bundle-1";
import { mockBundle10 } from "./bundle/mock-bundle-10";
import { mockBundle11 } from "./bundle/mock-bundle-11";
import { mockBundle12 } from "./bundle/mock-bundle-12";
import { mockBundle2 } from "./bundle/mock-bundle-2";
import { mockBundle3 } from "./bundle/mock-bundle-3";
import { mockBundle4 } from "./bundle/mock-bundle-4";
import { mockBundle5 } from "./bundle/mock-bundle-5";
import { mockBundle6 } from "./bundle/mock-bundle-6";
import { mockBundle7 } from "./bundle/mock-bundle-7";
import { mockBundle8 } from "./bundle/mock-bundle-8";
import { mockBundle9 } from "./bundle/mock-bundle-9";
import { mockCapabilityStatement1 } from "./capability-statement/capability-statement-1";
import { mockCapabilityStatement2 } from "./capability-statement/capability-statement-2";
import { mockCapabilityStatement3 } from "./capability-statement/capability-statement-3";
import { mockCapabilityStatement4 } from "./capability-statement/capability-statement-4";
import { mockCapabilityStatement5 } from "./capability-statement/capability-statement-5";
import { mockCapabilityStatement6 } from "./capability-statement/capability-statement-6";
import { mockCapabilityStatement7 } from "./capability-statement/capability-statement-7";
import { mockCapabilityStatement8 } from "./capability-statement/capability-statement-8";
import { mockCapabilityStatement9 } from "./capability-statement/capability-statement-9";
import { mockCarePlan1 } from "./care-plan/mock-care-plan-1";
import { mockCarePlan10 } from "./care-plan/mock-care-plan-10";
import { mockCarePlan11 } from "./care-plan/mock-care-plan-11";
import { mockCarePlan2 } from "./care-plan/mock-care-plan-2";
import { mockCarePlan3 } from "./care-plan/mock-care-plan-3";
import { mockCarePlan4 } from "./care-plan/mock-care-plan-4";
import { mockCarePlan5 } from "./care-plan/mock-care-plan-5";
import { mockCarePlan6 } from "./care-plan/mock-care-plan-6";
import { mockCarePlan7 } from "./care-plan/mock-care-plan-7";
import { mockCarePlan8 } from "./care-plan/mock-care-plan-8";
import { mockCarePlan9 } from "./care-plan/mock-care-plan-9";
import { mockCareTeam1 } from "./care-team/mock-care-team-1";
import { mockCatalogEntry1 } from "./catalog-entry/mock-catalog-entry-1";
import { mockClinicalImpression1 } from "./clinical-impression/mock-clinical-impression-1";
import { mockCodeSystem1 } from "./code-system/mock-code-system-1";
import { mockCodeSystem2 } from "./code-system/mock-code-system-2";
import { mockCodeSystem3 } from "./code-system/mock-code-system-3";
import { mockCodeSystem4 } from "./code-system/mock-code-system-4";
import { mockCodeSystem5 } from "./code-system/mock-code-system-5";
import { mockCommunicationRequest1 } from "./communication-request/mock-communication-request-1";
import { mockCommunicationRequest2 } from "./communication-request/mock-communication-request-2";
import { mockCommunication1 } from "./communication/mock-communication-1";
import { mockCommunication2 } from "./communication/mock-communication-2";
import { mockCommunication3 } from "./communication/mock-communication-3";
import { mockCompartmentDefinition1 } from "./compartment-definition/mock-compartment-definition-1";
import { mockCompartmentDefinition2 } from "./compartment-definition/mock-compartment-definition-2";
import { mockCompartmentDefinition3 } from "./compartment-definition/mock-compartment-definition-3";
import { mockCompartmentDefinition4 } from "./compartment-definition/mock-compartment-definition-4";
import { mockCompartmentDefinition5 } from "./compartment-definition/mock-compartment-definition-5";
import { mockCompartmentDefinition6 } from "./compartment-definition/mock-compartment-definition-6";
import { mockComposition1 } from "./composition/mock-composition-1";
import { mockComposition2Bundle } from "./composition/mock-composition-2";
import { mockComposition3 } from "./composition/mock-composition-3";
import { mockConceptMap1 } from "./concept-map/mock-concept-map-1";
import { mockConceptMap2 } from "./concept-map/mock-concept-map-2";
import { mockConceptMap3 } from "./concept-map/mock-concept-map-3";
import { mockConceptMap4 } from "./concept-map/mock-concept-map-4";
import { mockConceptMap5 } from "./concept-map/mock-concept-map-5";
import { mockCondition1 } from "./condition/mock-condition-1";
import { mockCondition10 } from "./condition/mock-condition-10";
import { mockCondition11 } from "./condition/mock-condition-11";
import { mockCondition12 } from "./condition/mock-condition-12";
import { mockCondition2 } from "./condition/mock-condition-2";
import { mockCondition3 } from "./condition/mock-condition-3";
import { mockCondition4 } from "./condition/mock-condition-4";
import { mockCondition5 } from "./condition/mock-condition-5";
import { mockCondition6 } from "./condition/mock-condition-6";
import { mockCondition7 } from "./condition/mock-condition-7";
import { mockCondition8 } from "./condition/mock-condition-8";
import { mockCondition9 } from "./condition/mock-condition-9";
import { mockConsent1 } from "./consent/mock-consent-1";
import { mockConsent10 } from "./consent/mock-consent-10";
import { mockConsent11 } from "./consent/mock-consent-11";
import { mockConsent12 } from "./consent/mock-consent-12";
import { mockConsent2 } from "./consent/mock-consent-2";
import { mockConsent3 } from "./consent/mock-consent-3";
import { mockConsent4 } from "./consent/mock-consent-4";
import { mockConsent5 } from "./consent/mock-consent-5";
import { mockConsent6 } from "./consent/mock-consent-6";
import { mockConsent7 } from "./consent/mock-consent-7";
import { mockConsent8 } from "./consent/mock-consent-8";
import { mockConsent9 } from "./consent/mock-consent-9";
import { mockDetectedIssue1 } from "./detected-issue/mock-detected-issue-1";
import { mockDetectedIssue2 } from "./detected-issue/mock-detected-issue-2";
import { mockDetectedIssue3 } from "./detected-issue/mock-detected-issue-3";
import { mockDetectedIssue4 } from "./detected-issue/mock-detected-issue-4";
import { mockDeviceMetric1 } from "./device-metric/mock-device-metric-1";
import { mockDeviceRequest1 } from "./device-request/mock-device-request-1";
import { mockDeviceRequest2 } from "./device-request/mock-device-request-2";
import { mockDeviceRequest3 } from "./device-request/mock-device-request-3";
import { mockDeviceRequest4 } from "./device-request/mock-device-request-4";
import { mockDeviceUseStatement } from "./device-use-statement/mock-device-use-statement";
import { mockDevice1 } from "./device/mock-device-1";
import { mockDevice2 } from "./device/mock-device-2";
import { mockDiagnosticReport1Bundle } from "./diagnostic-report/mock-diagnostic-report-1";
import { mockDiagnosticReport10Bundle } from "./diagnostic-report/mock-diagnostic-report-10";
import { mockDiagnosticReport11 } from "./diagnostic-report/mock-diagnostic-report-11";
import { mockDiagnosticReport12 } from "./diagnostic-report/mock-diagnostic-report-12";
import { mockDiagnosticReport13Bundle } from "./diagnostic-report/mock-diagnostic-report-13";
import { mockDiagnosticReport14Bundle } from "./diagnostic-report/mock-diagnostic-report-14";
import { mockDiagnosticReport15Bundle } from "./diagnostic-report/mock-diagnostic-report-15";
import { mockDiagnosticReport16 } from "./diagnostic-report/mock-diagnostic-report-16";
import { mockDiagnosticReport17Bundle } from "./diagnostic-report/mock-diagnostic-report-17";
import { mockDiagnosticReport2Bundle } from "./diagnostic-report/mock-diagnostic-report-2";
import { mockDiagnosticReport3Bundle } from "./diagnostic-report/mock-diagnostic-report-3";
import { mockDiagnosticReport4 } from "./diagnostic-report/mock-diagnostic-report-4";
import { mockDiagnosticReportBundle } from "./diagnostic-report/mock-diagnostic-report-5";
import { mockDiagnosticReport6 } from "./diagnostic-report/mock-diagnostic-report-6";
import { mockDiagnosticReport7Bundle } from "./diagnostic-report/mock-diagnostic-report-7";
import { mockDiagnosticReport8Bundle } from "./diagnostic-report/mock-diagnostic-report-8";
import { mockDiagnosticReport9 } from "./diagnostic-report/mock-diagnostic-report-9";
import { mockDocumentManifest1 } from "./document-manifest/mock-document-manifest-1";
import { mockDocumentManifest2 } from "./document-manifest/mock-document-manifest-2";
import { mockDocumentReference1Bundle } from "./document-reference/mock-document-reference-1";
import { mockDocumentReference2 } from "./document-reference/mock-document-reference-2";
import { mockEncounter1 } from "./encounter/mock-encounter-1";
import { mockEncounter10 } from "./encounter/mock-encounter-10";
import { mockEncounter2 } from "./encounter/mock-encounter-2";
import { mockEncounter3 } from "./encounter/mock-encounter-3";
import { mockEncounter4 } from "./encounter/mock-encounter-4";
import { mockEncounter5 } from "./encounter/mock-encounter-5";
import { mockEncounter6 } from "./encounter/mock-encounter-6";
import { mockEncounter7 } from "./encounter/mock-encounter-7";
import { mockEncounter8 } from "./encounter/mock-encounter-8";
import { mockEncounter9 } from "./encounter/mock-encounter-9";
import { mockEndpoint1 } from "./endpoint/mock-endpoint-1";
import { mockEndpoint2Bundle } from "./endpoint/mock-endpoint-2";
import { mockEndpoint3 } from "./endpoint/mock-endpoint-3";
import { mockEndpoint4 } from "./endpoint/mock-endpoint-4";
import { mockEndpoint5 } from "./endpoint/mock-endpoint-5";
import { mockEpisodeOfCare1 } from "./episode-of-care/mock-episode-of-care-1";
import { mockExampleScenario1 } from "./examplescenario/mock-example-scenario-1";
import { mockFamilyMemberHistory1 } from "./family-member-history/mock-family-member-history-1";
import { mockFamilyMemberHistory2 } from "./family-member-history/mock-family-member-history-2";
import { mockFlag1 } from "./flag/mock-flag-1";
import { mockFlag2 } from "./flag/mock-flag-2";
import { mockGoal1 } from "./goal/mock-goal-1";
import { mockGoal2 } from "./goal/mock-goal-2";
import { mockGraphDefinition1 } from "./graph-definition/mock-graph-definition-1";
import { mockGroup1 } from "./group/group-1";
import { mockGroup2 } from "./group/group-2";
import { mockGroup3 } from "./group/group-3";
import { mockGroup4 } from "./group/group-4";
import { mockGuidanceResponse1 } from "./guidance-response/mock-guidance-response";
import { mockHealthcareService } from "./healthcare-service/healthcare-service-1";
import { mockImagingStudy1 } from "./imaging-study/mock-imaging-study-1";
import { mockImagingStudy2 } from "./imaging-study/mock-imaging-study-2";
import { mockImmunizationEvaluation1 } from "./immunization-evaluation/mock-immunization-evaluation-1";
import { mockImmunizationEvaluation2 } from "./immunization-evaluation/mock-immunization-evaluation-2";
import { mockImmunizationRecommendation1 } from "./immunization-recommendation/mock-immunization-recommendation-1";
import { mockImmunizationRecommendation2 } from "./immunization-recommendation/mock-immunization-recommendation-2";
import { mockImmunization1 } from "./immunization/mock-immunization-1";
import { mockImmunization2 } from "./immunization/mock-immunization-2";
import { mockImmunization3 } from "./immunization/mock-immunization-3";
import { mockImmunization4 } from "./immunization/mock-immunization-4";
import { mockImmunization5 } from "./immunization/mock-immunization-5";
import { mockImplementationGuide1 } from "./implementation-guide/mock-implementation-guide-1";
import { mockLibrary1 } from "./library/mock-library-1";
import { mockLibrary10 } from "./library/mock-library-10";
import { mockLibrary11 } from "./library/mock-library-11";
import { mockLibrary12 } from "./library/mock-library-12";
import { mockLibrary13 } from "./library/mock-library-13";
import { mockLibrary14 } from "./library/mock-library-14";
import { mockLibrary15 } from "./library/mock-library-15";
import { mockLibrary16 } from "./library/mock-library-16";
import { mockLibrary17 } from "./library/mock-library-17";
import { mockLibrary18 } from "./library/mock-library-18";
import { mockLibrary19 } from "./library/mock-library-19";
import { mockLibrary2 } from "./library/mock-library-2";
import { mockLibrary20 } from "./library/mock-library-20";
import { mockLibrary21 } from "./library/mock-library-21";
import { mockLibrary3 } from "./library/mock-library-3";
import { mockLibrary4 } from "./library/mock-library-4";
import { mockLibrary5 } from "./library/mock-library-5";
import { mockLibrary6 } from "./library/mock-library-6";
import { mockLibrary7 } from "./library/mock-library-7";
import { mockLibrary8 } from "./library/mock-library-8";
import { mockLibrary9 } from "./library/mock-library-9";
import { mockLinkage1 } from "./linkage/mock-linkage-1";
import { mockList1 } from "./list/mock-list-1";
import { mockList10 } from "./list/mock-list-10";
import { mockList2 } from "./list/mock-list-2";
import { mockList3 } from "./list/mock-list-3";
import { mockList4 } from "./list/mock-list-4";
import { mockList5 } from "./list/mock-list-5";
import { mockList6 } from "./list/mock-list-6";
import { mockList7 } from "./list/mock-list-7";
import { mockList8 } from "./list/mock-list-8";
import { mockList9 } from "./list/mock-list-9";
import { mockMedia1 } from "./media/mock-media-1";
import { mockMedia2 } from "./media/mock-media-2";
import { mockMedia3 } from "./media/mock-media-3";
import { mockMedia4 } from "./media/mock-media-4";
import { mockMedicationAdministration1 } from "./medication-administration/mock-medication-administration-1";
import { mockMedicationAdministration10 } from "./medication-administration/mock-medication-administration-10";
import { mockMedicationAdministration11 } from "./medication-administration/mock-medication-administration-11";
import { mockMedicationAdministration12 } from "./medication-administration/mock-medication-administration-12";
import { mockMedicationAdministration13 } from "./medication-administration/mock-medication-administration-13";
import { mockMedicationAdministration14 } from "./medication-administration/mock-medication-administration-14";
import { mockMedicationAdministration2 } from "./medication-administration/mock-medication-administration-2";
import { mockMedicationAdministration3 } from "./medication-administration/mock-medication-administration-3";
import { mockMedicationAdministration4 } from "./medication-administration/mock-medication-administration-4";
import { mockMedicationAdministration5 } from "./medication-administration/mock-medication-administration-5";
import { mockMedicationAdministration6 } from "./medication-administration/mock-medication-administration-6";
import { mockMedicationAdministration7 } from "./medication-administration/mock-medication-administration-7";
import { mockMedicationAdministration8 } from "./medication-administration/mock-medication-administration-8";
import { mockMedicationAdministration9 } from "./medication-administration/mock-medication-administration-9";
import { mockMedicationDispense1 } from "./medication-dispense/mock-medication-dispense-1";
import { mockMedicationDispense10 } from "./medication-dispense/mock-medication-dispense-10";
import { mockMedicationDispense11 } from "./medication-dispense/mock-medication-dispense-11";
import { mockMedicationDispense12 } from "./medication-dispense/mock-medication-dispense-12";
import { mockMedicationDispense13 } from "./medication-dispense/mock-medication-dispense-13";
import { mockMedicationDispense14 } from "./medication-dispense/mock-medication-dispense-14";
import { mockMedicationDispense15 } from "./medication-dispense/mock-medication-dispense-15";
import { mockMedicationDispense16 } from "./medication-dispense/mock-medication-dispense-16";
import { mockMedicationDispense17 } from "./medication-dispense/mock-medication-dispense-17";
import { mockMedicationDispense18 } from "./medication-dispense/mock-medication-dispense-18";
import { mockMedicationDispense19 } from "./medication-dispense/mock-medication-dispense-19";
import { mockMedicationDispense2 } from "./medication-dispense/mock-medication-dispense-2";
import { mockMedicationDispense20 } from "./medication-dispense/mock-medication-dispense-20";
import { mockMedicationDispense21 } from "./medication-dispense/mock-medication-dispense-21";
import { mockMedicationDispense22 } from "./medication-dispense/mock-medication-dispense-22";
import { mockMedicationDispense23 } from "./medication-dispense/mock-medication-dispense-23";
import { mockMedicationDispense24 } from "./medication-dispense/mock-medication-dispense-24";
import { mockMedicationDispense25 } from "./medication-dispense/mock-medication-dispense-25";
import { mockMedicationDispense26 } from "./medication-dispense/mock-medication-dispense-26";
import { mockMedicationDispense27 } from "./medication-dispense/mock-medication-dispense-27";
import { mockMedicationDispense28 } from "./medication-dispense/mock-medication-dispense-28";
import { mockMedicationDispense29 } from "./medication-dispense/mock-medication-dispense-29";
import { mockMedicationDispense3 } from "./medication-dispense/mock-medication-dispense-3";
import { mockMedicationDispense30 } from "./medication-dispense/mock-medication-dispense-30";
import { mockMedicationDispense31 } from "./medication-dispense/mock-medication-dispense-31";
import { mockMedicationDispense4 } from "./medication-dispense/mock-medication-dispense-4";
import { mockMedicationDispense5 } from "./medication-dispense/mock-medication-dispense-5";
import { mockMedicationDispense6 } from "./medication-dispense/mock-medication-dispense-6";
import { mockMedicationDispense7 } from "./medication-dispense/mock-medication-dispense-7";
import { mockMedicationDispense8 } from "./medication-dispense/mock-medication-dispense-8";
import { mockMedicationDispense9 } from "./medication-dispense/mock-medication-dispense-9";
import { mockMedicationKnowledge1 } from "./medication-knowledge/mock-medication-knowledge-1";
import { mockMedicationRequest1 } from "./medication-request/mock-medication-request-1";
import { mockMedicationRequest10 } from "./medication-request/mock-medication-request-10";
import { mockMedicationRequest11 } from "./medication-request/mock-medication-request-11";
import { mockMedicationRequest12 } from "./medication-request/mock-medication-request-12";
import { mockMedicationRequest13 } from "./medication-request/mock-medication-request-13";
import { mockMedicationRequest14 } from "./medication-request/mock-medication-request-14";
import { mockMedicationRequest15 } from "./medication-request/mock-medication-request-15";
import { mockMedicationRequest16 } from "./medication-request/mock-medication-request-16";
import { mockMedicationRequest17 } from "./medication-request/mock-medication-request-17";
import { mockMedicationRequest18 } from "./medication-request/mock-medication-request-18";
import { mockMedicationRequest19 } from "./medication-request/mock-medication-request-19";
import { mockMedicationRequest2 } from "./medication-request/mock-medication-request-2";
import { mockMedicationRequest20 } from "./medication-request/mock-medication-request-20";
import { mockMedicationRequest21 } from "./medication-request/mock-medication-request-21";
import { mockMedicationRequest22 } from "./medication-request/mock-medication-request-22";
import { mockMedicationRequest23 } from "./medication-request/mock-medication-request-23";
import { mockMedicationRequest24 } from "./medication-request/mock-medication-request-24";
import { mockMedicationRequest25 } from "./medication-request/mock-medication-request-25";
import { mockMedicationRequest26 } from "./medication-request/mock-medication-request-26";
import { mockMedicationRequest27 } from "./medication-request/mock-medication-request-27";
import { mockMedicationRequest28 } from "./medication-request/mock-medication-request-28";
import { mockMedicationRequest29 } from "./medication-request/mock-medication-request-29";
import { mockMedicationRequest3 } from "./medication-request/mock-medication-request-3";
import { mockMedicationRequest30 } from "./medication-request/mock-medication-request-30";
import { mockMedicationRequest31 } from "./medication-request/mock-medication-request-31";
import { mockMedicationRequest32 } from "./medication-request/mock-medication-request-32";
import { mockMedicationRequest33 } from "./medication-request/mock-medication-request-33";
import { mockMedicationRequest34 } from "./medication-request/mock-medication-request-34";
import { mockMedicationRequest35 } from "./medication-request/mock-medication-request-35";
import { mockMedicationRequest36 } from "./medication-request/mock-medication-request-36";
import { mockMedicationRequest37 } from "./medication-request/mock-medication-request-37";
import { mockMedicationRequest38 } from "./medication-request/mock-medication-request-38";
import { mockMedicationRequest39 } from "./medication-request/mock-medication-request-39";
import { mockMedicationRequest4 } from "./medication-request/mock-medication-request-4";
import { mockMedicationRequest40 } from "./medication-request/mock-medication-request-40";
import { mockMedicationRequest5 } from "./medication-request/mock-medication-request-5";
import { mockMedicationRequest6 } from "./medication-request/mock-medication-request-6";
import { mockMedicationRequest7 } from "./medication-request/mock-medication-request-7";
import { mockMedicationRequest8 } from "./medication-request/mock-medication-request-8";
import { mockMedicationRequest9 } from "./medication-request/mock-medication-request-9";
import { mockMedicationStatement1 } from "./medication-statement/mock-medication-statement-1";
import { mockMedicationStatement2 } from "./medication-statement/mock-medication-statement-2";
import { mockMedicationStatement3 } from "./medication-statement/mock-medication-statement-3";
import { mockMedicationStatement4 } from "./medication-statement/mock-medication-statement-4";
import { mockMedicationStatement5 } from "./medication-statement/mock-medication-statement-5";
import { mockMedicationStatement6 } from "./medication-statement/mock-medication-statement-6";
import { mockMedicationStatement7 } from "./medication-statement/mock-medication-statement-7";
import { mockMedicationCompounded1 } from "./medication/mock-medication-compounded-1";
import { mockMedicationCompounded2 } from "./medication/mock-medication-compounded-2";
import { mockMedicationCompounded3 } from "./medication/mock-medication-compounded-3";
import { mockMedicationGeneric1 } from "./medication/mock-medication-generic-1";
import { mockMedicationGeneric2 } from "./medication/mock-medication-generic-2";
import { mockMedicationGeneric3 } from "./medication/mock-medication-generic-3";
import { mockMedicationGeneric4 } from "./medication/mock-medication-generic-4";
import { mockMedicationGeneric5 } from "./medication/mock-medication-generic-5";
import { mockMedicationGeneric6 } from "./medication/mock-medication-generic-6";
import { mockMedicationGeneric7 } from "./medication/mock-medication-generic-7";
import { mockMedicationGeneric8 } from "./medication/mock-medication-generic-8";
import { mockMedicationGeneric9 } from "./medication/mock-medication-generic-9";
import { mockMedicationManufactured1 } from "./medication/mock-medication-manufactured-1";
import { mockMedicationManufactured10 } from "./medication/mock-medication-manufactured-10";
import { mockMedicationManufactured2 } from "./medication/mock-medication-manufactured-2";
import { mockMedicationManufactured3 } from "./medication/mock-medication-manufactured-3";
import { mockMedicationManufactured4 } from "./medication/mock-medication-manufactured-4";
import { mockMedicationManufactured5 } from "./medication/mock-medication-manufactured-5";
import { mockMedicationManufactured6 } from "./medication/mock-medication-manufactured-6";
import { mockMedicationManufactured7 } from "./medication/mock-medication-manufactured-7";
import { mockMedicationManufactured8 } from "./medication/mock-medication-manufactured-8";
import { mockMedicationManufactured9 } from "./medication/mock-medication-manufactured-9";
import { mockMedicationNameOnly } from "./medication/mock-medication-name-only";
import { mockMessageDefinition1 } from "./message-definition/mock-message-definition-1";
import { mockMessageDefinition2 } from "./message-definition/mock-message-definition-2";
import { mockMessageDefinition3 } from "./message-definition/mock-message-definition-3";
import { mockMessageHeader1 } from "./message-header/mock-message-header-1";
import { mockMessageHeader2Bundle } from "./message-header/mock-message-header-2";
import { mockMessageHeader3Bundle } from "./message-header/mock-message-header-3";
import { mockMolecularSequence1 } from "./molecular-sequence/mock-molecular-sequence-1";
import { mockMolecularSequence10 } from "./molecular-sequence/mock-molecular-sequence-10";
import { mockMolecularSequence11 } from "./molecular-sequence/mock-molecular-sequence-11";
import { mockMolecularSequence12 } from "./molecular-sequence/mock-molecular-sequence-12";
import { mockMolecularSequence13 } from "./molecular-sequence/mock-molecular-sequence-13";
import { mockMolecularSequence14 } from "./molecular-sequence/mock-molecular-sequence-14";
import { mockMolecularSequence15 } from "./molecular-sequence/mock-molecular-sequence-15";
import { mockMolecularSequence16 } from "./molecular-sequence/mock-molecular-sequence-16";
import { mockMolecularSequence17 } from "./molecular-sequence/mock-molecular-sequence-17";
import { mockMolecularSequence2 } from "./molecular-sequence/mock-molecular-sequence-2";
import { mockMolecularSequence3 } from "./molecular-sequence/mock-molecular-sequence-3";
import { mockMolecularSequence4 } from "./molecular-sequence/mock-molecular-sequence-4";
import { mockMolecularSequence5 } from "./molecular-sequence/mock-molecular-sequence-5";
import { mockMolecularSequence6 } from "./molecular-sequence/mock-molecular-sequence-6";
import { mockMolecularSequence7 } from "./molecular-sequence/mock-molecular-sequence-7";
import { mockMolecularSequence8 } from "./molecular-sequence/mock-molecular-sequence-8";
import { mockMolecularSequence9 } from "./molecular-sequence/mock-molecular-sequence-9";
import { mockNamingSystem1 } from "./naming-system/mock-naming-system-1";
import { mockNamingSystem2 } from "./naming-system/mock-naming-system-2";
import { mockNamingSystem3Bundle } from "./naming-system/mock-naming-system-3";
import { mockNamingSystem4Bundle } from "./naming-system/mock-naming-system-4";
import { mockNutritionOrder1 } from "./nutrition-order/mock-nutrition-order-1";
import { mockNutritionOrder10 } from "./nutrition-order/mock-nutrition-order-10";
import { mockNutritionOrder11 } from "./nutrition-order/mock-nutrition-order-11";
import { mockNutritionOrder12 } from "./nutrition-order/mock-nutrition-order-12";
import { mockNutritionOrder13 } from "./nutrition-order/mock-nutrition-order-13";
import { mockNutritionOrder2 } from "./nutrition-order/mock-nutrition-order-2";
import { mockNutritionOrder3 } from "./nutrition-order/mock-nutrition-order-3";
import { mockNutritionOrder4 } from "./nutrition-order/mock-nutrition-order-4";
import { mockNutritionOrder5 } from "./nutrition-order/mock-nutrition-order-5";
import { mockNutritionOrder6 } from "./nutrition-order/mock-nutrition-order-6";
import { mockNutritionOrder7 } from "./nutrition-order/mock-nutrition-order-7";
import { mockNutritionOrder8 } from "./nutrition-order/mock-nutrition-order-8";
import { mockNutritionOrder9 } from "./nutrition-order/mock-nutrition-order-9";
import { allObservations } from "./observation/all-observations";
import { mockOperationDefinition1 } from "./operation-definition/mock-operation-definition-1";
import { mockOperationDefinition2 } from "./operation-definition/mock-operation-definition-2";
import { mockOperationDefinition3 } from "./operation-definition/mock-operation-definition-3";
import { mockOperationDefinition4 } from "./operation-definition/mock-operation-definition-4";
import { mockOperationDefinition5 } from "./operation-definition/mock-operation-definition-5";
import { mockOperationDefinition6 } from "./operation-definition/mock-operation-definition-6";
import { mockOperationDefinition7 } from "./operation-definition/mock-operation-definition-7";
import { mockOperationDefinition8 } from "./operation-definition/mock-operation-definition-8";
import { mockOperationDefinition9 } from "./operation-definition/mock-operation-definition-9";
import { mockOperationOutcome1 } from "./operation-outcome/mock-operation-outcome-1";
import { mockOperationOutcome2 } from "./operation-outcome/mock-operation-outcome-2";
import { mockOperationOutcome3 } from "./operation-outcome/mock-operation-outcome-3";
import { mockOperationOutcome4 } from "./operation-outcome/mock-operation-outcome-4";
import { mockOperationOutcome5 } from "./operation-outcome/mock-operation-outcome-5";
import { mockOperationOutcome6 } from "./operation-outcome/mock-operation-outcome-6";
import { mockOrganizationAffiliation1 } from "./organization-affiliation/organization-affiliation-1";
import { mockOrganizationAffiliation2 } from "./organization-affiliation/organization-affiliation-2";
import { mockOrganizationAffiliation3 } from "./organization-affiliation/organization-affiliation-3";
import { mockOrganization1 } from "./organization/mock-organization-1";
import { mockOrganization10 } from "./organization/mock-organization-10";
import { mockOrganization11 } from "./organization/mock-organization-11";
import { mockOrganization12 } from "./organization/mock-organization-12";
import { mockOrganization13 } from "./organization/mock-organization-13";
import { mockOrganization2 } from "./organization/mock-organization-2";
import { mockOrganization3 } from "./organization/mock-organization-3";
import { mockOrganization4 } from "./organization/mock-organization-4";
import { mockOrganization5 } from "./organization/mock-organization-5";
import { mockOrganization6 } from "./organization/mock-organization-6";
import { mockOrganization7 } from "./organization/mock-organization-7";
import { mockOrganization8 } from "./organization/mock-organization-8";
import { mockOrganization9 } from "./organization/mock-organization-9";
import { mockParameters1 } from "./parameters/mock-parameters-1";
import { mockPatient1 } from "./patient/mock-patient-1";
import { mockPatient10 } from "./patient/mock-patient-10";
import { mockPatient11 } from "./patient/mock-patient-11";
import { mockPatient12 } from "./patient/mock-patient-12";
import { mockPatient13 } from "./patient/mock-patient-13";
import { mockPatient14 } from "./patient/mock-patient-14";
import { mockPatient15 } from "./patient/mock-patient-15";
import { mockPatient16 } from "./patient/mock-patient-16";
import { mockPatient17 } from "./patient/mock-patient-17";
import { mockPatient18 } from "./patient/mock-patient-18";
import { mockPatient19 } from "./patient/mock-patient-19";
import { mockPatient2 } from "./patient/mock-patient-2";
import { mockPatient20 } from "./patient/mock-patient-20";
import { mockPatient21 } from "./patient/mock-patient-21";
import { mockPatient22 } from "./patient/mock-patient-22";
import { mockPatient23 } from "./patient/mock-patient-23";
import { mockPatient24 } from "./patient/mock-patient-24";
import { mockPatient3 } from "./patient/mock-patient-3";
import { mockPatient4 } from "./patient/mock-patient-4";
import { mockPatient5 } from "./patient/mock-patient-5";
import { mockPatient6Bundle } from "./patient/mock-patient-6";
import { mockPatient7Bundle } from "./patient/mock-patient-7";
import { mockPatient8 } from "./patient/mock-patient-8";
import { mockPatient9 } from "./patient/mock-patient-9";
import { mockPerson1 } from "./person/mock-person-1";
import { mockPerson2 } from "./person/mock-person-2";
import { mockPerson3 } from "./person/mock-person-3";
import { mockPersonPatientPortal } from "./person/mock-person-patient-portal";
import { mockPersonProviderDirectory } from "./person/mock-person-provider-directory";
import { mockPractitionerRole1 } from "./practitioner-role/practitioner-role-1";
import { mockPractitionerRole2Bundle } from "./practitioner-role/practitioner-role-2";
import { mockPractitioner1 } from "./practitioner/practitioner-1";
import { mockPractitioner10 } from "./practitioner/practitioner-10";
import { mockPractitioner11 } from "./practitioner/practitioner-11";
import { mockPractitioner12 } from "./practitioner/practitioner-12";
import { mockPractitioner13 } from "./practitioner/practitioner-13";
import { mockPractitioner14 } from "./practitioner/practitioner-14";
import { mockPractitioner15 } from "./practitioner/practitioner-15";
import { mockPractitioner2 } from "./practitioner/practitioner-2";
import { mockPractitioner3Bundle } from "./practitioner/practitioner-3";
import { mockPractitioner4 } from "./practitioner/practitioner-4";
import { mockPractitioner5 } from "./practitioner/practitioner-5";
import { mockPractitioner6 } from "./practitioner/practitioner-6";
import { mockPractitioner7 } from "./practitioner/practitioner-7";
import { mockPractitioner8 } from "./practitioner/practitioner-8";
import { mockPractitioner9 } from "./practitioner/practitioner-9";
import { mockProcedure1 } from "./procedure/mock-procedure-1";
import { mockProcedure10 } from "./procedure/mock-procedure-10";
import { mockProcedure11 } from "./procedure/mock-procedure-11";
import { mockProcedure12 } from "./procedure/mock-procedure-12";
import { mockProcedure13 } from "./procedure/mock-procedure-13";
import { mockProcedure14 } from "./procedure/mock-procedure-14";
import { mockProcedure15 } from "./procedure/mock-procedure-15";
import { mockProcedure16 } from "./procedure/mock-procedure-16";
import { mockProcedure2 } from "./procedure/mock-procedure-2";
import { mockProcedure3 } from "./procedure/mock-procedure-3";
import { mockProcedure4 } from "./procedure/mock-procedure-4";
import { mockProcedure5 } from "./procedure/mock-procedure-5";
import { mockProcedure6 } from "./procedure/mock-procedure-6";
import { mockProcedure7 } from "./procedure/mock-procedure-7";
import { mockProcedure8 } from "./procedure/mock-procedure-8";
import { mockProcedure9 } from "./procedure/mock-procedure-9";
import { mockProvenance1 } from "./provenance/mock-provenance-1";
import { mockProvenance2 } from "./provenance/mock-provenance-2";
import { mockProvenance3 } from "./provenance/mock-provenance-3";
import { mockProvenance4 } from "./provenance/mock-provenance-4";
import { mockProvenance5 } from "./provenance/mock-provenance-5";
import { mockQuestionnaireResponse1 } from "./questionnaire-response/mock-questionnaire-response-1";
import { mockQuestionnaireResponse2 } from "./questionnaire-response/mock-questionnaire-response-2";
import { mockQuestionnaireResponse3 } from "./questionnaire-response/mock-questionnaire-response-3";
import { mockQuestionnaireResponse4 } from "./questionnaire-response/mock-questionnaire-response-4";
import { mockQuestionnaireResponse5 } from "./questionnaire-response/mock-questionnaire-response-5";
import { mockRelatedPerson1 } from "./related-person/related-person-1";
import { mockRelatedPerson2 } from "./related-person/related-person-2";
import { mockRelatedPerson3 } from "./related-person/related-person-3";
import { mockRelatedPerson4 } from "./related-person/related-person-4";
import { mockRelatedPerson5 } from "./related-person/related-person-5";
import { mockRequestGroup1 } from "./request-group/mock-request-group-1";
import { mockRequestGroup2 } from "./request-group/mock-request-group-2";
import { mockRiskAssessment1 } from "./risk-assessment/mock-risk-assessment-1";
import { mockRiskAssessment2 } from "./risk-assessment/mock-risk-assessment-2";
import { mockRiskAssessment3 } from "./risk-assessment/mock-risk-assessment-3";
import { mockRiskAssessment4 } from "./risk-assessment/mock-risk-assessment-4";
import { mockRiskAssessment5 } from "./risk-assessment/mock-risk-assessment-5";
import { mockRiskAssessment6 } from "./risk-assessment/mock-risk-assessment-6";
import { mockSchedule1 } from "./schedule/mock-schedule-1";
import { mockSchedule2 } from "./schedule/mock-schedule-2";
import { mockSchedule3 } from "./schedule/mock-schedule-3";
import { mockSearchParameter1 } from "./search-parameter/mock-search-parameter-1";
import { mockSearchParameter2 } from "./search-parameter/mock-search-parameter-2";
import { mockSearchParameter3 } from "./search-parameter/mock-search-parameter-3";
import { mockSearchParameter4 } from "./search-parameter/mock-search-parameter-4";
import { mockServiceRequest1 } from "./service-request/mock-service-request-1";
import { mockServiceRequest10 } from "./service-request/mock-service-request-10";
import { mockServiceRequest11 } from "./service-request/mock-service-request-11";
import { mockServiceRequest12 } from "./service-request/mock-service-request-12";
import { mockServiceRequest13 } from "./service-request/mock-service-request-13";
import { mockServiceRequest14 } from "./service-request/mock-service-request-14";
import { mockServiceRequest15 } from "./service-request/mock-service-request-15";
import { mockServiceRequest16 } from "./service-request/mock-service-request-16";
import { mockServiceRequest17 } from "./service-request/mock-service-request-17";
import { mockServiceRequest18 } from "./service-request/mock-service-request-18";
import { mockServiceRequest19 } from "./service-request/mock-service-request-19";
import { mockServiceRequest2 } from "./service-request/mock-service-request-2";
import { mockServiceRequest20 } from "./service-request/mock-service-request-20";
import { mockServiceRequest3 } from "./service-request/mock-service-request-3";
import { mockServiceRequest4 } from "./service-request/mock-service-request-4";
import { mockServiceRequest5 } from "./service-request/mock-service-request-5";
import { mockServiceRequest6 } from "./service-request/mock-service-request-6";
import { mockServiceRequest7 } from "./service-request/mock-service-request-7";
import { mockServiceRequest8 } from "./service-request/mock-service-request-8";
import { mockServiceRequest9 } from "./service-request/mock-service-request-9";
import { mockSlot1 } from "./slot/mock-slot-1";
import { mockSlot2 } from "./slot/mock-slot-2";
import { mockSlot3 } from "./slot/mock-slot-3";
import { mockSlot4 } from "./slot/mock-slot-4";
import { mockSpecimen1 } from "./specimen/mock-specimen-1";
import { mockSpecimen2 } from "./specimen/mock-specimen-2";
import { mockSpecimen3 } from "./specimen/mock-specimen-3";
import { mockSpecimen4 } from "./specimen/mock-specimen-4";
import { mockSpecimen5 } from "./specimen/mock-specimen-5";
import { mockStructureDefinitionAbstract1 } from "./structure-definition/abstract/mock-structure-definition-abstract-1";
import { mockStructureDefinitionAbstract2 } from "./structure-definition/abstract/mock-structure-definition-abstract-2";
import { mockStructureDefinitionAbstract3 } from "./structure-definition/abstract/mock-structure-definition-abstract-3";
import { mockStructureDefinitionAbstract4 } from "./structure-definition/abstract/mock-structure-definition-abstract-4";
import { mockStructureDefinitionData1 } from "./structure-definition/data/mock-structure-definition-data-1";
import { mockStructureDefinitionData10 } from "./structure-definition/data/mock-structure-definition-data-10";
import { mockStructureDefinitionData11 } from "./structure-definition/data/mock-structure-definition-data-11";
import { mockStructureDefinitionData12 } from "./structure-definition/data/mock-structure-definition-data-12";
import { mockStructureDefinitionData13 } from "./structure-definition/data/mock-structure-definition-data-13";
import { mockStructureDefinitionData14 } from "./structure-definition/data/mock-structure-definition-data-14";
import { mockStructureDefinitionData15 } from "./structure-definition/data/mock-structure-definition-data-15";
import { mockStructureDefinitionData16 } from "./structure-definition/data/mock-structure-definition-data-16";
import { mockStructureDefinitionData17 } from "./structure-definition/data/mock-structure-definition-data-17";
import { mockStructureDefinitionData18 } from "./structure-definition/data/mock-structure-definition-data-18";
import { mockStructureDefinitionData19 } from "./structure-definition/data/mock-structure-definition-data-19";
import { mockStructureDefinitionData2 } from "./structure-definition/data/mock-structure-definition-data-2";
import { mockStructureDefinitionData20 } from "./structure-definition/data/mock-structure-definition-data-20";
import { mockStructureDefinitionData21 } from "./structure-definition/data/mock-structure-definition-data-21";
import { mockStructureDefinitionData22 } from "./structure-definition/data/mock-structure-definition-data-22";
import { mockStructureDefinitionData23 } from "./structure-definition/data/mock-structure-definition-data-23";
import { mockStructureDefinitionData24 } from "./structure-definition/data/mock-structure-definition-data-24";
import { mockStructureDefinitionData25 } from "./structure-definition/data/mock-structure-definition-data-25";
import { mockStructureDefinitionData26 } from "./structure-definition/data/mock-structure-definition-data-26";
import { mockStructureDefinitionData27 } from "./structure-definition/data/mock-structure-definition-data-27";
import { mockStructureDefinitionData28 } from "./structure-definition/data/mock-structure-definition-data-28";
import { mockStructureDefinitionData29 } from "./structure-definition/data/mock-structure-definition-data-29";
import { mockStructureDefinitionData3 } from "./structure-definition/data/mock-structure-definition-data-3";
import { mockStructureDefinitionData30 } from "./structure-definition/data/mock-structure-definition-data-30";
import { mockStructureDefinitionData31 } from "./structure-definition/data/mock-structure-definition-data-31";
import { mockStructureDefinitionData32 } from "./structure-definition/data/mock-structure-definition-data-32";
import { mockStructureDefinitionData33 } from "./structure-definition/data/mock-structure-definition-data-33";
import { mockStructureDefinitionData34 } from "./structure-definition/data/mock-structure-definition-data-34";
import { mockStructureDefinitionData35 } from "./structure-definition/data/mock-structure-definition-data-35";
import { mockStructureDefinitionData36 } from "./structure-definition/data/mock-structure-definition-data-36";
import { mockStructureDefinitionData37 } from "./structure-definition/data/mock-structure-definition-data-37";
import { mockStructureDefinitionData38 } from "./structure-definition/data/mock-structure-definition-data-38";
import { mockStructureDefinitionData39 } from "./structure-definition/data/mock-structure-definition-data-39";
import { mockStructureDefinitionData4 } from "./structure-definition/data/mock-structure-definition-data-4";
import { mockStructureDefinitionData40 } from "./structure-definition/data/mock-structure-definition-data-40";
import { mockStructureDefinitionData41 } from "./structure-definition/data/mock-structure-definition-data-41";
import { mockStructureDefinitionData5 } from "./structure-definition/data/mock-structure-definition-data-5";
import { mockStructureDefinitionData6 } from "./structure-definition/data/mock-structure-definition-data-6";
import { mockStructureDefinitionData7 } from "./structure-definition/data/mock-structure-definition-data-7";
import { mockStructureDefinitionData8 } from "./structure-definition/data/mock-structure-definition-data-8";
import { mockStructureDefinitionData9 } from "./structure-definition/data/mock-structure-definition-data-9";
import { mockStructureDefinitionPrimitive1 } from "./structure-definition/primitive/mock-structure-definition-primitive-1";
import { mockStructureDefinitionPrimitive10 } from "./structure-definition/primitive/mock-structure-definition-primitive-10";
import { mockStructureDefinitionPrimitive11 } from "./structure-definition/primitive/mock-structure-definition-primitive-11";
import { mockStructureDefinitionPrimitive12 } from "./structure-definition/primitive/mock-structure-definition-primitive-12";
import { mockStructureDefinitionPrimitive13 } from "./structure-definition/primitive/mock-structure-definition-primitive-13";
import { mockStructureDefinitionPrimitive14 } from "./structure-definition/primitive/mock-structure-definition-primitive-14";
import { mockStructureDefinitionPrimitive15 } from "./structure-definition/primitive/mock-structure-definition-primitive-15";
import { mockStructureDefinitionPrimitive16 } from "./structure-definition/primitive/mock-structure-definition-primitive-16";
import { mockStructureDefinitionPrimitive17 } from "./structure-definition/primitive/mock-structure-definition-primitive-17";
import { mockStructureDefinitionPrimitive18 } from "./structure-definition/primitive/mock-structure-definition-primitive-18";
import { mockStructureDefinitionPrimitive19 } from "./structure-definition/primitive/mock-structure-definition-primitive-19";
import { mockStructureDefinitionPrimitive2 } from "./structure-definition/primitive/mock-structure-definition-primitive-2";
import { mockStructureDefinitionPrimitive3 } from "./structure-definition/primitive/mock-structure-definition-primitive-3";
import { mockStructureDefinitionPrimitive4 } from "./structure-definition/primitive/mock-structure-definition-primitive-4";
import { mockStructureDefinitionPrimitive5 } from "./structure-definition/primitive/mock-structure-definition-primitive-5";
import { mockStructureDefinitionPrimitive6 } from "./structure-definition/primitive/mock-structure-definition-primitive-6";
import { mockStructureDefinitionPrimitive7 } from "./structure-definition/primitive/mock-structure-definition-primitive-7";
import { mockStructureDefinitionPrimitive8 } from "./structure-definition/primitive/mock-structure-definition-primitive-8";
import { mockStructureDefinitionPrimitive9 } from "./structure-definition/primitive/mock-structure-definition-primitive-9";
import { mockStructureMap1 } from "./structure-map/mock-structure-map-1";
import { mockStructureMap2 } from "./structure-map/mock-structure-map-2";
import { mockSubscription1 } from "./subscription/mock-subscription-1";
import { mockSubscription2 } from "./subscription/mock-subscription-2";
import { mockSubstance1 } from "./substance/mock-substance-1";
import { mockSubstance2 } from "./substance/mock-substance-2";
import { mockSubstance3 } from "./substance/mock-substance-3";
import { mockSubstance4 } from "./substance/mock-substance-4";
import { mockSubstance5 } from "./substance/mock-substance-5";
import { mockSubstance6 } from "./substance/mock-substance-6";
import { mockSupplyDelivery1 } from "./supply-delivery/mock-supply-delivery-1";
import { mockSupplyDelivery2 } from "./supply-delivery/mock-supply-delivery-2";
import { mockSupplyRequest1 } from "./supply-request/mock-supply-request-1";
import { mockTask1 } from "./task/mock-task-1";
import { mockTask10 } from "./task/mock-task-10";
import { mockTask11 } from "./task/mock-task-11";
import { mockTask12 } from "./task/mock-task-12";
import { mockTask2 } from "./task/mock-task-2";
import { mockTask3 } from "./task/mock-task-3";
import { mockTask4 } from "./task/mock-task-4";
import { mockTask5 } from "./task/mock-task-5";
import { mockTask6 } from "./task/mock-task-6";
import { mockTask7 } from "./task/mock-task-7";
import { mockTask8 } from "./task/mock-task-8";
import { mockTask9 } from "./task/mock-task-9";
import { mockTerminologyCapabilities1 } from "./terminology-capabilities.ts/mock-terminology-capabilities-1";
import { mockValueSet1 } from "./value-set/mock-value-set-1";
import { mockValueSet10 } from "./value-set/mock-value-set-10";
import { mockValueSet2 } from "./value-set/mock-value-set-2";
import { mockValueSet3 } from "./value-set/mock-value-set-3";
import { mockValueSet4 } from "./value-set/mock-value-set-4";
import { mockValueSet5 } from "./value-set/mock-value-set-5";
import { mockValueSet6 } from "./value-set/mock-value-set-6";
import { mockValueSet7 } from "./value-set/mock-value-set-7";
import { mockValueSet8 } from "./value-set/mock-value-set-8";
import { mockValueSet9 } from "./value-set/mock-value-set-9";
import { mockVerificationResult1 } from "./verification-result/mock-verification-result-1";
import { mockVisionPrescription1 } from "./vision-prescription/mock-vision-prescription-1";
import { mockVisionPrescription2 } from "./vision-prescription/mock-vision-prescription-2";


export const AllR4MockAllergies = [
    mockAllergyIntolerance1, mockAllergyIntolerance2, mockAllergyIntolerance3,
    mockAllergyIntoleranceNoKnownAllergy, mockAllergyIntoleranceNoKnownDrugAllergy,
    mockAllergyIntoleranceNoKnownLatexAllergy
];
export const AllR4MockAppointments = [mockAppointment1, mockAppointment2, mockAppointment3];
export const AllR4MockAppointmentResponses = [mockAppointmentResponse1, mockAppointmentResponse2];
export const AllR4MockAuditEvents = [
    mockAuditEvent1, mockAuditEvent2, mockAuditEvent3, mockAuditEvent4, mockAuditEvent5,
    mockAuditEvent6, mockAuditEvent7, mockAuditEvent8, mockAuditEvent9
];
export const AllR4MockBasics = [mockBasic1, mockBasic2, mockBasic3];
export const AllR4MockBinaries = [mockBinary1, mockBinary2];
export const AllR4MockBiologicallyDerivedProducts = [BiologicallyDerivedProduct1];
export const AllR4MockBodyStructures = [mockBodyStructure1, mockBodyStructure2, mockBodyStructure3];
export const AllR4MockBundles = [
    mockBundle1, mockBundle2, mockBundle3, mockBundle4, mockBundle5, mockBundle6,
    mockBundle7, mockBundle8, mockBundle9, mockBundle10, mockBundle11, mockBundle12
];
export const AllR4MockCapabilityStatements = [
    mockCapabilityStatement1, mockCapabilityStatement2, mockCapabilityStatement3, mockCapabilityStatement4,
    mockCapabilityStatement5, mockCapabilityStatement6, mockCapabilityStatement7, mockCapabilityStatement8,
    mockCapabilityStatement9
];
export const AllR4MockCarePlans = [
    mockCarePlan1, mockCarePlan2, mockCarePlan3, mockCarePlan4, mockCarePlan5, mockCarePlan6,
    mockCarePlan7, mockCarePlan8, mockCarePlan9, mockCarePlan10, mockCarePlan11
];
export const AllR4MockCareTeams = [mockCareTeam1];
export const AllR4MockCatalogEntries = [mockCatalogEntry1];
export const AllR4MockClinicalImpressions = [mockClinicalImpression1];
export const AllR4MockCodeSystems = [mockCodeSystem1, mockCodeSystem2, mockCodeSystem3, mockCodeSystem4, mockCodeSystem5];
export const AllR4MockCommunications = [mockCommunication1, mockCommunication2, mockCommunication3];
export const AllR4MockCommunicationRequests = [mockCommunicationRequest1, mockCommunicationRequest2];
export const AllR4MockCompartmentDefinitions = [
    mockCompartmentDefinition1, mockCompartmentDefinition2, mockCompartmentDefinition3, 
    mockCompartmentDefinition4, mockCompartmentDefinition5, mockCompartmentDefinition6
];
export const AllR4MockCompositions = [mockComposition1, mockComposition2Bundle, mockComposition3];
export const AllR4MockConceptMaps = [mockConceptMap1, mockConceptMap2, mockConceptMap3, mockConceptMap4, mockConceptMap5];
export const AllR4MockConditions = [
    mockCondition1, mockCondition2, mockCondition3, mockCondition4, mockCondition5, mockCondition6,
    mockCondition7, mockCondition8, mockCondition9, mockCondition10, mockCondition11, mockCondition12
];
export const AllR4MockConsents = [
    mockConsent1, mockConsent2, mockConsent3, mockConsent4, mockConsent5, mockConsent6,
    mockConsent7, mockConsent8, mockConsent9, mockConsent10, mockConsent11, mockConsent12
];
export const AllR4MockDetectedIssues = [mockDetectedIssue1, mockDetectedIssue2, mockDetectedIssue3, mockDetectedIssue4];
export const AllR4MockDevices = [mockDevice1, mockDevice2];
export const AllR4MockDeviceMetrics = [mockDeviceMetric1];
export const AllR4MockDeviceRequests = [mockDeviceRequest1, mockDeviceRequest2, mockDeviceRequest3, mockDeviceRequest4]
export const AllR4MockDeviceUseStatements = [mockDeviceUseStatement];
export const AllR4MockDiagnosticReports = [
    mockDiagnosticReport1Bundle, mockDiagnosticReport2Bundle, mockDiagnosticReport3Bundle,
    mockDiagnosticReport4, mockDiagnosticReportBundle, mockDiagnosticReport6, mockDiagnosticReport7Bundle,
    mockDiagnosticReport8Bundle, mockDiagnosticReport9, mockDiagnosticReport10Bundle, mockDiagnosticReport11,
    mockDiagnosticReport12, mockDiagnosticReport13Bundle, mockDiagnosticReport14Bundle, mockDiagnosticReport15Bundle,
    mockDiagnosticReport16, mockDiagnosticReport17Bundle
];
export const AllR4MockDocumentManifests = [mockDocumentManifest1, mockDocumentManifest2];
export const AllR4MockDocumentReferences = [mockDocumentReference1Bundle, mockDocumentReference2];
export const AllR4MockEncounters = [
    mockEncounter1, mockEncounter2, mockEncounter3, mockEncounter4, mockEncounter5,
    mockEncounter6, mockEncounter7, mockEncounter8, mockEncounter9, mockEncounter10
];
export const AllR4MockEndpoints = [mockEndpoint1, mockEndpoint2Bundle, mockEndpoint3, mockEndpoint4, mockEndpoint5];
export const AllR4MockEposidesOfCare = [mockEpisodeOfCare1];
export const AllR4MockExampleScenarios = [mockExampleScenario1];
export const AllR4MockFamilyMemberHistories = [mockFamilyMemberHistory1, mockFamilyMemberHistory2];
export const AllR4MockFlags = [mockFlag1, mockFlag2];
export const AllR4MockGoals = [mockGoal1, mockGoal2];
export const AllR4MockGraphDefinitions = [mockGraphDefinition1];
export const AllR4MockGroups = [mockGroup1, mockGroup2, mockGroup3, mockGroup4];
export const AllR4MockGuidanceResponses = [mockGuidanceResponse1];
export const AllR4MockHealthcareServices = [mockHealthcareService];
export const AllR4MockImagingStudies = [mockImagingStudy1, mockImagingStudy2];
export const AllR4MockImmunizations = [
    mockImmunization1, mockImmunization2, mockImmunization3, mockImmunization4, mockImmunization5
];
export const AllR4MockImmunizationEvaluations = [mockImmunizationEvaluation1, mockImmunizationEvaluation2];
export const AllR4MockImmunizationRecommendations = [mockImmunizationRecommendation1, mockImmunizationRecommendation2];
export const AllR4MockImplementationGuides = [mockImplementationGuide1];
export const AllR4MockLibraries = [
    mockLibrary1, mockLibrary2, mockLibrary3, mockLibrary4, mockLibrary5, mockLibrary6, mockLibrary7,
    mockLibrary8, mockLibrary9, mockLibrary10, mockLibrary11, mockLibrary12, mockLibrary13, mockLibrary14,
    mockLibrary15, mockLibrary16, mockLibrary17, mockLibrary18, mockLibrary19, mockLibrary20, mockLibrary21
];
export const AllR4MockLinkages = [mockLinkage1];
export const AllR4MockLists = [mockList1, mockList2, mockList3, mockList4, mockList5, mockList6, mockList7, mockList8, mockList9, mockList10];
export const AllR4MockMedia = [mockMedia1, mockMedia2, mockMedia3, mockMedia4];
export const AllR4MockMedications = [
    mockMedicationCompounded1, mockMedicationCompounded2, mockMedicationCompounded3,
    mockMedicationGeneric1, mockMedicationGeneric2, mockMedicationGeneric3, mockMedicationGeneric4, mockMedicationGeneric5,
    mockMedicationGeneric6, mockMedicationGeneric7, mockMedicationGeneric8, mockMedicationGeneric9,
    mockMedicationManufactured1, mockMedicationManufactured2, mockMedicationManufactured3, mockMedicationManufactured4, mockMedicationManufactured5,
    mockMedicationManufactured6, mockMedicationManufactured7, mockMedicationManufactured8, mockMedicationManufactured9, mockMedicationManufactured10,
    mockMedicationNameOnly
];
export const AllR4MockMedicationAdministrations = [
    mockMedicationAdministration1, mockMedicationAdministration2, mockMedicationAdministration3, mockMedicationAdministration4, mockMedicationAdministration5,
    mockMedicationAdministration6, mockMedicationAdministration7, mockMedicationAdministration8, mockMedicationAdministration9, mockMedicationAdministration10,
    mockMedicationAdministration11, mockMedicationAdministration12, mockMedicationAdministration13, mockMedicationAdministration14
];
export const AllR4MockMedicationDispensations = [
    mockMedicationDispense1, mockMedicationDispense2, mockMedicationDispense3, mockMedicationDispense4, mockMedicationDispense5,
    mockMedicationDispense6, mockMedicationDispense7, mockMedicationDispense8, mockMedicationDispense9, mockMedicationDispense10,
    mockMedicationDispense11, mockMedicationDispense12, mockMedicationDispense13, mockMedicationDispense14, mockMedicationDispense15,
    mockMedicationDispense16, mockMedicationDispense17, mockMedicationDispense18, mockMedicationDispense19, mockMedicationDispense20,
    mockMedicationDispense21, mockMedicationDispense22, mockMedicationDispense23, mockMedicationDispense24, mockMedicationDispense25,
    mockMedicationDispense26, mockMedicationDispense27, mockMedicationDispense28, mockMedicationDispense29, mockMedicationDispense30,
    mockMedicationDispense31
];
export const AllR4MockMedicationKnowledges = [mockMedicationKnowledge1];
export const AllR4MockMedicationRequests = [
    mockMedicationRequest1, mockMedicationRequest2, mockMedicationRequest3, mockMedicationRequest4, mockMedicationRequest5,
    mockMedicationRequest6, mockMedicationRequest7, mockMedicationRequest8, mockMedicationRequest9, mockMedicationRequest10,
    mockMedicationRequest11, mockMedicationRequest12, mockMedicationRequest13, mockMedicationRequest14, mockMedicationRequest15,
    mockMedicationRequest16, mockMedicationRequest17, mockMedicationRequest18, mockMedicationRequest19, mockMedicationRequest20,
    mockMedicationRequest21, mockMedicationRequest22, mockMedicationRequest23, mockMedicationRequest24, mockMedicationRequest25,
    mockMedicationRequest26, mockMedicationRequest27, mockMedicationRequest28, mockMedicationRequest29, mockMedicationRequest30,
    mockMedicationRequest31, mockMedicationRequest32, mockMedicationRequest33, mockMedicationRequest34, mockMedicationRequest35,
    mockMedicationRequest36, mockMedicationRequest37, mockMedicationRequest38, mockMedicationRequest39, mockMedicationRequest40,
];
export const AllR4MockMedicationStatements = [
    mockMedicationStatement1, mockMedicationStatement2, mockMedicationStatement3, mockMedicationStatement4,
    mockMedicationStatement5, mockMedicationStatement6, mockMedicationStatement7
];
export const AllR4MockMessageDefinitions = [
    mockMessageDefinition1, mockMessageDefinition2, mockMessageDefinition3
];
export const ALlR4MockMessageHeaders = [mockMessageHeader1, mockMessageHeader2Bundle, mockMessageHeader3Bundle];
export const AllR4MockMolecularSequences = [
    mockMolecularSequence1, mockMolecularSequence2, mockMolecularSequence3, mockMolecularSequence4, mockMolecularSequence5,
    mockMolecularSequence6, mockMolecularSequence7, mockMolecularSequence8, mockMolecularSequence9, mockMolecularSequence10,
    mockMolecularSequence11, mockMolecularSequence12, mockMolecularSequence13, mockMolecularSequence14, mockMolecularSequence15,
    mockMolecularSequence16, mockMolecularSequence17
];
export const AllR4MockNamingSystems = [
    mockNamingSystem1, mockNamingSystem2, mockNamingSystem3Bundle, mockNamingSystem4Bundle
];
export const AllR4MockNutritionOrders = [
    mockNutritionOrder1, mockNutritionOrder2, mockNutritionOrder3, mockNutritionOrder4, mockNutritionOrder5,
    mockNutritionOrder6, mockNutritionOrder7, mockNutritionOrder8, mockNutritionOrder9, mockNutritionOrder10,
    mockNutritionOrder11, mockNutritionOrder12, mockNutritionOrder13
];
export const AllR4MockObservations = allObservations;
export const AllR4MockOperationDefinitions = [
    mockOperationDefinition1, mockOperationDefinition2, mockOperationDefinition3, mockOperationDefinition4, mockOperationDefinition5,
    mockOperationDefinition6, mockOperationDefinition7, mockOperationDefinition8, mockOperationDefinition9
];
export const AllR4MockOperationOutcomes = [
    mockOperationOutcome1, mockOperationOutcome2, mockOperationOutcome3, mockOperationOutcome4, mockOperationOutcome5, mockOperationOutcome6
];
export const AllR4MockOrganizations = [
    mockOrganization1, mockOrganization2, mockOrganization3, mockOrganization4, mockOrganization5,
    mockOrganization6, mockOrganization7, mockOrganization8, mockOrganization9, mockOrganization10,
    mockOrganization11, mockOrganization12, mockOrganization13
]
export const AllR4MockOrganizationAffiliations = [mockOrganizationAffiliation1, mockOrganizationAffiliation2, mockOrganizationAffiliation3];
export const AllR4MockParameters = [mockParameters1];
export const AllR4MockPatients = [
    mockPatient1, mockPatient2, mockPatient3, mockPatient4, mockPatient5, mockPatient6Bundle, mockPatient7Bundle, mockPatient8,
    mockPatient9, mockPatient10, mockPatient11, mockPatient12, mockPatient13, mockPatient14, mockPatient15, mockPatient16,
    mockPatient17, mockPatient18, mockPatient19, mockPatient20, mockPatient21, mockPatient22, mockPatient23, mockPatient24
];
export const AllR4MockPersons = [mockPerson1, mockPerson2, mockPerson3, mockPersonPatientPortal, mockPersonProviderDirectory];
export const AllR4MockPractitioners = [
    mockPractitioner1, mockPractitioner2, mockPractitioner3Bundle, mockPractitioner4, mockPractitioner5,
    mockPractitioner6, mockPractitioner7, mockPractitioner8, mockPractitioner9, mockPractitioner10,
    mockPractitioner11, mockPractitioner12, mockPractitioner13, mockPractitioner14, mockPractitioner15
];
export const AllR4MockPractitionerRoles = [mockPractitionerRole1, mockPractitionerRole2Bundle];
export const AllR4MockProcedures = [
    mockProcedure1, mockProcedure2, mockProcedure3, mockProcedure4, mockProcedure5, mockProcedure6,
    mockProcedure7, mockProcedure8, mockProcedure9, mockProcedure10, mockProcedure11, mockProcedure12,
    mockProcedure13, mockProcedure14, mockProcedure15, mockProcedure16
];
export const AllR4MockProvenances = [mockProvenance1, mockProvenance2, mockProvenance3, mockProvenance4, mockProvenance5];
export const AllR4MockQuestionaireResponses = [
    mockQuestionnaireResponse1, mockQuestionnaireResponse2, mockQuestionnaireResponse3, mockQuestionnaireResponse4, mockQuestionnaireResponse5
];
export const AllR4MockRelatedPersons = [
    mockRelatedPerson1, mockRelatedPerson2, mockRelatedPerson3, mockRelatedPerson4, mockRelatedPerson5
];
export const AllR4MockRequestGroups = [mockRequestGroup1, mockRequestGroup2];
export const AllR4MockRiskAssessments = [
    mockRiskAssessment1, mockRiskAssessment2, mockRiskAssessment3, mockRiskAssessment4, mockRiskAssessment5, mockRiskAssessment6
];
export const AllR4MockSchedules = [mockSchedule1, mockSchedule2, mockSchedule3];
export const AllR4MockSearchParameters = [mockSearchParameter1, mockSearchParameter2, mockSearchParameter3, mockSearchParameter4];
export const AllR4MockServiceRequests = [
    mockServiceRequest1, mockServiceRequest2, mockServiceRequest3, mockServiceRequest4, mockServiceRequest5,
    mockServiceRequest6, mockServiceRequest7, mockServiceRequest8, mockServiceRequest9, mockServiceRequest10,
    mockServiceRequest11, mockServiceRequest12, mockServiceRequest13, mockServiceRequest14, mockServiceRequest15,
    mockServiceRequest16, mockServiceRequest17, mockServiceRequest18, mockServiceRequest19, mockServiceRequest20
];
export const AllR4MockSlots = [mockSlot1, mockSlot2, mockSlot3, mockSlot4];
export const AllR4MockSpecimen = [mockSpecimen1, mockSpecimen2, mockSpecimen3, mockSpecimen4, mockSpecimen5];
export const AllMockStructureDefinitions = [
    mockStructureDefinitionAbstract1, mockStructureDefinitionAbstract2, mockStructureDefinitionAbstract3, mockStructureDefinitionAbstract4,
    mockStructureDefinitionData1, mockStructureDefinitionData2, mockStructureDefinitionData3, mockStructureDefinitionData4, mockStructureDefinitionData5,
    mockStructureDefinitionData6, mockStructureDefinitionData7, mockStructureDefinitionData8, mockStructureDefinitionData9, mockStructureDefinitionData10,
    mockStructureDefinitionData11, mockStructureDefinitionData12, mockStructureDefinitionData13, mockStructureDefinitionData14, mockStructureDefinitionData15,
    mockStructureDefinitionData16, mockStructureDefinitionData17, mockStructureDefinitionData18, mockStructureDefinitionData19, mockStructureDefinitionData20,
    mockStructureDefinitionData21, mockStructureDefinitionData22, mockStructureDefinitionData23, mockStructureDefinitionData24, mockStructureDefinitionData25,
    mockStructureDefinitionData26, mockStructureDefinitionData27, mockStructureDefinitionData28, mockStructureDefinitionData29, mockStructureDefinitionData30,
    mockStructureDefinitionData31, mockStructureDefinitionData32, mockStructureDefinitionData33, mockStructureDefinitionData34, mockStructureDefinitionData35,
    mockStructureDefinitionData36, mockStructureDefinitionData37, mockStructureDefinitionData38, mockStructureDefinitionData39, mockStructureDefinitionData40,
    mockStructureDefinitionData41,
    mockStructureDefinitionPrimitive1, mockStructureDefinitionPrimitive2, mockStructureDefinitionPrimitive3, mockStructureDefinitionPrimitive4, mockStructureDefinitionPrimitive5,
    mockStructureDefinitionPrimitive6, mockStructureDefinitionPrimitive7, mockStructureDefinitionPrimitive8, mockStructureDefinitionPrimitive9, mockStructureDefinitionPrimitive10,
    mockStructureDefinitionPrimitive11, mockStructureDefinitionPrimitive12, mockStructureDefinitionPrimitive13, mockStructureDefinitionPrimitive14, mockStructureDefinitionPrimitive15,
    mockStructureDefinitionPrimitive16, mockStructureDefinitionPrimitive17, mockStructureDefinitionPrimitive18, mockStructureDefinitionPrimitive19,
];
export const AllR4MockStructureMaps = [mockStructureMap1, mockStructureMap2];
export const AllR4MockSubscriptions = [mockSubscription1, mockSubscription2];
export const AllR4MockSubstances = [mockSubstance1, mockSubstance2, mockSubstance3, mockSubstance4, mockSubstance5, mockSubstance6];
export const AllR4MockSupplyDeliveries = [mockSupplyDelivery1, mockSupplyDelivery2];
export const AllR4MockSupplyRequests = [mockSupplyRequest1];
export const AllR4MockTasks = [
    mockTask1, mockTask2, mockTask3, mockTask4, mockTask5, mockTask6,
    mockTask7, mockTask8, mockTask9, mockTask10, mockTask11, mockTask12
];
export const AllR4MockTerminologyCapabilities = [mockTerminologyCapabilities1];
export const AllR4MockValueSets = [
    mockValueSet1, mockValueSet2, mockValueSet3, mockValueSet4, mockValueSet5,
    mockValueSet6, mockValueSet7, mockValueSet8, mockValueSet9, mockValueSet10,
];
export const AllR4MockVerificationResults = [mockVerificationResult1];
export const AllR4MockVisionPrescriptions = [mockVisionPrescription1, mockVisionPrescription2];
export const AllR4MockAdverseEvents = [mockAdverseEvent1];


export const AllR4Mocks: FHIRResource[] = [
    ...AllR4MockAllergies,
    ...AllR4MockAppointments,
    ...AllR4MockAppointmentResponses,
    ...AllR4MockAuditEvents,
    ...AllR4MockBasics,
    ...AllR4MockBinaries,
    ...AllR4MockBiologicallyDerivedProducts,
    ...AllR4MockBodyStructures,
    ...AllR4MockBundles,
    ...AllR4MockCapabilityStatements,
    ...AllR4MockCarePlans,
    ...AllR4MockCareTeams,
    ...AllR4MockCatalogEntries,
    ...AllR4MockClinicalImpressions,
    ...AllR4MockCodeSystems,
    ...AllR4MockCommunications,
    ...AllR4MockCommunicationRequests,
    ...AllR4MockCompartmentDefinitions,
    ...AllR4MockCompositions,
    ...AllR4MockConceptMaps,
    ...AllR4MockConditions,
    ...AllR4MockConsents,
    ...AllR4MockDetectedIssues,
    ...AllR4MockDevices,
    ...AllR4MockDeviceMetrics,
    ...AllR4MockDeviceRequests,
    ...AllR4MockDeviceUseStatements,
    ...AllR4MockDiagnosticReports,
    ...AllR4MockDocumentManifests,
    ...AllR4MockDocumentReferences,
    ...AllR4MockEncounters,
    ...AllR4MockEndpoints,
    ...AllR4MockEposidesOfCare,
    ...AllR4MockExampleScenarios,
    ...AllR4MockFamilyMemberHistories,
    ...AllR4MockFlags,
    ...AllR4MockGoals,
    ...AllR4MockGraphDefinitions,
    ...AllR4MockGroups,
    ...AllR4MockGuidanceResponses,
    ...AllR4MockHealthcareServices,
    ...AllR4MockImagingStudies,
    ...AllR4MockImmunizations,
    ...AllR4MockImmunizationEvaluations,
    ...AllR4MockImmunizationRecommendations,
    ...AllR4MockImplementationGuides,
    ...AllR4MockLibraries,
    ...AllR4MockLinkages,
    ...AllR4MockLists,
    ...AllR4MockMedia,
    ...AllR4MockMedications,
    ...AllR4MockMedicationAdministrations,
    ...AllR4MockMedicationDispensations,
    ...AllR4MockMedicationKnowledges,
    ...AllR4MockMedicationRequests,
    ...AllR4MockMedicationStatements,
    ...AllR4MockMessageDefinitions,
    ...ALlR4MockMessageHeaders,
    ...AllR4MockMolecularSequences,
    ...AllR4MockNamingSystems,
    ...AllR4MockNutritionOrders,
    ...AllR4MockObservations,
    ...AllR4MockOperationDefinitions,
    ...AllR4MockOperationOutcomes,
    ...AllR4MockOrganizations,
    ...AllR4MockOrganizationAffiliations,
    ...AllR4MockParameters,
    ...AllR4MockPatients,
    ...AllR4MockPersons,
    ...AllR4MockPractitioners,
    ...AllR4MockPractitionerRoles,
    ...AllR4MockProcedures,
    ...AllR4MockProvenances,
    ...AllR4MockQuestionaireResponses,
    ...AllR4MockRelatedPersons,
    ...AllR4MockRequestGroups,
    ...AllR4MockRiskAssessments,
    ...AllR4MockSchedules,
    ...AllR4MockSearchParameters,
    ...AllR4MockServiceRequests,
    ...AllR4MockSlots,
    ...AllR4MockSpecimen,
    ...AllMockStructureDefinitions,
    ...AllR4MockStructureMaps,
    ...AllR4MockSubscriptions,
    ...AllR4MockSubstances,
    ...AllR4MockSupplyDeliveries,
    ...AllR4MockSupplyRequests,
    ...AllR4MockTasks,
    ...AllR4MockTerminologyCapabilities,
    ...AllR4MockValueSets,
    ...AllR4MockVerificationResults,
    ...AllR4MockVisionPrescriptions,
    ...AllR4MockAdverseEvents,
];