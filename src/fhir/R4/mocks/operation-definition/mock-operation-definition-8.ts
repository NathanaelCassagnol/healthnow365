import { OperationDefinition } from "fhir/R4/types/operation-definition";

// https://hl7.org/fhir/R4/operation-measure-data-requirements.json.html
// Operation Definition

export const mockOperationDefinition8: OperationDefinition = {
    "resourceType" : "OperationDefinition",
    "id" : "Measure-data-requirements",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 2
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "trial-use"
    }],
    "url" : "http://hl7.org/fhir/OperationDefinition/Measure-data-requirements",
    "version" : "4.0.1",
    "name" : "Data Requirements",
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
    "description" : "The data-requirements operation aggregates and returns the parameters and data requirements for the measure and all its dependencies as a single module definition",
    "code" : "data-requirements",
    "comment" : "The effect of invoking this operation is to determine the aggregate set of data requirements and dependencies for the measure. The result is a Library resource with a type of module-definition that contains all the parameter definitions and data requirements of the libraries referenced by the measures. Implementations SHOULD aggregate data requirements intelligently (i.e. by collapsing overlapping data requirements). This operation defines what resources are subsequently referenced in the evaluatedResources element of the MeasureReport when submitting measure data",
    "resource" : ["Measure"],
    "system" : false,
    "type" : false,
    "instance" : true,
    "parameter" : [{
      "name" : "periodStart",
      "use" : "in",
      "min" : 1,
      "max" : "1",
      "documentation" : "The start of the measurement period. In keeping with the semantics of the date parameter used in the FHIR search operation, the period will start at the beginning of the period implied by the supplied timestamp. E.g. a value of 2014 would set the period start to be 2014-01-01T00:00:00 inclusive",
      "type" : "date"
    },
    {
      "name" : "periodEnd",
      "use" : "in",
      "min" : 1,
      "max" : "1",
      "documentation" : "The end of the measurement period. The period will end at the end of the period implied by the supplied timestamp. E.g. a value of 2014 would set the period end to be 2014-12-31T23:59:59 inclusive",
      "type" : "date"
    },
    {
      "name" : "return",
      "use" : "out",
      "min" : 1,
      "max" : "1",
      "documentation" : "The result of the requirements gathering is a module-definition Library that describes the aggregate parameters, data requirements, and dependencies of the measure",
      "type" : "Library"
    }]
  }