import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0314.json.html
// Request - Levothyroxine - completed with reasonCode, dosageInstructions and dispenseRequest

export const mockMedicationRequest15: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0314",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0314</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>priority</b>: routine</p><p><b>medication</b>: Levothyroxine Sodium 75micrograms tablet (product) <span>(Details : {SNOMED CT code '376988009' = 'Levothyroxine sodium 75micrograms tablet', given as 'Levothyroxine Sodium 75micrograms tablet (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Hypothyroidism (disorder) <span>(Details : {SNOMED CT code '40930008' = 'Hypothyroidism', given as 'Hypothyroidism (disorder)'})</span></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>100 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "intent": "order",
    "priority": "routine",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "376988009",
          "display": "Levothyroxine Sodium 75micrograms tablet (product)"
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
            "code": "40930008",
            "display": "Hypothyroidism (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "75mcg daily",
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
              "value": 75,
              "unit": "mcg",
              "system": "http://unitsofmeasure.org",
              "code": "mcg"
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
      "quantity": {
        "value": 100,
        "unit": "Tab",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "Tab"
      },
      "expectedSupplyDuration": {
        "value": 30,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    }
  }