import { Identifier, CodeableConcept, Reference, dateTime, BackboneElement } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type AdverseEvent = DomainResource & {
    resourceType: "AdverseEvent",
    identifier?: Identifier,
    actuality: "actual" | "potential",
    category?: CodeableConcept[],
    event?: CodeableConcept,
    subject: Reference,
    encounter?: Reference,
    date?: dateTime,
    detected?: dateTime,
    recordedDate?: dateTime,
    resultingCondition?: Reference[],
    location?: Reference,
    seriousness?: CodeableConcept,
    severity?: CodeableConcept,
    outcome?: CodeableConcept,
    recorder?: Reference,
    contributor?: Reference[],
    suspectEntity?: (BackboneElement & {
        instance: Reference,
        causality?: (BackboneElement & {
            assessment?: CodeableConcept,
            productRelatedness?: string,
            author?: Reference,
            method?: CodeableConcept
        })[],
    })[],
    subjectMedicalHistory?: Reference[],
    referenceDocument?: Reference[],
    study?: Reference[],
}