import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example-f203-sepsis.json.html
// Real-word condition example (sepsis)

export const mockCondition5: Condition = {
    "resourceType": "Condition",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Moderate to severe <span>(Details : {SNOMED CT code '371924009' = 'Moderate to severe', given as 'Moderate to severe'})</span></p><p><b>code</b>: Bacterial sepsis <span>(Details : {SNOMED CT code '10001005' = 'Bacterial septicemia', given as 'Bacterial sepsis'})</span></p><p><b>bodySite</b>: Pulmonary vascular structure <span>(Details : {SNOMED CT code '281158006' = 'Pulmonary vascular structure', given as 'Pulmonary vascular structure'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on March elevanth</a></p><p><b>onset</b>: 08/03/2013</p><p><b>recordedDate</b>: 11/03/2013</p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Detail</b></td></tr><tr><td>*</td><td><a>Diagnostic report for Roel's sepsis</a></td></tr></table></div>"
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
            "system": "http://snomed.info/sct",
            "code": "55607006",
            "display": "Problem"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "371924009",
          "display": "Moderate to severe"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "10001005",
          "display": "Bacterial sepsis"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "281158006",
            "display": "Pulmonary vascular structure"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "encounter": {
      "reference": "Encounter/f203",
      "display": "Roel's encounter on March elevanth"
    },
    "onsetDateTime": "2013-03-08",
    "recordedDate": "2013-03-11",
    "asserter": {
      "reference": "Practitioner/f201"
    },
    "evidence": [
      {
        "detail": [
          {
            "reference": "DiagnosticReport/f202",
            "display": "Diagnostic report for Roel's sepsis"
          }
        ]
      }
    ]
  }