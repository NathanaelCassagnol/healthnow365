import { Identifier, CodeableConcept, Reference, Period, dateTime, BackboneElement } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type CatalogEntry = DomainResource & {
    resourceType: "CatalogEntry",
    identifier?: Identifier[],
    type?: CodeableConcept,
    orderable: boolean,
    referencedItem: Reference,
    additionalIdentifier?: Identifier[],
    classification?: CodeableConcept[],
    status?: "draft" | "active" | "retired" | "unknown",
    validityPeriod?: Period,
    validTo?: dateTime,
    lastUpdated?: dateTime,
    additionalCharacteristic?: CodeableConcept[],
    additionalClassification?: CodeableConcept[],
    relatedEntry?: (BackboneElement & {
        relationtype: "triggers" | "is-replaced-by",
        item: Reference,
    })[],
};