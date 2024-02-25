import { CarePlan } from "fhir/R4/types/care-plan";

// https://hl7.org/fhir/R4/careplan-example-f003-pharynx.json.html
// Care plan with goal of retropharyngeal abscess removal

export const mockCarePlan7: CarePlan = {
    "resourceType": "CarePlan",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>contained</b>: , </p><p><b>identifier</b>: CP3953 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: plan</p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>period</b>: 08/03/2013 9:00:10 AM --&gt; 08/03/2013 9:30:10 AM</p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>?????</a></p><p><b>goal</b>: id: goal; lifecycleStatus: completed; Achieved <span>(Details : {http://terminology.hl7.org/CodeSystem/goal-achievement code 'achieved' = 'Achieved', given as 'Achieved'})</span>; Retropharyngeal abscess removal <span>(Details )</span>; Annotation: goal accomplished without complications</p><blockquote><p><b>activity</b></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Scheduled[x]</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Incision of retropharyngeal abscess <span>(Details : {SNOMED CT code '172960003' = 'Incision of retropharyngeal abscess', given as 'Incision of retropharyngeal abscess'})</span></td><td>completed</td><td>true</td><td>2011-06-27T09:30:10+01:00</td><td><a>E.M. van den broek</a></td></tr></table></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "member": {
              "reference": "Practitioner/f001",
              "display": "E.M. van den broek"
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
          "text": "Retropharyngeal abscess removal"
        },
        "subject": {
          "reference": "Patient/f001",
          "display": "P. van de Heuvel"
        },
        "note": [
          {
            "text": "goal accomplished without complications"
          }
        ]
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/careplans",
        "value": "CP3953"
      }
    ],
    "status": "completed",
    "intent": "plan",
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "period": {
      "start": "2013-03-08T09:00:10+01:00",
      "end": "2013-03-08T09:30:10+01:00"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f201",
        "display": "?????"
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
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "172960003",
                "display": "Incision of retropharyngeal abscess"
              }
            ]
          },
          "status": "completed",
          "doNotPerform": true,
          "scheduledString": "2011-06-27T09:30:10+01:00",
          "performer": [
            {
              "reference": "Practitioner/f001",
              "display": "E.M. van den broek"
            }
          ]
        }
      }
    ]
  }