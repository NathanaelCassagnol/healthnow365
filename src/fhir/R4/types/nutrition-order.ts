import { Annotation, BackboneElement, CodeableConcept, Identifier, Quantity, Ratio, Reference, SimpleQuantity, Timing, canonical, dateTime, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type NutritionOrder = DomainResource & {
    resourceType: "NutritionOrder",
    identifier?: Identifier[],
    instantiatesCanonical?: canonical[],
    instantiatesUri?: uri[],
    instantiates?: uri[],
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    patient: Reference,
    encounter?: Reference,
    dateTime: dateTime,
    orderer?: Reference,
    allergyIntolerance?: Reference[],
    foodPreferenceModifier?: CodeableConcept[],
    excludeFoodModifier?: CodeableConcept[],
    oralDiet?: (BackboneElement & {
        type?: CodeableConcept[],
        schedule?: Timing[],
        nutrient?: (BackboneElement & {
            modifier?: CodeableConcept,
            amount?: SimpleQuantity,
        })[],
        texture?: (BackboneElement & {
            modifier?: CodeableConcept,
            foodType?: CodeableConcept,
        })[],
        fluidConsistencyType?: CodeableConcept[],
        instruction?: string,
    }),
    supplement?: (BackboneElement & {
        type?: CodeableConcept,
        productName?: string,
        schedule?: Timing[],
        quantity?: SimpleQuantity,
        instruction?: string,
    })[],
    enteralFormula?: (BackboneElement & {
        baseFormulaType?: CodeableConcept,
        baseFormulaProductName?: string,
        additiveType?: CodeableConcept,
        additiveProductName?: string,
        caloricDensity?: SimpleQuantity,
        routeofAdministration?: CodeableConcept,
        administration?: (BackboneElement & {
            schedule?: Timing,
            quantity?: SimpleQuantity,
            rateQuantity?: SimpleQuantity,
            rateRatio?: Ratio,
        })[],
        maxVolumeToDeliver?: SimpleQuantity,
        administrationInstruction?: string,
    }),
    note?: Annotation[]
};