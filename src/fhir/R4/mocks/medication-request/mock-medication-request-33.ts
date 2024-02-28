import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0332.json.html
// Request for a medication that is intended to be given as a single, once only dose

export const mockMedicationRequest33: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0332",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0332</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med03499; Ceftriaxone sodium 500mg powder for injection solution vial (product) <span>(Details : {SNOMED CT code '375860009' = 'Ceftriaxone sodium 500mg powder for injection', given as 'Ceftriaxone sodium 500mg powder for injection solution vial (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>groupIdentifier</b>: 983939393 (OFFICIAL)</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med03499",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "375860009",
              "display": "Ceftriaxone sodium 500mg powder for injection solution vial (product)"
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
      "reference": "#med03499"
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
        "text": "Administer 500mg IM as a single dose",
        "timing": {
          "repeat": {
            "count": 1
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "255559005",
              "display": "Intramuscular (qualifier value)"
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
              "value": 500,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      }
    ]
  }