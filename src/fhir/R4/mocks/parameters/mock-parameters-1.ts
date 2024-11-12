import { Parameters } from "fhir/R4/types/parameters";

// https://hl7.org/fhir/R4/parameters-example.json.html
// Parameters Example

export const mockParameters1: Parameters = {
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "exact",
      "valueBoolean": true
    },
    {
      "name": "property",
      "part": [
        {
          "name": "code",
          "valueCode": "focus"
        },
        {
          "name": "value",
          "valueCode": "top"
        }
      ]
    },
    {
      "name": "patient",
      "resource": {
        "resourceType": "Patient",
        "id": "example",
        "name": [
          {
            "use": "official",
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ]
      }
    }
  ]
}