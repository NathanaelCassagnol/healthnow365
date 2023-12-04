export interface AllergyIntolerance {
    category: string; //Typically food, medication, environment, biologic
    clinicalStatus: CodeableConcept; //active, resolved, inactive
    code?: CodeableConcept;
    criticality?: string;
    id: string;
    note?: Annotation[];
    onsetDateTime?: string;
    onsetPeriod?: Period;
    patient?: Reference;
    reaction: Reaction[];
    recordedDate: string;
    recorder?: Reference;
    verificationStatus: CodeableConcept;
}

export interface CodeableConcept {
    coding: Coding[] | Coding;
    text?: string;
}
export interface Coding {
    system?: string,
    version?: string,
    code?: string,
    display?: string
}
export interface Annotation {

}
export interface Period {

}
export interface Reference {

}
export interface Reaction {
    description: string;
    manifestation: CodeableConcept;
    severity: "mild" | "moderate" | "severe";
}