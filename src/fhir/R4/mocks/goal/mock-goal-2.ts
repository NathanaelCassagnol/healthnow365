import { Goal } from "fhir/R4/types/goal";

// https://hl7.org/fhir/R4/goal-example-stop-smoking.json.html
// Goal to Stop Smoking

export const mockGoal2: Goal = {
    "resourceType": "Goal",
    "id": "stop-smoking",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p> A simple care goal for a patient to stop smoking.</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "value": "123"
      }
    ],
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
      "text": "Stop smoking"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "startDate": "2015-04-05",
    "outcomeCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "8517006",
            "display": "Ex-smoker (finding)"
          }
        ],
        "text": "Former smoker"
      }
    ]
  }