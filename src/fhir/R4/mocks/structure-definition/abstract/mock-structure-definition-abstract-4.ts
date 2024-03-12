import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/domainresource.profile.json.html
// StructureDefinition for domainresource

export const mockStructureDefinitionAbstract4: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "DomainResource",
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
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 5
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/DomainResource",
    "version" : "4.0.1",
    "name" : "DomainResource",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "Health Level Seven International (FHIR Infrastructure)",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    },
    {
      "telecom" : [{
        "system" : "url",
        "value" : "http://www.hl7.org/Special/committees/fiwg/index.cfm"
      }]
    }],
    "description" : "A resource that includes narrative, extensions, and contained resources.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "resource",
    "abstract" : true,
    "type" : "DomainResource",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Resource",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "DomainResource",
        "path" : "DomainResource",
        "short" : "A resource with narrative, extensions, and contained resources",
        "definition" : "A resource that includes narrative, extensions, and contained resources.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DomainResource",
          "min" : 0,
          "max" : "*"
        },
        "constraint" : [{
          "key" : "dom-2",
          "severity" : "error",
          "human" : "If the resource is contained in another resource, it SHALL NOT contain nested Resources",
          "expression" : "contained.contained.empty()",
          "xpath" : "not(parent::f:contained and f:contained)"
        },
        {
          "key" : "dom-3",
          "severity" : "error",
          "human" : "If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource",
          "expression" : "contained.where((('#'+id in (%resource.descendants().reference | %resource.descendants().as(canonical) | %resource.descendants().as(uri) | %resource.descendants().as(url))) or descendants().where(reference = '#').exists() or descendants().where(as(canonical) = '#').exists() or descendants().where(as(canonical) = '#').exists()).not()).trace('unmatched', id).empty()",
          "xpath" : "not(exists(for $id in f:contained/*/f:id/@value return $contained[not(parent::*/descendant::f:reference/@value=concat('#', $contained/*/id/@value) or descendant::f:reference[@value='#'])]))"
        },
        {
          "key" : "dom-4",
          "severity" : "error",
          "human" : "If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated",
          "expression" : "contained.meta.versionId.empty() and contained.meta.lastUpdated.empty()",
          "xpath" : "not(exists(f:contained/*/f:meta/f:versionId)) and not(exists(f:contained/*/f:meta/f:lastUpdated))"
        },
        {
          "key" : "dom-5",
          "severity" : "error",
          "human" : "If a resource is contained in another resource, it SHALL NOT have a security label",
          "expression" : "contained.meta.security.empty()",
          "xpath" : "not(exists(f:contained/*/f:meta/f:security))"
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
            "valueBoolean" : true
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
            "valueMarkdown" : "When a resource has no narrative, only systems that fully understand the data can display the resource to a human safely. Including a human readable representation in the resource makes for a much more robust eco-system and cheaper handling of resources by intermediary systems. Some ecosystems restrict distribution of resources to only those systems that do fully understand the resources, and as a consequence implementers may believe that the narrative is superfluous. However experience shows that such eco-systems often open up to new participants over time."
          }],
          "key" : "dom-6",
          "severity" : "warning",
          "human" : "A resource should have narrative for robust management",
          "expression" : "text.`div`.exists()",
          "xpath" : "exists(f:text/h:div)"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "Entity. Role, or Act"
        }]
      },
      {
        "id" : "DomainResource.id",
        "path" : "DomainResource.id",
        "short" : "Logical id of this artifact",
        "definition" : "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
        "comment" : "The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.id",
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
        "isSummary" : true
      },
      {
        "id" : "DomainResource.meta",
        "path" : "DomainResource.meta",
        "short" : "Metadata about the resource",
        "definition" : "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.meta",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
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
        "isSummary" : true
      },
      {
        "id" : "DomainResource.implicitRules",
        "path" : "DomainResource.implicitRules",
        "short" : "A set of rules under which this content was created",
        "definition" : "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
        "comment" : "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.implicitRules",
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
        "isModifier" : true,
        "isModifierReason" : "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation",
        "isSummary" : true
      },
      {
        "id" : "DomainResource.language",
        "path" : "DomainResource.language",
        "short" : "Language of the resource content",
        "definition" : "The base language in which the resource is written.",
        "comment" : "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.language",
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
        "isSummary" : false,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            "valueCanonical" : "http://hl7.org/fhir/ValueSet/all-languages"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "Language"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            "valueBoolean" : true
          }],
          "strength" : "preferred",
          "description" : "A human language.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/languages"
        }
      },
      {
        "id" : "DomainResource.text",
        "path" : "DomainResource.text",
        "short" : "Text summary of the resource, for human interpretation",
        "definition" : "A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
        "comment" : "Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a \"text blob\" or where text is additionally entered raw or narrated and encoded information is added later.",
        "alias" : ["narrative",
        "html",
        "xhtml",
        "display"],
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "DomainResource.text",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Narrative"
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
          "map" : "Act.text?"
        }]
      },
      {
        "id" : "DomainResource.contained",
        "path" : "DomainResource.contained",
        "short" : "Contained, inline Resources",
        "definition" : "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
        "comment" : "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.",
        "alias" : ["inline resources",
        "anonymous resources",
        "contained resources"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DomainResource.contained",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Resource"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "DomainResource.extension",
        "path" : "DomainResource.extension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DomainResource.extension",
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
          "map" : "N/A"
        }]
      },
      {
        "id" : "DomainResource.modifierExtension",
        "path" : "DomainResource.modifierExtension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Extensions that cannot be ignored",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "requirements" : "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "DomainResource.modifierExtension",
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
        "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the resource that contains them",
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "DomainResource",
        "path" : "DomainResource",
        "short" : "A resource with narrative, extensions, and contained resources",
        "definition" : "A resource that includes narrative, extensions, and contained resources.",
        "min" : 0,
        "max" : "*",
        "constraint" : [{
          "key" : "dom-2",
          "severity" : "error",
          "human" : "If the resource is contained in another resource, it SHALL NOT contain nested Resources",
          "expression" : "contained.contained.empty()",
          "xpath" : "not(parent::f:contained and f:contained)"
        },
        {
          "key" : "dom-4",
          "severity" : "error",
          "human" : "If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated",
          "expression" : "contained.meta.versionId.empty() and contained.meta.lastUpdated.empty()",
          "xpath" : "not(exists(f:contained/*/f:meta/f:versionId)) and not(exists(f:contained/*/f:meta/f:lastUpdated))"
        },
        {
          "key" : "dom-3",
          "severity" : "error",
          "human" : "If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource",
          "expression" : "contained.where((('#'+id in (%resource.descendants().reference | %resource.descendants().as(canonical) | %resource.descendants().as(uri) | %resource.descendants().as(url))) or descendants().where(reference = '#').exists() or descendants().where(as(canonical) = '#').exists() or descendants().where(as(canonical) = '#').exists()).not()).trace('unmatched', id).empty()",
          "xpath" : "not(exists(for $id in f:contained/*/f:id/@value return $contained[not(parent::*/descendant::f:reference/@value=concat('#', $contained/*/id/@value) or descendant::f:reference[@value='#'])]))"
        },
        {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
            "valueBoolean" : true
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
            "valueMarkdown" : "When a resource has no narrative, only systems that fully understand the data can display the resource to a human safely. Including a human readable representation in the resource makes for a much more robust eco-system and cheaper handling of resources by intermediary systems. Some ecosystems restrict distribution of resources to only those systems that do fully understand the resources, and as a consequence implementers may believe that the narrative is superfluous. However experience shows that such eco-systems often open up to new participants over time."
          }],
          "key" : "dom-6",
          "severity" : "warning",
          "human" : "A resource should have narrative for robust management",
          "expression" : "text.`div`.exists()",
          "xpath" : "exists(f:text/h:div)"
        },
        {
          "key" : "dom-5",
          "severity" : "error",
          "human" : "If a resource is contained in another resource, it SHALL NOT have a security label",
          "expression" : "contained.meta.security.empty()",
          "xpath" : "not(exists(f:contained/*/f:meta/f:security))"
        }],
        "mapping" : [{
          "identity" : "rim",
          "map" : "Entity. Role, or Act"
        }]
      },
      {
        "id" : "DomainResource.text",
        "path" : "DomainResource.text",
        "short" : "Text summary of the resource, for human interpretation",
        "definition" : "A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
        "comment" : "Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a \"text blob\" or where text is additionally entered raw or narrated and encoded information is added later.",
        "alias" : ["narrative",
        "html",
        "xhtml",
        "display"],
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Narrative"
        }],
        "mapping" : [{
          "identity" : "rim",
          "map" : "Act.text?"
        }]
      },
      {
        "id" : "DomainResource.contained",
        "path" : "DomainResource.contained",
        "short" : "Contained, inline Resources",
        "definition" : "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
        "comment" : "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.",
        "alias" : ["inline resources",
        "anonymous resources",
        "contained resources"],
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Resource"
        }],
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "DomainResource.extension",
        "path" : "DomainResource.extension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Extension"
        }],
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      },
      {
        "id" : "DomainResource.modifierExtension",
        "path" : "DomainResource.modifierExtension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Extensions that cannot be ignored",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "requirements" : "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "Extension"
        }],
        "isModifier" : true,
        "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the resource that contains them",
        "mapping" : [{
          "identity" : "rim",
          "map" : "N/A"
        }]
      }]
    }
  }