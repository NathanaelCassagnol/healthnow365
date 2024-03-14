import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/extension.profile.json.html
// StructureDefinition for Extension

export const mockStructureDefinitionData19: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Extension",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/Extension",
    "version" : "4.0.1",
    "name" : "Extension",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Extension Type: Optional Extension Element - found in all resources.",
    "purpose" : "The ability to add extensions in a structured way is what keeps FHIR resources simple.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "Extension",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Extension",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Extension",
        "short" : "Optional Extensions Element",
        "definition" : "Optional Extension Element - found in all resources.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Extension",
          "min" : 0,
          "max" : "*"
        },
        "condition" : ["ele-1"],
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
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), 'value')])"
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        },
        {
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "Extension.id",
        "path" : "Extension.id",
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
        "id" : "Extension.extension",
        "path" : "Extension.extension",
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
        "id" : "Extension.url",
        "path" : "Extension.url",
        "representation" : ["xmlAttr"],
        "short" : "identifies the meaning of the extension",
        "definition" : "Source of the definition for the extension code - a logical name or a URL.",
        "comment" : "The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "Extension.url",
          "min" : 1,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "uri"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "Extension.value[x]",
        "path" : "Extension.value[x]",
        "short" : "Value of extension",
        "definition" : "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Extension.value[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "base64Binary"
        },
        {
          "code" : "boolean"
        },
        {
          "code" : "canonical"
        },
        {
          "code" : "code"
        },
        {
          "code" : "date"
        },
        {
          "code" : "dateTime"
        },
        {
          "code" : "decimal"
        },
        {
          "code" : "id"
        },
        {
          "code" : "instant"
        },
        {
          "code" : "integer"
        },
        {
          "code" : "markdown"
        },
        {
          "code" : "oid"
        },
        {
          "code" : "positiveInt"
        },
        {
          "code" : "string"
        },
        {
          "code" : "time"
        },
        {
          "code" : "unsignedInt"
        },
        {
          "code" : "uri"
        },
        {
          "code" : "url"
        },
        {
          "code" : "uuid"
        },
        {
          "code" : "Address"
        },
        {
          "code" : "Age"
        },
        {
          "code" : "Annotation"
        },
        {
          "code" : "Attachment"
        },
        {
          "code" : "CodeableConcept"
        },
        {
          "code" : "Coding"
        },
        {
          "code" : "ContactPoint"
        },
        {
          "code" : "Count"
        },
        {
          "code" : "Distance"
        },
        {
          "code" : "Duration"
        },
        {
          "code" : "HumanName"
        },
        {
          "code" : "Identifier"
        },
        {
          "code" : "Money"
        },
        {
          "code" : "Period"
        },
        {
          "code" : "Quantity"
        },
        {
          "code" : "Range"
        },
        {
          "code" : "Ratio"
        },
        {
          "code" : "Reference"
        },
        {
          "code" : "SampledData"
        },
        {
          "code" : "Signature"
        },
        {
          "code" : "Timing"
        },
        {
          "code" : "ContactDetail"
        },
        {
          "code" : "Contributor"
        },
        {
          "code" : "DataRequirement"
        },
        {
          "code" : "Expression"
        },
        {
          "code" : "ParameterDefinition"
        },
        {
          "code" : "RelatedArtifact"
        },
        {
          "code" : "TriggerDefinition"
        },
        {
          "code" : "UsageContext"
        },
        {
          "code" : "Dosage"
        },
        {
          "code" : "Meta"
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
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Extension",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Extension",
        "short" : "Optional Extensions Element",
        "definition" : "Optional Extension Element - found in all resources.",
        "min" : 0,
        "max" : "*",
        "constraint" : [{
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), 'value')])"
        }],
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "Extension.url",
        "path" : "Extension.url",
        "representation" : ["xmlAttr"],
        "short" : "identifies the meaning of the extension",
        "definition" : "Source of the definition for the extension code - a logical name or a URL.",
        "comment" : "The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "uri"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "Extension.value[x]",
        "path" : "Extension.value[x]",
        "short" : "Value of extension",
        "definition" : "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "base64Binary"
        },
        {
          "code" : "boolean"
        },
        {
          "code" : "canonical"
        },
        {
          "code" : "code"
        },
        {
          "code" : "date"
        },
        {
          "code" : "dateTime"
        },
        {
          "code" : "decimal"
        },
        {
          "code" : "id"
        },
        {
          "code" : "instant"
        },
        {
          "code" : "integer"
        },
        {
          "code" : "markdown"
        },
        {
          "code" : "oid"
        },
        {
          "code" : "positiveInt"
        },
        {
          "code" : "string"
        },
        {
          "code" : "time"
        },
        {
          "code" : "unsignedInt"
        },
        {
          "code" : "uri"
        },
        {
          "code" : "url"
        },
        {
          "code" : "uuid"
        },
        {
          "code" : "Address"
        },
        {
          "code" : "Age"
        },
        {
          "code" : "Annotation"
        },
        {
          "code" : "Attachment"
        },
        {
          "code" : "CodeableConcept"
        },
        {
          "code" : "Coding"
        },
        {
          "code" : "ContactPoint"
        },
        {
          "code" : "Count"
        },
        {
          "code" : "Distance"
        },
        {
          "code" : "Duration"
        },
        {
          "code" : "HumanName"
        },
        {
          "code" : "Identifier"
        },
        {
          "code" : "Money"
        },
        {
          "code" : "Period"
        },
        {
          "code" : "Quantity"
        },
        {
          "code" : "Range"
        },
        {
          "code" : "Ratio"
        },
        {
          "code" : "Reference"
        },
        {
          "code" : "SampledData"
        },
        {
          "code" : "Signature"
        },
        {
          "code" : "Timing"
        },
        {
          "code" : "ContactDetail"
        },
        {
          "code" : "Contributor"
        },
        {
          "code" : "DataRequirement"
        },
        {
          "code" : "Expression"
        },
        {
          "code" : "ParameterDefinition"
        },
        {
          "code" : "RelatedArtifact"
        },
        {
          "code" : "TriggerDefinition"
        },
        {
          "code" : "UsageContext"
        },
        {
          "code" : "Dosage"
        },
        {
          "code" : "Meta"
        }],
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      }]
    }
  }