import { Annotation, CodeableConcept, Identifier, Period, Quantity, Ratio, Range, Reference, SampledData, SimpleQuantity, Timing, dateTime, instant, integer, time, BackboneElement } from "./_basic-types";
import { DomainResource, FHIRResource } from "./_resource.types";
import { CarePlan } from "./care-plan";
import { CareTeam } from "./care-team";
import { Device } from "./device";
import { DeviceMetric } from "./device-metric";
import { DeviceRequest } from "./device-request";
import { DocumentReference } from "./document-reference";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { ImagingStudy } from "./imaging-study";
import { Immunization } from "./immunization";
import { ImmunizationRecommendation } from "./immunization-recommendation";
import { Media } from "./media";
import { MedicationAdministration } from "./medication-administration";
import { MedicationDispense } from "./medication-dispense";
import { MedicationRequest } from "./medication-request";
import { MedicationStatement } from "./medication-statement";
import { MolecularSequence } from "./molecular-sequence";
import { NutritionOrder } from "./nutrition-order";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Procedure } from "./procedure";
import { QuestionnaireResponse } from "./questionnaire-response";
import { RelatedPerson } from "./related-person";
import { ServiceRequest } from "./service-request";
import { Specimen } from "./specimen";

// https://build.fhir.org/observation.html
export type Observation = DomainResource & ObservationComponent & {
    resourceType: "Observation";
    identifier?: Identifier[];
    basedOn?: Reference<CarePlan | DeviceRequest | ImmunizationRecommendation | MedicationRequest | NutritionOrder | ServiceRequest>[];
    partOf?: Reference<MedicationAdministration | MedicationDispense | MedicationStatement | Procedure | Immunization | ImagingStudy>[];
    status: "registered" | "preliminary" | "final" | "amended" | "corrected" | "cancelled" | "entered-in-error" | "unknown";
    category?: CodeableConcept[];
    subject?: Reference<Patient | Group | Device | Location>;
    focus?: Reference<FHIRResource>[];
    encounter?: Reference<Encounter>;
    effectiveDateTime?: dateTime;
    effectivePeriod?: Period;
    effectiveTiming?: Timing;
    effectiveInstant?: instant;
    issued?: instant;
    performer?: Reference<Practitioner | PractitionerRole | Organization | CareTeam | Patient | RelatedPerson>[]
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    specimen?: Reference<Specimen | Group>
    device?: Reference<Device | DeviceMetric>
    hasMember?: Reference<Observation | QuestionnaireResponse | MolecularSequence>[];
    derivedFrom?: Reference<DocumentReference | ImagingStudy | Media | QuestionnaireResponse | Observation | MolecularSequence>[];
    component?: (BackboneElement & ObservationComponent)[];
}
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