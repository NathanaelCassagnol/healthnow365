import { MedicationStatement } from "fhir/R4/types/medication-statement";

// https://hl7.org/fhir/R4/medicationstatementexample6.json.html
// Care Giver reports that the Patient took Amoxicillin

export const mockMedicationStatement5: MedicationStatement = {
    "resourceType": "MedicationStatement",
    "id": "example006",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example006</p><p><b>status</b>: active</p><p><b>medication</b>: Amoxicillin (product) <span>(Details : {SNOMED CT code '27658006' = 'p-Hydroxyampicillin', given as 'Amoxicillin (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 01/02/2014</p><p><b>dateAsserted</b>: 22/02/2014</p><p><b>informationSource</b>: <a>Peter Chalmers</a></p><p><b>note</b>: Father indicates they miss the occasional dose</p><p><b>dosage</b>: </p></div>"
    },
    "status": "active",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "27658006",
          "display": "Amoxicillin (product)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "effectiveDateTime": "2014-02-01",
    "dateAsserted": "2014-02-22",
    "informationSource": {
      "reference": "RelatedPerson/peter",
      "display": "Peter Chalmers"
    },
    "note": [
      {
        "text": "Father indicates they miss the occasional dose"
      }
    ],
    "dosage": [
      {
        "sequence": 1,
        "text": "5ml three times daily",
        "asNeededBoolean": false,
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "260548002",
              "display": "Oral"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 5,
              "unit": "mL",
              "system": "http://unitsofmeasure.org",
              "code": "mL"
            }
          }
        ],
        "maxDosePerPeriod": {
          "numerator": {
            "value": 3
          },
          "denominator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "d"
          }
        }
      }
    ]
  }