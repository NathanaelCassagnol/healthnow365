// so-called primitives
export type uri = string;
export type url = string;
export type uuid = string;
export type oid = string;
export type markdown = string;
export type xhtml = string;
export type date = string; // YYYY, YYYY-MM, or YYYY-MM-DD
export type time = string; // hh:mm:ss
export type dateTime = string; // YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
export type instant = string; // https://build.fhir.org/datatypes.html#instant
export type canonical = string; // https://build.fhir.org/datatypes.html#canonical
export type id = string; // https://build.fhir.org/datatypes.html#id
export type base64Binary = string;
export type code = string;
export type positiveInt = number;
export type unsignedInt = number;
export type integer = number;
export type decimal = number;
export type integer64 = number;

// Code types- you can specify these later
export type MIMECode = code; // https://build.fhir.org/valueset-mimetypes.html
export type LanguageCode = code; // https://build.fhir.org/valueset-all-languages.html
export type CurrencyCode = code; // https://build.fhir.org/valueset-currencies.html
export type UCUMCode = code; // https://build.fhir.org/valueset-ucum-units.html
export type UnitOfTimeCode = "s" | "min" | "h" | "d" | "wk" | "mo" | "a"; // https://build.fhir.org/valueset-units-of-time.html
export type DayOfWeekCode = "mon" | "tue" | "wed" | "thu" | "fri" | "say" | "sun"; // https://build.fhir.org/valueset-days-of-week.html
export type EventTimingCode = // https://build.fhir.org/valueset-event-timing.html
    "MORN" | "MORN.early" | "MORN.late" | "NOON" | "AFT" | "AFT.early" | "AFT.late" | "EVE" | "EVE.early" | "EVE.late" | "NIGHT" | "PHS" | "IMD" |
    "HS" | "WAKE" | "C"  | "CM" | "CD" | "CV" | "AC" | "ACM" | "ACD" | "ACV" | "PC" | "PCM" | "PCD" | "PCV";
export type AllFHIRTypesCode = code; // https://build.fhir.org/valueset-fhir-types.html
export type ValueFilterComparatorCode = "eq" | "gt" | "lt" | "ge" | "le" | "sa" | "eb"; // https://build.fhir.org/valueset-value-filter-comparator.html
export type SortDirectionCode = "ascending" | "descending"; // https://build.fhir.org/valueset-sort-direction.html
export type PublicationStatusCode = "draft" | "active" | "retired" | "unknown"; // https://build.fhir.org/valueset-publication-status.html
export type RelatedArtifactTypeCode = // https://build.fhir.org/valueset-related-artifact-type.html
    "documentation" | "justification" | "citation" | "predecessor" | "successor" | "derived-from" | "depends-on" | "composed-of" |
    "part-of" | "amends" | "amended-with" | "appends" | "appended-with" | "cites" | "cited-by" | "comments-on" | "comment-in" | "contains" |
    "contained-in" | "corrects" | "correction-in" | "replaces" | "replaced-with" | "retracts" | "retracted-by" | "signs" | "similar-to" |
    "supports" | "supported-with" | "transforms" | "transformed-into" | "transformed-with" | "documents" | "specification-of" | "created-with" | "cite-as";
export type TriggerTypeCode = "named-event" | "periodic" | "data-changed" | "data-added" | "data-modified" | "data-removed" | "data-accessed" | "data-access-ended"; // https://build.fhir.org/valueset-trigger-type.html
export type IdentifierUse = "usual" | "official" | "temp" | "secondary" | "old"; // https://build.fhir.org/valueset-identifier-use.html


// I use "{} & " if the type doesn't extend anything, just to be explicit
// Properties should have a "reqired" comment iff it is not nullable

export type Element = {} & {
    id?: string,
    extension?: Extension[]
}

//https://build.fhir.org/extensibility.html#Extension
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
    valueInteger64?: integer64,
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
    valueCodeableReference?: CodeableReference,
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
    valueRatioRange?: RatioRange,
    valueReference?: Reference,
    valueSampledData?: SampledData,
    valueSignature?: Signature,
    valueTiming?: Timing,
    valueContactDetail?: ContactDetail,
    valueDataRequirement?: DataRequirement,
    valueExpression?: Expression,
    valueParameterDefinition?: ParameterDefinition,
    valueRelatedArtifact?: RelatedArtifact,
    valueTriggerDefinition?: TriggerDefinition,
    valueUsageContext?: UsageContext,
    valueAvailability?: Availability,
    valueExtendedContactDetail?: ExtendedContactDetail,
    valueDosage?: Dosage,
    valueMeta?: Meta,
}

// https://build.fhir.org/datatypes.html#Address
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

// https://build.fhir.org/datatypes.html#Quantity
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

// https://build.fhir.org/datatypes.html#Attachment
export type Attachment = Element & {
    contentType?: MIMECode,
    language?: LanguageCode,
    data?: base64Binary,
    url?: url,
    size?: integer64,
    hash?: base64Binary,
    title?: string,
    creation?: dateTime,
    height?: positiveInt,
    width?: positiveInt,
    frames?: positiveInt,
    duration?: decimal,
    pages?: positiveInt
}

// https://build.fhir.org/datatypes.html#ContactPoint
export type ContactPoint = Element & {
    system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other",
    value?: string,
    use?: "home" | "work" | "temp" | "old" | "mobile"
    rank?: positiveInt, // Preferred order of use- 1 = highest
    period?: Period
}

// https://build.fhir.org/datatypes.html#HumanName
export type HumanName = Element & {
    use?: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden",
    text?: string,
    family?: string, // Surname
    given?: string[], // Includes middle names
    prefix?: string[],
    suffix: string[],
    period?: Period // Time period when name was / is in use
}

// https://build.fhir.org/datatypes.html#Money
export type Money = Element & {
    value?: decimal,
    currency?: CurrencyCode
}

export type Ratio = Element &  {
    numerator?: Quantity,
    denominator?: SimpleQuantity
}

// https://build.fhir.org/datatypes.html#ratiorange
export type RatioRange = Element & {
    lowNumerator?: SimpleQuantity,
    highNumerator?: SimpleQuantity,
    denominator?: SimpleQuantity
}

// https://build.fhir.org/datatypes.html#SampledData
export type SampledData = Element & {
    origin: SimpleQuantity, // required
    interval?: decimal,
    intervalUnit: UCUMCode, // required
    factor?: decimal,
    lowerLimit?: decimal,
    upperLimit?: decimal,
    dimensions: positiveInt, //required
    codeMap?: canonical, // canonical(ConceptMap)
    offsets?: string,
    data?: string
}

// https://build.fhir.org/datatypes.html#Signature
export type Signature = Element & {
    type?: Coding[],
    when?: instant,
    who?: Reference, // Reference(Practitioner | PractitionerRole | RelatedPerson | Patient | Device | Organization)
    onBehalfOf: Reference, // ^
    targetFormat?: MIMECode,
    sigFormat?: MIMECode,
    data?: base64Binary
}

// https://build.fhir.org/datatypes.html#Timing
export type Timing = Element & {
    event?: dateTime[],
    repeat?: Element & {
        /*
            + Rule: if there's a duration, there needs to be duration units
            + Rule: if there's a period, there needs to be period units
            + Rule: duration SHALL be a non-negative value
            + Rule: period SHALL be a non-negative value
            + Rule: If there's a periodMax, there must be a period
            + Rule: If there's a durationMax, there must be a duration
            + Rule: If there's a countMax, there must be a count
            + Rule: If there's an offset, there must be a when (and not C, CM, CD, CV)
            + Rule: If there's a timeOfDay, there cannot be a when, or vice versa
        */
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
    code?: CodeableConcept // C | BID | TID | QID | AM | PM | QD | QOD | +
}
export type ContactDetail = Element & {
    name?: string,
    telecom?: ContactPoint[]
}

// https://build.fhir.org/metadatatypes.html#DataRequirement
export type DataRequirement = Element & {
    type: AllFHIRTypesCode, // required
    profile?: canonical[] // canonical(StructureDefinition)
    // One of these two:
    subjectCodeableConcept?: CodeableConcept,
    subjectReference?: Reference, // Reference(Group)
    mustSupport?: string[],
    codeFilter?: (Element & {
        // + Rule: Either a path or a searchParam must be provided, but not both
        oath?: string,
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
    valueFilter?: (Element & {
        path?: string,
        searchParam?: string,
        comparator?: ValueFilterComparatorCode,
        // One of these three:
        valueDateTime?: dateTime,
        valuePeriod?: Period,
        valueDuration?: Duration,
    })[],
    limit?: positiveInt,
    sort?: (Element & {
        path: string, //required,
        direction: SortDirectionCode, //required
    })[]
}

// https://build.fhir.org/metadatatypes.html#Expression
export type Expression = Element & {
    // + Rule: An expression or a reference must be provided
    // + Rule: The name must be a valid variable name in most computer languages
    description?: string,
    name?: code,
    language?: code,
    expression?: string,
    reference?: uri
}

// https://build.fhir.org/metadatatypes.html#ParameterDefinition
export type ParameterDefinition = Element & {
    name?: code,
    use: "in" | "out", // required
    min?: integer,
    max?: string, // is this supposed to be int?
    documentation?: string,
    type: AllFHIRTypesCode, // required
    profile?: canonical // canonical(StructureDefinition)
}

// https://build.fhir.org/metadatatypes.html#RelatedArtifact
export type RelatedArtifact = Element & {
    type: RelatedArtifactTypeCode, //Required
    classifier?: CodeableConcept[],
    label?: string,
    display?: string,
    citation?: markdown,
    document?: Attachment,
    resource?: canonical, // canonical(Any)
    resourceReference?: Reference, // Reference(Any)
    publicationStatus?: PublicationStatusCode,
    publicationDate?: date,
}

// https://build.fhir.org/metadatatypes.html#TriggerDefinition
export type TriggerDefinition = Element & {
    // + Rule: Either timing, or a data requirement, but not both
    // + Rule: A condition only if there is a data requirement
    // + Rule: A named event requires a name, a periodic event requires timing, and a data event requires data
    type: TriggerTypeCode, // required
    name?: string,
    code?: CodeableConcept,
    subscriptionTopic?: canonical, // canonical(SubscriptionTopic)
    //One of the following four:
    timingTiming?: Timing,
    timingReference?: Reference, //Reference(Schedule)
    timingDate?: date,
    timingDateTime?: dateTime,
    data?: DataRequirement[],
    condition?: Expression
}

// https://build.fhir.org/metadatatypes.html#UsageContext
export type UsageContext = Element & {
    code: Coding, // required
    // One of the following four:
    valueCodeableConcept: CodeableConcept,
    valueQuantity: Quantity,
    valueRange: Range,
    valueReference: Reference, // Reference(PlanDefinition | ResearchStudy | InsurancePlan | HealthcareService | Group | Location | Organization)
}

// https://build.fhir.org/metadatatypes.html#Availability
export type Availability = Element & {
    availableTime?: (Element & {
        daysOfWeek?: DayOfWeekCode[],
        allDay?: boolean,
        availableStartTime?: time, // ignored if allDay = true
        availableEndTime?: time // ignored if allDay = true
    })[],
    notAvailableTime?: (Element & {
        description?: string,
        during?: Period
    })[]
}

// https://build.fhir.org/metadatatypes.html#ExtendedContactDetail
export type ExtendedContactDetail = Element & {
    purpose?: CodeableConcept,
    name?: HumanName[],
    telecom?: ContactPoint[],
    address?: Address,
    organization?: Reference, // Reference(Organization)
    period?: Period
}

// https://build.fhir.org/dosage.html#Dosage
export type Dosage = Element & {
    // + Rule: AsNeededFor can only be set if AsNeeded is empty or true
    sequence?: integer,
    text?: TemplateStringsArray,
    additionalInstruction?: CodeableConcept[],
    patientInstruction?: string,
    timing?: Timing,
    asNeeded?: boolean,
    asNeededFor?: CodeableConcept[],
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
    maxDosePeriod?: Ratio[],
    maxDosePerAdministration?: SimpleQuantity,
    maxDosePerLifetime?: SimpleQuantity
}

// https://build.fhir.org/datatypes.html#Identifier
export type Identifier = Element & {
    // + Warning: Identifier with no value has limited utility. If communicating that an identifier value has been suppressed or missing, the value element SHOULD be present with an extension indicating the missing semantic - e.g. data-absent-reason
    use?: IdentifierUse,
    type?: CodeableConcept,
    system?: uri,
    value?: string,
    period?: Period, 
    assigner?: Reference // Reference(Organization)
}

// https://build.fhir.org/datatypes.html#CodeableConcept
export type CodeableConcept = Element & {
    coding?: Coding[],
    text?: string
}

// https://build.fhir.org/datatypes.html#Coding
export type Coding = Element & {
    // + Warning: A Coding SHOULD NOT have a display unless a code is also present. Computation on Coding.display alone is generally unsafe. Consider using CodeableConcept.text
    system?: uri,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}

// https://build.fhir.org/datatypes.html#Period
// Start is missing = start is not known
// End is missing = period is ongoing
// End can be in the future
export type Period = Element & {
    start?: dateTime,
    end?: dateTime
}

// https://build.fhir.org/references.html#Reference
export type Reference = Element & {
    // + Rule: SHALL have a contained resource if a local reference is provided
    // + Rule: At least one of reference, identifier and display SHALL be present (unless an extension is provided).
    reference?: string,
    type?: uri,
    identifier?: Identifier,
    display?: string
}

// https://build.fhir.org/datatypes.html#Annotation
export type Annotation = Element & {
    // One of these 2:
    authorReference?: Reference, // Reference(Organization|Patient|Practitioner|PractitionerRole|RelatedPerson)
    authorString?: string,
    time?: dateTime,
    text: markdown // required
}

// https://build.fhir.org/references.html#CodeableReference
export type CodeableReference = Element & {
    concept?: CodeableConcept,
    reference?: Reference
}

// https://build.fhir.org/resource.html#Meta
export type Meta = Element & {
  versionId?: id,
  lastUpdated?: instant,
  source?: uri,
  profile?: canonical[], // canonical(StructureDefinition)
  security?: Coding[],
  tag?: Coding[]
}
