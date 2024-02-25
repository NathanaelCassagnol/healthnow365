import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example.json.html
// An example of a Head CT procedure

export const mockServiceRequest4: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">To be added</div>"
    },
    "status": "completed",
    "intent": "order",
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "103693007",
            "display": "Diagnostic procedure (procedure)"
          }
        ],
        "text": "Diagnostics Procedure"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "303653007",
          "display": "Computed tomography of head"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    }
  }