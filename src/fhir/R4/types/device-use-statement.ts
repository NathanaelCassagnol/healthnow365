import { Identifier, Reference, Timing, Period, dateTime, CodeableConcept, Annotation } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type DeviceUseStatement = DomainResource & {
    resourceType: "DeviceUseStatement",
    identifier?: Identifier[],
    basedOn?: Reference[],
    status: "active" | "completed" | "entered-in-error" | "intended" | "stopped" | "on-hold",
    subject: Reference,
    derivedFrom?: Reference[],
    timingTiming?: Timing,
    timingPeriod?: Period,
    timingDateTime?: dateTime,
    recordedOn?: dateTime,
    source?: Reference,
    device: Reference,
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    bodySite?: CodeableConcept,
    note?: Annotation[]
};