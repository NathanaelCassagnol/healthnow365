import { Identifier, Reference, CodeableConcept, BackboneElement, Quantity, dateTime, Period, Timing, SimpleQuantity } from "./_basic-types";
import { Contract } from "./_missing-types";
import { DomainResource } from "./_resource.types";
import { Device } from "./device";
import { Medication } from "./medication.types";
import { Organization } from "./organization.types";
import { Patient } from "./patient.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Substance } from "./substance.types";
import { SupplyRequest } from "./supply-request";

export type SupplyDelivery = DomainResource & {
    resourceType: "SupplyDelivery",
    identifier?: Identifier[],
    basedOn?: Reference<SupplyRequest>[],
    partOf?: Reference<SupplyDelivery | Contract>[],
    status?: "in-progress" | "completed" | "abandoned" | "entered-in-error",
    patient?: Reference<Patient>,
    type?: CodeableConcept,
    suppliedItem?: (BackboneElement & {
        quantity?: SimpleQuantity,
        itemCodeableConcept?: CodeableConcept,
        itemReference?: Reference<Medication | Substance | Device>,
    }),
    occurrenceDateTime?: dateTime,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    supplier?: Reference<Practitioner | PractitionerRole | Organization>,
    destination?: Reference<Location>,
    receiver?: Reference<Practitioner | PractitionerRole>[]
};