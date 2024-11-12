import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example2.json.html
// 2nd Example

export const mockCondition2: Condition = {
    "resourceType": "Condition",
    "id": "example2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Mild Asthma (Date: 12-Nov 2012)</div>"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
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
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "255604002",
          "display": "Mild"
        }
      ]
    },
    "code": {
      "text": "Asthma"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "onsetString": "approximately November 2012"
  }