import { OperationOutcome } from "fhir/R4/types/operation-outcome";

// https://hl7.org/fhir/R4/operationoutcome-example-validationfail.json.html
// A validator has found problems with a resource

export const mockOperationOutcome4: OperationOutcome = {
    "resourceType": "OperationOutcome",
    "id": "validationfail",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Error parsing resource XML (Unknown Content &quot;label&quot; @ /Patient/identifier/label) at Patient.identifier</p>\n    </div>"
    },
    "issue": [
      {
        "severity": "error",
        "code": "structure",
        "details": {
          "text": "Error parsing resource XML (Unknown Content \"label\""
        },
        "location": [
          "/f:Patient/f:identifier"
        ],
        "expression": [
          "Patient.identifier"
        ]
      }
    ]
  }