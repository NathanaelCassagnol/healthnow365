import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/integer.profile.json.html
// StructureDefinition for integer

export const mockStructureDefinitionPrimitive10: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "integer",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/integer",
    "version" : "4.0.1",
    "name" : "integer",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for integer Type: A whole number",
    "fhirVersion" : "4.0.1",
    "kind" : "primitive-type",
    "abstract" : false,
    "type" : "integer",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "integer",
        "path" : "integer",
        "short" : "Primitive Type integer",
        "definition" : "A whole number",
        "comment" : "32 bit number; for values larger than this, use decimal",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "integer",
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
        "id" : "integer.id",
        "path" : "integer.id",
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
        "id" : "integer.extension",
        "path" : "integer.extension",
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
        "id" : "integer.value",
        "path" : "integer.value",
        "representation" : ["xmlAttr"],
        "short" : "Primitive value for integer",
        "definition" : "The actual value",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "integer.value",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "integer"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/regex",
            "valueString" : "-?([0]|([1-9][0-9]*))"
          }],
          "code" : "http://hl7.org/fhirpath/System.Integer"
        }],
        "minValueInteger" : -2147483648,
        "maxValueInteger" : 2147483647,
        "isModifier" : false,
        "isSummary" : false
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "integer",
        "path" : "integer",
        "short" : "Primitive Type integer",
        "definition" : "A whole number",
        "comment" : "32 bit number; for values larger than this, use decimal",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "integer.value",
        "path" : "integer.value",
        "representation" : ["xmlAttr"],
        "short" : "Primitive value for integer",
        "definition" : "Primitive value for integer",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "integer"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/regex",
            "valueString" : "-?([0]|([1-9][0-9]*))"
          }],
          "code" : "http://hl7.org/fhirpath/System.Integer"
        }],
        "minValueInteger" : -2147483648,
        "maxValueInteger" : 2147483647
      }]
    }
  }