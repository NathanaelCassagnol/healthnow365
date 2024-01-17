import { AllergyIntolerance } from "./allergy-intolerance.types";
import { Extension, LanguageCode, Meta, id, uri, xhtml, Element } from "../basic-types"
import { Medication } from "./medication.types";
import { Substance } from "./substance.types";
import { Person } from "./person.types";
import { Organization } from "./organization.types";
import { Observation } from "./observation.types";

export type FHIRResource = Medication | AllergyIntolerance | Substance | Person | Organization | Observation;

// https://build.fhir.org/resource.html
export type Resource = {} & {
    id?: id,
    meta?: Meta,
    implicitRules?: uri,
    languge?: LanguageCode,
}

// https://build.fhir.org/domainresource.html
export type DomainResource = Resource & {
    /*  + Rule: If the resource is contained in another resource, it SHALL NOT contain nested Resources
        + Rule: If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource
        + Rule: If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated
        + Rule: If a resource is contained in another resource, it SHALL NOT have a security label
        + Guideline: A resource should have narrative for robust management*/
    text?: Narrative,
    contained?: FHIRResource[],
    extension?: Extension[],
    modifierExtension?: Extension[]
}

// https://build.fhir.org/narrative.html#Narrative
export type Narrative = Element & {
    status: "generated"|"extensions"|"additional"|"empty", // required
    div: xhtml // required
    // + Rule: The narrative SHALL contain only the basic html formatting elements and attributes described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes
    // + Rule: The narrative SHALL have some non-whitespace content
}

// To Add: CanonicalResource, MetadataResource