import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion'
import { DemographicsComponent } from './my-info-components/demographics/demographics.component';
import { AllergiesComponent } from './my-info-components/allergies/allergies.component';
import { mockPatient3 } from 'fhir/R4/mocks/patient/mock-patient-3';
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
import { ResourceCollectorService } from 'app/services/resource-collector.service';

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
  private resources = inject(ResourceCollectorService);

  myPerson = signal(mockPatient3);
  myAllergies = computed(() => this.resources.resources().filter(r => r.resourceType === 'AllergyIntolerance'));
  myObservations = computed(() => this.resources.resources().filter(r => r.resourceType === 'Observation'));
  myAdverseEvents = computed(() => this.resources.resources().filter(r => r.resourceType === 'AdverseEvent'));
  myConditions = computed(() => this.resources.resources().filter(r => r.resourceType === 'Condition'));
  myIssues = computed(() => this.resources.resources().filter(r => r.resourceType === 'DetectedIssue'));
  myDiagnosticReports = computed(() => this.resources.resources().filter(r => r.resourceType === 'DiagnosticReport'));
  myFamilyHistory = computed(() => this.resources.resources().filter(r => r.resourceType === 'FamilyMemberHistory'));
  myStudies = computed(() => this.resources.resources().filter(r => r.resourceType === 'ImagingStudy'));
  myImmunizations = computed(() => this.resources.resources().filter(r => r.resourceType === 'Immunization'));
  myImmunizationRecs = computed(() => this.resources.resources().filter(r => r.resourceType === 'ImmunizationRecommendation'));
  myMedDispensations = computed(() => this.resources.resources().filter(r => r.resourceType === 'MedicationDispense'));
  myMedAdministrations = computed(() => this.resources.resources().filter(r => r.resourceType === 'MedicationAdministration'));
  myProcedures = computed(() => this.resources.resources().filter(r => r.resourceType === 'Procedure'));
}
