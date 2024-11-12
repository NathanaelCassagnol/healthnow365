import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example-f003-abscess.json.html
// Real-word condition example (abscess)

export const mockCondition10: Condition = {
    "resourceType": "Condition",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: diagnosis <span>(Details : {SNOMED CT code '439401001' = 'Diagnosis', given as 'diagnosis'})</span></p><p><b>severity</b>: Mild to moderate <span>(Details : {SNOMED CT code '371923003' = 'Mild to moderate', given as 'Mild to moderate'})</span></p><p><b>code</b>: Retropharyngeal abscess <span>(Details : {SNOMED CT code '18099001' = 'Retropharyngeal abscess', given as 'Retropharyngeal abscess'})</span></p><p><b>bodySite</b>: Entire retropharyngeal area <span>(Details : {SNOMED CT code '280193007' = 'Retropharyngeal space', given as 'Entire retropharyngeal area'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>onset</b>: 27/02/2012</p><p><b>recordedDate</b>: 20/02/2012</p><p><b>asserter</b>: <a>P. van de Heuvel</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>CT of neck <span>(Details : {SNOMED CT code '169068008' = 'CT of neck', given as 'CT of neck'})</span></td></tr></table></div>"
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
            "code": "439401001",
            "display": "diagnosis"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "371923003",
          "display": "Mild to moderate"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "18099001",
          "display": "Retropharyngeal abscess"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "280193007",
            "display": "Entire retropharyngeal area"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f003"
    },
    "onsetDateTime": "2012-02-27",
    "recordedDate": "2012-02-20",
    "asserter": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "evidence": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "169068008",
                "display": "CT of neck"
              }
            ]
          }
        ]
      }
    ]
  }