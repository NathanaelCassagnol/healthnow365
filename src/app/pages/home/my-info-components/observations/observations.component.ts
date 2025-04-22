import { TitleCasePipe } from "@angular/common";
import { Component, computed, input, signal } from "@angular/core";
import { BasicToStringPipe, BasicToStringPropPipe } from "app/pipes/basic-to-string.pipe";
import { Observation } from "fhir/R4/types/observation.types";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from "@angular/material/tabs";
import { ProcedureCardComponent } from "../../../../components/data-cards/observation-card/observation-card.component";

@Component({
    selector: 'app-observations',
    templateUrl: './observations.component.html',
    styleUrls: ['./observations.component.scss'],
    imports: [
    MatCheckboxModule,
    MatTabsModule,
    ProcedureCardComponent
],
    standalone: true,
})
export class ObservationsComponent {
    observations = input.required<Observation[]>();
    toTitle = new TitleCasePipe().transform;
    basicToString = new BasicToStringPipe().transform;
    basicToStringProp = new BasicToStringPropPipe().transform;
    showNonRelevant = signal(false);

    getCategoryData = (category: string) => computed(() => 
        this.observations()
            .filter(this.categoryFilter(category))
            .filter(this.relevantFilter)
            // .map(this.obsToTable)
    );
   
    dataMap = [
        {name: "Social History", data: this.getCategoryData('Social History')},
        {name: "Vital Signs", data: this.getCategoryData('vital signs')},
        {name: "Imaging", data: this.getCategoryData('Imaging')},
        {name: "Laboratory", data: this.getCategoryData('Laboratory')},
        {name: "Procedure", data: this.getCategoryData('Procedure')},
        {name: "Survey", data: this.getCategoryData('Survey')},
        {name: "Exam", data: this.getCategoryData('Exam')},
        {name: "Therapy", data: this.getCategoryData('Therapy')},
        {name: "Activity", data: this.getCategoryData('Activity')},
    ];

    categoryFilter = (category: string) => ((o: Observation) => o.category?.map(c => this.basicToString(c, "CodeableConcept").toLowerCase()).includes(category.toLowerCase()));
    relevantFilter = (o: Observation) => (this.showNonRelevant() || !["cancelled", "entered-in-error"].includes(o.status))
    
    toggleCheckbox() {
        this.showNonRelevant.update(v => !v);
    }
}
