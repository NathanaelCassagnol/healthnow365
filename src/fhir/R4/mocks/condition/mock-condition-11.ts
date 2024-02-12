import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example-stroke.json.html
// Stroke example (for prognosis)

export const mockCondition11: Condition = {
    "resourceType": "Condition",
    "id": "stroke",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Ischemic stroke, July 18, 2010</div>"
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
            "code": "encounter-diagnosis",
            "display": "Encounter Diagnosis"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "422504002",
          "display": "Ischemic stroke (disorder)"
        }
      ],
      "text": "Stroke"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "onsetDateTime": "2010-07-18"
  }