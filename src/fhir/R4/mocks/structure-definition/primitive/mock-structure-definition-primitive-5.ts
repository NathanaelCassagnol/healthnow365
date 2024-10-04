import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/date.profile.json.html
// StructureDefinition for date

export const mockStructureDefinitionPrimitive5: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "date",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/date",
    "version" : "4.0.1",
    "name" : "date",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for date Type: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.",
    "fhirVersion" : "4.0.1",
    "kind" : "primitive-type",
    "abstract" : false,
    "type" : "date",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "date",
        "path" : "date",
        "short" : "Primitive Type date",
        "definition" : "A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "date",
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
        "isSummary" : false
      },
      {
        "id" : "date.id",
        "path" : "date.id",
        "representation" : ["xmlAttr"],
        "short" : "xml:id (or equivalent in JSON)",
        "definition" : "unique id for the element within a resource (for internal references)",
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
        "isSummary" : false
      },
      {
        "id" : "date.extension",
        "path" : "date.extension",
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
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
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), 'value')])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : false,
        "isSummary" : false
      },
      {
        "id" : "date.value",
        "path" : "date.value",
        "representation" : ["xmlAttr"],
        "short" : "Primitive value for date",
        "definition" : "The actual value",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "date.value",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "date"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/regex",
            "valueString" : "([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?"
          }],
          "code" : "http://hl7.org/fhirpath/System.Date"
        }],
        "isModifier" : false,
        "isSummary" : false
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "date",
        "path" : "date",
        "short" : "Primitive Type date",
        "definition" : "A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "date.value",
        "path" : "date.value",
        "representation" : ["xmlAttr"],
        "short" : "Primitive value for date",
        "definition" : "Primitive value for date",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "date"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/regex",
            "valueString" : "([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?"
          }],
          "code" : "http://hl7.org/fhirpath/System.Date"
        }]
      }]
    }
  }