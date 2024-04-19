import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion'
import { DatePipe } from '@angular/common';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    DatePipe,
    MatDividerModule,
    MatExpansionModule,

    DemographicsComponent,
    AllergiesComponent,
    ObservationsComponent,
    ImmunizationsComponent,
    MedicationsComponent
  ],
})
export class HomeComponent {
  myPerson = mockPatient3;
  myAllergies = [
    mockAllergyIntolerance1,
    mockAllergyIntolerance2,
    mockAllergyIntolerance3,
  ];
  
  myObservations = allObservations;

}