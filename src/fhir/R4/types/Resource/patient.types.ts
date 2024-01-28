import { Address, Attachment, BackboneElement, CodeableConcept, ContactPoint, HumanName, Identifier, Period, Reference, date, dateTime, integer } from "../basic-types";
import { DomainResource } from "./resource.types";

export type Patient = DomainResource & {
    resourceType: "Patient";
    identifier?: Identifier[];
    active?: boolean;
    name?: HumanName[];
    telecom?: ContactPoint[];
    gender?: 'male' | 'female' | 'other' | 'unknown';
    birthDate?: date;
    deceasedBoolean?: boolean;
    deceasedDateTime?: dateTime;
    address?: Address[];
    maritalStatus?: CodeableConcept;
    multipleBirthBoolean?: boolean;
    multipleBirthInteger?: integer;
    photo?: Attachment[];
    contact?: (BackboneElement & {
        relationship?: CodeableConcept[];
        name?: HumanName;
        telecom?: ContactPoint[];
        address?: Address;
        gender?: 'male' | 'female' | 'other' | 'unknown';
        organization?: Reference; // Reference(Organization)
        period?: Period;
    })[];
    communication?: (BackboneElement & {
        language: CodeableConcept; // required
        preferred?: boolean;
    })[];
    generalPractitioner?: Reference[]; // Reference(Organizaiton | Practitioner | PractitionerRole)
    managingOrganization?: Reference; // Reference(Organization)
    link?: (BackboneElement & {
        other: Reference; // required; Reference(Patient | RelatedPerson)
        type: 'replaced-by' | 'replaces' | 'refer' | 'seealso'; // required
    })[];
}