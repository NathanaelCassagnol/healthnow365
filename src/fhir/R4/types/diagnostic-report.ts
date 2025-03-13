import { Identifier, Reference, CodeableConcept, dateTime, Period, instant, Attachment, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { CarePlan } from "./care-plan"
import { CareTeam } from "./care-team"
import { Device } from "./device"
import { Encounter } from "./encounter"
import { Group } from "./group"
import { ImagingStudy } from "./imaging-study"
import { ImmunizationRecommendation } from "./immunization-recommendation"
import { Media } from "./media"
import { MedicationRequest } from "./medication-request"
import { Medication } from "./medication.types"
import { NutritionOrder } from "./nutrition-order"
import { Observation } from "./observation.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { Procedure } from "./procedure"
import { ServiceRequest } from "./service-request"
import { Specimen } from "./specimen"
import { Substance } from "./substance.types"

export type DiagnosticReport = DomainResource & {
    resourceType: "DiagnosticReport",
    identifier?: Identifier[],
    basedOn?: Reference<CarePlan | ImmunizationRecommendation | MedicationRequest | NutritionOrder | ServiceRequest>[],
    status: "registered" | "partial" | "preliminary" | "final" | "amended" | "corrected" | "appended" | "cancelled" | "entered-in-error" | "unknown",
    category?: CodeableConcept[],
    code: CodeableConcept,
    subject?: Reference<Patient | Group | Device | Location | Organization | Procedure | Practitioner | Medication | Substance>,
    encounter?: Reference<Encounter>,
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    issued?: instant,
    performer?: Reference<Practitioner | PractitionerRole | Organization | CareTeam>[],
    resultsInterpreter?: Reference<Practitioner | PractitionerRole | Organization | CareTeam>[],
    specimen?: Reference<Specimen>[],
    result?: Reference<Observation>[],
    imagingStudy?: Reference<ImagingStudy>[],
    media?: (BackboneElement & {
        comment?: string,
        link: Reference<Media>
    })[],
    conclusion?: string,
    conclusionCode?: CodeableConcept[],
    presentedForm?: Attachment[]
}