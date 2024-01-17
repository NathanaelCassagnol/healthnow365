import { BackboneElement } from "../backboneElement.types";
import { Annotation, Attachment, CodeableConcept, Identifier, Period, Quantity, Ratio, Range, Reference, SampledData, SimpleQuantity, Timing, canonical, code, dateTime, instant, integer, markdown, time } from "../basic-types";
import { DomainResource } from "./resource.types";

// https://build.fhir.org/observation.html
export type Observation = DomainResource & ObservationComponent & {
    resourceType: "Observation";
    identifier?: Identifier[];
    instantiatesCanonical?: canonical; // canonical(ObservationDefinition)
    instantiatesReference?: Reference; // Reference(ObservationDefinition)
    basedOn?: Reference[]; // Reference(CarePlan | DeviceRequest | ImmunizationRecommendation | MedicationRequest | NutritionOrder | ServiceRequest)
    triggeredBy?: (BackboneElement & {
        observation: Reference; // required; Reference(Observation)
        type: "reflex" | "repeat" | "re-run"; // required
        reason?: string;
    })[];
    partOf?: Reference[]; // Reference(MedicationAdministration | MedicationDispense | MedicationStatement | Procedure | Immunization | ImagingStudy | GenomicStudy)
    status: "registered" | "preliminary" | "final" | "amended" | "corrected" | "cancelled" | "entered-in-error" | "unknown"; // required
    category?: CodeableConcept[];
    subject?: Reference; // Reference(Patient | Group | Device | Location | Organization | Procedure | Practitioner | Medication | Substance | BiologicallyDerivedProduct | NutritionProduct)
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
    bodyStructure?: Reference; // Reference(BodyStructure)
    method?: CodeableConcept;
    specimen?: Reference; // Reference(Specimen | Group)
    device?: Reference; // Reference(Device | DeviceMetric)
    hasMember?: Reference[]; // Reference(Observation | QuestionnaireResponse | MolecularSequence)
    derivedFrom?: Reference[]; // Reference(DocumentReference | ImagingStudy | ImagingSelection | QuestionnaireResponse | Observation | MolecularSequence | GenomicStudy)
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
    valueAttachment?: Attachment;
    valueReference?: Reference; // Reference(MolecularSequence)

    dataAbsentReason?: CodeableConcept;
    interpretation?: CodeableConcept[];

    referenceRange?: (BackboneElement & {
        low?: SimpleQuantity;
        high?: SimpleQuantity;
        normalValue?: CodeableConcept;
        type?: CodeableConcept;
        appliesTo?: CodeableConcept[];
        age?: Range;
        text?: markdown;
    })[];
}