import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/productshelflife.profile.json.html
// StructureDefinition for ProductShelfLife

export const mockStructureDefinitionData30: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "ProductShelfLife",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/ProductShelfLife",
    "version" : "4.0.1",
    "name" : "ProductShelfLife",
    "status" : "draft",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for ProductShelfLife Type: The shelf-life and storage information for a medicinal product item or container can be described using this class.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "ProductShelfLife",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/BackboneElement",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "ProductShelfLife",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "draft"
        }],
        "path" : "ProductShelfLife",
        "short" : "The shelf-life and storage information for a medicinal product item or container can be described using this class",
        "definition" : "The shelf-life and storage information for a medicinal product item or container can be described using this class.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "ProductShelfLife",
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
        "id" : "ProductShelfLife.id",
        "path" : "ProductShelfLife.id",
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
        "id" : "ProductShelfLife.extension",
        "path" : "ProductShelfLife.extension",
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
        "id" : "ProductShelfLife.modifierExtension",
        "path" : "ProductShelfLife.modifierExtension",
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
        "id" : "ProductShelfLife.identifier",
        "path" : "ProductShelfLife.identifier",
        "short" : "Unique identifier for the packaged Medicinal Product",
        "definition" : "Unique identifier for the packaged Medicinal Product.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProductShelfLife.identifier",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Identifier"
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
        "id" : "ProductShelfLife.type",
        "path" : "ProductShelfLife.type",
        "short" : "This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified",
        "definition" : "This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "ProductShelfLife.type",
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
        "id" : "ProductShelfLife.period",
        "path" : "ProductShelfLife.period",
        "short" : "The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "ProductShelfLife.period",
          "min" : 1,
          "max" : "1"
        },
        "type" : [{
          "code" : "Quantity"
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
        "id" : "ProductShelfLife.specialPrecautionsForStorage",
        "path" : "ProductShelfLife.specialPrecautionsForStorage",
        "short" : "Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified",
        "definition" : "Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "ProductShelfLife.specialPrecautionsForStorage",
          "min" : 0,
          "max" : "*"
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
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "ProductShelfLife",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "draft"
        }],
        "path" : "ProductShelfLife",
        "short" : "The shelf-life and storage information for a medicinal product item or container can be described using this class",
        "definition" : "The shelf-life and storage information for a medicinal product item or container can be described using this class.",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "ProductShelfLife.identifier",
        "path" : "ProductShelfLife.identifier",
        "short" : "Unique identifier for the packaged Medicinal Product",
        "definition" : "Unique identifier for the packaged Medicinal Product.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Identifier"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProductShelfLife.type",
        "path" : "ProductShelfLife.type",
        "short" : "This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified",
        "definition" : "This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProductShelfLife.period",
        "path" : "ProductShelfLife.period",
        "short" : "The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProductShelfLife.specialPrecautionsForStorage",
        "path" : "ProductShelfLife.specialPrecautionsForStorage",
        "short" : "Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified",
        "definition" : "Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true
      }]
    }
  }