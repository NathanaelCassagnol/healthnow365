import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { GenericDataDialog } from "app/components/data-dialogs/_generic-data-dialog/generic-data.dialog";
import { MedicationAdministration } from "fhir/R4/types/medication-administration";
import { FhirTitlePipe } from "../../../shared/pipes/fhir-title.pipe";

@Component({
    selector: 'medication-administration-card',
    styleUrl: './medication-administration-card.component.scss',
    templateUrl: './medication-administration-card.component.html',
    standalone: true,
    imports: [MatButtonModule, FhirTitlePipe],
})
export class MedicationAdministrationCardComponent {
    // med = input.required<DisplayMedicationAdministration>();
    med = input.required<MedicationAdministration>();
    // dosageText = computed(() => {
    //     const dosageTextParts: string[] = [];
    //     if (this.med().dosage.text.length) dosageTextParts.push(this.med().dosage.text);
    //     if (this.med().dosage.site.length) dosageTextParts.push('Site: '+this.med().dosage.site);
    //     if (this.med().dosage.route.length) dosageTextParts.push('Route: '+this.med().dosage.route);
    //     if (this.med().dosage.method.length) dosageTextParts.push('Method: '+this.med().dosage.method);
    //     if (this.med().dosage.dose.length) dosageTextParts.push('Dose: '+this.med().dosage.dose);
    //     if (this.med().dosage.rate.length) dosageTextParts.push('Rate: '+this.med().dosage.rate);
    //     return dosageTextParts.join(' | ');
    // })

    private dialog = inject(MatDialog);
    openDialog() {
        // this.dialog.open(MedicationAdministrationDialog, {data: {Medication: this.med()}})
        this.dialog.open(GenericDataDialog, {data: {Resource: this.med()}})
    }
}