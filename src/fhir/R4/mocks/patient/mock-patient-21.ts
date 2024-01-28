import { Patient } from "../../types/Resource/patient.types";

// https://hl7.org/fhir/R4/patient-example-infant-twin-1.json.html
// Newborn Eldest Twin Example

export const mockPatient1: Patient = {
    "resourceType": "Patient",
    "id": "infant-twin-1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infant-twin-1</p><p><b>identifier</b>: Medical record number = MRN7465737865, 7465737865</p><p><b>name</b>: Jaina Solo (OFFICIAL)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 15/05/2017</p><p><b>multipleBirth</b>: 1</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Mother <span>(Details : {SNOMED CT code '72705000' = 'Mother', given as 'Mother'}; {http://terminology.hl7.org/CodeSystem/v2-0131 code 'N' = 'Next-of-Kin; {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother)</span></td><td>Leia Organa (MAIDEN)</td><td>ph: +31201234567(MOBILE)</td></tr></table></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
        "valueString": "Organa"
      }
    ],
    "identifier": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "MR"
            }
          ]
        },
        "system": "http://coruscanthealth.org/main-hospital/patient-identifier",
        "value": "MRN7465737865"
      },
      {
        "system": "http://new-republic.gov/galactic-citizen-identifier",
        "value": "7465737865"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Solo",
        "given": [
          "Jaina"
        ]
      }
    ],
    "gender": "female",
    "birthDate": "2017-05-15",
    "_birthDate": {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
          "valueDateTime": "2017-05-15T17:11:00+01:00"
        }
      ]
    },
    "multipleBirthInteger": 1,
    "contact": [
      {
        "relationship": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "72705000",
                "display": "Mother"
              },
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                "code": "N"
              },
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                "code": "MTH"
              }
            ]
          }
        ],
        "name": {
          "use": "maiden",
          "family": "Organa",
          "given": [
            "Leia"
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "+31201234567",
            "use": "mobile"
          }
        ]
      }
    ]
  }