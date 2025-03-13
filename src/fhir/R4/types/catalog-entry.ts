import { Identifier, CodeableConcept, Reference, Period, dateTime, BackboneElement } from "./_basic-types";
import { ActivityDefinition, ObservationDefinition, PlanDefinition, SpecimenDefinition } from "./_missing-types";
import { DomainResource } from "./_resource.types";
import { Binary } from "./binary";
import { Device } from "./device";
import { HealthcareService } from "./healthcare-service";
import { Medication } from "./medication.types";
import { Organization } from "./organization.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";

export type CatalogEntry = DomainResource & {
    resourceType: "CatalogEntry",
    identifier?: Identifier[],
    type?: CodeableConcept,
    orderable: boolean,
    referencedItem: Reference<Medication | Device | Organization | Practitioner | PractitionerRole | HealthcareService | ActivityDefinition | PlanDefinition | SpecimenDefinition | ObservationDefinition | Binary>,
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
        item: Reference<CatalogEntry>,
    })[],
};