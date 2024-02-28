import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0315.json.html
// Dispense for Alprazolam (Rx Norm code) - in progress

export const mockMedicationDispense16: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0315",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0315</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Alprazolam 0.25mg (Xanax). Generated Summary: id: med0314; Alprazolam 0.25mg (Xanax) <span>(Details : {RxNorm code '562721' = 'Amylases / CELLULASE / Endopeptidases / Hyoscyamine / Lipase / phenyltoloxamine Oral Capsule', given as 'Alprazolam 0.25mg (Xanax)'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0305</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 30 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 10 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0314",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "562721",
              "display": "Alprazolam 0.25mg (Xanax)"
            }
          ]
        }
      }
    ],
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0314",
      "display": "Alprazolam 0.25mg (Xanax)"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck "
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
        "reference": "MedicationRequest/medrx0305"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 30,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 10,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-06-25T07:13:00+05:00",
    "whenHandedOver": "2015-06-26T07:13:00+05:00",
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
        ]
      }
    ]
  }