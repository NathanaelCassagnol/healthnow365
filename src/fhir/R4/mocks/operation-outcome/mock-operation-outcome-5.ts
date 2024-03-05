import { OperationOutcome } from "fhir/R4/types/operation-outcome";

// https://hl7.org/fhir/R4/operationoutcome-example-searchfail.json.html
// A search error (illegal modifier)

export const mockOperationOutcome5: OperationOutcome = {
    "resourceType": "OperationOutcome",
    "id": "searchfail",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>The &quot;name&quot; parameter has the modifier &quot;exact&quot; which is not supported by this server</p>\n    </div>"
    },
    "issue": [
      {
        "severity": "fatal",
        "code": "code-invalid",
        "details": {
          "text": "The \"name\" parameter has the modifier \"exact\" which is not supported by this server"
        },
        "location": [
          "http.name:exact"
        ]
      }
    ]
  }