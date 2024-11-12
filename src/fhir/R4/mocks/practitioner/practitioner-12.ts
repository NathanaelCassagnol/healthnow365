import { Practitioner } from "../../types/practitioner";

// https://hl7.org/fhir/R4/practitioner-example-f204-ce.json.html
// Fictive Nurse

export const mockPractitioner12: Practitioner = {
    "resourceType": "Practitioner",
    "id": "f204",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: UZI-nummer = 12345678904 (OFFICIAL)</p><p><b>name</b>: Carla Espinosa</p><p><b>telecom</b>: ph: +31715262169(WORK)</p><p><b>address</b>: Walvisbaai 3 Den helder 2333ZA NLD (WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 05/11/1967</p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "UZI-nummer"
        },
        "system": "urn:oid:2.16.528.1.1007.3.1",
        "value": "12345678904"
      }
    ],
    "name": [
      {
        "use": "usual",
        "text": "Carla Espinosa"
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "+31715262169",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Walvisbaai 3"
        ],
        "city": "Den helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "gender": "female",
    "birthDate": "1967-11-05"
  }