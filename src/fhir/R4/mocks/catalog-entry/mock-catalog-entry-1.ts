import { CatalogEntry } from "fhir/R4/types/catalog-entry";

// https://hl7.org/fhir/R4/catalogentry-example.json.html
// Example of catalogentry

export const mockCatalogEntry1: CatalogEntry = {
    "resourceType": "CatalogEntry",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">[Put rendering here]</div>"
    },
    "identifier": [
      {
        "system": "http://example.com/identifier",
        "value": "123"
      }
    ],
    "type": {
      "text": "Medication"
    },
    "orderable": true,
    "referencedItem": {
      "reference": "Medication/123"
    }
  }