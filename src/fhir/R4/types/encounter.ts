import { Identifier, Coding, CodeableConcept, Reference, Period, Duration, positiveInt, BackboneElement } from "./_basic-types"
import { Account } from "./_missing-types"
import { DomainResource } from "./_resource.types"
import { Appointment } from "./appointment"
import { Condition } from "./condition"
import { EpisodeOfCare } from "./episode-of-care"
import { Group } from "./group"
import { ImmunizationRecommendation } from "./immunization-recommendation"
import { Observation } from "./observation.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { Procedure } from "./procedure"
import { RelatedPerson } from "./related-person"
import { ServiceRequest } from "./service-request"

export type Encounter = DomainResource & {
    resourceType: "Encounter",
    identifier?: Identifier[],
    status: "planned" | "arrived" | "triaged" | "in-progress" | "onleave" | "finished" | "cancelled" | "entered-in-error" | "unknown",
    statusHistory?: (BackboneElement & {
        status: "planned" | "arrived" | "triaged" | "in-progress" | "onleave" | "finished" | "cancelled" | "entered-in-error" | "unknown",
        period: Period
    })[],
    class: Coding,
    classHistory?: (BackboneElement & {
        class: Coding,
        period: Period
    })[],
    type?: CodeableConcept[],
    serviceType?: CodeableConcept,
    priority?: CodeableConcept,
    subject?: Reference<Patient | Group>,
    episodeOfCare?: Reference<EpisodeOfCare>[],
    basedOn?: Reference<ServiceRequest>[],
    participant?: (BackboneElement & {
        type?: CodeableConcept[],
        period?: Period,
        individual?: Reference<Practitioner | PractitionerRole | RelatedPerson>
    })[],
    appointment?: Reference<Appointment>[],
    period?: Period,
    length?: Duration,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference<Condition | Procedure | Observation | ImmunizationRecommendation>[],
    diagnosis?: ({
        condition: Reference<Condition | Procedure>,
        use?: CodeableConcept,
        rank?: positiveInt
    })[],
    account?: Reference<Account>[],
    hospitalization?: BackboneElement & {
        preAdmissionIdentifier?: Identifier,
        origin?: Reference<Location | Organization>,
        admitSource?: CodeableConcept,
        reAdmission?: CodeableConcept,
        dietPreference?: CodeableConcept[],
        specialCourtesy?: CodeableConcept[],
        specialArrangement?: CodeableConcept[],
        destination?: Reference<Location | Organization>,
        dischargeDisposition?: CodeableConcept
    },
    location?: (BackboneElement & {
        location: Reference<Location>,
        status: "planned" | "active" | "reserved" | "completed",
        physicalType?: CodeableConcept,
        period?: Period
    })[],
    serviceProvider?: Reference<Organization>,
    partOf?: Reference<Encounter>
}
