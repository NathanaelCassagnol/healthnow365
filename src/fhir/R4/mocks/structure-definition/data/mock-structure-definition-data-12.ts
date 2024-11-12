import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/datarequirement.profile.json.html
// StructureDefinition for DataRequirement

export const mockStructureDefinitionData12: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "DataRequirement",
    "meta" : {
      "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
    },
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "trial-use"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/DataRequirement",
    "version" : "4.0.1",
    "name" : "DataRequirement",
    "status" : "draft",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "DataRequirement",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "DataRequirement",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "DataRequirement",
        "short" : "Describes a required data item",
        "definition" : "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DataRequirement",
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
        }]
      },
      {
        "id" : "DataRequirement.id",
        "path" : "DataRequirement.id",
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
        "id" : "DataRequirement.extension",
        "path" : "DataRequirement.extension",
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
        "id" : "DataRequirement.type",
        "path" : "DataRequirement.type",
        "short" : "The type of the required data",
        "definition" : "The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.type",
          "min" : 1,
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
            "valueString" : "FHIRAllTypes"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            "valueBoolean" : true
          }],
          "strength" : "required",
          "description" : "A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/all-types|4.0.1"
        }
      },
      {
        "id" : "DataRequirement.profile",
        "path" : "DataRequirement.profile",
        "short" : "The profile of the required data",
        "definition" : "The profile of the required data, specified as the uri of the profile definition.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DataRequirement.profile",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "canonical",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/StructureDefinition"]
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
        "id" : "DataRequirement.subject[x]",
        "path" : "DataRequirement.subject[x]",
        "short" : "E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device",
        "definition" : "The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.",
        "comment" : "The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.subject[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "CodeableConcept"
        },
        {
          "code" : "Reference",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Group"]
        }],
        "meaningWhenMissing" : "Patient",
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
            "valueString" : "SubjectType"
          }],
          "strength" : "extensible",
          "description" : "The possible types of subjects for a data requirement (E.g., Patient, Practitioner, Organization, Location, etc.).",
          "valueSet" : "http://hl7.org/fhir/ValueSet/subject-type"
        }
      },
      {
        "id" : "DataRequirement.mustSupport",
        "path" : "DataRequirement.mustSupport",
        "short" : "Indicates specific structure elements that are referenced by the knowledge module",
        "definition" : "Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. \n\nThe value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DataRequirement.mustSupport",
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
        "id" : "DataRequirement.codeFilter",
        "path" : "DataRequirement.codeFilter",
        "short" : "What codes are expected",
        "definition" : "Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DataRequirement.codeFilter",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Element"
        }],
        "constraint" : [{
          "key" : "drq-1",
          "severity" : "error",
          "human" : "Either a path or a searchParam must be provided, but not both",
          "expression" : "path.exists() xor searchParam.exists()",
          "xpath" : "(exists(f:path) and not(exists(f:searchParam))) or (not(exists(f:path)) and exists(f:searchParam))"
        },
        {
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
        "id" : "DataRequirement.codeFilter.id",
        "path" : "DataRequirement.codeFilter.id",
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
        "id" : "DataRequirement.codeFilter.extension",
        "path" : "DataRequirement.codeFilter.extension",
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
        "id" : "DataRequirement.codeFilter.path",
        "path" : "DataRequirement.codeFilter.path",
        "short" : "A code-valued attribute to filter on",
        "definition" : "The code-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.",
        "comment" : "The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.codeFilter.path",
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
        "id" : "DataRequirement.codeFilter.searchParam",
        "path" : "DataRequirement.codeFilter.searchParam",
        "short" : "A coded (token) parameter to search on",
        "definition" : "A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.codeFilter.searchParam",
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
        "id" : "DataRequirement.codeFilter.valueSet",
        "path" : "DataRequirement.codeFilter.valueSet",
        "short" : "Valueset for the filter",
        "definition" : "The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.codeFilter.valueSet",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "canonical",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/ValueSet"]
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
        "id" : "DataRequirement.codeFilter.code",
        "path" : "DataRequirement.codeFilter.code",
        "short" : "What code is expected",
        "definition" : "The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DataRequirement.codeFilter.code",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Coding"
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
        "id" : "DataRequirement.dateFilter",
        "path" : "DataRequirement.dateFilter",
        "short" : "What dates/date ranges are expected",
        "definition" : "Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DataRequirement.dateFilter",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Element"
        }],
        "constraint" : [{
          "key" : "drq-2",
          "severity" : "error",
          "human" : "Either a path or a searchParam must be provided, but not both",
          "expression" : "path.exists() xor searchParam.exists()",
          "xpath" : "(exists(f:path) and not(exists(f:searchParam))) or (not(exists(f:path)) and exists(f:searchParam))"
        },
        {
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
        "id" : "DataRequirement.dateFilter.id",
        "path" : "DataRequirement.dateFilter.id",
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
        "id" : "DataRequirement.dateFilter.extension",
        "path" : "DataRequirement.dateFilter.extension",
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
        "id" : "DataRequirement.dateFilter.path",
        "path" : "DataRequirement.dateFilter.path",
        "short" : "A date-valued attribute to filter on",
        "definition" : "The date-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type date, dateTime, Period, Schedule, or Timing.",
        "comment" : "The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.dateFilter.path",
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
        "id" : "DataRequirement.dateFilter.searchParam",
        "path" : "DataRequirement.dateFilter.searchParam",
        "short" : "A date valued parameter to search on",
        "definition" : "A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.dateFilter.searchParam",
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
        "id" : "DataRequirement.dateFilter.value[x]",
        "path" : "DataRequirement.dateFilter.value[x]",
        "short" : "The value of the filter, as a Period, DateTime, or Duration value",
        "definition" : "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.dateFilter.value[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "dateTime"
        },
        {
          "code" : "Period"
        },
        {
          "code" : "Duration"
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
        "id" : "DataRequirement.limit",
        "path" : "DataRequirement.limit",
        "short" : "Number of results",
        "definition" : "Specifies a maximum number of results that are required (uses the _count search parameter).",
        "comment" : "This element can be used in combination with the sort element to specify quota requirements such as \"the most recent 5\" or \"the highest 5\".",
        "requirements" : "Enables the requirement \"most recent 5 results\" to be expressed.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.limit",
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
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.sort",
        "path" : "DataRequirement.sort",
        "short" : "Order of the results",
        "definition" : "Specifies the order of the results to be returned.",
        "comment" : "This element can be used in combination with the sort element to specify quota requirements such as \"the most recent 5\" or \"the highest 5\". When multiple sorts are specified, they are applied in the order they appear in the resource.",
        "requirements" : "Enables the requirement \"most recent 5 results\" to be expressed.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DataRequirement.sort",
          "min" : 0,
          "max" : "*"
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
        }],
        "isModifier" : false,
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.sort.id",
        "path" : "DataRequirement.sort.id",
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
        "id" : "DataRequirement.sort.extension",
        "path" : "DataRequirement.sort.extension",
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
        "id" : "DataRequirement.sort.path",
        "path" : "DataRequirement.sort.path",
        "short" : "The name of the attribute to perform the sort",
        "definition" : "The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.sort.path",
          "min" : 1,
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
        "id" : "DataRequirement.sort.direction",
        "path" : "DataRequirement.sort.direction",
        "short" : "ascending | descending",
        "definition" : "The direction of the sort, ascending or descending.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "DataRequirement.sort.direction",
          "min" : 1,
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
            "valueString" : "SortDirection"
          }],
          "strength" : "required",
          "description" : "The possible sort directions, ascending or descending.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/sort-direction|4.0.1"
        }
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "DataRequirement",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "DataRequirement",
        "short" : "Describes a required data item",
        "definition" : "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
        "min" : 0,
        "max" : "*"
      },
      {
        "id" : "DataRequirement.type",
        "path" : "DataRequirement.type",
        "short" : "The type of the required data",
        "definition" : "The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "FHIRAllTypes"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            "valueBoolean" : true
          }],
          "strength" : "required",
          "description" : "A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/all-types|4.0.1"
        }
      },
      {
        "id" : "DataRequirement.profile",
        "path" : "DataRequirement.profile",
        "short" : "The profile of the required data",
        "definition" : "The profile of the required data, specified as the uri of the profile definition.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "canonical",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/StructureDefinition"]
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.subject[x]",
        "path" : "DataRequirement.subject[x]",
        "short" : "E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device",
        "definition" : "The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.",
        "comment" : "The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "CodeableConcept"
        },
        {
          "code" : "Reference",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Group"]
        }],
        "meaningWhenMissing" : "Patient",
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "SubjectType"
          }],
          "strength" : "extensible",
          "description" : "The possible types of subjects for a data requirement (E.g., Patient, Practitioner, Organization, Location, etc.).",
          "valueSet" : "http://hl7.org/fhir/ValueSet/subject-type"
        }
      },
      {
        "id" : "DataRequirement.mustSupport",
        "path" : "DataRequirement.mustSupport",
        "short" : "Indicates specific structure elements that are referenced by the knowledge module",
        "definition" : "Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. \n\nThe value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.codeFilter",
        "path" : "DataRequirement.codeFilter",
        "short" : "What codes are expected",
        "definition" : "Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Element"
        }],
        "constraint" : [{
          "key" : "drq-1",
          "severity" : "error",
          "human" : "Either a path or a searchParam must be provided, but not both",
          "expression" : "path.exists() xor searchParam.exists()",
          "xpath" : "(exists(f:path) and not(exists(f:searchParam))) or (not(exists(f:path)) and exists(f:searchParam))"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.codeFilter.path",
        "path" : "DataRequirement.codeFilter.path",
        "short" : "A code-valued attribute to filter on",
        "definition" : "The code-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.",
        "comment" : "The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.codeFilter.searchParam",
        "path" : "DataRequirement.codeFilter.searchParam",
        "short" : "A coded (token) parameter to search on",
        "definition" : "A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.codeFilter.valueSet",
        "path" : "DataRequirement.codeFilter.valueSet",
        "short" : "Valueset for the filter",
        "definition" : "The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "canonical",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/ValueSet"]
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.codeFilter.code",
        "path" : "DataRequirement.codeFilter.code",
        "short" : "What code is expected",
        "definition" : "The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Coding"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.dateFilter",
        "path" : "DataRequirement.dateFilter",
        "short" : "What dates/date ranges are expected",
        "definition" : "Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Element"
        }],
        "constraint" : [{
          "key" : "drq-2",
          "severity" : "error",
          "human" : "Either a path or a searchParam must be provided, but not both",
          "expression" : "path.exists() xor searchParam.exists()",
          "xpath" : "(exists(f:path) and not(exists(f:searchParam))) or (not(exists(f:path)) and exists(f:searchParam))"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.dateFilter.path",
        "path" : "DataRequirement.dateFilter.path",
        "short" : "A date-valued attribute to filter on",
        "definition" : "The date-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type date, dateTime, Period, Schedule, or Timing.",
        "comment" : "The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.dateFilter.searchParam",
        "path" : "DataRequirement.dateFilter.searchParam",
        "short" : "A date valued parameter to search on",
        "definition" : "A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.dateFilter.value[x]",
        "path" : "DataRequirement.dateFilter.value[x]",
        "short" : "The value of the filter, as a Period, DateTime, or Duration value",
        "definition" : "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "dateTime"
        },
        {
          "code" : "Period"
        },
        {
          "code" : "Duration"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.limit",
        "path" : "DataRequirement.limit",
        "short" : "Number of results",
        "definition" : "Specifies a maximum number of results that are required (uses the _count search parameter).",
        "comment" : "This element can be used in combination with the sort element to specify quota requirements such as \"the most recent 5\" or \"the highest 5\".",
        "requirements" : "Enables the requirement \"most recent 5 results\" to be expressed.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "positiveInt"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.sort",
        "path" : "DataRequirement.sort",
        "short" : "Order of the results",
        "definition" : "Specifies the order of the results to be returned.",
        "comment" : "This element can be used in combination with the sort element to specify quota requirements such as \"the most recent 5\" or \"the highest 5\". When multiple sorts are specified, they are applied in the order they appear in the resource.",
        "requirements" : "Enables the requirement \"most recent 5 results\" to be expressed.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Element"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.sort.path",
        "path" : "DataRequirement.sort.path",
        "short" : "The name of the attribute to perform the sort",
        "definition" : "The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "DataRequirement.sort.direction",
        "path" : "DataRequirement.sort.direction",
        "short" : "ascending | descending",
        "definition" : "The direction of the sort, ascending or descending.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "SortDirection"
          }],
          "strength" : "required",
          "description" : "The possible sort directions, ascending or descending.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/sort-direction|4.0.1"
        }
      }]
    }
  }