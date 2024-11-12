import { Practitioner } from "../../types/practitioner";

// https://hl7.org/fhir/R4/practitioner-example-f202-lm.json.html
// Fictive Lab worker

export const mockPractitioner10: Practitioner = {
    "resourceType": "Practitioner",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>identifier</b>: UZI-nummer = 12345678902 (OFFICIAL), BIG-nummer = 12345678902 (OFFICIAL)</p><p><b>active</b>: true</p><p><b>name</b>: Luigi Maas(OFFICIAL)</p><p><b>telecom</b>: ph: +31715269111(WORK)</p><p><b>address</b>: Walvisbaai 3 C4 - Automatisering Den helder 2333ZA NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 12/06/1960</p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "UZI-nummer"
        },
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "12345678902"
      },
      {
        "use": "official",
        "type": {
          "text": "BIG-nummer"
        },
        "system": "https://www.bigregister.nl/",
        "value": "12345678902"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "text": "Luigi Maas",
        "family": "Maas",
        "given": [
          "Luigi"
        ],
        "prefix": [
          "Dr."
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "+31715269111",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Walvisbaai 3",
          "C4 - Automatisering"
        ],
        "city": "Den helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "gender": "male",
    "birthDate": "1960-06-12"
  }