import { Component, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MagicTableBodyDirective, MagicTableColumnData, MagicTableComponent } from "app/shared/magic-table/magic-table.component";
import { mockMedicationAdministration1 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-1";
import { mockMedicationAdministration10 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-10";
import { mockMedicationAdministration11 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-11";
import { mockMedicationAdministration12 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-12";
import { mockMedicationAdministration13 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-13";
import { mockMedicationAdministration14 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-14";
import { mockMedicationAdministration2 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-2";
import { mockMedicationAdministration3 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-3";
import { mockMedicationAdministration4 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-4";
import { mockMedicationAdministration5 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-5";
import { mockMedicationAdministration6 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-6";
import { mockMedicationAdministration7 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-7";
import { mockMedicationAdministration8 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-8";
import { mockMedicationAdministration9 } from "fhir/R4/mocks/medication-administration/mock-medication-administration-9";
import { mockMedicationDispense1 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-1";
import { mockMedicationDispense10 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-10";
import { mockMedicationDispense11 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-11";
import { mockMedicationDispense12 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-12";
import { mockMedicationDispense13 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-13";
import { mockMedicationDispense14 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-14";
import { mockMedicationDispense15 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-15";
import { mockMedicationDispense16 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-16";
import { mockMedicationDispense17 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-17";
import { mockMedicationDispense18 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-18";
import { mockMedicationDispense19 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-19";
import { mockMedicationDispense2 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-2";
import { mockMedicationDispense20 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-20";
import { mockMedicationDispense21 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-21";
import { mockMedicationDispense22 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-22";
import { mockMedicationDispense23 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-23";
import { mockMedicationDispense24 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-24";
import { mockMedicationDispense25 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-25";
import { mockMedicationDispense26 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-26";
import { mockMedicationDispense27 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-27";
import { mockMedicationDispense28 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-28";
import { mockMedicationDispense29 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-29";
import { mockMedicationDispense3 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-3";
import { mockMedicationDispense30 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-30";
import { mockMedicationDispense31 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-31";
import { mockMedicationDispense4 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-4";
import { mockMedicationDispense5 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-5";
import { mockMedicationDispense6 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-6";
import { mockMedicationDispense7 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-7";
import { mockMedicationDispense8 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-8";
import { mockMedicationDispense9 } from "fhir/R4/mocks/medication-dispense/mock-medication-dispense-9";
import { annotationToString, codeableConceptToString, dateTimeToString, periodToString, quantityToString, referenceToString } from "fhir/R4/utilities/validators-tostring.util";

@Component({
    selector: 'app-medications',
    styleUrl: './medications.component.scss',
    templateUrl: './medications.component.html',
    standalone: true,
    imports: [MagicTableComponent, MagicTableBodyDirective, MatButtonModule, MatTooltipModule],
})
export class MedicationsComponent {
    myDispensations = signal([
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
    
    myAdministrations = signal([
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
            applySearch: true,
            sortAs: 'text',
            filterOn: ['includes'],
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
            applySearch: true,
            sortAs: 'text',
            filterOn: ['includes'],
        }
    };
}