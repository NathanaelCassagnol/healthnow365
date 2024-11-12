import { OperationOutcome } from "fhir/R4/types/operation-outcome";

// https://hl7.org/fhir/R4/operationoutcome-example-break-the-glass.json.html
// A note that additional information might be available if Break-The-Glass is used

export const mockOperationOutcome6: OperationOutcome = {
    "resourceType": "OperationOutcome",
    "id": "break-the-glass",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Additional information may be available using the Break-The-Glass Protocol</p>\n    </div>"
    },
    "issue": [
      {
        "severity": "information",
        "code": "suppressed",
        "details": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
              "code": "ETREAT",
              "display": "Emergency Treatment"
            }
          ],
          "text": "Additional information may be available using the Break-The-Glass Protocol"
        }
      }
    ]
  }