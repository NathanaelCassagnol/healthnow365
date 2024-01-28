import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-body-length.json.html
// Simple Body Length Example

export const mockObservationVitals7: Observation = {
    "resourceType": "Observation",
    "id": "body-length",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: body-length</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Body Length <span>(Details : {LOINC code '8302-2' = 'Body height', given as 'Body height'}; {LOINC code '8306-3' = 'Body height --lying', given as 'Body height --lying'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 25 cm<span> (Details: UCUM code cm = 'cm')</span></p></div>"
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
          "code": "8302-2",
          "display": "Body height"
        },
        {
          "system": "http://loinc.org",
          "code": "8306-3",
          "display": "Body height --lying",
          "userSelected": true
        }
      ],
      "text": "Body Length"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "1999-07-02",
    "valueQuantity": {
      "value": 25,
      "unit": "cm",
      "system": "http://unitsofmeasure.org",
      "code": "cm"
    }
  }