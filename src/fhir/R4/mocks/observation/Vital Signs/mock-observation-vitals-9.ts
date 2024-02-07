import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-bmi.json.html
// Simple BMI Example

export const mockObservationVitals9: Observation = {
    "resourceType": "Observation",
    "id": "bmi",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bmi</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: BMI <span>(Details : {LOINC code '39156-5' = 'Body mass index (BMI) [Ratio]', given as 'Body mass index (BMI) [Ratio]'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 16.2 kg/m2<span> (Details: UCUM code kg/m2 = 'kg/m2')</span></p></div>"
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
          "code": "39156-5",
          "display": "Body mass index (BMI) [Ratio]"
        }
      ],
      "text": "BMI"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "1999-07-02",
    "valueQuantity": {
      "value": 16.2,
      "unit": "kg/m2",
      "system": "http://unitsofmeasure.org",
      "code": "kg/m2"
    }
  }