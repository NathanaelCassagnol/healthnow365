import { PractitionerRole } from "../../types/practitioner-role";

// https://hl7.org/fhir/R4/practitionerrole-example.json.html
// Dr Adam Careful's role at the Acme Hospital

export const mockPractitionerRole1: PractitionerRole = {
    "resourceType": "PractitionerRole",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\tDr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n\t\t\t\t2012\n\t\t\t</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "system": "http://www.acme.org/practitioners",
        "value": "23"
      }
    ],
    "active": true,
    "period": {
      "start": "2012-01-01",
      "end": "2012-03-31"
    },
    "practitioner": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "organization": {
      "reference": "Organization/f001"
    },
    "code": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0286",
            "code": "RP"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "408443003",
            "display": "General medical practice"
          }
        ]
      }
    ],
    "location": [
      {
        "reference": "Location/1",
        "display": "South Wing, second floor"
      }
    ],
    "healthcareService": [
      {
        "reference": "HealthcareService/example"
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "(03) 5555 6473",
        "use": "work"
      },
      {
        "system": "email",
        "value": "adam.southern@example.org",
        "use": "work"
      }
    ],
    "availableTime": [
      {
        "daysOfWeek": [
          "mon",
          "tue",
          "wed"
        ],
        "availableStartTime": "09:00:00",
        "availableEndTime": "16:30:00"
      },
      {
        "daysOfWeek": [
          "thu",
          "fri"
        ],
        "availableStartTime": "09:00:00",
        "availableEndTime": "12:00:00"
      }
    ],
    "notAvailable": [
      {
        "description": "Adam will be on extended leave during May 2017",
        "during": {
          "start": "2017-05-01",
          "end": "2017-05-20"
        }
      }
    ],
    "availabilityExceptions": "Adam is generally unavailable on public holidays and during the Christmas/New Year break",
    "endpoint": [
      {
        "reference": "Endpoint/example"
      }
    ]
  }