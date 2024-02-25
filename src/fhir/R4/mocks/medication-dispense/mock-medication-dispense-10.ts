import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0309.json.html
// Dispense for Nystatin drops (Snomed Code) - entered-in-error

export const mockMedicationDispense10: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0309",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0309</p><p><b>contained</b>: </p><p><b>status</b>: entered-in-error</p><p><b>medication</b>: Nystatin 100,000 units/ml oral suspension (product). Generated Summary: id: med0312; Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0319</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 10 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015</p><p><b>whenHandedOver</b>: 15/01/2016</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0312",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "324689003",
              "display": "Nystatin 100,000 units/ml oral suspension (product)"
            }
          ]
        }
      }
    ],
    "status": "entered-in-error",
    "medicationReference": {
      "reference": "#med0312",
      "display": "Nystatin 100,000 units/ml oral suspension (product)"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck "
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0319"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "FF",
          "display": "First Fill"
        }
      ]
    },
    "quantity": {
      "value": 10,
      "unit": "ml",
      "system": "http://unitsofmeasure.org",
      "code": "ml"
    },
    "daysSupply": {
      "value": 10,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15",
    "whenHandedOver": "2016-01-15",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "10 drops four times daily - apply in mouth using cotton swab or finger",
        "timing": {
          "repeat": {
            "frequency": 4,
            "period": 1,
            "periodUnit": "d"
          }
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
              "value": 10,
              "unit": "drop",
              "system": "http://unitsofmeasure.org",
              "code": "drop"
            }
          }
        ]
      }
    ]
  }