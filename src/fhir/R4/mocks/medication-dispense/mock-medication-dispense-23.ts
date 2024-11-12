import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0322.json.html
// Dispense for Dilantin Oral Suspension (NDC code) - completed

export const mockMedicationDispense23: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0322",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0322</p><p><b>status</b>: completed</p><p><b>medication</b>: Dilantin 125mg/5ml Oral Suspension <span>(Details : {http://hl7.org/fhir/sid/ndc code '0071-2214-20' = 'n/a', given as 'Dilantin 125mg/5ml Oral Suspension'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0312</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 360 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 16/01/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 18/01/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "status": "completed",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0071-2214-20",
          "display": "Dilantin 125mg/5ml Oral Suspension"
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
        "reference": "MedicationRequest/medrx0312"
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
      "value": 360,
      "system": "http://unitsofmeasure.org",
      "code": "ml"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-16T07:13:00+05:00",
    "whenHandedOver": "2015-01-18T07:13:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "100mg (4ml) three times daily",
        "timing": {
          "repeat": {
            "frequency": 3,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route (qualifier value)"
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
              "value": 4,
              "unit": "ml",
              "system": "http://unitsofmeasure.org",
              "code": "ml"
            }
          }
        ]
      }
    ]
  }