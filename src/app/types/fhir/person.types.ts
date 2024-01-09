import { BackboneElement } from "./backboneElement.types";
import { Address, Attachment, CodeableConcept, ContactPoint, HumanName, Identifier, Reference, date, dateTime } from "./basic-types";
import { DomainResource } from "./resource.types";

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
    identifier?: Identifier[],
    active?: boolean,
    name?: HumanName[],
    telecom?: ContactPoint[],
    gender?: 'male' | 'female' | 'other' | 'unknown',
    birthDate?: date,
    deceasedBoolean?: boolean,
    deceasedDateTime?: dateTime,
    address?: Address[],
    maritalStatus: CodeableConcept, // A | D | 
    photo?: Attachment[],
    communication?: (BackboneElement & {
        language: CodeableConcept, // required
        preferred?: boolean
    })[],
    managingOrganization?: Reference, // Reference(Organization)
    link?: (BackboneElement & {
        target: Reference, // required; Reference(Patient | Practitioner | RelatedPerson | Person)
        assurance?: "level1" | "level2" | "level3" | "level4"
    })[]
}