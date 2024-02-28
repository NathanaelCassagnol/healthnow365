import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0339.json.html
// Request for a product that contains multiple dosage forms

export const mockMedicationRequest40: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0339",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0339</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0322; Vagistat-3 <span>(Details : {http://hl7.org/fhir/sid/ndc code '0067-2091-03' = 'n/a', given as 'Vagistat-3'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>groupIdentifier</b>: 983939393 (OFFICIAL)</p><p><b>dosageInstruction</b>: , </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td><td><b>Performer</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>1</td><td>1</td><td>3 days<span> (Details: UCUM code d = 'd')</span></td><td><a>Organization/f001</a></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0322",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0067-2091-03",
              "display": "Vagistat-3"
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
      "reference": "#med0322"
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
    "basedOn": [
      {
        "reference": "CarePlan/gpvisit"
      }
    ],
    "groupIdentifier": {
      "use": "official",
      "system": "http://www.bmc.nl/portal/prescriptions",
      "value": "983939393"
    },
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Insert one suppository into the vagina daily at bedtime",
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-16",
              "end": "2015-01-18"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "16857009",
              "display": "Vaginal Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421257003",
              "display": "Insert"
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
              "unit": "VAGTAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "VAGTAB"
            }
          }
        ]
      },
      {
        "sequence": 1,
        "text": "Apply to vaginal area topically once daily",
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-16",
              "end": "2015-01-18"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "6064005",
              "display": "Topical Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "417924000",
              "display": "Apply - dosing instruction imperative (qualifier value)"
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
      "numberOfRepeatsAllowed": 1,
      "quantity": {
        "value": 1
      },
      "expectedSupplyDuration": {
        "value": 3,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      },
      "performer": {
        "reference": "Organization/f001"
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