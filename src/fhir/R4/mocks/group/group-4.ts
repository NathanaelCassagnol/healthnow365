import { Group } from "../../types/group";

// https://hl7.org/fhir/R4/group-example-patientlist.json.html
// Patients primarily attributed to Practitioner 123

export const mockGroup1: Group = {
    "resourceType": "Group",
    "id": "example-patientlist",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>All patients primarily attributed to Practitioner 123</p>\n    </div>"
    },
    "type": "person",
    "actual": true,
    "characteristic": [
      {
        "code": {
          "coding": [
            {
              "system": "http://example.org",
              "code": "attributed-to"
            }
          ],
          "text": "Patients primarily attributed to"
        },
        "valueReference": {
          "reference": "Practitioner/123"
        },
        "exclude": false
      }
    ]
  }