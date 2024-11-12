import { Identifier, CodeableConcept, Attachment, Reference } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type BodyStructure = DomainResource & {
    resourceType: "BodyStructure",
    identifier?: Identifier[],
    active?: boolean,
    morphology?: CodeableConcept,
    location?: CodeableConcept,
    locationQualifier?: CodeableConcept[],
    description?: string,
    image?: Attachment[],
    patient: Reference,
}