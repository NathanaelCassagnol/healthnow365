import { Identifier, CodeableConcept, Reference, Period, Annotation } from "./_basic-types"
import { PlanDefinition } from "./_missing-types"
import { DomainResource } from "./_resource.types"
import { Device } from "./device"
import { Encounter } from "./encounter"
import { Group } from "./group"
import { Medication } from "./medication.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { Procedure } from "./procedure"

export type Flag = DomainResource & {
    resourceType: "Flag",
    identifier?: Identifier[],
    status: "active" | "inactive" | "entered-in-error",
    category?: CodeableConcept[],
    code: CodeableConcept,
    subject: Reference<Patient | Location | Group | Organization | Practitioner | PlanDefinition | Medication | Procedure>,
    period?: Period,
    encounter?: Reference<Encounter>,
    author?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole>,
}