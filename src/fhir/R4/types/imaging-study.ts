import { Identifier, Coding, Reference, dateTime, unsignedInt, CodeableConcept, Annotation, BackboneElement, id } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Appointment } from "./appointment"
import { AppointmentResponse } from "./appointment-response"
import { CarePlan } from "./care-plan"
import { CareTeam } from "./care-team"
import { Condition } from "./condition"
import { Device } from "./device"
import { DiagnosticReport } from "./diagnostic-report"
import { DocumentReference } from "./document-reference"
import { Encounter } from "./encounter"
import { Endpoint } from "./endpoint"
import { Group } from "./group"
import { Media } from "./media"
import { Observation } from "./observation.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { Procedure } from "./procedure"
import { RelatedPerson } from "./related-person"
import { ServiceRequest } from "./service-request"
import { Specimen } from "./specimen"
import { Task } from "./task"

export type ImagingStudy = DomainResource & {
    resourceType: "ImagingStudy",
    identifier?: Identifier[],
    status: "registered" | "available" | "cancelled" | "entered-in-error" | "unknown",
    modality?: Coding[],
    subject: Reference<Patient | Device | Group>,
    encounter?: Reference<Encounter>,
    started?: dateTime,
    basedOn?: Reference<CarePlan | ServiceRequest | Appointment | AppointmentResponse | Task>[],
    referrer?: Reference<Practitioner | PractitionerRole>,
    interpreter?: Reference<Practitioner | PractitionerRole>[],
    endpoint?: Reference<Endpoint>[],
    numberOfSeries?: unsignedInt,
    numberOfInstances?: unsignedInt,
    procedureReference?: Reference<Procedure>,
    procedureCode?: CodeableConcept[],
    location?: Reference<Location>,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Observation | Media | DiagnosticReport | DocumentReference>[],
    note?: Annotation[],
    description?: string,
    series?: (BackboneElement & {
        uid: id,
        number?: unsignedInt,
        modality: Coding,
        description?: string,
        numberOfInstances?: unsignedInt,
        endpoint?: Reference<Endpoint>[],
        bodySite?: Coding,
        laterality?: Coding,
        specimen?: Reference<Specimen>[],
        started?: dateTime,
        performer?: (BackboneElement & {
            function?: CodeableConcept,
            actor: Reference<Practitioner | PractitionerRole | Organization | CareTeam | Patient | Device | RelatedPerson>
        })[],
        instance?: (BackboneElement & {
            uid: id,
            sopClass: Coding,
            number?: unsignedInt,
            title?: string,
        })[],
    })[],
}
