import { SearchParameter } from "fhir/R4/types/search-parameter";

// https://hl7.org/fhir/R4/searchparameter-example-reference.json.html
// Search parameter for a reference example

export const mockSearchParameter3: SearchParameter = {
    "resourceType": "SearchParameter",
    "id": "example-reference",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-reference</p><p><b>url</b>: <b>http://hl7.org/fhir/SearchParameter/example-reference</b></p><p><b>name</b>: Example Search Parameter</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 23/10/2013</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: Search by condition subject</p><p><b>purpose</b>: Need to search Condition by subject</p><p><b>code</b>: subject</p><p><b>base</b>: Condition</p><p><b>type</b>: reference</p><p><b>expression</b>: Condition.subject</p><p><b>xpathUsage</b>: normal</p><p><b>target</b>: Organization</p><p><b>modifier</b>: missing</p><p><b>chain</b>: name, identifier</p></div>"
    },
    "url": "http://hl7.org/fhir/SearchParameter/example-reference",
    "name": "Example Search Parameter",
    "status": "draft",
    "experimental": true,
    "date": "2013-10-23",
    "publisher": "Health Level Seven International (FHIR Infrastructure)",
    "contact": [
      {
        "name": "[string]",
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "Search by condition subject",
    "purpose": "Need to search Condition by subject",
    "code": "subject",
    "base": [
      "Condition"
    ],
    "type": "reference",
    "expression": "Condition.subject",
    "xpathUsage": "normal",
    "target": [
      "Organization"
    ],
    "modifier": [
      "missing"
    ],
    "chain": [
      "name",
      "identifier"
    ]
  }