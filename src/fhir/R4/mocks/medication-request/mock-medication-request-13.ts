import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0312.json.html
// Liquid Medication - Phenytoin with link to prior prescription

export const mockMedicationRequest13: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0312",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0312</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: Phenytoin 25mg/ml oral suspension <span>(Details : {RxNorm code '1313112' = 'Phenytoin 25 MG/ML Oral Suspension', given as 'Phenytoin 25mg/ml oral suspension'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Status epilepticus (disorder) <span>(Details : {SNOMED CT code '230456007' = 'Status epilepticus', given as 'Status epilepticus (disorder)'})</span></p><p><b>note</b>: Patient should be counselled to ensure good dental hygiene</p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>360 mL<span> (Details: UCUM code mL = 'mL')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>Continuing therapy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'CT' = 'continuing therapy', given as 'Continuing therapy'})</span></td></tr></table><p><b>priorPrescription</b>: <a>MedicationRequest/medrx0304</a></p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "1313112",
          "display": "Phenytoin 25mg/ml oral suspension"
        }
      ]
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
            "code": "230456007",
            "display": "Status epilepticus (disorder)"
          }
        ]
      }
    ],
    "note": [
      {
        "text": "Patient should be counselled to ensure good dental hygiene"
      }
    ],
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
              "value": 100,
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
        "value": 360,
        "unit": "mL",
        "system": "http://unitsofmeasure.org",
        "code": "mL"
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
            "code": "CT",
            "display": "Continuing therapy"
          }
        ]
      }
    },
    "priorPrescription": {
      "reference": "MedicationRequest/medrx0304"
    }
  }