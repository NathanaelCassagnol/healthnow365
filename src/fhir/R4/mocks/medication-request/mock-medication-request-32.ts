import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0331.json.html
// Request for a Dosage that needs to be dispensed as different strength tablets - Warfarin - active

export const mockMedicationRequest32: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0331",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0331</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0350; Warfarin Sodium <span>(Details : {RxNorm code '114194' = 'Warfarin Sodium', given as 'Warfarin Sodium'})</span>; Oral Tablet <span>(Details : {SNOMED CT code '421026006' = 'Oral tablet', given as 'Oral Tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0350",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "114194",
              "display": "Warfarin Sodium"
            }
          ]
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421026006",
              "display": "Oral Tablet"
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
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0350"
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
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "7mg once daily",
        "timing": {
          "repeat": {
            "frequency": 1,
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
              "value": 7,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      }
    ],
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 3,
      "quantity": {
        "value": 30,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      },
      "expectedSupplyDuration": {
        "value": 30,
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