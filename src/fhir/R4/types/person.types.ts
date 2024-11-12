import { Address, Attachment, BackboneElement, ContactPoint, HumanName, Identifier, Reference, date } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type MaritalStatusCodes = 'A'|'D'|'I'|'L'|'M'|'C'|'P'|'T'|'U'|'S'|'W'|'UNK';
export const MaritalStatusDictionary = {
    'A': 'Annulled',
    'D': 'Divorced',
    'I': 'Interlocutory',
    'L': 'Legally Separated',
    'M': 'Married',
    'C': 'Common Law',
    'P': 'Polygamous',
    'T': 'Domestic Partner',
    'U': 'Unmarried',
    'S': 'Never Married',
    'W': 'Widowed',
    'UNK': 'Unknown',
}

// https://build.fhir.org/person.html#person
export type Person = DomainResource & {
    resourceType: "Person",
    identifier?: Identifier[],
    name?: HumanName[],
    telecom?: ContactPoint[],
    gender?: 'male' | 'female' | 'other' | 'unknown',
    birthDate?: date,
    address?: Address[],
    photo?: Attachment,
    managingOrganization?: Reference,
    active?: boolean,
    link?: (BackboneElement & {
        target: Reference,
        assurance?: "level1" | "level2" | "level3" | "level4"
    })[]
}