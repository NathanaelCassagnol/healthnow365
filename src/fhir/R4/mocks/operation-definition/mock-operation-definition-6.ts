import { OperationDefinition } from "fhir/R4/types/operation-definition";

// https://hl7.org/fhir/R4/operation-conceptmap-closure.json.html
// Operation Definition

export const mockOperationDefinition6: OperationDefinition = {
    "resourceType" : "OperationDefinition",
    "id" : "ConceptMap-closure",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 3
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "trial-use"
    }],
    "url" : "http://hl7.org/fhir/OperationDefinition/ConceptMap-closure",
    "version" : "4.0.1",
    "name" : "Closure Table Maintenance",
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
    "description" : "This operation provides support for ongoing maintenance of a client-side [transitive closure table](https://en.wikipedia.org/wiki/Transitive_closure#In_graph_theory) based on server-side terminological logic. For details of how this is used, see [Maintaining a Closure Table](terminology-service.html#closure)",
    "code" : "closure",
    "resource" : ["ConceptMap"],
    "system" : true,
    "type" : false,
    "instance" : false,
    "parameter" : [{
      "name" : "name",
      "use" : "in",
      "min" : 1,
      "max" : "1",
      "documentation" : "The name that defines the particular context for the subsumption based closure table",
      "type" : "string"
    },
    {
      "name" : "concept",
      "use" : "in",
      "min" : 0,
      "max" : "*",
      "documentation" : "Concepts to add to the closure table",
      "type" : "Coding"
    },
    {
      "name" : "version",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "A request to resynchronise - request to send all new entries since the nominated version was sent by the server",
      "type" : "string"
    },
    {
      "name" : "return",
      "use" : "out",
      "min" : 1,
      "max" : "1",
      "documentation" : "A list of new entries (code / system --> code/system) that the client should add to its closure table. The only kind of entry mapping equivalences that can be returned are equal, specializes, subsumes and unmatched",
      "type" : "ConceptMap"
    }]
  }