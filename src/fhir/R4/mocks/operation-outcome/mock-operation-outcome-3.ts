import { OperationOutcome } from "fhir/R4/types/operation-outcome";

// https://hl7.org/fhir/R4/operationoutcome-example-allok.json.html
// An operation outcome that could be returned after a successful operation (no issues)

export const mockOperationOutcome3: OperationOutcome = {
    "resourceType": "OperationOutcome",
    "id": "allok",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>All OK</p>\n    </div>"
    },
    "issue": [
      {
        "severity": "information",
        "code": "informational",
        "details": {
          "text": "All OK"
        }
      }
    ]
  }