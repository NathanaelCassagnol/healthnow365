import { TitleCasePipe } from "@angular/common";
import { BasicToString } from "app/pipes/basic-to-string.pipe";
import { AllergyIntolerance, AllergyIntoleranceReaction } from "fhir/R4/types/allergy-intolerance.types";
import { FamilyMemberHistory } from "fhir/R4/types/family-member-history";
import { ImagingStudy } from "fhir/R4/types/imaging-study";
import { MedicationAdministration } from "fhir/R4/types/medication-administration";
import { MedicationDispense } from "fhir/R4/types/medication-dispense";
import { codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString, annotationToString, codeableConceptsToString, ratioToString, codingToString, codingsToSTring, annotationsToString } from "fhir/R4/utilities/validators-tostring.util";

const toTitle = new TitleCasePipe().transform;

// #region AllergyIntolerance

export type DisplayAllergy = {
    allergenName: string,
    category: string,
    status?: string,
    lastOccurrence?: string,
    reactionCount: number,
    criticality?: string,
    notes: string[],
    categoryImage: string,
    criticalityColor: string,
    type: "Allergy" | "Intolerance",
    reactions?: AllergyIntoleranceReaction[],
}

export const FHIRAllergyIntoleranceToDisplay = (a: AllergyIntolerance): DisplayAllergy => ({
    allergenName: BasicToString(a.code),
    category: (a.category??[]).map(toTitle).join(", "),
    status: (a.clinicalStatus == undefined) ? undefined : BasicToString(a.clinicalStatus),
    lastOccurrence: a.lastOccurrence,
    reactionCount: a.reaction?.length ?? 0,
    criticality: (a.criticality == undefined) ? undefined : toTitle(a.criticality),
    notes: (a.note??[]).map(n => n.text).filter(n => n.length > 0),
    type: a.type == 'intolerance' ? 'Intolerance' : 'Allergy',
    reactions: a.reaction,

    categoryImage: getCategoryImage(a.category),
    criticalityColor: getCriticalityColor(a.criticality),
});

function getCategoryImage(input?: ("food" | "medication" | "environment" | "biologic")[]) {
    if (input == null || input.length === 0)
        return 'assets/svg-watermarks/question-mark-circle.svg';
    if (input[0] === 'food')
        return 'assets/svg-watermarks/fast-food-outline.svg';
    if (input[0] === 'medication')
        return 'assets/svg-watermarks/medication.svg';
    if (input[0] === 'environment')
        return 'assets/svg-watermarks/plant.svg';
    if (input[0] === 'biologic')
        return 'assets/svg-watermarks/biology-dna.svg';
    return 'assets/svg-watermarks/question-mark-circle.svg';
}
function getCriticalityColor(input?: "low" | "high" | "unable-to-assess") {
    if (input == null || input == 'unable-to-assess') return 'purple';
    if (input == 'low') return 'yellow';
    if (input == 'high') return 'red';
    return 'purple';
}

// #endregion

// #region FamilyHistory

export type DisplayFamilyHistory = {
    status: string;
    date: string;
    name: string
    relation: string;
    sex: string;
    born: string;
    age: string;
    deceased: string;
    reason: string[];
    notes: string[];
    condition: {
        code: string;
        outcome: string;
        contributedToDeath: boolean;
        onset: string;
        notes: string[];
    }[];
    conditionText: string;
}

export const FHIRFamilyHistoryToDisplay = (d: FamilyMemberHistory): DisplayFamilyHistory => ({
    status: d.status + (d.dataAbsentReason ? ` (${codeableConceptToString(d.dataAbsentReason)})` : ''),
    date: d.date ? dateTimeToString(d.date) : '',
    name: d.name ?? '',
    relation: codeableConceptToString(d.relationship),
    sex: d.sex ? codeableConceptToString(d.sex) : '',
    born: d.bornPeriod ? periodToString(d.bornPeriod) : d.bornDate ? dateTimeToString(d.bornDate) : d.bornString ?? '',
    age: (d.ageAge ? quantityToString(d.ageAge) : d.ageRange ? rangeToString(d.ageRange) : d.ageString ?? '') + (d.estimatedAge ? ' (estimated)' : '') ,
    deceased: d.deceasedAge ? quantityToString(d.deceasedAge) : d.deceasedRange ? rangeToString(d.deceasedRange) : d.deceasedDate ? dateTimeToString(d.deceasedDate) : d.deceasedBoolean ? 'Deceased' : d.deceasedString ?? '',
    reason: d.reasonCode ? codeableConceptsToString(d.reasonCode) : [],
    notes: d.note ? d.note.map(n => annotationToString(n)) : [],
    condition: d.condition?.map(c => ({
        code: c.code ? codeableConceptToString(c.code) : '',
        outcome: c.outcome ? codeableConceptToString(c.outcome) : '',
        contributedToDeath: !!c.contributedToDeath,
        onset: c.onsetAge ? quantityToString(c.onsetAge) : c.onsetRange ? rangeToString(c.onsetRange) : c.onsetPeriod ? periodToString(c.onsetPeriod) : c.onsetString ?? '',
        notes: c.note ? c.note.map(n => annotationToString(n)) : [],
    })) ?? [],

    conditionText: d.condition?.map(c => codeableConceptToString(c.code)).join(", ") ?? ''
});

// #endregion

// #region Medication Administration
export type DisplayMedicationAdministration = {
    status: string
    category: string,
    medication: string,
    effective: string,
    reasons: string[],
    notes: string[],
    dosage: {
        text: string,
        site: string,
        route: string,
        method: string,
        dose: string,
        rate: string,
    },
};

export const FHIRMedicationAdministrationToDisplay = (d: MedicationAdministration): DisplayMedicationAdministration => {
    let status =
        d.status === 'in-progress' ? 'In Progress' :
        d.status === 'not-done' ? 'Not Done' :
        d.status === 'on-hold' ? 'On Hold' :
        d.status === 'completed' ? 'Completed' :
        d.status === 'entered-in-error' ? 'Entered in Error' :
        d.status === 'stopped' ? 'Stopped' :
        'Unknown';
    if (d.statusReason?.length) {
        status += ' (' + d.statusReason.map(codeableConceptToString).join(', ') + ')';
    }

    return {
        status,
        category: codeableConceptToString(d.category),
        medication: codeableConceptToString(d.medicationCodeableConcept),
        effective: d.effectiveDateTime ? dateTimeToString(d.effectiveDateTime) : d.effectivePeriod ? periodToString(d.effectivePeriod) : '',
        reasons: d.reasonCode?.map(c => codeableConceptToString(c)) ?? [],
        notes: d.note?.map(n => annotationToString(n)) ?? [],
        dosage: {
            text: d.dosage?.text ?? '',
            site: codeableConceptToString(d.dosage?.site),
            route: codeableConceptToString(d.dosage?.route),
            method: codeableConceptToString(d.dosage?.method),
            dose: quantityToString(d.dosage?.dose),
            rate: d.dosage?.rateRatio ? ratioToString(d.dosage?.rateRatio) : d.dosage?.rateQuantity ? quantityToString(d.dosage?.rateQuantity) : ''
        }
    }
};
// #endregion

// #region Medication Dispense

export type DisplayMedicationDispense = {
    status: string,
    category: string,
    medication: string,
    type: string,
    quantity: string,
    daysSupply: string,
    whenPrepared: string,
    whenHandedOver: string,
    notes: string[],
    substitution:  {
        wasSubstituted: boolean,
        type: string,
        reason: string[],
    }
};
export const FHIRMedicationDispenseToDisplay = (d: MedicationDispense): DisplayMedicationDispense => {
    let status =
        d.status === 'preparation' ? 'Preparation' :
        d.status === 'in-progress' ? 'In Progress' :
        d.status === 'cancelled' ? 'Cancelled' :
        d.status === 'on-hold' ? 'On Hold' :
        d.status === 'completed' ? 'Completed' :
        d.status === 'entered-in-error' ? 'Entered in Error' :
        d.status === 'stopped' ? 'Stopped' :
        d.status === 'declined' ? 'Declined' :
        'Unknown';
    if (d.statusReasonCodeableConcept) {
        status += ' ('+codeableConceptToString(d.statusReasonCodeableConcept)+')'
    }

    return {
        status,
        category: codeableConceptToString(d.category),
        medication: codeableConceptToString(d.medicationCodeableConcept),
        type: codeableConceptToString(d.type),
        quantity: quantityToString(d.quantity),
        daysSupply: quantityToString(d.daysSupply),
        whenPrepared: dateTimeToString(d.whenPrepared),
        whenHandedOver: dateTimeToString(d.whenHandedOver),
        notes: d.note?.map(n => annotationToString(n)) ?? [],

        substitution: {
            wasSubstituted: !!d.substitution?.wasSubstituted,
            type: codeableConceptToString(d.substitution?.type),
            reason: d.substitution?.reason?.map(codeableConceptToString) ?? [],
        }
    }
};

// #endregion

// #region Imaging Study
export const FHIRImagingStudyToDisplay = (s: ImagingStudy): DisplayImagingStudy => ({
    status: s.status === 'registered' ? 'Registered' :
        s.status === 'available' ? 'Available' :
        s.status === 'cancelled' ? 'Cancelled' :
        s.status === 'entered-in-error' ? 'Entered in Error' : 'Unknown',
    modality: codingsToSTring(s.modality),
    started: dateTimeToString(s.started),
    numberOfSeries: s.numberOfSeries,
    numberOfInstances: s.numberOfInstances,
    procedure: codeableConceptsToString(s.procedureCode),
    reason: codeableConceptsToString(s.reasonCode),
    note: annotationsToString(s.note),
    description: s.description ?? '',
    series: (s.series ?? []).map(s => ({
        number: s.number,
        modality: codingToString(s.modality),
        description: s.description ?? '',
        numberOfInstances: s.numberOfInstances,
        bodySite: codingToString(s.bodySite),
        laterality: codingToString(s.laterality),
        started: dateTimeToString(s.started),
        instance: (s.instance??[]).map(i => ({
            uid: i.uid,
            sopClass: codingToString(i.sopClass),
            number: i.number,
            title: i.title ?? ''
        }))
    }))
})

export type DisplayImagingStudy = {
    status: "Registered" | "Available" | "Cancelled" | "Entered in Error" | "Unknown",
    modality: string[],
    started: string,
    numberOfSeries?: number,
    numberOfInstances?: number,
    procedure: string[],
    reason: string[],
    note: string[],
    description: string,
    series?: {
        number?: number,
        modality: string,
        description: string,
        numberOfInstances?: number,
        bodySite: string,
        laterality: string,
        started: string,
        instance?: {
            uid: string,
            sopClass: string,
            number?: number,
            title: string,
        }[],
    }[],
};
// #endregion