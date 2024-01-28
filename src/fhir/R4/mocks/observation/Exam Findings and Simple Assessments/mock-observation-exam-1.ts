import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-abdo-tender.json.html
// An exam finding using pattern 3 described in the "Using Codes in Observation" Section

export const mockObservationExam1: Observation = {
    "resourceType": "Observation",
    "id": "abdo-tender",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: abdo-tender</p><p><b>status</b>: final</p><p><b>category</b>: Exam <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'exam' = 'Exam', given as 'Exam'})</span></p><p><b>code</b>: Abdominal tenderness <span>(Details : {SNOMED CT code '43478001' = 'Abdominal tenderness', given as 'Abdominal tenderness (finding)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>effective</b>: 02/04/2018 10:30:10 AM --&gt; (ongoing)</p><p><b>issued</b>: 03/04/2018 3:30:10 PM</p><p><b>value</b>: true</p><p><b>interpretation</b>: Abnormal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'A' = 'Abnormal', given as 'Abnormal'})</span></p></div>"
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
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "43478001",
          "display": "Abdominal tenderness (finding)"
        }
      ],
      "text": "Abdominal tenderness"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "effectivePeriod": {
      "start": "2018-04-02T10:30:10+01:00"
    },
    "issued": "2018-04-03T15:30:10+01:00",
    "valueBoolean": true,
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "A",
            "display": "Abnormal"
          }
        ],
        "text": "Abnormal"
      }
    ]
  }