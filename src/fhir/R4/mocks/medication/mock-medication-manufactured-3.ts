import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0303.json.html
// IV Chemotherapy Example - Manufactured Product - Alemtuzumab

export const mockMedicationManufactured3: Medication = {
    "resourceType": "Medication",
    "id": "med0303",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0303</p><p><b>contained</b>: </p><p><b>code</b>: Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>manufacturer</b>: id: org6; name: Genzyme</p><p><b>form</b>: Injection solution (qualifier vallue) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier vallue)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Alemtuzamab (substance) <span>(Details : {SNOMED CT code '129472003' = 'Alemtuzumab', given as 'Alemtuzamab (substance)'})</span></td><td>12 mg<span> (Details: UCUM code mg = 'mg')</span>/1.2 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org6",
        "name": "Genzyme"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "1594660",
          "display": "Alemtuzumab 10mg/ml (Lemtrada)"
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
          "code": "385219001",
          "display": "Injection solution (qualifier vallue)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "129472003",
              "display": "Alemtuzamab (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 12,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1.2,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  }