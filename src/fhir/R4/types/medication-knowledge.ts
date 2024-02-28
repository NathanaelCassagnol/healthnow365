import { CodeableConcept, Reference, BackboneElement, Ratio, Money, Dosage, Period, SimpleQuantity, markdown, Duration } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MedicationKnowledge = DomainResource & {
    resourceType: "MedicationKnowledge",
    code?: CodeableConcept,
    status?: "active" | "inactive" | "entered-in-error",
    manufacturer?: Reference,
    doseForm?: CodeableConcept,
    amount?: SimpleQuantity,
    synonym?: string[],
    relatedMedicationKnowledge?: (BackboneElement & {
        type: CodeableConcept,
        reference: Reference[],
    })[],
    associatedMedication?: Reference[],
    productType?: CodeableConcept[],
    monograph?: (BackboneElement & {
        type?: CodeableConcept,
        source?: Reference,
    })[],
    ingredient?: (BackboneElement & {
        itemCodeableConcept?: CodeableConcept,
        itemReference?: Reference,
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
        indicationReference?: Reference,
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
    contraindication?: Reference[],
    regulatory?: (BackboneElement & {
        regulatoryAuthority: Reference,
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