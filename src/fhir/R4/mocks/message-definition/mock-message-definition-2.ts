import { MessageDefinition } from "fhir/R4/types/message-definition";

// https://hl7.org/fhir/R4/messagedefinition-patient-link-notification.json.html
// An example of a patient link notification

export const mockMessageDefinition2: MessageDefinition = {
    "resourceType": "MessageDefinition",
    "id": "patient-link-notification",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Link Patients Notification</div>"
    },
    "url": "http://hl7.org/fhir/MessageDefinition/patient-link-notification",
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9878"
      }
    ],
    "version": "1",
    "name": "PATIENT-LINK-NOTIFICATION",
    "title": "Link Patients Notification",
    "status": "draft",
    "experimental": true,
    "date": "2017-02-03",
    "publisher": "Health Level Seven, Int'l",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org"
          }
        ]
      }
    ],
    "description": "Notification of two patient records that represent the same individual that require an established linkage.",
    "useContext": [
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/variant-state",
              "code": "positive"
            }
          ]
        }
      }
    ],
    "jurisdiction": [
      {
        "coding": [
          {
            "system": "urn:iso:std:iso:3166",
            "code": "US",
            "display": "United States of America (the)"
          }
        ]
      }
    ],
    "purpose": "Notifies recipient systems that two patients have been 'linked' - meaning they represent the same individual",
    "copyright": "� HL7.org 2011+",
    "base": "MessageDefinition/example",
    "eventCoding": {
      "system": "http://example.org/fhir/message-events",
      "code": "admin-notify"
    },
    "category": "notification",
    "focus": [
      {
        "code": "Patient",
        "profile": "StructureDefinition/example",
        "min": 2,
        "max": "2"
      }
    ],
    "allowedResponse": [
      {
        "message": "MessageDefinition/patient-link-response",
        "situation": "Optional response message that may provide additional information"
      }
    ]
  }