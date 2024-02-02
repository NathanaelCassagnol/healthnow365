import { Substance } from "../../types/substance.types";

// https://hl7.org/fhir/R4/substance-example-f201-dust.json.html
// Dust Mite Example

export const mockSubstance2: Substance = {
    "resourceType": "Substance",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>code</b>: House dust allergen <span>(Details : {SNOMED CT code '406466009' = 'House dust allergen', given as 'House dust allergen'})</span></p></div>"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "406466009",
          "display": "House dust allergen"
        }
      ]
    }
  }