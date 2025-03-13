import { Identifier, Reference, dateTime, BackboneElement, decimal, integer, date, time, uri, Attachment, Coding, Quantity, canonical } from "./_basic-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { CarePlan } from "./care-plan"
import { Device } from "./device"
import { Encounter } from "./encounter"
import { Observation } from "./observation.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"
import { Procedure } from "./procedure"
import { RelatedPerson } from "./related-person"
import { ServiceRequest } from "./service-request"

export type QuestionnaireResponse = DomainResource & {
    resourceType: "QuestionnaireResponse",
    identifier?: Identifier,
    basedOn?: Reference<CarePlan | ServiceRequest>[],
    partOf?: Reference<Observation | Procedure>[],
    questionnaire?: canonical,
    status: "in-progress" | "completed" | "amended" | "entered-in-error" | "stopped",
    subject?: Reference<FHIRResource>,
    encounter?: Reference<Encounter>,
    authored?: dateTime,
    author?: Reference<Device | Practitioner | PractitionerRole | Patient | RelatedPerson | Organization>,
    source?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>,
    item?: QuestionnaireResponseItem[],
}

type QuestionnaireResponseItem = BackboneElement & {
    linkId: string,
    definition?: uri,
    text?: string,
    answer?: (BackboneElement & {
        valueBoolean?: boolean,
        valueDecimal?: decimal,
        valueInteger?: integer,
        valueDate?: date,
        valueDateTime?: dateTime,
        valueTime?: time,
        valueString?: string,
        valueUri?: uri,
        valueAttachment?: Attachment,
        valueCoding?: Coding,
        valueQuantity?: Quantity,
        valueReference?: Reference<FHIRResource>,
        item?: QuestionnaireResponseItem[],
    })[],
    item?: QuestionnaireResponseItem[],
}
