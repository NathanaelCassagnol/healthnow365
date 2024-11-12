import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0326.json.html
// Dispense for Azithromycin (RxNorm Code) - in-progress with coded additionalInstructions

export const mockMedicationDispense26: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0326",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0326</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Azithromycin 500mg oral tablet (Zithromax) <span>(Details : {RxNorm code '226827' = 'Zithromax 500 MG Oral Tablet', given as 'Azithromycin 500mg oral tablet (Zithromax)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0313</a></p><p><b>type</b>: trial Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'TF' = 'Trial Fill', given as 'trial Fill'})</span></p><p><b>quantity</b>: 5 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 5 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "status": "in-progress",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "226827",
          "display": "Azithromycin 500mg oral tablet (Zithromax)"
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
        "reference": "MedicationRequest/medrx0313"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "TF",
          "display": "trial Fill"
        }
      ]
    },
    "quantity": {
      "value": 5,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 5,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "500mg daily for 5 days",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "421984009",
                "display": "Until finished - dosing instruction fragment (qualifier value)"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
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