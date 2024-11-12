import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-xcda.json.html
// 2nd person example

export const mockPatient8: Patient = {
    "resourceType": "Patient",
    "id": "xcda",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Henry Levin the 7th</p>\n    \n    </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "MR"
            }
          ]
        },
        "system": "urn:oid:2.16.840.1.113883.19.5",
        "value": "12345"
      }
    ],
    "active": true,
    "name": [
      {
        "family": "Levin",
        "given": [
          "Henry"
        ]
      }
    ],
    "gender": "male",
    "birthDate": "1932-09-24",
    "managingOrganization": {
      "reference": "Organization/2.16.840.1.113883.19.5",
      "display": "Good Health Clinic"
    }
  }