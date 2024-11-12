import { DetectedIssue } from "../../types/detected-issue";

// https://hl7.org/fhir/R4/detectedissue-example-lab.json.html
// Lab order is contraindicated based on a patient's existing medication

export const mockDetectedIssue4: DetectedIssue = {
    "resourceType": "DetectedIssue",
    "id": "lab",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">[Put rendering here]</div>"
    },
    "status": "final"
  }