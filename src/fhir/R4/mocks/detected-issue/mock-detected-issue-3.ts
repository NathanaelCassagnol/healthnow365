import { DetectedIssue } from "../../types/detected-issue";

// https://hl7.org/fhir/R4/detectedissue-example-allergy.json.html
// Patient is allergic to an inactive ingredient in an ordered medication

export const mockDetectedIssue3: DetectedIssue = {
    "resourceType": "DetectedIssue",
    "id": "allergy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">[Put rendering here]</div>"
    },
    "status": "final"
  }