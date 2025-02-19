import { Component, computed, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableColumnData, MagicTableModule } from "app/shared/component-library/magic-table/magic-table.module";
import { MedicationAdministration } from "fhir/R4/types/medication-administration";
import { MedicationDispense } from "fhir/R4/types/medication-dispense";
import { annotationToString, codeableConceptToString, dateTimeToString, dosageToString, periodToString, quantityToString, referenceToString } from "fhir/R4/utilities/validators-tostring.util";

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
        category: codeableConceptToString(d.category),
        status: (d.status ?? '') + d.statusReasonCodeableConcept ? ` (${codeableConceptToString(d.statusReasonCodeableConcept)})` : '',
        // for: referenceToString(d.subject),
        type: codeableConceptToString(d.type),
        quantity: quantityToString(d.quantity),
        daysSupplied: quantityToString(d.daysSupply),
        // TODO This line is confusing, rewrite
        substitution: d.substitution ? [d.substitution.wasSubstituted ? 'Yes' : 'No', codeableConceptToString(d.substitution.type), d.substitution.reason?.map(x => codeableConceptToString(x)).join(', ')??''].filter(x => x != '').join(';') : '',
        dosageInstruction: d.dosageInstruction?.map(dos => dosageToString(dos)) ?? [],
        notes: d.note?.map(n => annotationToString(n)) ?? [],
        whenPrepared: dateTimeToString(d.whenPrepared),
        whenHandedOver: dateTimeToString(d.whenHandedOver),
    } as DisplayMedicationDispense)));
    
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

export type DisplayMedicationDispense = {
    medication: string;
    // status: "preparation" | "in-progress" | "cancelled" | "on-hold" | "completed" | "entered-in-error" | "stopped" | "declined" | "unknown",
    status: string;
    category: string;
    quantity: string;
    daysSupplied: string;
    type: string;
    whenPrepared: string;
    whenHandedOver: string;
    dosageInstruction: string[];
    substitution: string;

    notes: string[];
}
