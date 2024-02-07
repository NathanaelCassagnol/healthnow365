import { VerificationResult } from "../../types/verification-result";

// https://hl7.org/fhir/R4/verificationresult-example.json.html
// A general verification result example

export const mockVerificationResult1: VerificationResult = {
    "resourceType": "VerificationResult",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>status</b>: attested</p></div>"
    },
    "status": "attested"
  }