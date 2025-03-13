import { Identifier, Reference, BackboneElement, uri, base64Binary, CodeableConcept, dateTime, Quantity, ContactPoint, Annotation } from "./_basic-types"
import { DeviceDefinition } from "./_missing-types"
import { DomainResource } from "./_resource.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"

export type Device = DomainResource & {
    resourceType: "Device",
    identifier?: Identifier[],
    definition?: Reference<DeviceDefinition>,
    udiCarrier?: (BackboneElement & {
        deviceIdentifier?: string,
        issuer?: uri,
        jurisdiction?: uri,
        carrierAIDC?: base64Binary,
        carrierHRF?: string,
        entryType?: "barcode" | "rfid" | "manual" | "card" | "self-reported" | "unknown"
    })[],
    status?: "active" | "inactive" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept[],
    distinctIdentifier?: string,
    manufacturer?: string,
    manufactureDate?: dateTime,
    expirationDate?: dateTime,
    lotNumber?: string,
    serialNumber?: string,
    deviceName?: (BackboneElement & {
        name: string,
        type: "udi-label-name" | "user-friendly-name" | "patient-reported-name" | "manufacturer-name" | "model-name" | "other"
    })[],
    modelNumber?: string,
    partNumber?: string,
    type?: CodeableConcept,
    specialization?: (BackboneElement & {
        systemType: CodeableConcept,
        version?: string
    })[],
    version?: (BackboneElement & {
        type?: CodeableConcept,
        component?: Identifier,
        value: string
    })[],
    property?: (BackboneElement & {
        type: CodeableConcept,
        valueQuantity?: Quantity[],
        valueCode?: CodeableConcept[]
    })[],
    patient?: Reference<Patient>,
    owner?: Reference<Organization>,
    contact?: ContactPoint[],
    location?: Reference<Location>,
    url?: uri,
    note?: Annotation[],
    safety?: CodeableConcept[],
    parent?: Reference<Device>
}