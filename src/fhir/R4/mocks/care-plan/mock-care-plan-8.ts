import { CarePlan } from "fhir/R4/types/care-plan";

// https://hl7.org/fhir/R4/careplan-example-f201-renal.json.html
// Care plan to address renal insufficiency

export const mockCarePlan8: CarePlan = {
    "resourceType": "CarePlan",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>contained</b>: , </p><p><b>status</b>: draft</p><p><b>intent</b>: proposal</p><p><b>subject</b>: <a>Roel</a></p><p><b>period</b>: 11/03/2013 --&gt; 13/03/2013</p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>Roel's renal insufficiency</a></p><p><b>goal</b>: id: goal; lifecycleStatus: completed; Achieved <span>(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code 'achieved' = 'Achieved', given as 'Achieved'})</span>; Re-established renal function with at least healthy nutrients. <span>(Details )</span></p><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Scheduled[x]</b></td><td><b>Product[x]</b></td><td><b>DailyAmount</b></td></tr><tr><td>*</td><td>NutritionOrder</td><td>Potassium supplementation <span>(Details : {SNOMED CT code '284093001' = 'Potassium supplementation', given as 'Potassium supplementation'})</span></td><td>completed</td><td>false</td><td>daily</td><td><a>Potassium</a></td><td>80 mmol<span> (Details: SNOMED CT code 258718000 = 'millimole')</span></td></tr></table></blockquote><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Echography of kidney <span>(Details : {SNOMED CT code '306005' = 'Echography of kidney', given as 'Echography of kidney'})</span></td><td>completed</td><td>false</td></tr></table></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "425268008",
                    "display": "Review of care plan"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f201",
              "display": "Dokter Bronsig"
            }
          },
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "229774002",
                    "display": "Carer"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f204",
              "display": "Nurse Carla Espinosa"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "completed",
        "achievementStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/goal-achievement",
              "code": "achieved",
              "display": "Achieved"
            }
          ],
          "text": "Achieved"
        },
        "description": {
          "text": "Re-established renal function with at least healthy nutrients."
        },
        "subject": {
          "reference": "Patient/f201",
          "display": "Roel"
        }
      }
    ],
    "status": "draft",
    "intent": "proposal",
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "period": {
      "start": "2013-03-11",
      "end": "2013-03-13"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f204",
        "display": "Roel's renal insufficiency"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "detail": {
          "kind": "NutritionOrder",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "284093001",
                "display": "Potassium supplementation"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": false,
          "scheduledString": "daily",
          "productReference": {
            "reference": "Substance/f203",
            "display": "Potassium"
          },
          "dailyAmount": {
            "value": 80,
            "unit": "mmol",
            "system": "http://snomed.info/sct",
            "code": "258718000"
          }
        }
      },
      {
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "306005",
                "display": "Echography of kidney"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": false
        }
      }
    ]
  }