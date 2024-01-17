import { BackboneElement } from "../backboneElement.types";
import { CodeableConcept, CodeableReference, Identifier, Quantity, Ratio, Reference, dateTime } from "../basic-types";
import { DomainResource } from "./resource.types";

export type Medication = DomainResource & {
    resourceType: "Medication",
    identifier?: Identifier[],
    code?: CodeableConcept,
    status?: "active"|"inactive"|"entered-in-error",
    marketingAuthorizationHolder?: Reference, // Reference(Organization)
    doseForm?: CodeableConcept,
    totalVolume?: Quantity,
    ingredient?: (BackboneElement & {
        item: CodeableReference, // Required; CodeableReference(Substance | Medication)
        isActive?: boolean,
        // One of these three:
        strengthRatio?: Ratio,
        strengthCodeableConcept?: CodeableConcept,
        strengthQuantity?: Quantity,
    })[],
    batch?: BackboneElement & {
        lotNumber?: string,
        expirationDate?: dateTime,
    },
    definition?: Reference // Reference(MedicationKnowledge)
}