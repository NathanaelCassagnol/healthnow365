import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example2.json.html
// An example of an order for home physiotherapy

export const mockServiceRequest6: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "physiotherapy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: physiotherapy</p><p><b>contained</b>: , </p><p><b>identifier</b>: Placer = 20170201-0001</p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Physiotherapy of chest (regime/therapy)  <span>(Details : {SNOMED CT code '34431008' = 'Physiotherapy of chest', given as 'Physiotherapy of chest (regime/therapy) '})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: Duration 15days, Do 1-1 per 1 days</p><p><b>asNeeded</b>: as needed to clear mucus <span>(Details )</span></p><p><b>authoredOn</b>: 01/02/2017 5:23:07 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>reasonReference</b>: id: cystic-fibrosis; Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span>; Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span>; Problem List Item <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item', given as 'Problem List Item'})</span>; Mild <span>(Details : {SNOMED CT code '255604002' = 'Mild', given as 'Mild'})</span>; Cystic Fibrosis <span>(Details : {http://hl7.org/fhir/sid/icd-10-cm code 'E84.0' = 'E84.0', given as 'Cystic fibrosis with pulmonary manifestations'})</span>; onset: 12/11/2012</p><p><b>relevantHistory</b>: Author's Signature. Generated Summary: id: signature; recorded: 01/02/2017 5:23:07 PM; </p></div>"
    },
    "contained": [
      {
        "resourceType": "Provenance",
        "id": "signature",
        "target": [
          {
            "reference": "ServiceRequest/physiotherapy/_history/1"
          }
        ],
        "recorded": "2017-02-01T17:23:07Z",
        "agent": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "AUT"
                  }
                ]
              }
            ],
            "who": {
              "reference": "Practitioner/example",
              "display": "Dr Adam Careful"
            }
          }
        ],
        "signature": [
          {
            "type": [
              {
                "system": "urn:iso-astm:E1762-95:2013",
                "code": "1.2.840.10065.1.12.1.1",
                "display": "Author's Signature"
              }
            ],
            "when": "2017-02-01T17:23:07Z",
            "who": {
              "reference": "Practitioner/example",
              "display": "Dr Adam Careful"
            },
            "targetFormat": "application/fhir+xml",
            "sigFormat": "application/signature+xml",
            "data": "dGhpcyBibG9iIGlzIHNuaXBwZWQ="
          }
        ]
      },
      {
        "resourceType": "Condition",
        "id": "cystic-fibrosis",
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "active"
            }
          ]
        },
        "verificationStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
              "code": "confirmed"
            }
          ]
        },
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                "code": "problem-list-item",
                "display": "Problem List Item"
              }
            ]
          }
        ],
        "severity": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "255604002",
              "display": "Mild"
            }
          ]
        },
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/icd-10-cm",
              "code": "E84.0",
              "display": "Cystic fibrosis with pulmonary manifestations"
            }
          ],
          "text": "Cystic Fibrosis"
        },
        "subject": {
          "reference": "Patient/example"
        },
        "onsetDateTime": "2012-11-12"
      }
    ],
    "identifier": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "PLAC",
              "display": "Placer Identifier"
            }
          ],
          "text": "Placer"
        },
        "system": "http://goodhealth.org/placer-ids",
        "value": "20170201-0001"
      }
    ],
    "basedOn": [
      {
        "reference": "CarePlan/gpvisit"
      }
    ],
    "status": "completed",
    "intent": "order",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "34431008",
          "display": "Physiotherapy of chest (regime/therapy) "
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    },
    "occurrenceTiming": {
      "repeat": {
        "duration": 15,
        "durationMax": 25,
        "durationUnit": "min",
        "frequency": 1,
        "frequencyMax": 4,
        "period": 1,
        "periodUnit": "d"
      }
    },
    "asNeededCodeableConcept": {
      "text": "as needed to clear mucus"
    },
    "authoredOn": "2017-02-01T17:23:07Z",
    "requester": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "reasonReference": [
      {
        "reference": "#cystic-fibrosis"
      }
    ],
    "relevantHistory": [
      {
        "reference": "#signature",
        "display": "Author's Signature"
      }
    ]
  }