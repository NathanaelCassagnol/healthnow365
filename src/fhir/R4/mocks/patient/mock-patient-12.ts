import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-ihe-pcd.json.html
// Example from IHE-PCD example

export const mockPatient12: Patient = {
    "resourceType": "Patient",
    "id": "ihe-pcd",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Albert Brooks, Id: AB60001</div>"
    },
    "identifier": [
      {
        "type": {
          "text": "Internal Identifier"
        },
        "value": "AB60001"
      }
    ],
    "active": true,
    "name": [
      {
        "family": "BROOKS",
        "given": [
          "ALBERT"
        ]
      }
    ]
  }