import { Component, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { MedicationAdministration } from "fhir/R4/types/medication-administration";
import { MedicationDispense } from "fhir/R4/types/medication-dispense";
import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, referenceToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-medications',
    styleUrl: './medications.component.scss',
    templateUrl: './medications.component.html',
    imports: [MagicTableModule, MatButtonModule, MatTooltipModule],
    standalone: true,
})
export class MedicationsComponent {
    myDispensations = input.required<MedicationDispense[]>();
    myAdministrations = input.required<MedicationAdministration[]>();

    // Add columns: instructions, substitution
    // Decode medicationReferences linked with "contained"
    // dispenseColumns = ["medication", "category", "status", "for", "instructions", "type", "quantity", "daysSupplied", "substitution", "notes"];
    dispenseColumns = ["medication", "category", "status", "for", "type", "quantity", "daysSupplied", "notes"];
    dispenseData = computed(() => this.myDispensations().map(d => ({
        medication: d.medicationCodeableConcept ? codeableConceptToString(d.medicationCodeableConcept) : referenceToString(d.medicationReference!),
        category: d.category ? codeableConceptToString(d.category) : '',
        status: d.status ?? '', // Include status reason
        for: d.subject ? referenceToString(d.subject) : '',
        instructions: "TODO",
        type: d.type ? codeableConceptToString(d.type) : '',
        quantity: d.quantity ? quantityToString(d.quantity) : '',
        daysSupplied: d.daysSupply ? quantityToString(d.daysSupply) : '',
        substitution: 'TODO',
        notes: d.note?.map(n => annotationToString(n)) ?? '',
    })));
    dispenseColData: MagicTableColumnData = {
        medication: {
            search: true,
            sort: 'text',
            filter: ['includes'],
        }
    };

    // Add dosage
    // administerColumns = ['medication', 'category', 'status', 'for', 'effectiveTime', 'reason', 'dosage', 'notes'];
    administerColumns = ['medication', 'category', 'status', 'for', 'effectiveTime', 'reason', 'notes'];
    administerData = computed(() => this.myAdministrations().map(d => ({
        medication: d.medicationCodeableConcept ? codeableConceptToString(d.medicationCodeableConcept) : referenceToString(d.medicationReference!),
        category: d.category ? codeableConceptToString(d.category) : '',
        status: d.status ?? '', // Include status reason
        for: d.subject ? referenceToString(d.subject) : '',
        effectiveTime: d.effectivePeriod ? periodToString(d.effectivePeriod) : d.effectiveDateTime ? dateTimeToString(d.effectiveDateTime) : '',
        reason: d.reasonCode ? d.reasonCode.map(r => codeableConceptToString(r)) : '',
        dosage: 'todo',
        notes: d.note?.map(n => annotationToString(n)) ?? '',
    })));
    administerColData: MagicTableColumnData = {
        medication: {
            search: true,
            sort: 'text',
            filter: ['includes'],
        }
    };
}