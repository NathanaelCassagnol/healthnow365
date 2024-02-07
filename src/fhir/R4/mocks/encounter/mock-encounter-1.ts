import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example.json.html
// Encounter example

export const mockEncounter1: Encounter = {
    "resourceType": "Encounter",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Encounter with patient @example</div>"
    },
    "status": "in-progress",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "IMP",
      "display": "inpatient encounter"
    },
    "subject": {
      "reference": "Patient/example"
    }
  }