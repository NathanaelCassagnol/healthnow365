import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-heart-rate.json.html
// Simple Heart Rate Example

export const mockObservationVitals4: Observation = {
    "resourceType": "Observation",
    "id": "heart-rate",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: heart-rate</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Heart rate <span>(Details : {LOINC code '8867-4' = 'Heart rate', given as 'Heart rate'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 44 beats/minute<span> (Details: UCUM code /min = '/min')</span></p></div>"
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
          "code": "8867-4",
          "display": "Heart rate"
        }
      ],
      "text": "Heart rate"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "1999-07-02",
    "valueQuantity": {
      "value": 44,
      "unit": "beats/minute",
      "system": "http://unitsofmeasure.org",
      "code": "/min"
    }
  }