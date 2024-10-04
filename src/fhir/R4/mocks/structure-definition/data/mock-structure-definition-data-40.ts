import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/triggerdefinition.profile.json.html
// StructureDefinition for TriggerDefinition

export const mockStructureDefinitionData40: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "TriggerDefinition",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/TriggerDefinition",
    "version" : "4.0.1",
    "name" : "TriggerDefinition",
    "status" : "draft",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for TriggerDefinition Type: A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "TriggerDefinition",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "TriggerDefinition",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "TriggerDefinition",
        "short" : "Defines an expected trigger for a module",
        "definition" : "A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.",
        "comment" : "If an event is a named-event, it means the event is completely pre-coordinated, and no other information can be specified for the event. If the event is one of the data- events, the data and condition elements specify the triggering criteria. The data element specifies the structured component, and the condition element provides additional optional refinement of that structured component. If the event is periodic, the timing element defines when the event is triggered. For both data- and periodic events, a name can be provided as a shorthand for the formal semantics provided by the other elements.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "TriggerDefinition",
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
          "key" : "trd-1",
          "severity" : "error",
          "human" : "Either timing, or a data requirement, but not both",
          "expression" : "data.empty() or timing.empty()",
          "xpath" : "not(exists(f:data)) or not(exists(*[starts-with(local-name(.), 'timing')]))"
        },
        {
          "key" : "trd-2",
          "severity" : "error",
          "human" : "A condition only if there is a data requirement",
          "expression" : "condition.exists() implies data.exists()",
          "xpath" : "not(exists(f:condition)) or exists(f:data)"
        },
        {
          "key" : "trd-3",
          "severity" : "error",
          "human" : "A named event requires a name, a periodic event requires timing, and a data event requires data",
          "expression" : "(type = 'named-event' implies name.exists()) and (type = 'periodic' implies timing.exists()) and (type.startsWith('data-') implies data.exists())",
          "xpath" : "((not(f:type/@value = 'named-event')) or name.exists()) and (not(f:type/@value = 'periodic') or timing.exists()) and (not(starts-with(f:type/@value, 'data-')) or data.exists())"
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "TriggerDefinition.id",
        "path" : "TriggerDefinition.id",
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
        "id" : "TriggerDefinition.extension",
        "path" : "TriggerDefinition.extension",
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
        "id" : "TriggerDefinition.type",
        "path" : "TriggerDefinition.type",
        "short" : "named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended",
        "definition" : "The type of triggering event.",
        "min" : 1,
        "max" : "1",
        "base" : {
          "path" : "TriggerDefinition.type",
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
            "valueString" : "TriggerType"
          }],
          "strength" : "required",
          "description" : "The type of trigger.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/trigger-type|4.0.1"
        }
      },
      {
        "id" : "TriggerDefinition.name",
        "path" : "TriggerDefinition.name",
        "short" : "Name or URI that identifies the event",
        "definition" : "A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.",
        "comment" : "An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "TriggerDefinition.name",
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
        "id" : "TriggerDefinition.timing[x]",
        "path" : "TriggerDefinition.timing[x]",
        "short" : "Timing of the event",
        "definition" : "The timing of the event (if this is a periodic trigger).",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "TriggerDefinition.timing[x]",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Timing"
        },
        {
          "code" : "Reference",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Schedule"]
        },
        {
          "code" : "date"
        },
        {
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
      },
      {
        "id" : "TriggerDefinition.data",
        "path" : "TriggerDefinition.data",
        "short" : "Triggering data of the event (multiple = 'and')",
        "definition" : "The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true.",
        "comment" : "This element shall be present for any data type trigger.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "TriggerDefinition.data",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "DataRequirement"
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
        "id" : "TriggerDefinition.condition",
        "path" : "TriggerDefinition.condition",
        "short" : "Whether the event triggers (boolean expression)",
        "definition" : "A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.",
        "comment" : "This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.",
        "requirements" : "Need to be able to formally describe the triggering criteria.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "TriggerDefinition.condition",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Expression"
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
        "id" : "TriggerDefinition",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "TriggerDefinition",
        "short" : "Defines an expected trigger for a module",
        "definition" : "A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.",
        "comment" : "If an event is a named-event, it means the event is completely pre-coordinated, and no other information can be specified for the event. If the event is one of the data- events, the data and condition elements specify the triggering criteria. The data element specifies the structured component, and the condition element provides additional optional refinement of that structured component. If the event is periodic, the timing element defines when the event is triggered. For both data- and periodic events, a name can be provided as a shorthand for the formal semantics provided by the other elements.",
        "min" : 0,
        "max" : "*",
        "constraint" : [{
          "key" : "trd-3",
          "severity" : "error",
          "human" : "A named event requires a name, a periodic event requires timing, and a data event requires data",
          "expression" : "(type = 'named-event' implies name.exists()) and (type = 'periodic' implies timing.exists()) and (type.startsWith('data-') implies data.exists())",
          "xpath" : "((not(f:type/@value = 'named-event')) or name.exists()) and (not(f:type/@value = 'periodic') or timing.exists()) and (not(starts-with(f:type/@value, 'data-')) or data.exists())"
        },
        {
          "key" : "trd-2",
          "severity" : "error",
          "human" : "A condition only if there is a data requirement",
          "expression" : "condition.exists() implies data.exists()",
          "xpath" : "not(exists(f:condition)) or exists(f:data)"
        },
        {
          "key" : "trd-1",
          "severity" : "error",
          "human" : "Either timing, or a data requirement, but not both",
          "expression" : "data.empty() or timing.empty()",
          "xpath" : "not(exists(f:data)) or not(exists(*[starts-with(local-name(.), 'timing')]))"
        }]
      },
      {
        "id" : "TriggerDefinition.type",
        "path" : "TriggerDefinition.type",
        "short" : "named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended",
        "definition" : "The type of triggering event.",
        "min" : 1,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "TriggerType"
          }],
          "strength" : "required",
          "description" : "The type of trigger.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/trigger-type|4.0.1"
        }
      },
      {
        "id" : "TriggerDefinition.name",
        "path" : "TriggerDefinition.name",
        "short" : "Name or URI that identifies the event",
        "definition" : "A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.",
        "comment" : "An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "string"
        }],
        "isSummary" : true
      },
      {
        "id" : "TriggerDefinition.timing[x]",
        "path" : "TriggerDefinition.timing[x]",
        "short" : "Timing of the event",
        "definition" : "The timing of the event (if this is a periodic trigger).",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Timing"
        },
        {
          "code" : "Reference",
          "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Schedule"]
        },
        {
          "code" : "date"
        },
        {
          "code" : "dateTime"
        }],
        "isSummary" : true
      },
      {
        "id" : "TriggerDefinition.data",
        "path" : "TriggerDefinition.data",
        "short" : "Triggering data of the event (multiple = 'and')",
        "definition" : "The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true.",
        "comment" : "This element shall be present for any data type trigger.",
        "min" : 0,
        "max" : "*",
        "type" : [{
          "code" : "DataRequirement"
        }],
        "isSummary" : true
      },
      {
        "id" : "TriggerDefinition.condition",
        "path" : "TriggerDefinition.condition",
        "short" : "Whether the event triggers (boolean expression)",
        "definition" : "A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.",
        "comment" : "This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.",
        "requirements" : "Need to be able to formally describe the triggering criteria.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Expression"
        }],
        "isSummary" : true
      }]
    }
  }