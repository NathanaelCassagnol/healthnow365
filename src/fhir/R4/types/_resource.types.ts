import { Extension, Element, id, uri, code, Narrative, instant, canonical, Coding } from "./_basic-types"
import { AllergyIntolerance } from "./allergy-intolerance.types";
import { Medication } from "./medication.types";
import { Substance } from "./substance.types";
import { Person } from "./person.types";
import { Organization } from "./organization.types";
import { Observation } from "./observation.types";
import { Patient } from "./patient.types";
import { Bundle } from "./bundle.types";
import { Practitioner } from "./practitioner";
import { PractitionerRole } from "./practitioner-role";
import { Endpoint } from "./endpoint";

export type FHIRResource = Medication | AllergyIntolerance | Substance | Person | Organization | Observation | Patient | Bundle | Practitioner | PractitionerRole | Endpoint;

// https://hl7.org/fhir/R4/resource.html
export type Resource = extendablePrimitives & {
    id?: id,
    meta?: Meta,
    implicitRules?: uri,
    languge?: code,
}
export type DomainResource = Resource & {
    text?: Narrative,
    contained?: FHIRResource[],
    extension?: Extension[],
    modifierExtension?: Extension[]
}
export type Meta = Element & {
    versionId?: id,
    lastUpdated?: instant,
    source?: uri,
    profile?: canonical[], // canonical(StructureDefinition)
    security?: Coding[],
    tag?: Coding[]
}

// A resource can have extensions to primitive elements, e.g. Patient.gender can be extended with Patient._gender, which is an Extension array
// Applied to Resource and Element so it reaches nested properties
/* Examples:
mock-patient-2._gender
mock-patient-3.contact[0].name._family
mock-patient-19._birthDate
mock-observation-assessment-3.contained[0]._birthDate*/
export type extendablePrimitives = {[key: `_${string}`]: {extension: Extension[]}};