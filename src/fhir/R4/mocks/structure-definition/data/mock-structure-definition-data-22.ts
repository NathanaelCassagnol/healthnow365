import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/marketingstatus.profile.json.html
// StructureDefinition for MarketingStatus

export const mockStructureDefinitionData22: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "MarketingStatus",
    "meta" : {
      "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
    },
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "draft"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/MarketingStatus",
    "version" : "4.0.1",
    "name" : "MarketingStatus",
    "status" : "draft",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for MarketingStatus Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "MarketingStatus",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/BackboneElement",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "MarketingStatus",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "draft"
        }],
        "path" : "MarketingStatus",
        "short" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available",
        "definition" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "MarketingStatus",
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
        }]
      },
      {
        "id" : "MarketingStatus.id",
        "path" : "MarketingStatus.id",
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
        "id" : "MarketingStatus.extension",
        "path" : "MarketingStatus.extension",
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
        "id" : "MarketingStatus.modifierExtension",
        "path" : "MarketingStatus.modifierExtension",
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
        "id" : "MarketingStatus.country",
        "path" : "MarketingStatus.country",
        "short" : "The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 â€‘ 1 alpha-2 code elements",
        "definition" : "The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 â€‘ 1 alpha-2 code elements.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "MarketingStatus.country",
          "min" : 1,
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
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.jurisdiction",
        "path" : "MarketingStatus.jurisdiction",
        "short" : "Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified",
        "definition" : "Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "MarketingStatus.jurisdiction",
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
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.status",
        "path" : "MarketingStatus.status",
        "short" : "This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples",
        "definition" : "This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "MarketingStatus.status",
          "min" : 1,
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
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.dateRange",
        "path" : "MarketingStatus.dateRange",
        "short" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain",
        "definition" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "MarketingStatus.dateRange",
          "min" : 1,
          "max" : "1"
        },
        "type" : [{
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
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.restoreDate",
        "path" : "MarketingStatus.restoreDate",
        "short" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain",
        "definition" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "MarketingStatus.restoreDate",
          "min" : 0,
          "max" : "1"
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
        "isSummary" : true
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "MarketingStatus",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "draft"
        }],
        "path" : "MarketingStatus",
        "short" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available",
        "definition" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "MarketingStatus.country",
        "path" : "MarketingStatus.country",
        "short" : "The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 â€‘ 1 alpha-2 code elements",
        "definition" : "The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 â€‘ 1 alpha-2 code elements.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.jurisdiction",
        "path" : "MarketingStatus.jurisdiction",
        "short" : "Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified",
        "definition" : "Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.status",
        "path" : "MarketingStatus.status",
        "short" : "This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples",
        "definition" : "This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.dateRange",
        "path" : "MarketingStatus.dateRange",
        "short" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain",
        "definition" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "Period"
        }],
        "isSummary" : true
      },
      {
        "id" : "MarketingStatus.restoreDate",
        "path" : "MarketingStatus.restoreDate",
        "short" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain",
        "definition" : "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE â€œPlaced on the marketâ€� refers to the release of the Medicinal Product into the distribution chain.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "dateTime"
        }],
        "isSummary" : true
      }]
    }
  }