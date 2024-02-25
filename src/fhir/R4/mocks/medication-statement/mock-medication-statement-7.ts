import { MedicationStatement } from "fhir/R4/types/medication-statement";

// https://hl7.org/fhir/R4/medicationstatementexample3.json.html
// Patient reports that they are taking the "little pink pill"

export const mockMedicationStatement7: MedicationStatement = {
    "resourceType": "MedicationStatement",
    "id": "example003",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example003</p><p><b>status</b>: active</p><p><b>medication</b>: Little Pink Pill for water retention <span>(Details )</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 01/02/2014</p><p><b>dateAsserted</b>: 22/02/2014</p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>reasonReference</b>: <a>Observation/blood-pressure</a></p><p><b>note</b>: Patient cannot remember the name of the tablet, but takes it every day in the morning for water retention</p><p><b>dosage</b>: </p></div>"
    },
    "status": "active",
    "medicationCodeableConcept": {
      "text": "Little Pink Pill for water retention"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "effectiveDateTime": "2014-02-01",
    "dateAsserted": "2014-02-22",
    "informationSource": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "reasonReference": [
      {
        "reference": "Observation/blood-pressure"
      }
    ],
    "note": [
      {
        "text": "Patient cannot remember the name of the tablet, but takes it every day in the morning for water retention"
      }
    ],
    "dosage": [
      {
        "sequence": 1,
        "text": "1 tablet per day",
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
              "value": 1,
              "unit": "tab",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "tab"
            }
          }
        ],
        "maxDosePerPeriod": {
          "numerator": {
            "value": 1
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