import { CodeableConcept, Reference, BackboneElement, Ratio, Money, Dosage, Period, SimpleQuantity, markdown, Duration } from "./_basic-types";
import { ObservationDefinition } from "./_missing-types";
import { DomainResource } from "./_resource.types";
import { DetectedIssue } from "./detected-issue";
import { DocumentReference } from "./document-reference";
import { Media } from "./media";
import { Medication } from "./medication.types";
import { Organization } from "./organization.types";
import { Substance } from "./substance.types";

export type MedicationKnowledge = DomainResource & {
    resourceType: "MedicationKnowledge",
    code?: CodeableConcept,
    status?: "active" | "inactive" | "entered-in-error",
    manufacturer?: Reference<Organization>,
    doseForm?: CodeableConcept,
    amount?: SimpleQuantity,
    synonym?: string[],
    relatedMedicationKnowledge?: (BackboneElement & {
        type: CodeableConcept,
        reference: Reference<MedicationKnowledge>[],
    })[],
    associatedMedication?: Reference<Medication>[],
    productType?: CodeableConcept[],
    monograph?: (BackboneElement & {
        type?: CodeableConcept,
        source?: Reference<DocumentReference | Media>,
    })[],
    ingredient?: (BackboneElement & {
        itemCodeableConcept?: CodeableConcept,
        itemReference?: Reference<Substance>,
        isActive?: boolean,
        strength?: Ratio,
    })[],
    preparationInstruction?: markdown,
    intendedRoute?: CodeableConcept[],
    cost?: (BackboneElement & {
        type: CodeableConcept,
        source?: string,
        cost?: Money,
    })[],
    monitoringProgram?: (BackboneElement & {
        type?: CodeableConcept,
        name?: string,
    })[],
    administrationGuidelines?: (BackboneElement & {
        dosage?: (BackboneElement & {
            type?: CodeableConcept,
            dosage?: Dosage[],
        })[],
        indicationCodeableConcept?: CodeableConcept,
        indicationReference?: Reference<ObservationDefinition>,
        patientCharacteristics?: (BackboneElement & {
            characteristicCodeableConcept?: CodeableConcept,
            characteristicQuantity?: SimpleQuantity,
            value?: string[],
        })[],
    })[],
    medicineClassification?: (BackboneElement & {
        type: CodeableConcept,
        classification: CodeableConcept[],
    })[],
    packaging?: (BackboneElement & {
        type?: CodeableConcept,
        quantity?: SimpleQuantity,
    })[],
    drugCharacteristic?: (BackboneElement & {
        type?: CodeableConcept,
        valueCodeableConcept?: CodeableConcept,
        valueString?: string,
        valueQuantity?: SimpleQuantity,
        valueBase64Binary?: string,
    })[],
    contraindication?: Reference<DetectedIssue>[],
    regulatory?: (BackboneElement & {
        regulatoryAuthority: Reference<Organization>,
        substitution?: (BackboneElement & {
            type: CodeableConcept,
            allowed: boolean,
        })[],
        schedule?: (BackboneElement & {
            schedule: CodeableConcept,
        })[],
        maxDispense?: (BackboneElement & {
            quantity: SimpleQuantity,
            period: Period,
        })[],
    })[],
    kinetics?: (BackboneElement & {
        areaUnderCurve?: SimpleQuantity[],
        lethalDose50?: SimpleQuantity[],
        halfLifePeriod?: Duration,
    })[],
};