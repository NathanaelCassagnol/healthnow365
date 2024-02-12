import { Identifier, Reference, dateTime, Annotation, BackboneElement, decimal, integer, date, time, uri, Attachment, Coding, Quantity } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type QuestionnaireResponse = DomainResource & {
    resourceType: "QuestionnaireResponse",
    identifier?: Identifier[],
    basedOn?: Reference[],
    partOf?: Reference[],
    questionnaire: string,
    status: "in-progress" | "completed" | "amended" | "entered-in-error" | "stopped",
    subject?: Reference,
    encounter?: Reference,
    authored?: dateTime,
    author?: Reference,
    source?: Reference,
    item?: QuestionnaireResponseItem[],
    derivedFrom?: Reference[],
    note?: Annotation[],
}

type QuestionnaireResponseItem = BackboneElement & {
    linkId: string,
    definition?: string,
    text?: string,
    answer?: QuestionnaireResponseAnswer[],
    item?: QuestionnaireResponseItem[],
}

type QuestionnaireResponseAnswer = BackboneElement & {
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
}