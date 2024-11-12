import { Identifier, CodeableConcept, Reference, dateTime, code, BackboneElement, Period, Narrative } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Composition = DomainResource & {
    resourceType: "Composition",
    identifier?: Identifier,
    status: "preliminary" | "final" | "amended" | "entered-in-error",
    type: CodeableConcept,
    category?: CodeableConcept[],
    subject?: Reference,
    encounter?: Reference,
    date: dateTime,
    author: Reference[],
    title: string,
    confidentiality?: "U" | "L" | "M" | "N" | "R" | "V",
    attester?: (BackboneElement & {
        mode: "personal" | "professional" | "legal" | "official",
        time?: dateTime,
        party: Reference,
    })[],
    custodian?: Reference,
    relatesTo?: (BackboneElement & {
        code: "replaces" | "transforms" | "signs" | "appends",
        targetIdentifier?: Identifier,
        targetReference?: Reference,
    })[],
    event?: (BackboneElement & {
        code?: CodeableConcept[],
        period?: Period,
        detail?: Reference[],
    })[],
    section?: CompositionSection[],
};

type CompositionSection = BackboneElement & {
    title?: string,
    code?: CodeableConcept,
    author?: Reference[],
    focus?: Reference,
    text?: Narrative,
    mode?: "working" | "snapshot" | "changes",
    orderedBy?: CodeableConcept,
    entry?: Reference[],
    emptyReason?: CodeableConcept,
    section?: CompositionSection[],
}