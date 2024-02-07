import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0307.json.html
// Subcutaneous injection Example - Manufactured Product - Novolog

export const mockMedicationManufactured7: Medication = {
    "resourceType": "Medication",
    "id": "med0307",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0307</p><p><b>contained</b>: </p><p><b>code</b>: Novolog 100u/ml <span>(Details : {http://hl7.org/fhir/sid/ndc code '0169-7501-11' = 'n/a', given as 'Novolog 100u/ml'})</span></p><p><b>manufacturer</b>: id: org3; name: Novo Nordisk</p><p><b>form</b>: Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Insulin Aspart (substance) <span>(Details : {SNOMED CT code '325072002' = 'Insulin aspart', given as 'Insulin Aspart (substance)'})</span></td><td>100 U<span> (Details: UCUM code U = 'U')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>12345</td><td>31/10/2019</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org3",
        "name": "Novo Nordisk"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0169-7501-11",
          "display": "Novolog 100u/ml"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org3"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection solution (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "325072002",
              "display": "Insulin Aspart (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 100,
            "system": "http://unitsofmeasure.org",
            "code": "U"
          },
          "denominator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "12345",
      "expirationDate": "2019-10-31"
    }
  }