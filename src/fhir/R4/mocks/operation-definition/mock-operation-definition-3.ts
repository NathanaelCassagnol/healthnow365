import { OperationDefinition } from "fhir/R4/types/operation-definition";

// https://hl7.org/fhir/R4/operation-valueset-validate-code.json.html
// Operation Definition

export const mockOperationDefinition3: OperationDefinition = {
    "resourceType" : "OperationDefinition",
    "id" : "ValueSet-validate-code",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 5
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "normative"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      "valueCode" : "4.0.1"
    }],
    "url" : "http://hl7.org/fhir/OperationDefinition/ValueSet-validate-code",
    "version" : "4.0.1",
    "name" : "Value Set based Validation",
    "status" : "draft",
    "kind" : "operation",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 (FHIR Project)",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      },
      {
        "system" : "email",
        "value" : "fhir@lists.hl7.org"
      }]
    }],
    "description" : "Validate that a coded value is in the set of codes allowed by a value set.\n\nIf the operation is not called at the instance level, one of the in parameters url, context or  valueSet must be provided.  One (and only one) of the in parameters code, coding, or codeableConcept must be provided.  The operation returns a result (true / false), an error message, and the recommended display for the code",
    "code" : "validate-code",
    "comment" : "Note: the correct behaviour of validation with regard to language for Coding.display items is currently undefined, and further development and testing may lead to specific requirements or recommendations in subsequent releases",
    "resource" : ["ValueSet"],
    "system" : false,
    "type" : true,
    "instance" : true,
    "parameter" : [{
      "name" : "url",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "Value set Canonical URL. The server must know the value set (e.g. it is defined explicitly in the server's value sets, or it is defined implicitly by some code system known to the server",
      "type" : "uri"
    },
    {
      "name" : "context",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The context of the value set, so that the server can resolve this to a value set to validate against. The recommended format for this URI is [Structure Definition URL]#[name or path into structure definition] e.g. http://hl7.org/fhir/StructureDefinition/observation-hspc-height-hspcheight#Observation.interpretation. Other forms may be used but are not defined. This form is only usable if the terminology server also has access to the conformance registry that the server is using, but can be used to delegate the mapping from an application context to a binding at run-time",
      "type" : "uri"
    },
    {
      "name" : "valueSet",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The value set is provided directly as part of the request. Servers may choose not to accept value sets in this fashion. This parameter is used when the client wants the server to expand a value set that is not stored on the server",
      "type" : "ValueSet"
    },
    {
      "name" : "valueSetVersion",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The identifier that is used to identify a specific version of the value set to be used when validating the code. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.",
      "type" : "string"
    },
    {
      "name" : "code",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The code that is to be validated. If a code is provided, a system or a context must be provided (if a context is provided, then the server SHALL ensure that the code is not ambiguous without a system)",
      "type" : "code"
    },
    {
      "name" : "system",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The system for the code that is to be validated",
      "type" : "uri"
    },
    {
      "name" : "systemVersion",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The version of the system, if one was provided in the source data",
      "type" : "string"
    },
    {
      "name" : "display",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The display associated with the code, if provided. If a display is provided a code must be provided. If no display is provided, the server cannot validate the display value, but may choose to return a recommended display name using the display parameter in the outcome. Whether displays are case sensitive is code system dependent",
      "type" : "string"
    },
    {
      "name" : "coding",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "A coding to validate",
      "type" : "Coding"
    },
    {
      "name" : "codeableConcept",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "A full codeableConcept to validate. The server returns true if one of the coding values is in the value set, and may also validate that the codings are not in conflict with each other if more than one is present",
      "type" : "CodeableConcept"
    },
    {
      "name" : "date",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The date for which the validation should be checked. Normally, this is the current conditions (which is the default values) but under some circumstances, systems need to validate that a correct code was used at some point in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.",
      "type" : "dateTime"
    },
    {
      "name" : "abstract",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "If this parameter has a value of true, the client is stating that the validation is being performed in a context where a concept designated as 'abstract' is appropriate/allowed to be used, and the server should regard abstract codes as valid. If this parameter is false, abstract codes are not considered to be valid.\n\nNote that. 'abstract' is a property defined by many HL7 code systems that indicates that the concept is a logical grouping concept that is not intended to be used asa 'concrete' concept to in an actual patient/care/process record. This language is borrowed from Object Orienated theory where 'asbtract' objects are never instantiated. However in the general record and terminology eco-system, there are many contexts where it is appropraite to use these codes e.g. as decision making criterion, or when editing value sets themselves. This parameter allows a client to indicate to the server that it is working in such a context.",
      "type" : "boolean"
    },
    {
      "name" : "displayLanguage",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "Specifies the language to be used for description when validating the display property",
      "type" : "code"
    },
    {
      "name" : "result",
      "use" : "out",
      "min" : 1,
      "max" : "1",
      "documentation" : "True if the concept details supplied are valid",
      "type" : "boolean"
    },
    {
      "name" : "message",
      "use" : "out",
      "min" : 0,
      "max" : "1",
      "documentation" : "Error details, if result = false. If this is provided when result = true, the message carries hints and warnings",
      "type" : "string"
    },
    {
      "name" : "display",
      "use" : "out",
      "min" : 0,
      "max" : "1",
      "documentation" : "A valid display for the concept if the system wishes to display this to a user",
      "type" : "string"
    }]
  }