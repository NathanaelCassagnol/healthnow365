import { Address, Attachment, BackboneElement, CodeableConcept, ContactPoint, HumanName, Identifier, Period, Reference, date, dateTime, integer } from "./_basic-types";
import { DomainResource } from "./_resource.types";

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
        organization?: Reference;
        period?: Period;
    })[];
    communication?: (BackboneElement & {
        language: CodeableConcept;
        preferred?: boolean;
    })[];
    generalPractitioner?: Reference[];
    managingOrganization?: Reference;
    link?: (BackboneElement & {
        other: Reference;
        type: 'replaced-by' | 'replaces' | 'refer' | 'seealso';
    })[];
}