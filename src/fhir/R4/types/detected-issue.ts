import { Identifier, CodeableConcept, Reference, dateTime, Period, BackboneElement, uri } from "./_basic-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { Device } from "./device"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"

export type DetectedIssue = DomainResource & {
    resourceType: "DetectedIssue",
    identifier?: Identifier[],
    status: "registered" | "preliminary" | "final" | "amended" | "corrected" | "cancelled" | "entered-in-error" | "unknown",
    code?: CodeableConcept,
    severity?: "high" | "moderate" | "low",
    patient?: Reference<Patient>,
    identifiedDateTime?: dateTime,
    identifiedPeriod?: Period,
    author?: Reference<Practitioner | PractitionerRole | Device>,
    implicated?: Reference<FHIRResource>[],
    evidence?: (BackboneElement & {
        code?: CodeableConcept[],
        detail?: Reference<FHIRResource>[],
    })[],
    detail?: string,
    reference?: uri,
    mitigation?: (BackboneElement & {
        action: CodeableConcept,
        date?: dateTime,
        author?: Reference<Practitioner | PractitionerRole>
    })[]
}