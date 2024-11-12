import { Meta, extendablePrimitives } from "./_resource.types";

// https://hl7.org/fhir/R4/datatypes.html

// #region Primitives
export type integer = number;
export type decimal = number;
export type uri = string;
export type url = string;
export type canonical = string;
export type base64Binary = string;
export type instant = string;
export type date = string; // YYYY, YYYY-MM, or YYYY-MM-DD
export type dateTime = string; // YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
export type time = string; // hh:mm:ss
export type code = string;
export type oid = string;
export type id = string;
export type markdown = string;
export type unsignedInt = number;
export type positiveInt = number;
export type uuid = string;
export type xhtml = string;

export type anyBasicType = base64Binary | boolean | canonical | code | date | dateTime | decimal | id |
instant | integer | markdown | oid | positiveInt | string | time | unsignedInt | uri | url | uuid |
//FHIR-specific types
Address | Age | Annotation | Attachment | CodeableConcept | Coding | ContactPoint | Count | Distance | Duration | HumanName | 
Identifier | Money | Period | Quantity | Range | Ratio | Reference | SampledData | Signature | Timing | ContactDetail | 
Contributor | DataRequirement | Expression | ParameterDefinition | RelatedArtifact | TriggerDefinition | UsageContext | Dosage | Meta
// #endregion

// #region Codes
export type UnitOfTimeCode = "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
export type DayOfWeekCode = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export type EventTimingCode =
    "MORN" | "MORN.early" | "MORN.late" | "NOON" | "AFT" | "AFT.early" | "AFT.late" | "EVE" | "EVE.early" | "EVE.late" | "NIGHT" | "PHS" |
    "HS" | "WAKE" | "C"  | "CM" | "CD" | "CV" | "AC" | "ACM" | "ACD" | "ACV" | "PC" | "PCM" | "PCD" | "PCV";
export type MIMECode = code;
export type AllFHIRTypesCode = code; // https://hl7.org/fhir/R4/valueset-all-types.html
// #endregion

// I use "{} & " if the type doesn't extend anything, just to be explicit
// Properties should have a "reqired" comment iff it is not nullable

// #region Element
export type Element = extendablePrimitives & {
    id?: string,
    extension?: Extension[]
}

export type Extension = Element & {
    url: uri, // required
    // Either has child extensions (from Element) or one of the following 54:
    // "primitive" types
    valueBase64Binary?: base64Binary,
    valueBoolean?: boolean,
    valueCanonical?: canonical,
    valueCode?: code,
    valueDate?: date,
    valueDateTime?: dateTime,
    valueDecimal?: decimal,
    valueId?: id,
    valueInstant?: instant,
    valueInteger?: integer,
    valueMarkdown?: markdown,
    valueOid?: oid,
    valuePositiveInt?: positiveInt,
    valueString?: string,
    valueTime?: time,
    valueUnsignedInt?: unsignedInt,
    valueUri?: uri,
    valueUrl?: url,
    valueUuid?: uuid,
    //FHIR-specific types
    valueAddress?: Address,
    valueAge?: Age,
    valueAnnotation?: Annotation,
    valueAttachment?: Attachment,
    valueCodeableConcept?: CodeableConcept,
    valueCoding?: Coding,
    valueContactPoint?: ContactPoint,
    valueCount?: Count,
    valueDistance?: Distance,
    valueDuration?: Duration,
    valueHumanName?: HumanName,
    valueIdentifier?: Identifier,
    valueMoney?: Money,
    valuePeriod?: Period,
    valueQuantity?: Quantity,
    valueRange?: Range,
    valueRatio?: Ratio,
    valueReference?: Reference,
    valueSampledData?: SampledData,
    valueSignature?: Signature,
    valueTiming?: Timing,
    valueContactDetail?: ContactDetail,
    valueContributor?: Contributor,
    valueDataRequirement?: DataRequirement,
    valueExpression?: Expression,
    valueParameterDefinition?: ParameterDefinition,
    valueRelatedArtifact?: RelatedArtifact,
    valueTriggerDefinition?: TriggerDefinition,
    valueUsageContext?: UsageContext,
    valueDosage?: Dosage,
    valueMeta?: Meta,
}
// #endregion

// #region "Data Types"
export type Attachment = Element & {
    contentType?: code,
    language?: code,
    data?: base64Binary,
    url?: url,
    size?: unsignedInt,
    hash?: base64Binary,
    title?: string,
    creation?: dateTime,
}

export type Coding = Element & {
    system?: uri,
    version?: string,
    code?: code,
    display?: string,
    userSelected?: boolean
}

export type CodeableConcept = Element & {
    coding?: Coding[],
    text?: string
}

export type Quantity = Element & {
    value?: decimal,
    comparator?: "<" | "<=" | ">=" | ">" | "ad",
    unit?: string,
    system?: uri,
    code?: code
}
// Age, Distance, and Count aren't used in specifications but can be used in extensions
// They just add requirements to Quantity
export type Age = Quantity; // There SHALL be a code if there is a value and it SHALL be an expression of time. If system is present, it SHALL be UCUM. If value is present, it SHALL be positive.
export type Distance = Quantity; // There SHALL be a code if there is a value and it SHALL be an expression of length. If system is present, it SHALL be UCUM.
export type Count = Quantity; // There SHALL be a code with a value of "1" if there is a value. If system is present, it SHALL be UCUM. If present, the value SHALL be a whole number.
export type Duration = Quantity; // There SHALL be a code if there is a value and it SHALL be an expression of time. If system is present, it SHALL be UCUM.
export type SimpleQuantity = Quantity; // comparator is empty

export type Money = Element & {
    value?: decimal,
    currency?: code
}

export type Range = Element & {
    low?: SimpleQuantity;
    high?: SimpleQuantity;
}

export type Ratio = Element &  {
    numerator?: Quantity,
    denominator?: Quantity
}

// Start is missing = start is not known
// End is missing = period is ongoing
// End can be in the future
export type Period = Element & {
    start?: dateTime,
    end?: dateTime
}

export type SampledData = Element & {
    origin: SimpleQuantity, // required
    period: decimal, // required
    factor?: decimal,
    lowerLimit?: decimal,
    upperLimit?: decimal,
    dimensions: positiveInt, //required
    data?: string
}

export type Identifier = Element & {
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: uri,
    value?: string,
    period?: Period, 
    assigner?: Reference // Reference(Organization)
}

export type HumanName = Element & {
    use?: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden",
    text?: string,
    family?: string, // Surname
    given?: string[], // Includes middle names
    prefix?: string[],
    suffix?: string[],
    period?: Period // Time period when name was / is in use
}

export type Address = Element & {
    use?: "home" | "work" | "temp" | "old" | "billing",
    type?: "postal" | "physical" | "both",
    text?: string, // Text representation of the address
    line?: string[],
    city?: string,
    district?: string, // aka county
    state?: string, // abbreviations ok
    postalCode?: string,
    country?: string, // e.g. may be ISO 3166 2 or 3 letter code
    period?: Period // Time period when address was/is in use
}

export type ContactPoint = Element & {
    system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other",
    value?: string,
    use?: "home" | "work" | "temp" | "old" | "mobile"
    rank?: positiveInt, // Preferred order of use- 1 = highest
    period?: Period
}

export type Timing = BackboneElement & {
    event?: dateTime[],
    repeat?: Element & {
        // One of these three:
        boundsDuration?: Duration,
        boundsRange?: Range,
        boundsPeriod?: Period,

        count?: positiveInt,
        countMax?: positiveInt,
        duration?: decimal,
        durationMax?: decimal,
        durationUnit?: UnitOfTimeCode,
        frequency?: positiveInt,
        frequencyMax?: positiveInt,
        period?: decimal,
        periodMax?: decimal,
        periodUnit?: UnitOfTimeCode,
        dayOfWeek?: DayOfWeekCode[]
        timeOfDay?: time[],
        when?: EventTimingCode[],
        offset?: unsignedInt
    },
    code?: CodeableConcept
}

export type Signature = Element & {
    type: Coding[], // required
    when: instant, // required
    who: Reference, // required; Reference(Practitioner | PractitionerRole | RelatedPerson | Patient | Device | Organization)
    onBehalfOf?: Reference, // ^
    targetFormat?: MIMECode,
    sigFormat?: MIMECode,
    data?: base64Binary
}

export type Annotation = Element & {
    // One of these 2:
    authorReference?: Reference, // Reference(Organization|Patient|Practitioner|RelatedPerson)
    authorString?: string,
    time?: dateTime,
    text: markdown // required
}
// #endregion

// #region MetaDataTypes
// https://hl7.org/fhir/R4/metadatatypes.html
export type ContactDetail = Element & {
    name?: string,
    telecom?: ContactPoint[]
}
export type Contributor = Element & {
    type: "author" | "editor" | "reviewer" | "endorder", // required
    name: string, // required
    contact?: ContactDetail[]
}
export type DataRequirement = Element & {
    type: AllFHIRTypesCode, // required
    profile?: canonical[] // canonical(StructureDefinition)
    // One of these two:
    subjectCodeableConcept?: CodeableConcept,
    subjectReference?: Reference, // Reference(Group)
    mustSupport?: string[],
    codeFilter?: (Element & {
        // + Rule: Either a path or a searchParam must be provided, but not both
        path?: string,
        searchParam?: string,
        valueSet?: canonical, // canonical (ValueSet)
        code?: Coding[]
    })[],
    dateFilter?: (Element & {
        // + Rule: Either a path or a searchParam must be provided, but not both
        path?: string,
        searchParam?: string,
        // One of these three:
        valueDateTime?: dateTime,
        valuePeriod?: Period,
        valueDuration?: Duration,
    })[],
    limit?: positiveInt,
    sort?: (Element & {
        path: string, //required,
        direction: "ascending" | "descending", //required
    })[]
}

export type ParameterDefinition = Element & {
    name?: code,
    use: "in" | "out", // required
    min?: integer,
    max?: string,
    documentation?: string,
    type: AllFHIRTypesCode, // required
    profile?: canonical // canonical(StructureDefinition)
}
export type RelatedArtifact = Element & {
    type: "documentation" | "justification" | "citation" | "predecessor" | "successor" | "derived-from" | "depends-on" | "composed-of", //Required
    label?: string,
    display?: string,
    citation?: markdown,
    url?: url,
    document?: Attachment,
    resource?: canonical, // canonical(Any)
}
export type TriggerDefinition = Element & {
    // + Rule: Either timing, or a data requirement, but not both
    // + Rule: A condition only if there is a data requirement
    // + Rule: A named event requires a name, a periodic event requires timing, and a data event requires data
    type: "named-event" | "periodic" | "data-changed" | "data-added" | "data-modified" | "data-removed" | "data-accessed" | "data-access-ended", // required
    name?: string,
    //One of the following four:
    timingTiming?: Timing,
    timingReference?: Reference, //Reference(Schedule)
    timingDate?: date,
    timingDateTime?: dateTime,
    data?: DataRequirement[],
    condition?: Expression
}
export type Expression = Element & {
    description?: string,
    name?: id,
    language: code, // required
    expression?: string,
    reference?: uri
}
export type UsageContext = Element & {
    code: Coding, // required
    // One of the following four:
    valueCodeableConcept?: CodeableConcept,
    valueQuantity?: Quantity,
    valueRange?: Range,
    valueReference?: Reference, // Reference(PlanDefinition | ResearchStudy | InsurancePlan | HealthcareService | Group | Location | Organization)
}
// #endregion

// #region Special types
// https://hl7.org/fhir/R4/dosage.html#Dosage
export type Dosage = BackboneElement & {
    // + Rule: AsNeededFor can only be set if AsNeeded is empty or true
    sequence?: integer,
    text?: string,
    additionalInstruction?: CodeableConcept[],
    patientInstruction?: string,
    timing?: Timing,
    asNeededBoolean?: boolean,
    asNeededCodeableConcept?: CodeableConcept,
    site?: CodeableConcept,
    route?: CodeableConcept,
    method?: CodeableConcept,
    doseAndRate?: (Element & {
        type?: CodeableConcept,
        //One of these two:
        doseRange?: Range,
        doseQuantity?: SimpleQuantity,
        //One of these three:
        rateRatio?: Ratio,
        rateRange?: Range,
        rateQuantity?: SimpleQuantity,
    })[],
    maxDosePerPeriod?: Ratio,
    maxDosePerAdministration?: SimpleQuantity,
    maxDosePerLifetime?: SimpleQuantity
}
// #endregion

// #region Reference
// https://hl7.org/fhir/R4/references.html#Reference
export type Reference = Element & {
    // + Rule: SHALL have a contained resource if a local reference is provided
    reference?: string,
    type?: uri,
    identifier?: Identifier,
    display?: string
}
// #endregion

// #region Narrative
export type Narrative = Element & {
    status: code, // required
    div: xhtml // required
}
// #endregion

export type BackboneElement = Element & {
    modifierExtension?: Extension[];
}