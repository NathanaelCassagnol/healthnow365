import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example-ventilation.json.html
// Order for mechanical ventilation with order details

export const mockServiceRequest18: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "vent",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vent</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Mechanical Ventilation <span>(Details : {SNOMED CT code '40617009' = 'Artificial respiration', given as 'Artificial respiration (procedure)'})</span></p><p><b>orderDetail</b>: IPPB <span>(Details : {SNOMED CT code '243144002' = 'Patient triggered inspiratory assistance', given as 'Patient triggered inspiratory assistance (procedure)'})</span>,  Initial Settings : Sens: -1 cm H20 Pressure 15 cm H2O moderate flow:  Monitor VS every 15 minutes x 4 at the start of mechanical ventilation, then routine for unit OR every 5 hr <span>(Details )</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 20/02/2018</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>performer</b>: <a>Dr Cecil Surgeon</a></p><p><b>reasonCode</b>: chronic obstructive lung disease (COLD) <span>(Details )</span></p></div>"
    },
    "status": "completed",
    "intent": "order",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "40617009",
          "display": "Artificial respiration (procedure)"
        }
      ],
      "text": "Mechanical Ventilation"
    },
    "orderDetail": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "243144002",
            "display": "Patient triggered inspiratory assistance (procedure)"
          }
        ],
        "text": "IPPB"
      },
      {
        "text": " Initial Settings : Sens: -1 cm H20 Pressure 15 cm H2O moderate flow:  Monitor VS every 15 minutes x 4 at the start of mechanical ventilation, then routine for unit OR every 5 hr"
      }
    ],
    "subject": {
      "reference": "Patient/example"
    },
    "authoredOn": "2018-02-20",
    "requester": {
      "reference": "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
      "display": "Dr. Beverly Crusher"
    },
    "performer": [
      {
        "reference": "Practitioner/example",
        "display": "Dr Cecil Surgeon"
      }
    ],
    "reasonCode": [
      {
        "text": "chronic obstructive lung disease (COLD)"
      }
    ]
  }