import { NamingSystem } from "fhir/R4/types/naming-system";

// https://hl7.org/fhir/R4/namingsystem-example-id.json.html
// Example of naming system for an identifier

export const mockNamingSystem2: NamingSystem = {
    "resourceType": "NamingSystem",
    "id": "example-id",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>\n        <b>Australian IHI Number</b>\n      </p>\n      \n      <p> oid: 1.2.36.1.2001.1003.0</p>\n      \n      <p> uri: http://ns.electronichealth.net.au/id/hi/ihi/1.0</p>\n    \n    </div>"
    },
    "name": "Austalian Healthcare Identifier - Individual",
    "status": "active",
    "kind": "identifier",
    "date": "2015-08-31",
    "publisher": "HL7 Australia on behalf of NEHTA",
    "contact": [
      {
        "name": "HL7 Australia FHIR Team",
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7-australia.wikispaces.com/FHIR+Australia"
          }
        ]
      }
    ],
    "responsible": "HI Service Operator / NEHTA",
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "NI",
          "display": "National unique individual identifier"
        }
      ],
      "text": "IHI"
    },
    "description": "Australian HI Identifier as established by relevant regulations etc.",
    "jurisdiction": [
      {
        "coding": [
          {
            "system": "urn:iso:std:iso:3166",
            "code": "AU"
          }
        ]
      }
    ],
    "usage": "Used in Australia for identifying patients",
    "uniqueId": [
      {
        "type": "oid",
        "value": "1.2.36.1.2001.1003.0",
        "comment": "This value is used in Australian CDA documents"
      },
      {
        "type": "uri",
        "value": "http://ns.electronichealth.net.au/id/hi/ihi/1.0",
        "preferred": true,
        "period": {
          "start": "2015-08-21"
        }
      }
    ]
  }