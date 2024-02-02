import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/bundle-request-simplesummary.json.html
// Retrieve a patient’s conditions, medication statements and blood pressure readings since a given date

export const mockBundle9: Bundle = {
    "resourceType": "Bundle",
    "id": "bundle-request-simplesummary",
    "type": "batch",
    "entry": [
      {
        "request": {
          "method": "GET",
          "url": "/Patient/example"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/Condition?patient=example"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/MedicationStatement?patient=example"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/Observation?patient=example&code=http://loinc.org|55284-4&date=ge2015-01-01"
        }
      }
    ]
  }