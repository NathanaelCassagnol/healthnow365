import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-glasgow-qa.json.html
// Clinical assessment tool example - GCS with individual scores as related QuestionnaireAnswer

export const mockObservationAssessment2: Observation = {
    "resourceType": "Observation",
    "id": "gcs-qa",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gcs-qa</p><p><b>status</b>: final</p><p><b>code</b>: Glasgow Coma Scale , (GCS) <span>(Details : {LOINC code '9269-2' = 'Glasgow coma score total', given as 'Glasgow coma score total'})</span></p><p><b>subject</b>: <a>Peter James Chalmers</a></p><p><b>effective</b>: 11/12/2014 4:44:16 AM</p><p><b>value</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>referenceRange</b></p><p><b>high</b>: 8 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Severe TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 9 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>high</b>: 12 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Moderate TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Mild TBI <span>(Details )</span></p></blockquote><p><b>derivedFrom</b>: <a>GCS form results</a></p></div>"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "9269-2",
          "display": "Glasgow coma score total"
        }
      ],
      "text": "Glasgow Coma Scale , (GCS)"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "effectiveDateTime": "2014-12-11T04:44:16Z",
    "valueQuantity": {
      "value": 13,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "referenceRange": [
      {
        "high": {
          "value": 8,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "type": {
          "text": "Severe TBI"
        }
      },
      {
        "low": {
          "value": 9,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "high": {
          "value": 12,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "type": {
          "text": "Moderate TBI"
        }
      },
      {
        "low": {
          "value": 13,
          "system": "http://unitsofmeasure.org",
          "code": "{score}"
        },
        "type": {
          "text": "Mild TBI"
        }
      }
    ],
    "derivedFrom": [
      {
        "reference": "QuestionnaireResponse/gcs",
        "display": "GCS form results"
      }
    ]
  }