import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/timing.profile.json.html
// StructureDefinition for Timing

export const mockStructureDefinitionData39: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Timing",
    "meta" : {
      "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
    },
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "normative"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      "valueCode" : "4.0.0"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/Timing",
    "version" : "4.0.1",
    "name" : "Timing",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Timing Type: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
    "purpose" : "Need to able to track proposed timing schedules. There are several different ways to do this: one or more specified times, a simple rules like three times a day, or  before/after meals.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    },
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "Timing",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/BackboneElement",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Timing",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Timing",
        "short" : "A timing schedule that specifies an event that may occur multiple times",
        "definition" : "Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
        "comment" : "Describes the occurrence of an event that may occur multiple times. Timing schedules are used for specifying when events are expected or requested to occur, and may also be used to represent the summary of a past or ongoing event.  For simplicity, the definitions of Timing components are expressed as 'future' events, but such components can also be used to describe historic or ongoing events.\n\nA Timing schedule can be a list of events and/or criteria for when the event happens, which can be expressed in a structured form and/or as a code. When both event and a repeating specification are provided, the list of events should be understood as an interpretation of the information in the repeat structure.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Timing",
          "min" : 0,
          "max" : "*"
        },
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        },
        {
          "identity" : "v2",
          "map" : "N/A"
        },
        {
          "identity" : "rim",
          "map" : "QSET<TS> (GTS)"
        }]
      },
      {
        "id" : "Timing.id",
        "path" : "Timing.id",
        "representation" : ["xmlAttr"],
        "short" : "Unique id for inter-element referencing",
        "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Element.id",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "string"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.extension",
        "path" : "Timing.extension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Element.extension",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Extension"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.modifierExtension",
        "path" : "Timing.modifierExtension",
        "short" : "Extensions that cannot be ignored even if unrecognized",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "requirements" : "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        "alias" : ["extensions",
        "user content",
        "modifiers"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "BackboneElement.modifierExtension",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Extension"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : true,
        "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "Timing.event",
        "path" : "Timing.event",
        "short" : "When the event occurs",
        "definition" : "Identifies specific times when the event occurs.",
        "requirements" : "In a Medication Administration Record, for instance, you need to take a general specification, and turn it into a precise specification.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Timing.event",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "dateTime"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "QLIST<TS>"
        }]
      },
      {
        "id" : "Timing.repeat",
        "path" : "Timing.repeat",
        "short" : "When the event is to occur",
        "definition" : "A set of rules that describe when the event is scheduled.",
        "requirements" : "Many timing schedules are determined by regular repetitions.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Element"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "tim-1",
          "severity" : "error",
          "human" : "if there's a duration, there needs to be duration units",
          "expression" : "duration.empty() or durationUnit.exists()",
          "xpath" : "not(exists(f:duration)) or exists(f:durationUnit)"
        },
        {
          "key" : "tim-2",
          "severity" : "error",
          "human" : "if there's a period, there needs to be period units",
          "expression" : "period.empty() or periodUnit.exists()",
          "xpath" : "not(exists(f:period)) or exists(f:periodUnit)"
        },
        {
          "key" : "tim-4",
          "severity" : "error",
          "human" : "duration SHALL be a non-negative value",
          "expression" : "duration.exists() implies duration >= 0",
          "xpath" : "f:duration/@value >= 0 or not(f:duration/@value)"
        },
        {
          "key" : "tim-5",
          "severity" : "error",
          "human" : "period SHALL be a non-negative value",
          "expression" : "period.exists() implies period >= 0",
          "xpath" : "f:period/@value >= 0 or not(f:period/@value)"
        },
        {
          "key" : "tim-6",
          "severity" : "error",
          "human" : "If there's a periodMax, there must be a period",
          "expression" : "periodMax.empty() or period.exists()",
          "xpath" : "not(exists(f:periodMax)) or exists(f:period)"
        },
        {
          "key" : "tim-7",
          "severity" : "error",
          "human" : "If there's a durationMax, there must be a duration",
          "expression" : "durationMax.empty() or duration.exists()",
          "xpath" : "not(exists(f:durationMax)) or exists(f:duration)"
        },
        {
          "key" : "tim-8",
          "severity" : "error",
          "human" : "If there's a countMax, there must be a count",
          "expression" : "countMax.empty() or count.exists()",
          "xpath" : "not(exists(f:countMax)) or exists(f:count)"
        },
        {
          "key" : "tim-9",
          "severity" : "error",
          "human" : "If there's an offset, there must be a when (and not C, CM, CD, CV)",
          "expression" : "offset.empty() or (when.exists() and ((when in ('C' | 'CM' | 'CD' | 'CV')).not()))",
          "xpath" : "not(exists(f:offset)) or exists(f:when)"
        },
        {
          "key" : "tim-10",
          "severity" : "error",
          "human" : "If there's a timeOfDay, there cannot be a when, or vice versa",
          "expression" : "timeOfDay.empty() or when.empty()",
          "xpath" : "not(exists(f:timeOfDay)) or not(exists(f:when))"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "Implies PIVL or EIVL"
        }]
      },
      {
        "id" : "Timing.repeat.id",
        "path" : "Timing.repeat.id",
        "representation" : ["xmlAttr"],
        "short" : "Unique id for inter-element referencing",
        "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Element.id",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "string"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.repeat.extension",
        "path" : "Timing.repeat.extension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Element.extension",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Extension"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.repeat.bounds[x]",
        "path" : "Timing.repeat.bounds[x]",
        "short" : "Length/Range of lengths, or (Start and/or end) limits",
        "definition" : "Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.bounds[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Duration"
        },
        {
          "code" : "Range"
        },
        {
          "code" : "Period"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "IVL(TS) used in a QSI"
        }]
      },
      {
        "id" : "Timing.repeat.count",
        "path" : "Timing.repeat.count",
        "short" : "Number of times to repeat",
        "definition" : "A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.",
        "comment" : "If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.",
        "requirements" : "Repetitions may be limited by end time or total occurrences.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.count",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "positiveInt"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.count"
        }]
      },
      {
        "id" : "Timing.repeat.countMax",
        "path" : "Timing.repeat.countMax",
        "short" : "Maximum number of times to repeat",
        "definition" : "If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.countMax",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "positiveInt"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.count"
        }]
      },
      {
        "id" : "Timing.repeat.duration",
        "path" : "Timing.repeat.duration",
        "short" : "How long when it happens",
        "definition" : "How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.",
        "comment" : "For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).",
        "requirements" : "Some activities are not instantaneous and need to be maintained for a period of time.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.duration",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "decimal"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.durationMax",
        "path" : "Timing.repeat.durationMax",
        "short" : "How long when it happens (Max)",
        "definition" : "If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.",
        "comment" : "For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).",
        "requirements" : "Some activities are not instantaneous and need to be maintained for a period of time.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.durationMax",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "decimal"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.durationUnit",
        "path" : "Timing.repeat.durationUnit",
        "short" : "s | min | h | d | wk | mo | a - unit of time (UCUM)",
        "definition" : "The units of time for the duration, in UCUM units.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.durationUnit",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "code"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "UnitsOfTime"
          }],
          "strength" : "required",
          "description" : "A unit of time (units from UCUM).",
          "valueSet" : "http://hl7.org/fhir/ValueSet/units-of-time|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase.unit"
        }]
      },
      {
        "id" : "Timing.repeat.frequency",
        "path" : "Timing.repeat.frequency",
        "short" : "Event occurs frequency times per period",
        "definition" : "The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.frequency",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "positiveInt"
        }],
        "meaningWhenMissing" : "If no frequency is stated, the assumption is that the event occurs once per period, but systems SHOULD always be specific about this",
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.frequencyMax",
        "path" : "Timing.repeat.frequencyMax",
        "short" : "Event occurs up to frequencyMax times per period",
        "definition" : "If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.frequencyMax",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "positiveInt"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.period",
        "path" : "Timing.repeat.period",
        "short" : "Event occurs frequency times per period",
        "definition" : "Indicates the duration of time over which repetitions are to occur; e.g. to express \"3 times per day\", 3 would be the frequency and \"1 day\" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.period",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "decimal"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.periodMax",
        "path" : "Timing.repeat.periodMax",
        "short" : "Upper limit of period (3-4 hours)",
        "definition" : "If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \"do this once every 3-5 days.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.periodMax",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "decimal"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.periodUnit",
        "path" : "Timing.repeat.periodUnit",
        "short" : "s | min | h | d | wk | mo | a - unit of time (UCUM)",
        "definition" : "The units of time for the period in UCUM units.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.periodUnit",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "code"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "UnitsOfTime"
          }],
          "strength" : "required",
          "description" : "A unit of time (units from UCUM).",
          "valueSet" : "http://hl7.org/fhir/ValueSet/units-of-time|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase.unit"
        }]
      },
      {
        "id" : "Timing.repeat.dayOfWeek",
        "path" : "Timing.repeat.dayOfWeek",
        "short" : "mon | tue | wed | thu | fri | sat | sun",
        "definition" : "If one or more days of week is provided, then the action happens only on the specified day(s).",
        "comment" : "If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Timing.repeat.dayOfWeek",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "code"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "DayOfWeek"
          }],
          "strength" : "required",
          "valueSet" : "http://hl7.org/fhir/ValueSet/days-of-week|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.repeat.timeOfDay",
        "path" : "Timing.repeat.timeOfDay",
        "short" : "Time of day for action",
        "definition" : "Specified time of day for action to take place.",
        "comment" : "When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Timing.repeat.timeOfDay",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "time"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.repeat.when",
        "path" : "Timing.repeat.when",
        "short" : "Code for time period of occurrence",
        "definition" : "An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.",
        "comment" : "When more than one event is listed, the event is tied to the union of the specified events.",
        "requirements" : "Timings are frequently determined by occurrences such as waking, eating and sleep.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Timing.repeat.when",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "code"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "EventTiming"
          }],
          "strength" : "required",
          "description" : "Real world event relating to the schedule.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/event-timing|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "EIVL.event"
        }]
      },
      {
        "id" : "Timing.repeat.offset",
        "path" : "Timing.repeat.offset",
        "short" : "Minutes from event (before or after)",
        "definition" : "The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.repeat.offset",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "unsignedInt"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "EIVL.offset"
        }]
      },
      {
        "id" : "Timing.code",
        "path" : "Timing.code",
        "short" : "BID | TID | QID | AM | PM | QD | QOD | +",
        "definition" : "A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).",
        "comment" : "BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is \"always at 7am and 6pm\".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Timing.code",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "TimingAbbreviation"
          }],
          "strength" : "preferred",
          "description" : "Code for a known / defined timing pattern.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/timing-abbreviation"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "QSC.code"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Timing",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Timing",
        "short" : "A timing schedule that specifies an event that may occur multiple times",
        "definition" : "Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
        "comment" : "Describes the occurrence of an event that may occur multiple times. Timing schedules are used for specifying when events are expected or requested to occur, and may also be used to represent the summary of a past or ongoing event.  For simplicity, the definitions of Timing components are expressed as 'future' events, but such components can also be used to describe historic or ongoing events.\n\nA Timing schedule can be a list of events and/or criteria for when the event happens, which can be expressed in a structured form and/or as a code. When both event and a repeating specification are provided, the list of events should be understood as an interpretation of the information in the repeat structure.",
        "min" : 0,
        "max" : "*",
        "mapping" : [{
          "identity" : "v2",
          "map" : "N/A"
        },
        {
          "identity" : "rim",
          "map" : "QSET<TS> (GTS)"
        }]
      },
      {
        "id" : "Timing.event",
        "path" : "Timing.event",
        "short" : "When the event occurs",
        "definition" : "Identifies specific times when the event occurs.",
        "requirements" : "In a Medication Administration Record, for instance, you need to take a general specification, and turn it into a precise specification.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "dateTime"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "QLIST<TS>"
        }]
      },
      {
        "id" : "Timing.repeat",
        "path" : "Timing.repeat",
        "short" : "When the event is to occur",
        "definition" : "A set of rules that describe when the event is scheduled.",
        "requirements" : "Many timing schedules are determined by regular repetitions.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Element"
        }],
        "constraint" : [{
          "key" : "tim-9",
          "severity" : "error",
          "human" : "If there's an offset, there must be a when (and not C, CM, CD, CV)",
          "expression" : "offset.empty() or (when.exists() and ((when in ('C' | 'CM' | 'CD' | 'CV')).not()))",
          "xpath" : "not(exists(f:offset)) or exists(f:when)"
        },
        {
          "key" : "tim-5",
          "severity" : "error",
          "human" : "period SHALL be a non-negative value",
          "expression" : "period.exists() implies period >= 0",
          "xpath" : "f:period/@value >= 0 or not(f:period/@value)"
        },
        {
          "key" : "tim-6",
          "severity" : "error",
          "human" : "If there's a periodMax, there must be a period",
          "expression" : "periodMax.empty() or period.exists()",
          "xpath" : "not(exists(f:periodMax)) or exists(f:period)"
        },
        {
          "key" : "tim-7",
          "severity" : "error",
          "human" : "If there's a durationMax, there must be a duration",
          "expression" : "durationMax.empty() or duration.exists()",
          "xpath" : "not(exists(f:durationMax)) or exists(f:duration)"
        },
        {
          "key" : "tim-8",
          "severity" : "error",
          "human" : "If there's a countMax, there must be a count",
          "expression" : "countMax.empty() or count.exists()",
          "xpath" : "not(exists(f:countMax)) or exists(f:count)"
        },
        {
          "key" : "tim-1",
          "severity" : "error",
          "human" : "if there's a duration, there needs to be duration units",
          "expression" : "duration.empty() or durationUnit.exists()",
          "xpath" : "not(exists(f:duration)) or exists(f:durationUnit)"
        },
        {
          "key" : "tim-10",
          "severity" : "error",
          "human" : "If there's a timeOfDay, there cannot be a when, or vice versa",
          "expression" : "timeOfDay.empty() or when.empty()",
          "xpath" : "not(exists(f:timeOfDay)) or not(exists(f:when))"
        },
        {
          "key" : "tim-2",
          "severity" : "error",
          "human" : "if there's a period, there needs to be period units",
          "expression" : "period.empty() or periodUnit.exists()",
          "xpath" : "not(exists(f:period)) or exists(f:periodUnit)"
        },
        {
          "key" : "tim-4",
          "severity" : "error",
          "human" : "duration SHALL be a non-negative value",
          "expression" : "duration.exists() implies duration >= 0",
          "xpath" : "f:duration/@value >= 0 or not(f:duration/@value)"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "Implies PIVL or EIVL"
        }]
      },
      {
        "id" : "Timing.repeat.bounds[x]",
        "path" : "Timing.repeat.bounds[x]",
        "short" : "Length/Range of lengths, or (Start and/or end) limits",
        "definition" : "Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Duration"
        },
        {
          "code" : "Range"
        },
        {
          "code" : "Period"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "IVL(TS) used in a QSI"
        }]
      },
      {
        "id" : "Timing.repeat.count",
        "path" : "Timing.repeat.count",
        "short" : "Number of times to repeat",
        "definition" : "A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.",
        "comment" : "If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.",
        "requirements" : "Repetitions may be limited by end time or total occurrences.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "positiveInt"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.count"
        }]
      },
      {
        "id" : "Timing.repeat.countMax",
        "path" : "Timing.repeat.countMax",
        "short" : "Maximum number of times to repeat",
        "definition" : "If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "positiveInt"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.count"
        }]
      },
      {
        "id" : "Timing.repeat.duration",
        "path" : "Timing.repeat.duration",
        "short" : "How long when it happens",
        "definition" : "How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.",
        "comment" : "For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).",
        "requirements" : "Some activities are not instantaneous and need to be maintained for a period of time.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "decimal"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.durationMax",
        "path" : "Timing.repeat.durationMax",
        "short" : "How long when it happens (Max)",
        "definition" : "If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.",
        "comment" : "For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).",
        "requirements" : "Some activities are not instantaneous and need to be maintained for a period of time.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "decimal"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.durationUnit",
        "path" : "Timing.repeat.durationUnit",
        "short" : "s | min | h | d | wk | mo | a - unit of time (UCUM)",
        "definition" : "The units of time for the duration, in UCUM units.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "UnitsOfTime"
          }],
          "strength" : "required",
          "description" : "A unit of time (units from UCUM).",
          "valueSet" : "http://hl7.org/fhir/ValueSet/units-of-time|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase.unit"
        }]
      },
      {
        "id" : "Timing.repeat.frequency",
        "path" : "Timing.repeat.frequency",
        "short" : "Event occurs frequency times per period",
        "definition" : "The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "positiveInt"
        }],
        "meaningWhenMissing" : "If no frequency is stated, the assumption is that the event occurs once per period, but systems SHOULD always be specific about this",
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.frequencyMax",
        "path" : "Timing.repeat.frequencyMax",
        "short" : "Event occurs up to frequencyMax times per period",
        "definition" : "If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "positiveInt"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.period",
        "path" : "Timing.repeat.period",
        "short" : "Event occurs frequency times per period",
        "definition" : "Indicates the duration of time over which repetitions are to occur; e.g. to express \"3 times per day\", 3 would be the frequency and \"1 day\" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "decimal"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.periodMax",
        "path" : "Timing.repeat.periodMax",
        "short" : "Upper limit of period (3-4 hours)",
        "definition" : "If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \"do this once every 3-5 days.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "decimal"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase"
        }]
      },
      {
        "id" : "Timing.repeat.periodUnit",
        "path" : "Timing.repeat.periodUnit",
        "short" : "s | min | h | d | wk | mo | a - unit of time (UCUM)",
        "definition" : "The units of time for the period in UCUM units.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "UnitsOfTime"
          }],
          "strength" : "required",
          "description" : "A unit of time (units from UCUM).",
          "valueSet" : "http://hl7.org/fhir/ValueSet/units-of-time|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "PIVL.phase.unit"
        }]
      },
      {
        "id" : "Timing.repeat.dayOfWeek",
        "path" : "Timing.repeat.dayOfWeek",
        "short" : "mon | tue | wed | thu | fri | sat | sun",
        "definition" : "If one or more days of week is provided, then the action happens only on the specified day(s).",
        "comment" : "If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "DayOfWeek"
          }],
          "strength" : "required",
          "valueSet" : "http://hl7.org/fhir/ValueSet/days-of-week|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.repeat.timeOfDay",
        "path" : "Timing.repeat.timeOfDay",
        "short" : "Time of day for action",
        "definition" : "Specified time of day for action to take place.",
        "comment" : "When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "time"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Timing.repeat.when",
        "path" : "Timing.repeat.when",
        "short" : "Code for time period of occurrence",
        "definition" : "An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.",
        "comment" : "When more than one event is listed, the event is tied to the union of the specified events.",
        "requirements" : "Timings are frequently determined by occurrences such as waking, eating and sleep.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "EventTiming"
          }],
          "strength" : "required",
          "description" : "Real world event relating to the schedule.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/event-timing|4.0.1"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "EIVL.event"
        }]
      },
      {
        "id" : "Timing.repeat.offset",
        "path" : "Timing.repeat.offset",
        "short" : "Minutes from event (before or after)",
        "definition" : "The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "unsignedInt"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : "EIVL.offset"
        }]
      },
      {
        "id" : "Timing.code",
        "path" : "Timing.code",
        "short" : "BID | TID | QID | AM | PM | QD | QOD | +",
        "definition" : "A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).",
        "comment" : "BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is \"always at 7am and 6pm\".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "TimingAbbreviation"
          }],
          "strength" : "preferred",
          "description" : "Code for a known / defined timing pattern.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/timing-abbreviation"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "QSC.code"
        }]
      }]
    }
  }