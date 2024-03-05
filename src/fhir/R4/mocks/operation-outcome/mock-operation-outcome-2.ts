import { OperationOutcome } from "fhir/R4/types/operation-outcome";

// https://hl7.org/fhir/R4/operationoutcome-example-exception.json.html
// An error that might be returned when an unexpected exception happens on a server

export const mockOperationOutcome2: OperationOutcome = {
    "resourceType": "OperationOutcome",
    "id": "exception",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>SQL Link Communication Error (dbx = 34234)</p>\n    </div>"
    },
    "issue": [
      {
        "severity": "error",
        "code": "exception",
        "details": {
          "text": "SQL Link Communication Error (dbx = 34234)"
        }
      }
    ]
  }