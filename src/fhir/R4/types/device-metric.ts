import { Identifier, CodeableConcept, Reference, BackboneElement, instant, Timing } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Device } from "./device"

export type DeviceMetric = DomainResource & {
    resourceType: "DeviceMetric",
    identifier?: Identifier[],
    type: CodeableConcept,
    unit?: CodeableConcept,
    source?: Reference<Device>,
    parent?: Reference<Device>,
    operationalStatus?: "on" | "off" | "standby" | "entered-in-error",
    color?: "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white",
    category: "measurement" | "setting" | "calculation" | "unspecified",
    measurementPeriod?: Timing,
    calibration?: (BackboneElement & {
        type?: "unspecified" | "offset" | "gain" | "two-point",
        state?: "not-calibrated" | "calibration-required" | "calibrated" | "unspecified",
        time?: instant,
    })[]
}