import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-trachcare.json.html
// An example of capturing whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus.

export const mockObservationExam2: Observation = {
    "resourceType": "Observation",
    "id": "trachcare",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: trachcare</p><p><b>status</b>: final</p><p><b>category</b>: Exam <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'exam' = 'Exam', given as 'Exam'})</span></p><p><b>code</b>: Tracheostomy care assessment (procedure) <span>(Details : {SNOMED CT code '410211008' = 'Tracheostomy care assessment', given as 'Tracheostomy care assessment (procedure)'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>focus</b>: <a>Patient/infant-mom</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>value</b>: Mother is trained to change her child's tracheostomy tube</p></div>"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "exam",
            "display": "Exam"
          }
        ],
        "text": "Exam"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "410211008",
          "display": "Tracheostomy care assessment (procedure)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/infant"
    },
    "focus": [
      {
        "reference": "Patient/infant-mom"
      }
    ],
    "effectiveDateTime": "2018-03-11T16:07:54+00:00",
    "valueString": "Mother is trained to change her child's tracheostomy tube"
  }