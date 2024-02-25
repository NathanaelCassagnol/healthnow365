import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example-myringotomy.json.html
// An example of a Myringotomy referral request

export const mockServiceRequest17: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "myringotomy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: myringotomy</p><p><b>identifier</b>: ret4421</p><p><b>basedOn</b>: ServiceRequest for Myringotomy and insertion of tympanic ventilation tube</p><p><b>replaces</b>: prior ServiceRequest</p><p><b>requisition</b>: 1234</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Patient referral to specialist <span>(Details : {SNOMED CT code '103696004' = 'Patient referral to specialist', given as 'Patient referral to specialist'})</span></p><p><b>priority</b>: routine</p><p><b>code</b>: Insertion of grommets <span>(Details : {SNOMED CT code '172676009' = 'Myringotomy and insertion of short-term grommet', given as 'Myringotomy and insertion of tympanic ventilation tube'})</span></p><p><b>subject</b>: <a>Beverly Weaver</a></p><p><b>encounter</b>: Beverly Waver's encounter on 2014-02-14</p><p><b>occurrence</b>: ?? --&gt; 14/03/2014</p><p><b>authoredOn</b>: 14/02/2014</p><p><b>requester</b>: <a>Serena Shrink</a></p><p><b>performerType</b>: ENT <span>(Details : {http://orionhealth.com/fhir/apps/specialties code 'ent' = 'ent', given as 'ENT'})</span></p><p><b>performer</b>: <a>Dr Dave</a></p><p><b>reasonCode</b>: For consideration of Grommets <span>(Details )</span></p><p><b>note</b>: In the past 2 years Beverly has had 6 instances of rt-sided Otitis media. She is     falling behind her peers at school, and displaying some learning difficulties.</p></div>"
    },
    "identifier": [
      {
        "system": "http://orionhealth.com/fhir/apps/referralids",
        "value": "ret4421"
      }
    ],
    "basedOn": [
      {
        "display": "ServiceRequest for Myringotomy and insertion of tympanic ventilation tube"
      }
    ],
    "replaces": [
      {
        "display": "prior ServiceRequest"
      }
    ],
    "requisition": {
      "value": "1234"
    },
    "status": "active",
    "intent": "order",
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "103696004",
            "display": "Patient referral to specialist"
          }
        ]
      }
    ],
    "priority": "routine",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "172676009",
          "display": "Myringotomy and insertion of tympanic ventilation tube"
        }
      ],
      "text": "Insertion of grommets"
    },
    "subject": {
      "reference": "https://fhir.orionhealth.com/blaze/fhir/Patient/77662",
      "display": "Beverly Weaver"
    },
    "encounter": {
      "display": "Beverly Waver's encounter on 2014-02-14"
    },
    "occurrencePeriod": {
      "end": "2014-03-14"
    },
    "authoredOn": "2014-02-14",
    "requester": {
      "reference": "https://fhir.orionhealth.com/blaze/fhir/Practitioner/77272",
      "display": "Serena Shrink"
    },
    "performerType": {
      "coding": [
        {
          "system": "http://orionhealth.com/fhir/apps/specialties",
          "code": "ent",
          "display": "ENT"
        }
      ]
    },
    "performer": [
      {
        "reference": "https://fhir.orionhealth.com/blaze/fhir/Practitioner/76597",
        "display": "Dr Dave"
      }
    ],
    "reasonCode": [
      {
        "text": "For consideration of Grommets"
      }
    ],
    "note": [
      {
        "authorString": "Serena Shrink",
        "time": "2014-02-14",
        "text": "In the past 2 years Beverly has had 6 instances of rt-sided Otitis media. She is     falling behind her peers at school, and displaying some learning difficulties."
      }
    ]
  }