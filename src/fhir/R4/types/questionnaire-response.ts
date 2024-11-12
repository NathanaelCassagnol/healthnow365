import { Identifier, Reference, dateTime, Annotation, BackboneElement, decimal, integer, date, time, uri, Attachment, Coding, Quantity, canonical } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type QuestionnaireResponse = DomainResource & {
    resourceType: "QuestionnaireResponse",
    identifier?: Identifier,
    basedOn?: Reference[],
    partOf?: Reference[],
    questionnaire?: canonical,
    status: "in-progress" | "completed" | "amended" | "entered-in-error" | "stopped",
    subject?: Reference,
    encounter?: Reference,
    authored?: dateTime,
    author?: Reference,
    source?: Reference,
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
        valueReference?: Reference,
        item?: QuestionnaireResponseItem[],
    })[],
    item?: QuestionnaireResponseItem[],
}
