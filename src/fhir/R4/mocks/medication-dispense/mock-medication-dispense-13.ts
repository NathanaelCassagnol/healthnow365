import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0312.json.html
// Dispense for Over the Counter medication - Tylenol PM (NDC code) - on hold with as needed dosage with a condition, a dose Range and an Event History

export const mockMedicationDispense13: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0312",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0312</p><p><b>contained</b>: </p><p><b>status</b>: on-hold</p><p><b>medication</b>: Tylenol PM. Generated Summary: id: med0309; Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0310</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 100 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>"
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
    "status": "on-hold",
    "medicationReference": {
      "reference": "#med0309",
      "display": "Tylenol PM"
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
        "reference": "MedicationRequest/medrx0310"
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
      "value": 100,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
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