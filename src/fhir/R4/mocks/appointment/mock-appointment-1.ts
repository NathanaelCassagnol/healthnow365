import { Appointment } from "../../types/appointment";

// https://hl7.org/fhir/R4/appointment-example.json.html
// General Person Example

export const mockAppointment1: Appointment = {
    "resourceType": "Appointment",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brian MRI results discussion</div>"
    },
    "status": "booked",
    "serviceCategory": [
      {
        "coding": [
          {
            "system": "http://example.org/service-category",
            "code": "gp",
            "display": "General Practice"
          }
        ]
      }
    ],
    "serviceType": [
      {
        "coding": [
          {
            "code": "52",
            "display": "General Discussion"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394814009",
            "display": "General practice"
          }
        ]
      }
    ],
    "appointmentType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
          "code": "FOLLOWUP",
          "display": "A follow up visit from a previous appointment"
        }
      ]
    },
    "reasonReference": [
      {
        "reference": "Condition/example",
        "display": "Severe burn of left ear"
      }
    ],
    "priority": 5,
    "description": "Discussion on the results of your recent MRI",
    "start": "2013-12-10T09:00:00Z",
    "end": "2013-12-10T11:00:00Z",
    "created": "2013-10-10",
    "comment": "Further expand on the results of the MRI and determine the next actions that may be appropriate.",
    "basedOn": [
      {
        "reference": "ServiceRequest/myringotomy"
      }
    ],
    "participant": [
      {
        "actor": {
          "reference": "Patient/example",
          "display": "Peter James Chalmers"
        },
        "required": "required",
        "status": "accepted"
      },
      {
        "type": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "ATND"
              }
            ]
          }
        ],
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        },
        "required": "required",
        "status": "accepted"
      },
      {
        "actor": {
          "reference": "Location/1",
          "display": "South Wing, second floor"
        },
        "required": "required",
        "status": "accepted"
      }
    ]
  }