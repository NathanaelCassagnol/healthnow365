import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-clinical-gender.json.html
// Example of a clinical gender observation. For a discussion on representing a patient's gender the Patient Resource.

export const mockObservationSocial3: Observation = {
    "resourceType": "Observation",
    "id": "clinical-gender",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: clinical-gender</p><p><b>status</b>: final</p><p><b>category</b>: Social History <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'social-history' = 'Social History', given as 'Social History'})</span></p><p><b>code</b>: Gender identity <span>(Details : {LOINC code '76691-5' = 'Gender identity', given as 'Gender identity'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>effective</b>: 01/02/2018</p><p><b>performer</b>: <a>Encounter/example</a></p><p><b>value</b>: Feminism in boy <span>(Details : {SNOMED CT code '191788006' = 'Feminism in boy', given as 'Feminism in boy (finding)'})</span></p></div>"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "social-history",
            "display": "Social History"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "76691-5",
          "display": "Gender identity"
        }
      ],
      "text": "Gender identity"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "effectiveDateTime": "2018-02-01",
    "performer": [
      {
        "reference": "Encounter/example"
      }
    ],
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "191788006",
          "display": "Feminism in boy (finding)"
        }
      ],
      "text": "Feminism in boy"
    }
  }