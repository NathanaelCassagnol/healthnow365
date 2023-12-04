import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion'
import { DatePipe } from '@angular/common';
import { DemographicsComponent } from './my-info-components/demographics/demographics.component';
import { AllergiesComponent } from './my-info-components/allergies/allergies.component';
import { mockAllergyIntolerance1 } from '../../types/mocks/allergy-intolerance';

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
  ],
})
export class HomeComponent implements OnInit {
  displayedColumns = ['name', 'type', 'date', 'level'];
  dataSource: document[] = [];
  myAllergies = [
    mockAllergyIntolerance1,
    mockAllergyIntolerance1,
    mockAllergyIntolerance1,
  ]

  ngOnInit(): void {
    for (let a = 0; a < 18; a++)
      this.dataSource.push({
        name: 'Blood analysis test results',
        type: 'lab result',
        date: new Date(2018, 7, 12, 15, 31, 22),
        level: 'private',
      });
  }
}

interface document {
  name: string;
  date: Date;
  type?: string;
  level: 'private' | 'my_doctors' | 'all_doctors';
}
