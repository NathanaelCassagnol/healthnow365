import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-mbp.json.html
// Simple Mean Arterial Blood Pressure Example

export const mockObservationVitals14: Observation = {
    "resourceType": "Observation",
    "id": "mbp",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: mbp</p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Mean blood pressure <span>(Details : {LOINC code '8478-0' = 'Mean blood pressure', given as 'Mean blood pressure'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 80 mm[Hg]<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p></div>"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "vital-signs",
            "display": "Vital Signs"
          }
        ],
        "text": "Vital Signs"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "8478-0",
          "display": "Mean blood pressure"
        }
      ],
      "text": "Mean blood pressure"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "1999-07-02",
    "valueQuantity": {
      "value": 80,
      "unit": "mm[Hg]",
      "system": "http://unitsofmeasure.org",
      "code": "mm[Hg]"
    }
  }