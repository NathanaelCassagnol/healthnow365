import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0305.json.html
// Order with Dosage with a Pre-Condition - Alprazolam - dosageInstructions includes boundsPeriod with periodMax and asNeededCodeableConcept

export const mockMedicationRequest6: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0305",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0305</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0314; Alprazolam 0.25mg Oral Tablet <span>(Details : {RxNorm code '308047' = 'ALPRAZolam 0.25 MG Oral Tablet', given as 'Alprazolam 0.25mg Oral Tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0314",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "308047",
              "display": "Alprazolam 0.25mg Oral Tablet"
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
      "reference": "#med0314"
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
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "0.25mg PO every 6-12 hours as needed for menses from Jan 15-20, 2015.  Do not exceed more than 4mg per day",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "418914006",
                "display": "Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-15",
              "end": "2015-01-20"
            },
            "frequency": 1,
            "period": 6,
            "periodMax": 12,
            "periodUnit": "h"
          }
        },
        "asNeededCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "266599000",
              "display": "Dysmenorrhea (disorder)"
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
            "doseQuantity": {
              "value": 1,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
          }
        ],
        "maxDosePerAdministration": {
          "value": 4,
          "unit": "mg",
          "system": "http://unitsofmeasure.org",
          "code": "mg"
        }
      }
    ],
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 1,
      "quantity": {
        "value": 30,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 10,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "substitution": {
      "allowedBoolean": true,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
    }
  }