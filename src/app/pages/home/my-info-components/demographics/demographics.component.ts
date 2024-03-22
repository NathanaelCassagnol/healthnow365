import { TitleCasePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { DateToAgePipe } from "app/pipes/date-to-age.pipe";
import { HumanNameTextPipe } from "app/pipes/human-name-text.pipe";
import { Patient } from "fhir/R4/types/patient.types";
import { Person } from "fhir/R4/types/person.types";

@Component({
    selector: 'app-demographics',
    templateUrl: './demographics.component.html',
    styleUrls: ['./demographics.component.scss'],
    standalone: true,
    imports: [HumanNameTextPipe, DateToAgePipe, TitleCasePipe],
  })
  export class DemographicsComponent {
    @Input() person?: Patient | Person;
  }