import { Annotation, CodeableConcept, Identifier, Period, Quantity, Ratio, Range, Reference, SampledData, SimpleQuantity, Timing, dateTime, instant, integer, time, BackboneElement } from "./_basic-types";
import { DomainResource } from "./_resource.types";

// https://build.fhir.org/observation.html
export type Observation = DomainResource & ObservationComponent & {
    resourceType: "Observation";
    identifier?: Identifier[];
    basedOn?: Reference[]; // Reference(CarePlan | DeviceRequest | ImmunizationRecommendation | MedicationRequest | NutritionOrder | ServiceRequest)
    partOf?: Reference[]; // Reference(MedicationAdministration | MedicationDispense | MedicationStatement | Procedure | Immunization | ImagingStudy)
    status: "registered" | "preliminary" | "final" | "amended" | "corrected" | "cancelled" | "entered-in-error" | "unknown"; // required
    category?: CodeableConcept[];
    subject?: Reference; // Reference(Patient | Group | Device | Location)
    focus?: Reference[]; // Reference(Any)
    encounter?: Reference; // Reference(Encounter)
    effectiveDateTime?: dateTime;
    effectivePeriod?: Period;
    effectiveTiming?: Timing;
    effectiveInstant?: instant;
    issued?: instant;
    performer?: Reference[]; // Reference(Practitioner | PractitionerRole | Organization | CareTeam | Patient | RelatedPerson)
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    specimen?: Reference; // Reference(Specimen | Group)
    device?: Reference; // Reference(Device | DeviceMetric)
    hasMember?: Reference[]; // Reference(Observation | QuestionnaireResponse | MolecularSequence)
    derivedFrom?: Reference[]; // Reference(DocumentReference | ImagingStudy | Media | QuestionnaireResponse | Observation | MolecularSequence)
    component?: (BackboneElement & ObservationComponent)[];
}
// Not defined in the specs, but reduces redundant data for clarity
type ObservationComponent = {
    code: CodeableConcept; // required

    valueQuantity?: Quantity;
    valueCodeableConcept?: CodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: integer;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueSampledData?: SampledData;
    valueTime?: time;
    valueDateTime?: dateTime;
    valuePeriod?: Period;
    dataAbsentReason?: CodeableConcept;
    interpretation?: CodeableConcept[];

    referenceRange?: (BackboneElement & {
        low?: SimpleQuantity;
        high?: SimpleQuantity;
        type?: CodeableConcept;
        appliesTo?: CodeableConcept[];
        age?: Range;
        text?: string;
    })[];
}