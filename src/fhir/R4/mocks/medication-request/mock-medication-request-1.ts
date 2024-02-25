import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequestexample2.json.html
// Order for a medication that includes the dosage of a prescription in text

export const mockMedicationRequest1: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx002",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx002</p><p><b>identifier</b>: 12345 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: <a>prescribed medication</a></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter that leads to this prescription</a></p><p><b>authoredOn</b>: 01/03/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Essential hypertension (disorder) <span>(Details : {SNOMED CT code '59621000' = 'Essential hypertension', given as 'Essential hypertension (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "Medication/med0316",
      "display": "prescribed medication"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter that leads to this prescription"
    },
    "authoredOn": "2015-03-01",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "59621000",
            "display": "Essential hypertension (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Take one tablet daily as directed"
      }
    ]
  }