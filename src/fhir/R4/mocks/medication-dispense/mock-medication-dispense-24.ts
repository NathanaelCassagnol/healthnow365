import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0324.json.html
// Dispense for Nystatin Topical Ointment (RxNorm code) - completed

export const mockMedicationDispense24: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0324",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0324</p><p><b>status</b>: completed</p><p><b>medication</b>: Nystex 100,000 UNT/GM Topical Ointment <span>(Details : {RxNorm code '884375' = 'Nystex 100,000 UNT/GM Topical Ointment', given as 'Nystex 100,000 UNT/GM Topical Ointment'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0321</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 30 g<span> (Details: UCUM code g = 'g')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "status": "completed",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "884375",
          "display": "Nystex 100,000 UNT/GM Topical Ointment"
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
        "reference": "MedicationRequest/medrx0321"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 30,
      "system": "http://unitsofmeasure.org",
      "code": "g"
    },
    "daysSupply": {
      "value": 10,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Apply to affected areas four times daily",
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
              "value": 1,
              "unit": "ea",
              "system": "http://unitsofmeasure.org",
              "code": "ea"
            }
          }
        ]
      }
    ]
  }