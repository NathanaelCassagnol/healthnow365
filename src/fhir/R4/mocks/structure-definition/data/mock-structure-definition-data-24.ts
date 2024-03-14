import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/money.profile.json.html
// StructureDefinition for Money

export const mockStructureDefinitionData24: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Money",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/Money",
    "version" : "4.0.1",
    "name" : "Money",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Money Type: An amount of economic utility in some recognized currency.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    },
    {
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "Money",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Money",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Money",
        "short" : "An amount of economic utility in some recognized currency",
        "definition" : "An amount of economic utility in some recognized currency.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Money",
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
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        },
        {
          "identity" : "rim",
          "map" : "MO"
        }]
      },
      {
        "id" : "Money.id",
        "path" : "Money.id",
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
        "id" : "Money.extension",
        "path" : "Money.extension",
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
        "id" : "Money.value",
        "path" : "Money.value",
        "short" : "Numerical value (with implicit precision)",
        "definition" : "Numerical value (with implicit precision).",
        "comment" : "Monetary values have their own rules for handling precision (refer to standard accounting text books).",
        "requirements" : "The amount of the currency. The value includes an implicit precision in the presentation of the value.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Money.value",
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
          "identity" : "v2",
          "map" : "MO.Value"
        }]
      },
      {
        "id" : "Money.currency",
        "path" : "Money.currency",
        "short" : "ISO 4217 Currency Code",
        "definition" : "ISO 4217 Currency Code.",
        "requirements" : "A code indicating the currency, taken from ISO 4217.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Money.currency",
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
            "valueString" : "CurrencyCode"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            "valueBoolean" : true
          }],
          "strength" : "required",
          "description" : "A code indicating the currency, taken from ISO 4217.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/currencies|4.0.1"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "MO.Currency"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Money",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Money",
        "short" : "An amount of economic utility in some recognized currency",
        "definition" : "An amount of economic utility in some recognized currency.",
        "min" : 0,
        "max" : "*",
        "mapping" : [{
          "identity" : "rim",
          "map" : "MO"
        }]
      },
      {
        "id" : "Money.value",
        "path" : "Money.value",
        "short" : "Numerical value (with implicit precision)",
        "definition" : "Numerical value (with implicit precision).",
        "comment" : "Monetary values have their own rules for handling precision (refer to standard accounting text books).",
        "requirements" : "The amount of the currency. The value includes an implicit precision in the presentation of the value.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "decimal"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "MO.Value"
        }]
      },
      {
        "id" : "Money.currency",
        "path" : "Money.currency",
        "short" : "ISO 4217 Currency Code",
        "definition" : "ISO 4217 Currency Code.",
        "requirements" : "A code indicating the currency, taken from ISO 4217.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "CurrencyCode"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            "valueBoolean" : true
          }],
          "strength" : "required",
          "description" : "A code indicating the currency, taken from ISO 4217.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/currencies|4.0.1"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "MO.Currency"
        }]
      }]
    }
  }