import { Extension, Element, id, uri, code, Narrative, instant, canonical, Coding } from "../basic-types"
import { AllergyIntolerance } from "./allergy-intolerance.types";
import { Medication } from "./medication.types";
import { Substance } from "./substance.types";
import { Person } from "./person.types";
import { Organization } from "./organization.types";
import { Observation } from "./observation.types";
import { Patient } from "./patient.types";
import { Bundle } from "./bundle.types";

export type FHIRResource = Medication | AllergyIntolerance | Substance | Person | Organization | Observation | Patient | Bundle;

// https://hl7.org/fhir/R4/resource.html
export type Resource = {} & {
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