import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0310.json.html
// Request for Over the Counter Medication - Tylenol PM - with dosage range as needed with pre-condition for use

export const mockMedicationRequest11: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0310",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0310</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0309; Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0309",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "50580-506-02",
              "display": "Tylenol PM"
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
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0309"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Take 1-2 tablets once daily at bedtime as needed for restless legs",
        "additionalInstruction": [
          {
            "text": "Take at bedtime"
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "asNeededCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "32914008",
              "display": "Restless Legs"
            }
          ]
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
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
            "doseRange": {
              "low": {
                "value": 1,
                "unit": "TAB",
                "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                "code": "TAB"
              },
              "high": {
                "value": 2,
                "unit": "TAB",
                "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                "code": "TAB"
              }
            }
          }
        ]
      }
    ]
  }