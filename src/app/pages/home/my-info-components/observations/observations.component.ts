import { TitleCasePipe } from "@angular/common";
import { Component, Signal, computed, input, signal } from "@angular/core";
import { BasicToStringPipe, BasicToStringPropPipe } from "app/pipes/basic-to-string.pipe";
import { Observation } from "fhir/R4/types/observation.types";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
    selector: 'app-observations',
    templateUrl: './observations.component.html',
    styleUrls: ['./observations.component.scss'],
    standalone: true,
    imports: [
        MatCheckboxModule,
        MagicTableComponent,
        MatTabsModule,
    ],
})
export class ObservationsComponent {
    observations = input<Observation[]>([]);
    toTitle = new TitleCasePipe().transform;
    basicToString = new BasicToStringPipe().transform;
    basicToStringProp = new BasicToStringPropPipe().transform;
    showNonRelevant = signal(false);

    /*
        name: string,
        status: string,
        time: string,
        value: string[],
        interpretation: string[],
        referenceRange: string[],
    */

    columns = ["name", "status", "time", "value", "interpretation", "referenceRange"];
    columnData: MagicTableColumnData = {
        name: {
            sortAs: "text",
            applySearch: true,
            filterOn: ["includes", "startsWith"],
        },
        status: {
            sortAs: "text",
            filterOn: ["matches"],
        },
        time: {
            sortAs: "time",
        },
        value: {
            applySearch: true,
            filterOn: ["includes"],
        }
    }

    getCategoryData = (category: string) => computed(() => 
    this.observations().filter(this.categoryFilter(category)).filter(this.relevantFilter).map(this.obsToTable));
   
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
    obsToTable = (o: Observation) => {
        let vals = [], interpretations = [], referenceRanges = [];
        if (o.component != undefined) {
            [o, ...o.component].forEach((c, i) => {
                let basicVal = this.basicToStringProp(c, 'value');
                if (basicVal === 'Unknown' && c.dataAbsentReason) basicVal = this.basicToString(c.dataAbsentReason, "CodeableConcept")
                if (basicVal != 'Unknown') {
                    let subname = this.basicToString(c.code, "CodeableConcept");
                    if (i != 0 && subname != "Unknown") basicVal += ` (${subname})`
                    vals.push(basicVal);
                    interpretations.push(c.interpretation ? this.basicToString(c.interpretation[0], 'CodeableConcept') : '-');
                    referenceRanges.push(c.referenceRange ? this.basicToString(c.referenceRange[0], 'Range') : '-');
                }
            })
        }
        else {
            let basicVal = this.basicToStringProp(o, 'value');
            if (basicVal === 'Unknown' && o.dataAbsentReason) basicVal = this.basicToString(o.dataAbsentReason, "CodeableConcept")
            if (basicVal != 'Unknown') vals.push(basicVal);
            if (o.interpretation) interpretations.push(this.basicToString(o.interpretation[0], 'CodeableConcept'));
            if (o.referenceRange) referenceRanges.push(this.basicToString(o.referenceRange[0], 'Range'));
        }

        return {
            name: this.basicToString(o.code, "CodeableConcept"),
            status: this.toTitle(o.status),
            time: this.basicToStringProp(o, 'effective'),
            value: vals,
            interpretation: interpretations,
            referenceRange: referenceRanges,
        } as LoadedObservationType;
    }

    toggleCheckbox() {
        this.showNonRelevant.update(v => !v);
    }
}

type LoadedObservationType = {
    name: string,
    status: string,
    time: string,
    value: string[],
    interpretation: string[],
    referenceRange: string[],
}