import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example-family-history.json.html
// Family history concern

export const mockCondition12: Condition = {
    "resourceType": "Condition",
    "id": "family-history",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Family history of cancer of colon</div>"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item",
            "display": "Problem List Item"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "312824007",
          "display": "Family history of cancer of colon"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    }
  }