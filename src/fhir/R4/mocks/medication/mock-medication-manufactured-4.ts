import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0304.json.html
// Oral Chemotherapy Example - Manufactured Product - Myleran

export const mockMedicationManufactured4: Medication = {
    "resourceType": "Medication",
    "id": "med0304",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0304</p><p><b>contained</b>: </p><p><b>code</b>: Myleran 2mg tablet, film coated <span>(Details : {http://hl7.org/fhir/sid/ndc code '76388-713-25' = 'n/a', given as 'Myleran 2mg tablet, film coated'})</span></p><p><b>manufacturer</b>: id: org6; name: Aspen Global Inc</p><p><b>form</b>: Film-coated tablet (qualifier value) <span>(Details : {SNOMED CT code '385057009' = 'Film-coated tablet', given as 'Film-coated tablet (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Busulfan (substance) <span>(Details : {SNOMED CT code '387138002' = 'Busulphan', given as 'Busulfan (substance)'})</span></td><td>2 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org6",
        "name": "Aspen Global Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "76388-713-25",
          "display": "Myleran 2mg tablet, film coated"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org6"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385057009",
          "display": "Film-coated tablet (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "387138002",
              "display": "Busulfan (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 2,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "Tab"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  }