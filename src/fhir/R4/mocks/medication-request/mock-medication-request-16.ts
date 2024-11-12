import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0315.json.html
// Request for an injectable medication - Lorazepam - active - with link to encounter, reasonCode and dosageInstruction

export const mockMedicationRequest16: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0315",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0315</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0313; Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span>; Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Epilepsy (disorder) <span>(Details : {SNOMED CT code '84757009' = 'Epilepsy', given as 'Epilepsy (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0313",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "400621001",
              "display": "Lorazepam 2mg/ml injection solution 1ml vial (product)"
            }
          ]
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385219001",
              "display": "Injection solution (qualifier value)"
            }
          ]
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "387106007",
                  "display": "Lorazepam (substance)"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 2,
                "system": "http://unitsofmeasure.org",
                "code": "mg"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          }
        ]
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
      "reference": "#med0313"
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
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "84757009",
            "display": "Epilepsy (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "0.05 - 0.1mg/kg IV over 2-5 minutes every 15 minutes as needed",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 15,
            "periodUnit": "min"
          }
        },
        "asNeededBoolean": true,
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
            "doseRange": {
              "low": {
                "value": 0.05,
                "unit": "mg/kg",
                "system": "http://unitsofmeasure.org",
                "code": "mg/kg"
              },
              "high": {
                "value": 0.1,
                "unit": "mg/kg",
                "system": "http://unitsofmeasure.org",
                "code": "mg/kg"
              }
            },
            "rateRange": {
              "low": {
                "value": 2,
                "unit": "min",
                "system": "http://unitsofmeasure.org",
                "code": "min"
              },
              "high": {
                "value": 5,
                "unit": "min",
                "system": "http://unitsofmeasure.org",
                "code": "min"
              }
            }
          }
        ]
      }
    ]
  }