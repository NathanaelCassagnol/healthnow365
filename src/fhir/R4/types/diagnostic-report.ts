import { Identifier, Reference, CodeableConcept, dateTime, Period, instant, Attachment, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Observation } from "./observation.types"

export type DiagnosticReport = DomainResource & {
    resourceType: "DiagnosticReport",
    identifier?: Identifier[],
    basedOn?: Reference[],
    status: "registered" | "partial" | "preliminary" | "final" | "amended" | "corrected" | "appended" | "cancelled" | "entered-in-error" | "unknown",
    category?: CodeableConcept[],
    code: CodeableConcept,
    subject?: Reference,
    encounter?: Reference,
    effectiveDateTime?: dateTime,
    effectivePeriod?: Period,
    issued?: instant,
    performer?: Reference[],
    resultsInterpreter?: Reference[],
    specimen?: Reference[],
    result?: Reference[],
    imagingStudy?: Reference[],
    media?: (BackboneElement & {
        comment?: string,
        link: Reference
    })[],
    conclusion?: string,
    conclusionCode?: CodeableConcept[],
    presentedForm?: Attachment[]
}