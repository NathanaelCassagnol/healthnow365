import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0304.json.html
// Order for Oral Drops - Nystatin Suspension - completed - with Dispense Request

export const mockMedicationRequest5: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0304",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0304</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Nystatin 100,000 u/ml oral suspension. Generated Summary: id: med0312; Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>10 ml<span> (Details: UCUM code ml = 'ml')</span></td><td>10 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0312",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "324689003",
              "display": "Nystatin 100,000 units/ml oral suspension (product)"
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
      "reference": "#med0312",
      "display": "Nystatin 100,000 u/ml oral suspension"
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
        "text": "10 drops four times daily - apply in mouth using cotton swab or finger",
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
              "value": 10,
              "unit": "drop",
              "system": "http://unitsofmeasure.org",
              "code": "drop"
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
        "value": 10,
        "unit": "ml",
        "system": "http://unitsofmeasure.org",
        "code": "ml"
      },
      "expectedSupplyDuration": {
        "value": 10,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    }
  }