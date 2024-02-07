import { Identifier, Coding, CodeableConcept, Reference, Period, Duration, positiveInt, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

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
    subject?: Reference,
    episodeOfCare?: Reference[],
    basedOn?: Reference[],
    participant?: (BackboneElement & {
        type?: CodeableConcept[],
        period?: Period,
        individual?: Reference
    })[],
    appointment?: Reference[],
    period?: Period,
    length?: Duration,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    diagnosis?: ({
        condition: Reference,
        use?: CodeableConcept,
        rank?: positiveInt
    })[],
    account?: Reference[],
    hospitalization?: BackboneElement & {
        preAdmissionIdentifier?: Identifier,
        origin?: Reference,
        admitSource?: CodeableConcept,
        reAdmission?: CodeableConcept,
        dietPreference?: CodeableConcept[],
        specialCourtesy?: CodeableConcept[],
        specialArrangement?: CodeableConcept[],
        destination?: Reference,
        dischargeDisposition?: CodeableConcept
    },
    location?: (BackboneElement & {
        location: Reference,
        status: "planned" | "active" | "reserved" | "completed",
        physicalType?: CodeableConcept,
        period?: Period
    })[],
    serviceProvider?: Reference,
    partOf?: Reference
}
