import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/prodcharacteristic.profile.json.html
// StructureDefinition for ProdCharacteristic

export const mockStructureDefinitionData29: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "ProdCharacteristic",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/ProdCharacteristic",
    "version" : "4.0.1",
    "name" : "ProdCharacteristic",
    "status" : "draft",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for ProdCharacteristic Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "ProdCharacteristic",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/BackboneElement",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "ProdCharacteristic",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "draft"
        }],
        "path" : "ProdCharacteristic",
        "short" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available",
        "definition" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "ProdCharacteristic",
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
        "id" : "ProdCharacteristic.id",
        "path" : "ProdCharacteristic.id",
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
        "id" : "ProdCharacteristic.extension",
        "path" : "ProdCharacteristic.extension",
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
        "id" : "ProdCharacteristic.modifierExtension",
        "path" : "ProdCharacteristic.modifierExtension",
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
        "id" : "ProdCharacteristic.height",
        "path" : "ProdCharacteristic.height",
        "short" : "Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.height",
          "min" : 0,
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
        "id" : "ProdCharacteristic.width",
        "path" : "ProdCharacteristic.width",
        "short" : "Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.width",
          "min" : 0,
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
        "id" : "ProdCharacteristic.depth",
        "path" : "ProdCharacteristic.depth",
        "short" : "Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.depth",
          "min" : 0,
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
        "id" : "ProdCharacteristic.weight",
        "path" : "ProdCharacteristic.weight",
        "short" : "Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.weight",
          "min" : 0,
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
        "id" : "ProdCharacteristic.nominalVolume",
        "path" : "ProdCharacteristic.nominalVolume",
        "short" : "Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.nominalVolume",
          "min" : 0,
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
        "id" : "ProdCharacteristic.externalDiameter",
        "path" : "ProdCharacteristic.externalDiameter",
        "short" : "Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.externalDiameter",
          "min" : 0,
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
        "id" : "ProdCharacteristic.shape",
        "path" : "ProdCharacteristic.shape",
        "short" : "Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used",
        "definition" : "Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.shape",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "string"
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
        "id" : "ProdCharacteristic.color",
        "path" : "ProdCharacteristic.color",
        "short" : "Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used",
        "definition" : "Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "ProdCharacteristic.color",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "string"
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
        "id" : "ProdCharacteristic.imprint",
        "path" : "ProdCharacteristic.imprint",
        "short" : "Where applicable, the imprint can be specified as text",
        "definition" : "Where applicable, the imprint can be specified as text.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "ProdCharacteristic.imprint",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "string"
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
        "id" : "ProdCharacteristic.image",
        "path" : "ProdCharacteristic.image",
        "short" : "Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations",
        "definition" : "Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "ProdCharacteristic.image",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Attachment"
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
        "id" : "ProdCharacteristic.scoring",
        "path" : "ProdCharacteristic.scoring",
        "short" : "Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used",
        "definition" : "Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "ProdCharacteristic.scoring",
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
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "ProdCharacteristic",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "draft"
        }],
        "path" : "ProdCharacteristic",
        "short" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available",
        "definition" : "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "ProdCharacteristic.height",
        "path" : "ProdCharacteristic.height",
        "short" : "Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.width",
        "path" : "ProdCharacteristic.width",
        "short" : "Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.depth",
        "path" : "ProdCharacteristic.depth",
        "short" : "Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.weight",
        "path" : "ProdCharacteristic.weight",
        "short" : "Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.nominalVolume",
        "path" : "ProdCharacteristic.nominalVolume",
        "short" : "Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.externalDiameter",
        "path" : "ProdCharacteristic.externalDiameter",
        "short" : "Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used",
        "definition" : "Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.shape",
        "path" : "ProdCharacteristic.shape",
        "short" : "Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used",
        "definition" : "Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.color",
        "path" : "ProdCharacteristic.color",
        "short" : "Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used",
        "definition" : "Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.imprint",
        "path" : "ProdCharacteristic.imprint",
        "short" : "Where applicable, the imprint can be specified as text",
        "definition" : "Where applicable, the imprint can be specified as text.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.image",
        "path" : "ProdCharacteristic.image",
        "short" : "Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations",
        "definition" : "Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Attachment"
        }],
        "isSummary" : true
      },
      {
        "id" : "ProdCharacteristic.scoring",
        "path" : "ProdCharacteristic.scoring",
        "short" : "Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used",
        "definition" : "Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        }],
        "isSummary" : true
      }]
    }
  }