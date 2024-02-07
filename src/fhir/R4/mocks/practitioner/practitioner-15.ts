import { Practitioner } from "../../types/practitioner";

// https://hl7.org/fhir/R4/practitioner-example-xcda1.json.html
// 2nd CDA Example Author

export const mockPractitioner1: Practitioner = {
    "resourceType": "Practitioner",
    "id": "xcda1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: xcda1</p><p><b>identifier</b>: D234123 (OFFICIAL)</p><p><b>name</b>: Sherry Dopplemeyer </p><p><b>telecom</b>: john.doe@healthcare.example.org</p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://healthcare.example.org/identifiers/staff",
        "value": "D234123"
      }
    ],
    "name": [
      {
        "family": "Dopplemeyer",
        "given": [
          "Sherry"
        ]
      }
    ],
    "telecom": [
      {
        "system": "email",
        "value": "john.doe@healthcare.example.org"
      }
    ]
  }