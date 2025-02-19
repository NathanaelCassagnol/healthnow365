import { TitleCasePipe } from "@angular/common";
import { BasicToString } from "app/pipes/basic-to-string.pipe";
import { AllergyIntolerance, AllergyIntoleranceReaction } from "fhir/R4/types/allergy-intolerance.types";
import { FamilyMemberHistory } from "fhir/R4/types/family-member-history";
import { codeableConceptToString, dateTimeToString, periodToString, quantityToString, rangeToString, annotationToString, codeableConceptsToString } from "fhir/R4/utilities/validators-tostring.util";

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