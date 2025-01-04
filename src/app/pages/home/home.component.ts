import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion'
import { DemographicsComponent } from './my-info-components/demographics/demographics.component';
import { AllergiesComponent } from './my-info-components/allergies/allergies.component';
import { mockAllergyIntolerance1 } from 'fhir/R4/mocks/allergy-intolerance/mock-allergy-intolerance-1';
import { mockAllergyIntolerance2 } from 'fhir/R4/mocks/allergy-intolerance/mock-allergy-intolerance-2';
import { mockAllergyIntolerance3 } from 'fhir/R4/mocks/allergy-intolerance/mock-allergy-intolerance-3';
import { mockPatient3 } from 'fhir/R4/mocks/patient/mock-patient-3';
import { allObservations } from 'fhir/R4/mocks/observation/all-observations';
import { ObservationsComponent } from './my-info-components/observations/observations.component';
import { ImmunizationsComponent } from './my-info-components/immunizations/immunizations.component';
import { MedicationsComponent } from './my-info-components/medications/medications.component';
import { FamilyHistoryComponent } from './my-info-components/family-history/family-history.component';
import { ImagingStudyComponent } from './my-info-components/imaging-study/imaging-study.component';
import { DetectedIssueComponent } from './my-info-components/detected-issue/detected-issue.component';
import { ProcedureComponent } from './my-info-components/procedure/procedure.component';
import { ConditionComponent } from './my-info-components/condition/condition.component';
import { AdverseEventComponent } from './my-info-components/adverse-event/adverse-event.component';
import { DiagnosticReportComponent } from './my-info-components/diagnostic-report/diagnostic-report.component';
import { mockAdverseEvent1 } from 'fhir/R4/mocks/adverse-event/mock-adverse-event-1';
import { mockCondition1 } from 'fhir/R4/mocks/condition/mock-condition-1';
import { mockCondition10 } from 'fhir/R4/mocks/condition/mock-condition-10';
import { mockCondition11 } from 'fhir/R4/mocks/condition/mock-condition-11';
import { mockCondition12 } from 'fhir/R4/mocks/condition/mock-condition-12';
import { mockCondition2 } from 'fhir/R4/mocks/condition/mock-condition-2';
import { mockCondition3 } from 'fhir/R4/mocks/condition/mock-condition-3';
import { mockCondition4 } from 'fhir/R4/mocks/condition/mock-condition-4';
import { mockCondition5 } from 'fhir/R4/mocks/condition/mock-condition-5';
import { mockCondition6 } from 'fhir/R4/mocks/condition/mock-condition-6';
import { mockCondition7 } from 'fhir/R4/mocks/condition/mock-condition-7';
import { mockCondition8 } from 'fhir/R4/mocks/condition/mock-condition-8';
import { mockCondition9 } from 'fhir/R4/mocks/condition/mock-condition-9';
import { mockDetectedIssue1 } from 'fhir/R4/mocks/detected-issue/mock-detected-issue-1';
import { mockDetectedIssue2 } from 'fhir/R4/mocks/detected-issue/mock-detected-issue-2';
import { mockDiagnosticReport1Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-1';
import { mockDiagnosticReport10Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-10';
import { mockDiagnosticReport11 } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-11';
import { mockDiagnosticReport12 } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-12';
import { mockDiagnosticReport13Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-13';
import { mockDiagnosticReport14Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-14';
import { mockDiagnosticReport15Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-15';
import { mockDiagnosticReport16 } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-16';
import { mockDiagnosticReport17Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-17';
import { mockDiagnosticReport2Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-2';
import { mockDiagnosticReport3Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-3';
import { mockDiagnosticReport4 } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-4';
import { mockDiagnosticReport6 } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-6';
import { mockDiagnosticReport7Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-7';
import { mockDiagnosticReport8Bundle } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-8';
import { mockDiagnosticReport9 } from 'fhir/R4/mocks/diagnostic-report/mock-diagnostic-report-9';
import { DiagnosticReport } from 'fhir/R4/types/diagnostic-report';
import { mockFamilyMemberHistory1 } from 'fhir/R4/mocks/family-member-history/mock-family-member-history-1';
import { mockFamilyMemberHistory2 } from 'fhir/R4/mocks/family-member-history/mock-family-member-history-2';
import { mockImagingStudy1 } from 'fhir/R4/mocks/imaging-study/mock-imaging-study-1';
import { mockImagingStudy2 } from 'fhir/R4/mocks/imaging-study/mock-imaging-study-2';
import { mockImmunizationRecommendation1 } from 'fhir/R4/mocks/immunization-recommendation/mock-immunization-recommendation-1';
import { mockImmunizationRecommendation2 } from 'fhir/R4/mocks/immunization-recommendation/mock-immunization-recommendation-2';
import { mockImmunization1 } from 'fhir/R4/mocks/immunization/mock-immunization-1';
import { mockImmunization2 } from 'fhir/R4/mocks/immunization/mock-immunization-2';
import { mockImmunization3 } from 'fhir/R4/mocks/immunization/mock-immunization-3';
import { mockImmunization4 } from 'fhir/R4/mocks/immunization/mock-immunization-4';
import { mockImmunization5 } from 'fhir/R4/mocks/immunization/mock-immunization-5';
import { mockMedicationAdministration1 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-1';
import { mockMedicationAdministration10 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-10';
import { mockMedicationAdministration11 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-11';
import { mockMedicationAdministration12 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-12';
import { mockMedicationAdministration13 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-13';
import { mockMedicationAdministration14 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-14';
import { mockMedicationAdministration2 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-2';
import { mockMedicationAdministration3 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-3';
import { mockMedicationAdministration4 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-4';
import { mockMedicationAdministration5 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-5';
import { mockMedicationAdministration6 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-6';
import { mockMedicationAdministration7 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-7';
import { mockMedicationAdministration8 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-8';
import { mockMedicationAdministration9 } from 'fhir/R4/mocks/medication-administration/mock-medication-administration-9';
import { mockMedicationDispense1 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-1';
import { mockMedicationDispense10 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-10';
import { mockMedicationDispense11 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-11';
import { mockMedicationDispense12 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-12';
import { mockMedicationDispense13 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-13';
import { mockMedicationDispense14 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-14';
import { mockMedicationDispense15 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-15';
import { mockMedicationDispense16 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-16';
import { mockMedicationDispense17 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-17';
import { mockMedicationDispense18 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-18';
import { mockMedicationDispense19 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-19';
import { mockMedicationDispense2 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-2';
import { mockMedicationDispense20 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-20';
import { mockMedicationDispense21 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-21';
import { mockMedicationDispense22 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-22';
import { mockMedicationDispense23 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-23';
import { mockMedicationDispense24 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-24';
import { mockMedicationDispense25 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-25';
import { mockMedicationDispense26 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-26';
import { mockMedicationDispense27 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-27';
import { mockMedicationDispense28 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-28';
import { mockMedicationDispense29 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-29';
import { mockMedicationDispense3 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-3';
import { mockMedicationDispense30 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-30';
import { mockMedicationDispense31 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-31';
import { mockMedicationDispense4 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-4';
import { mockMedicationDispense5 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-5';
import { mockMedicationDispense6 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-6';
import { mockMedicationDispense7 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-7';
import { mockMedicationDispense8 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-8';
import { mockMedicationDispense9 } from 'fhir/R4/mocks/medication-dispense/mock-medication-dispense-9';
import { mockProcedure1 } from 'fhir/R4/mocks/procedure/mock-procedure-1';
import { mockProcedure10 } from 'fhir/R4/mocks/procedure/mock-procedure-10';
import { mockProcedure11 } from 'fhir/R4/mocks/procedure/mock-procedure-11';
import { mockProcedure12 } from 'fhir/R4/mocks/procedure/mock-procedure-12';
import { mockProcedure13 } from 'fhir/R4/mocks/procedure/mock-procedure-13';
import { mockProcedure14 } from 'fhir/R4/mocks/procedure/mock-procedure-14';
import { mockProcedure15 } from 'fhir/R4/mocks/procedure/mock-procedure-15';
import { mockProcedure16 } from 'fhir/R4/mocks/procedure/mock-procedure-16';
import { mockProcedure2 } from 'fhir/R4/mocks/procedure/mock-procedure-2';
import { mockProcedure3 } from 'fhir/R4/mocks/procedure/mock-procedure-3';
import { mockProcedure4 } from 'fhir/R4/mocks/procedure/mock-procedure-4';
import { mockProcedure5 } from 'fhir/R4/mocks/procedure/mock-procedure-5';
import { mockProcedure6 } from 'fhir/R4/mocks/procedure/mock-procedure-6';
import { mockProcedure7 } from 'fhir/R4/mocks/procedure/mock-procedure-7';
import { mockProcedure8 } from 'fhir/R4/mocks/procedure/mock-procedure-8';
import { mockProcedure9 } from 'fhir/R4/mocks/procedure/mock-procedure-9';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule,
        MatExpansionModule,
        DemographicsComponent,
        AllergiesComponent,
        ObservationsComponent,
        ImmunizationsComponent,
        MedicationsComponent,
        FamilyHistoryComponent,
        ImagingStudyComponent,
        DetectedIssueComponent,
        ProcedureComponent,
        ConditionComponent,
        AdverseEventComponent,
        DiagnosticReportComponent,
    ],
    standalone: true,
})
export class HomeComponent {
  myPerson = signal(mockPatient3);
  myAllergies = signal([
    mockAllergyIntolerance1,
    mockAllergyIntolerance2,
    mockAllergyIntolerance3,
  ]);
  
  myObservations = signal(allObservations);
  myAdverseEvents = signal([mockAdverseEvent1]);
  myConditions = signal([mockCondition1, mockCondition2, mockCondition3, mockCondition4, mockCondition5, mockCondition6, mockCondition7, mockCondition8, mockCondition9, mockCondition10, mockCondition11, mockCondition12]);
  myIssues = signal([mockDetectedIssue1, mockDetectedIssue2]);
  myDiagnosticReports = signal([
    ...(mockDiagnosticReport1Bundle.entry ?? []).map(e => e.resource),
    ...(mockDiagnosticReport2Bundle.entry ?? []).map(e => e.resource),
    ...(mockDiagnosticReport3Bundle.entry ?? []).map(e => e.resource),
    mockDiagnosticReport4,
    mockDiagnosticReport6,
    ...(mockDiagnosticReport7Bundle.entry ?? []).map(e => e.resource),
    ...(mockDiagnosticReport8Bundle.entry ?? []).map(e => e.resource),
    mockDiagnosticReport9,
    ...(mockDiagnosticReport10Bundle.entry ?? []).map(e => e.resource),
    mockDiagnosticReport11,
    mockDiagnosticReport12,
    ...(mockDiagnosticReport13Bundle.entry ?? []).map(e => e.resource),
    ...(mockDiagnosticReport14Bundle.entry ?? []).map(e => e.resource),
    ...(mockDiagnosticReport15Bundle.entry ?? []).map(e => e.resource),
    mockDiagnosticReport16,
    ...(mockDiagnosticReport17Bundle.entry ?? []).map(e => e.resource)] as DiagnosticReport[]);
    myFamilyHistory = signal([mockFamilyMemberHistory1, mockFamilyMemberHistory2]);
    myStudies = signal([mockImagingStudy1, mockImagingStudy2]);
    myImmunizations = signal([
        mockImmunization1,
        mockImmunization2,
        mockImmunization3,
        mockImmunization4,
        mockImmunization5
    ]);
    myImmunizationRecs = signal([
        mockImmunizationRecommendation1,
        mockImmunizationRecommendation2,
    ]);
    myMedDispensations = signal([
        mockMedicationDispense1,
        mockMedicationDispense2,
        mockMedicationDispense3,
        mockMedicationDispense4,
        mockMedicationDispense5,
        mockMedicationDispense6,
        mockMedicationDispense7,
        mockMedicationDispense8,
        mockMedicationDispense9,
        mockMedicationDispense10,
        mockMedicationDispense11,
        mockMedicationDispense12,
        mockMedicationDispense13,
        mockMedicationDispense14,
        mockMedicationDispense15,
        mockMedicationDispense16,
        mockMedicationDispense17,
        mockMedicationDispense18,
        mockMedicationDispense19,
        mockMedicationDispense20,
        mockMedicationDispense21,
        mockMedicationDispense22,
        mockMedicationDispense23,
        mockMedicationDispense24,
        mockMedicationDispense25,
        mockMedicationDispense26,
        mockMedicationDispense27,
        mockMedicationDispense28,
        mockMedicationDispense29,
        mockMedicationDispense30,
        mockMedicationDispense31,
    ]);
    
    myMedAdministrations = signal([
        mockMedicationAdministration1,
        mockMedicationAdministration2,
        mockMedicationAdministration3,
        mockMedicationAdministration4,
        mockMedicationAdministration5,
        mockMedicationAdministration6,
        mockMedicationAdministration7,
        mockMedicationAdministration8,
        mockMedicationAdministration9,
        mockMedicationAdministration10,
        mockMedicationAdministration11,
        mockMedicationAdministration12,
        mockMedicationAdministration13,
        mockMedicationAdministration14,
    ]);

    myProcedures = signal([mockProcedure1, mockProcedure2, mockProcedure3, mockProcedure4, mockProcedure5, mockProcedure6, mockProcedure7, mockProcedure8, mockProcedure9, mockProcedure10, mockProcedure11, mockProcedure12, mockProcedure13, mockProcedure14, mockProcedure15, mockProcedure16]);

}
