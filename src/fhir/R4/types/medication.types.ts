import { BackboneElement, CodeableConcept, Identifier, Ratio, Reference, dateTime } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Medication = DomainResource & {
    resourceType: "Medication",
    identifier?: Identifier[],
    code?: CodeableConcept,
    status?: "active"|"inactive"|"entered-in-error",
    manufacturer?: Reference,
    form?: CodeableConcept,
    amount?: Ratio,
    ingredient?: (BackboneElement & {
        itemCodeableConcept?: CodeableConcept,
        itemReference?: Reference,
        isActive?: boolean,
        strength?: Ratio,
    })[],
    batch?: BackboneElement & {
        lotNumber?: string,
        expirationDate?: dateTime,
    },
}