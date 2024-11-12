import { Practitioner } from "../../types/practitioner";

// https://hl7.org/fhir/R4/practitioner-example-f003-mv.json.html
// Fictive Cardiothoracal surgeon

export const mockPractitioner6: Practitioner = {
    "resourceType": "Practitioner",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: 846100293 (OFFICIAL), 243HID3RT938 (USUAL)</p><p><b>name</b>: Marc Versteegh (OFFICIAL)</p><p><b>telecom</b>: ph: 0205562431(WORK), m.versteegh@bmc.nl(WORK), fax: 0205662948(WORK)</p><p><b>address</b>: Galapagosweg 91 Amsterdam 1105 AZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 01/07/1963</p><p><b>communication</b>: Dutch <span>(Details : {urn:ietf:bcp:47 code 'nl' = 'Dutch', given as 'Dutch'})</span></p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "846100293"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "243HID3RT938"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Versteegh",
        "given": [
          "Marc"
        ],
        "suffix": [
          "MD"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0205562431",
        "use": "work"
      },
      {
        "system": "email",
        "value": "m.versteegh@bmc.nl",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "0205662948",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Galapagosweg 91"
        ],
        "city": "Amsterdam",
        "postalCode": "1105 AZ",
        "country": "NLD"
      }
    ],
    "gender": "male",
    "birthDate": "1963-07-01",
    "communication": [
      {
        "coding": [
          {
            "system": "urn:ietf:bcp:47",
            "code": "nl",
            "display": "Dutch"
          }
        ]
      }
    ]
  }