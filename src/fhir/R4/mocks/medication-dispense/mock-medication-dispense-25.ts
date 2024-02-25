import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0325.json.html
// Dispense for Fentanyl Patch (NDC code) - in progress

export const mockMedicationDispense25: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0325",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0325</p><p><b>status</b>: in-progress</p><p><b>medication</b>: fentanyl 25mcg/hour Patch, Extended Release (Apotex) <span>(Details : {http://hl7.org/fhir/sid/ndc code '60505-7001-2' = 'n/a', given as 'fentanyl 25mcg/hour Patch, Extended Release (Apotex)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0327</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 5 PATCH<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code PATCH = 'Patch')</span></p><p><b>daysSupply</b>: 14 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "status": "in-progress",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "60505-7001-2",
          "display": "fentanyl 25mcg/hour Patch, Extended Release (Apotex)"
        }
      ]
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
        "reference": "MedicationRequest/medrx0327"
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
      "value": 5,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "PATCH"
    },
    "daysSupply": {
      "value": 14,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "apply one patch three times per week",
        "timing": {
          "repeat": {
            "frequency": 3,
            "period": 1,
            "periodUnit": "wk"
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
              "value": 1,
              "unit": "patch",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "patch"
            }
          }
        ]
      }
    ]
  }