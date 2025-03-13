import { Condition } from "aws-cdk-lib/aws-iam";
import { Identifier, CodeableConcept, Reference, dateTime, BackboneElement } from "./_basic-types";
import { DomainResource } from "./_resource.types";
import { Encounter } from "./encounter";
import { Group } from "./group";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { RelatedPerson } from "./related-person";
import { PractitionerRole } from "./practitioner-role";
import { Device } from "./device";
import { MedicationStatement } from "./medication-statement";
import { MedicationAdministration } from "./medication-administration";
import { Medication } from "./medication.types";
import { Substance } from "./substance.types";
import { Procedure } from "./procedure";
import { Immunization } from "./immunization";
import { DocumentReference } from "./document-reference";
import { Media } from "./media";
import { FamilyMemberHistory } from "./family-member-history";
import { AllergyIntolerance } from "./allergy-intolerance.types";
import { Observation } from "./observation.types";
import { ResearchStudy } from "./_missing-types";

export type AdverseEvent = DomainResource & {
    resourceType: "AdverseEvent",
    identifier?: Identifier,
    actuality: "actual" | "potential",
    category?: CodeableConcept[],
    event?: CodeableConcept,
    subject: Reference<Patient | Group | Practitioner | RelatedPerson>,
    encounter?: Reference<Encounter>,
    date?: dateTime,
    detected?: dateTime,
    recordedDate?: dateTime,
    resultingCondition?: Reference<Condition>[],
    location?: Reference<Location>,
    seriousness?: CodeableConcept,
    severity?: CodeableConcept,
    outcome?: CodeableConcept,
    recorder?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>,
    contributor?: Reference<Practitioner | PractitionerRole | Device>[],
    suspectEntity?: (BackboneElement & {
        instance: Reference<Immunization | Procedure | Substance | Medication | MedicationAdministration | MedicationStatement | Device>,
        causality?: (BackboneElement & {
            assessment?: CodeableConcept,
            productRelatedness?: string,
            author?: Reference<Practitioner | PractitionerRole>,
            method?: CodeableConcept
        })[],
    })[],
    subjectMedicalHistory?: Reference<Condition | Observation | AllergyIntolerance | FamilyMemberHistory | Immunization | Procedure | Media | DocumentReference>[],
    referenceDocument?: Reference<DocumentReference>[],
    study?: Reference<ResearchStudy>[],
}