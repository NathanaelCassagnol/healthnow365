import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0301.json.html
// Dispense for IV Antibiotic - in progress - Vancomycin IV (NDC Code) - in-progress

export const mockMedicationDispense2: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0301",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0301</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Vancomycin Hydrochloride. Generated Summary: id: med0301; Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>supportingInformation</b>: <a>Condition/f203</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>location</b>: <a>Pharmacy</a></p><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0318</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 12 Vial<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Vial = 'Vial')</span></p><p><b>daysSupply</b>: 3 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>destination</b>: <a>Location/ph</a></p><p><b>receiver</b>: <a>Donald Duck</a></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0301",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0069-2587-10",
              "display": "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
            }
          ]
        }
      }
    ],
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0301",
      "display": "Vancomycin Hydrochloride"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "supportingInformation": [
      {
        "reference": "Condition/f203"
      }
    ],
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "location": {
      "reference": "Location/ukp",
      "display": "Pharmacy"
    },
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0318"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EM",
          "display": "Emergency Supply"
        }
      ]
    },
    "quantity": {
      "value": 12,
      "unit": "Vial",
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "Vial"
    },
    "daysSupply": {
      "value": 3,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "destination": {
      "reference": "Location/ph"
    },
    "receiver": [
      {
        "reference": "Patient/pat1",
        "display": "Donald Duck"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "500mg IV q6h x 3 days",
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
              "code": "255560000",
              "display": "Intravenous"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "420620005",
              "display": "Push - dosing instruction imperative (qualifier value)"
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
              "value": 500,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      }
    ]
  }