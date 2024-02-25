import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0317.json.html
// Request for Intravenous Chemotherapy (inpatient order) - Alemtuzumab - completed with multiple dosageInstruction lines

export const mockMedicationRequest18: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0317",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0317</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Chronic Lymphoid Leukemia (disorder) <span>(Details : {SNOMED CT code '92814006' = 'Chronic lymphoid leukemia', given as 'Chronic Lymphoid Leukemia (disorder)'})</span></p><p><b>dosageInstruction</b>: , , </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0303",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1594660",
              "display": "Alemtuzumab 10mg/ml (Lemtrada)"
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
      "reference": "#med0303"
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
            "code": "92814006",
            "display": "Chronic Lymphoid Leukemia (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
        "additionalInstruction": [
          {
            "text": "Rapidly increase dose until tolerated"
          },
          {
            "text": "Administer on alternate days"
          }
        ],
        "timing": {
          "repeat": {
            "duration": 12,
            "durationUnit": "wk",
            "frequency": 3,
            "period": 1,
            "periodUnit": "wk"
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
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "422145002",
              "display": "Inject - dosing instruction imperative (qualifier value)"
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
              "value": 3,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      },
      {
        "sequence": 2,
        "text": "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
        "additionalInstruction": [
          {
            "text": "Rapidly increase dose until tolerated"
          },
          {
            "text": "Administer on alternate days"
          }
        ],
        "timing": {
          "repeat": {
            "duration": 12,
            "durationUnit": "wk",
            "frequency": 3,
            "period": 1,
            "periodUnit": "wk"
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
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "422145002",
              "display": "Inject - dosing instruction imperative (qualifier value)"
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
              "value": 10,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      },
      {
        "sequence": 3,
        "text": "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
        "additionalInstruction": [
          {
            "text": "Rapidly increase dose until tolerated"
          },
          {
            "text": "Administer on alternate days"
          }
        ],
        "timing": {
          "repeat": {
            "duration": 12,
            "durationUnit": "wk",
            "frequency": 3,
            "period": 1,
            "periodUnit": "wk"
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
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "422145002",
              "display": "Inject - dosing instruction imperative (qualifier value)"
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
              "value": 30,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      }
    ]
  }