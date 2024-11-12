import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-secondsmoke.json.html
// An example of a finding of second hand smoke exposure

export const mockObservationSocial1: Observation = {
    "resourceType": "Observation",
    "id": "secondsmoke",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: secondsmoke</p><p><b>status</b>: final</p><p><b>category</b>: Social History <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'social-history' = 'Social History', given as 'Social History'})</span></p><p><b>code</b>: Second hand smoke exposure <span>(Details : {LOINC code '39243-1' = 'Second hand smoke exposure CPHS', given as 'Second hand smoke exposure CPHS'}; {SNOMED CT code '102409004' = 'Second hand cigarette smoke', given as 'Second hand cigarette smoke (substance)'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>value</b>: YES <span>(Details : {SNOMED CT code '373066001' = 'Yes', given as 'Yes (qualifier value)'})</span></p></div>"
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
        ],
        "text": "Social History"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "39243-1",
          "display": "Second hand smoke exposure CPHS"
        },
        {
          "system": "http://snomed.info/sct",
          "code": "102409004",
          "display": "Second hand cigarette smoke (substance)"
        }
      ],
      "text": "Second hand smoke exposure"
    },
    "subject": {
      "reference": "Patient/infant"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "373066001",
          "display": "Yes (qualifier value)"
        }
      ],
      "text": "YES"
    }
  }