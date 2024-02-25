import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0319.json.html
// Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code

export const mockMedicationRequest20: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0319",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0319</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Piperacillin/Tazobactam 4.5gm. Generated Summary: id: med0302; Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Community acquired pneumonia (disorder) <span>(Details : {SNOMED CT code '385093006' = 'Community acquired pneumonia', given as 'Community acquired pneumonia (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>"
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
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0302",
      "display": "Piperacillin/Tazobactam 4.5gm"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "385093006",
            "display": "Community acquired pneumonia (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "4.5 grams in D5W 250 ml. IV every 6 hours.Infuse over 30 min at 8L/min ",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 6,
            "periodUnit": "h"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "47625008",
              "display": "Intravenous route (qualifier value)"
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
              "value": 4.5,
              "unit": "g",
              "system": "http://unitsofmeasure.org",
              "code": "g"
            },
            "rateQuantity": {
              "value": 50,
              "system": "http://unitsofmeasure.org",
              "code": "ml/hr"
            }
          }
        ]
      }
    ]
  }