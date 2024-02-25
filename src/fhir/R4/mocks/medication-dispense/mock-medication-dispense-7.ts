import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0306.json.html
// Dispense for Intravenous Chemotherapy (inpatient order) - Alemtuzumab (RxNorm Code) - completed with multiple dosageInstruction lines

export const mockMedicationDispense7: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0306",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0306</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Alemtuzumab 10mg/ml (Lemtrada). Generated Summary: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0317</a></p><p><b>type</b>: Daily Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'DF' = 'Daily Fill', given as 'Daily Fill'})</span></p><p><b>quantity</b>: 5 415818006<span> (Details: SNOMED CT code 415818006 = 'Vial')</span></p><p><b>daysSupply</b>: 7 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: , , </p></div>"
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
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0303",
      "display": "Alemtuzumab 10mg/ml (Lemtrada)"
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
        "reference": "MedicationRequest/medrx0317"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "DF",
          "display": "Daily Fill"
        }
      ]
    },
    "quantity": {
      "value": 5,
      "system": "http://snomed.info/sct",
      "code": "415818006"
    },
    "daysSupply": {
      "value": 7,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
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
                  "code": "calculated",
                  "display": "Calculated"
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
                  "code": "calculated",
                  "display": "Calculated"
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
                  "code": "calculated",
                  "display": "Calculated"
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