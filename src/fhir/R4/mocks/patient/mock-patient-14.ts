import { Patient } from "../../types/Resource/patient.types";

// https://hl7.org/fhir/R4/patient-example-f201-roel.json.html
// Real-world patient example (anonymized)

export const mockPatient14: Patient = {
    "resourceType": "Patient",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: BSN = 123456789 (OFFICIAL), BSN = 123456789 (OFFICIAL)</p><p><b>active</b>: true</p><p><b>name</b>: Roel(OFFICIAL)</p><p><b>telecom</b>: ph: +31612345678(MOBILE), ph: +31201234567(HOME)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 13/03/1960</p><p><b>deceased</b>: false</p><p><b>address</b>: Bos en Lommerplein 280 Amsterdam 1055RW NLD (HOME)</p><p><b>maritalStatus</b>: Legally married <span>(Details : {SNOMED CT code '36629006' = 'Legal marriage', given as 'Legally married'}; {http://terminology.hl7.org/CodeSystem/v3-MaritalStatus code 'M' = 'Married)</span></p><p><b>multipleBirth</b>: false</p><p><b>photo</b>: </p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Wife <span>(Details : {SNOMED CT code '127850001' = 'Wife', given as 'Wife'}; {http://terminology.hl7.org/CodeSystem/v2-0131 code 'N' = 'Next-of-Kin; {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'WIFE' = 'wife)</span></td><td>Ariadne Bor-Jansma</td><td>ph: +31201234567(HOME)</td></tr></table><h3>Communications</h3><table><tr><td>-</td><td><b>Language</b></td><td><b>Preferred</b></td></tr><tr><td>*</td><td>Dutch <span>(Details : {urn:ietf:bcp:47 code 'nl-NL' = 'Dutch (Region=Netherlands)', given as 'Dutch'})</span></td><td>true</td></tr></table><p><b>managingOrganization</b>: <a>AUMC</a></p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "BSN"
        },
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "123456789"
      },
      {
        "use": "official",
        "type": {
          "text": "BSN"
        },
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
        "value": "123456789"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "text": "Roel",
        "family": "Bor",
        "given": [
          "Roelof Olaf"
        ],
        "prefix": [
          "Drs."
        ],
        "suffix": [
          "PDEng."
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "+31612345678",
        "use": "mobile"
      },
      {
        "system": "phone",
        "value": "+31201234567",
        "use": "home"
      }
    ],
    "gender": "male",
    "birthDate": "1960-03-13",
    "deceasedBoolean": false,
    "address": [
      {
        "use": "home",
        "line": [
          "Bos en Lommerplein 280"
        ],
        "city": "Amsterdam",
        "postalCode": "1055RW",
        "country": "NLD"
      }
    ],
    "maritalStatus": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "36629006",
          "display": "Legally married"
        },
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          "code": "M"
        }
      ]
    },
    "multipleBirthBoolean": false,
    "photo": [
      {
        "contentType": "image/jpeg",
        "url": "Binary/f006"
      }
    ],
    "contact": [
      {
        "relationship": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "127850001",
                "display": "Wife"
              },
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                "code": "N"
              },
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                "code": "WIFE"
              }
            ]
          }
        ],
        "name": {
          "use": "usual",
          "text": "Ariadne Bor-Jansma"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "+31201234567",
            "use": "home"
          }
        ]
      }
    ],
    "communication": [
      {
        "language": {
          "coding": [
            {
              "system": "urn:ietf:bcp:47",
              "code": "nl-NL",
              "display": "Dutch"
            }
          ]
        },
        "preferred": true
      }
    ],
    "managingOrganization": {
      "reference": "Organization/f201",
      "display": "AUMC"
    }
  }