import { Patient } from "../../types/Resource/patient.types";

// https://hl7.org/fhir/R4/patient-example-infant-mom.json.html
// Mother of infant twins and fetal infant.

export const mockPatient24: Patient = {
    "resourceType": "Patient",
    "id": "infant-mom",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infant-mom</p><p><b>name</b>: Leia Solo (OFFICIAL), Leia Organa (MAIDEN)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 12/10/1995</p><p><b>maritalStatus</b>: Married <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-MaritalStatus code 'M' = 'Married', given as 'Married'})</span></p><p><b>generalPractitioner</b>: <a>Too-Onebee</a></p></div>"
    },
    "name": [
      {
        "use": "official",
        "family": "Solo",
        "given": [
          "Leia"
        ]
      },
      {
        "use": "maiden",
        "family": "Organa",
        "given": [
          "Leia"
        ]
      }
    ],
    "gender": "female",
    "birthDate": "1995-10-12",
    "maritalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          "code": "M",
          "display": "Married"
        }
      ]
    },
    "generalPractitioner": [
      {
        "reference": "Practitioner/21B",
        "display": "Too-Onebee"
      }
    ]
  }