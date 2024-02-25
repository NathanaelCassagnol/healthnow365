import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0304.json.html
// Dispense for Intravenous Antibiotic with a Dosage Rate - Piperacillin (NDC code) - completed with a coded site and route of administration and a rate expressed as a ratio

export const mockMedicationDispense5: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0304",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0304</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: Zosyn (piperacillin/tazobactam) 4.5gm injection. Generated Summary: id: med0302; Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0319</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 250 mL<span> (Details: UCUM code mL = 'mL')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0302",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0206-8862-02",
              "display": "Zosyn (piperacillin/tazobactam) 4.5gm injection"
            }
          ]
        }
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#med0302",
      "display": "Zosyn (piperacillin/tazobactam) 4.5gm injection"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
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
      "value": 250,
      "system": "http://unitsofmeasure.org",
      "code": "mL"
    },
    "daysSupply": {
      "value": 1,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-06-25T07:13:00+05:00",
    "whenHandedOver": "2015-06-26T07:13:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "4.5 grams in D5W 250 ml. IV every 6 hours. Infuse over 30 min at 8L/min",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 6,
            "periodUnit": "h"
          }
        },
        "site": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "255560000",
              "display": "Intravenous route (qualifier value)"
            }
          ]
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "47625008",
              "display": "IV intravascular route that begins within a vein)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 4.5,
              "system": "http://unitsofmeasure.org",
              "code": "g"
            },
            "rateRatio": {
              "numerator": {
                "value": 8,
                "system": "http://unitsofmeasure.org",
                "code": "ml"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "min"
              }
            }
          }
        ]
      }
    ]
  }