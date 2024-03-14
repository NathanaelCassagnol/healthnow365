import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/coding.profile.json.html
// StructureDefinition for Coding

export const mockStructureDefinitionData7: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Coding",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/Coding",
    "version" : "4.0.1",
    "name" : "Coding",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Coding Type: A reference to a code defined by a terminology system.",
    "purpose" : "References to codes are very common in healthcare models.",
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
    },
    {
      "identity" : "orim",
      "uri" : "http://hl7.org/orim",
      "name" : "Ontological RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "Coding",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Coding",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Coding",
        "short" : "A reference to a code defined by a terminology system",
        "definition" : "A reference to a code defined by a terminology system.",
        "comment" : "Codes may be defined very casually in enumerations or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Coding",
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
          "identity" : "v2",
          "map" : "CE/CNE/CWE subset one of the sets of component 1-3 or 4-6"
        },
        {
          "identity" : "rim",
          "map" : "CV"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding rdfs:subClassOf dt:CDCoding"
        }]
      },
      {
        "id" : "Coding.id",
        "path" : "Coding.id",
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
        "id" : "Coding.extension",
        "path" : "Coding.extension",
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
        "id" : "Coding.system",
        "path" : "Coding.system",
        "short" : "Identity of the terminology system",
        "definition" : "The identification of the code system that defines the meaning of the symbol in the code.",
        "comment" : "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
        "requirements" : "Need to be unambiguous about the source of the definition of the symbol.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Coding.system",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "uri"
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
          "map" : "C*E.3"
        },
        {
          "identity" : "rim",
          "map" : "./codeSystem"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem"
        }]
      },
      {
        "id" : "Coding.version",
        "path" : "Coding.version",
        "short" : "Version of the system - if relevant",
        "definition" : "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
        "comment" : "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Coding.version",
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
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "C*E.7"
        },
        {
          "identity" : "rim",
          "map" : "./codeSystemVersion"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion"
        }]
      },
      {
        "id" : "Coding.code",
        "path" : "Coding.code",
        "short" : "Symbol in syntax defined by the system",
        "definition" : "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
        "requirements" : "Need to refer to a particular code in the system.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Coding.code",
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
        "mapping" : [{
          "identity" : "v2",
          "map" : "C*E.1"
        },
        {
          "identity" : "rim",
          "map" : "./code"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code"
        }]
      },
      {
        "id" : "Coding.display",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          "valueBoolean" : true
        }],
        "path" : "Coding.display",
        "short" : "Representation defined by the system",
        "definition" : "A representation of the meaning of the code in the system, following the rules of the system.",
        "requirements" : "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Coding.display",
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
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "C*E.2 - but note this is not well followed"
        },
        {
          "identity" : "rim",
          "map" : "CV.displayName"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName"
        }]
      },
      {
        "id" : "Coding.userSelected",
        "path" : "Coding.userSelected",
        "short" : "If this coding was chosen directly by the user",
        "definition" : "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
        "comment" : "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
        "requirements" : "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Coding.userSelected",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "boolean"
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
          "map" : "Sometimes implied by being first"
        },
        {
          "identity" : "rim",
          "map" : "CD.codingRationale"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected\\#true a [     fhir:source \"true\";     fhir:target dt:CDCoding.codingRationale\\#O   ]"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Coding",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Coding",
        "short" : "A reference to a code defined by a terminology system",
        "definition" : "A reference to a code defined by a terminology system.",
        "comment" : "Codes may be defined very casually in enumerations or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.",
        "min" : 0,
        "max" : "*",
        "mapping" : [{
          "identity" : "v2",
          "map" : "CE/CNE/CWE subset one of the sets of component 1-3 or 4-6"
        },
        {
          "identity" : "rim",
          "map" : "CV"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding rdfs:subClassOf dt:CDCoding"
        }]
      },
      {
        "id" : "Coding.system",
        "path" : "Coding.system",
        "short" : "Identity of the terminology system",
        "definition" : "The identification of the code system that defines the meaning of the symbol in the code.",
        "comment" : "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
        "requirements" : "Need to be unambiguous about the source of the definition of the symbol.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "uri"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "C*E.3"
        },
        {
          "identity" : "rim",
          "map" : "./codeSystem"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem"
        }]
      },
      {
        "id" : "Coding.version",
        "path" : "Coding.version",
        "short" : "Version of the system - if relevant",
        "definition" : "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
        "comment" : "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "C*E.7"
        },
        {
          "identity" : "rim",
          "map" : "./codeSystemVersion"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion"
        }]
      },
      {
        "id" : "Coding.code",
        "path" : "Coding.code",
        "short" : "Symbol in syntax defined by the system",
        "definition" : "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
        "requirements" : "Need to refer to a particular code in the system.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "C*E.1"
        },
        {
          "identity" : "rim",
          "map" : "./code"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code"
        }]
      },
      {
        "id" : "Coding.display",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          "valueBoolean" : true
        }],
        "path" : "Coding.display",
        "short" : "Representation defined by the system",
        "definition" : "A representation of the meaning of the code in the system, following the rules of the system.",
        "requirements" : "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "C*E.2 - but note this is not well followed"
        },
        {
          "identity" : "rim",
          "map" : "CV.displayName"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName"
        }]
      },
      {
        "id" : "Coding.userSelected",
        "path" : "Coding.userSelected",
        "short" : "If this coding was chosen directly by the user",
        "definition" : "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
        "comment" : "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
        "requirements" : "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "boolean"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "Sometimes implied by being first"
        },
        {
          "identity" : "rim",
          "map" : "CD.codingRationale"
        },
        {
          "identity" : "orim",
          "map" : "fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected\\#true a [     fhir:source \"true\";     fhir:target dt:CDCoding.codingRationale\\#O   ]"
        }]
      }]
    }
  }