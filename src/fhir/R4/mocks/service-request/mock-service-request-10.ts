import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example-ambulation.json.html
// Example of an order for anambulation procedure

export const mockServiceRequest10: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "ambulation",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ambulation</p><p><b>identifier</b>: 45678</p><p><b>basedOn</b>: <a>Maternity care plan</a></p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Ambulation <span>(Details : {SNOMED CT code '62013009' = 'Ambulating patient', given as 'Ambulating patient (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 05/03/2017</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>reasonReference</b>: <a>Blood Pressure</a></p></div>"
    },
    "identifier": [
      {
        "value": "45678"
      }
    ],
    "basedOn": [
      {
        "reference": "CarePlan/preg",
        "display": "Maternity care plan"
      }
    ],
    "status": "completed",
    "intent": "order",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "62013009",
          "display": "Ambulating patient (procedure)"
        }
      ],
      "text": "Ambulation"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "authoredOn": "2017-03-05",
    "requester": {
      "reference": "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
      "display": "Dr. Beverly Crusher"
    },
    "reasonReference": [
      {
        "reference": "Observation/blood-pressure",
        "display": "Blood Pressure"
      }
    ]
  }