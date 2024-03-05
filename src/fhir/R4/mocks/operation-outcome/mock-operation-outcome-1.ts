import { OperationOutcome } from "fhir/R4/types/operation-outcome";

// https://hl7.org/fhir/R4/operationoutcome-example.json.html
// General Outcome Example

export const mockOperationOutcome1: OperationOutcome = {
    "resourceType": "OperationOutcome",
    "id": "101",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>The code &quot;W&quot; is not known and not legal Patient.gender.</p>\n    </div>"
    },
    "issue": [
      {
        "severity": "error",
        "code": "code-invalid",
        "details": {
          "text": "The code \"W\" is not known and not legal in this context"
        },
        "diagnostics": "Acme.Interop.FHIRProcessors.Patient.processGender line 2453",
        "location": [
          "/f:Patient/f:gender"
        ],
        "expression": [
          "Patient.gender"
        ]
      }
    ]
  }