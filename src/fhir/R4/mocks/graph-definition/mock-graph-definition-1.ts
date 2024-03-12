import { GraphDefinition } from "fhir/R4/types/graph-definition";

// https://hl7.org/fhir/R4/graphdefinition-example.json.html
// GraphDefinition example

export const mockGraphDefinition1: GraphDefinition = {
    "resourceType": "GraphDefinition",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>url</b>: <b>http://h7.org/fhir/GraphDefinition/example</b></p><p><b>name</b>: Document Generation Template</p><p><b>status</b>: draft</p><p><b>date</b>: 04/08/2015</p><p><b>publisher</b>: FHIR Project</p><p><b>contact</b>: </p><p><b>description</b>: Specify to include list references when generating a document using the $document operation</p><p><b>start</b>: Composition</p><blockquote><p><b>link</b></p><p><b>path</b>: Composition.section.entry</p><p><b>description</b>: Link to List</p><blockquote><p><b>target</b></p><p><b>type</b>: List</p><h3>Compartments</h3><table><tr><td>-</td><td><b>Use</b></td><td><b>Code</b></td><td><b>Rule</b></td></tr><tr><td>*</td><td>requirement</td><td>Patient</td><td>identical</td></tr></table><h3>Links</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>"
    },
    "url": "http://h7.org/fhir/GraphDefinition/example",
    "name": "Document Generation Template",
    "status": "draft",
    "date": "2015-08-04",
    "publisher": "FHIR Project",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "Specify to include list references when generating a document using the $document operation",
    "start": "Composition",
    "link": [
      {
        "path": "Composition.section.entry",
        "description": "Link to List",
        "target": [
          {
            "type": "List",
            "compartment": [
              {
                "use": "requirement",
                "code": "Patient",
                "rule": "identical"
              }
            ],
            "link": [
              {
                "path": "List.entry.item",
                "description": "Include any list entries",
                "target": [
                  {
                    "type": "Resource",
                    "compartment": [
                      {
                        "use": "requirement",
                        "code": "Patient",
                        "rule": "identical"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }