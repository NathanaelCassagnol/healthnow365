import { BackboneElement, Coding, anyBasicType, canonical, markdown, unsignedInt, uri } from "./_basic-types";

// https://hl7.org/fhir/R4/elementdefinition.html#ElementDefinition
export type ElementDefinition = BackboneElement & {
    path: string; // required
    representation?: ("xmkAttr" | "xmlText" | "typeAttr" | "cdaText" | "xhtml")[];
    sliceName?: string;
    sliceIsConstraining?: boolean;
    label?: string;
    code?: Coding[];
    slicing?: Element & {
        discriminator?: (Element & {
            type: "value" | "exists" | "pattern" | "type" | "profile"; // required
            path: string; // required
        })[];
        description?: string;
        ordered?: boolean;
        rules: "closed" | "open" | "openAtEnd"; // required
    };
    short?: string;
    definition?: markdown;
    comment?: markdown;
    requirements?: markdown;
    alias?: string[];
    min?: unsignedInt;
    max?: string;
    base?: Element & {
        path: string; // required
        min: unsignedInt; // required
        max: string; // required
    }
    conceptReference?: uri;
    type?: (Element & {
        code: uri; // required
        profile?: canonical[];
        targetProfile?: canonical[];
        aggregation?: ("contained" | "referenced" | "bundled")[];
        versioning?: "either" | "independent" | "specific";
    })[];
    [key: `defaultValue${string}`]: anyBasicType;
    INCOMPLETE
}