import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0336.json.html
// Request for Intravenous Dopamine - Weight based calculation with rateQuantity

export const mockMedicationRequest37: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0336",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0336</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Dopamine 400mg in 500mL D5W. Generated Summary: id: med0336; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>supportingInformation</b>: <a>Observation/example</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0336",
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385219001",
              "display": "Injection Solution (qualifier value)"
            }
          ],
          "text": "Injection Solution (qualifier value)"
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                  "code": "1114879",
                  "display": "Dopamine"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 400,
                "system": "http://unitsofmeasure.org",
                "code": "mg"
              },
              "denominator": {
                "value": 500,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          },
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://hl7.org/fhir/sid/ndc",
                  "code": "0264751010",
                  "display": "Dextrose 5% injection USP"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 5,
                "system": "http://unitsofmeasure.org",
                "code": "g"
              },
              "denominator": {
                "value": 100,
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
    "status": "completed",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0336",
      "display": "Dopamine 400mg in 500mL D5W"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "supportingInformation": [
      {
        "reference": "Observation/example"
      }
    ],
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Dopamine 4mcg/kg/min",
        "timing": {
          "repeat": {
            "duration": 33.33,
            "durationUnit": "h"
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
            "rateQuantity": {
              "value": 4,
              "unit": "ug/kg/min",
              "system": "http://unitsofmeasure.org"
            }
          }
        ]
      }
    ]
  }