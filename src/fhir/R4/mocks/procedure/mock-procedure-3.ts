import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-f201-tpf.json.html
// Real-world procedure example

export const mockProcedure3: Procedure = {
    "resourceType": "Procedure",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>instantiatesCanonical</b>: <a>PlanDefinition/KDN5</a></p><p><b>status</b>: completed</p><p><b>code</b>: Chemotherapy <span>(Details : {SNOMED CT code '367336001' = 'Chemotherapy', given as 'Chemotherapy'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on January 28th, 2013</a></p><p><b>performed</b>: 28/01/2013 1:31:00 PM --&gt; 28/01/2013 2:27:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Medical oncologist <span>(Details : {SNOMED CT code '310512001' = 'Medical oncologist', given as 'Medical oncologist'})</span></td><td><a>Dokter Bronsig</a></td></tr></table><p><b>reasonCode</b>: DiagnosticReport/f201 <span>(Details )</span></p><p><b>bodySite</b>: Sphenoid bone <span>(Details : {SNOMED CT code '272676008' = 'Entire sphenoid bone', given as 'Sphenoid bone'})</span></p><p><b>note</b>: Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding.</p></div>"
    },
    "instantiatesCanonical": [
      "PlanDefinition/KDN5"
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "367336001",
          "display": "Chemotherapy"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "encounter": {
      "reference": "Encounter/f202",
      "display": "Roel's encounter on January 28th, 2013"
    },
    "performedPeriod": {
      "start": "2013-01-28T13:31:00+01:00",
      "end": "2013-01-28T14:27:00+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "310512001",
              "display": "Medical oncologist"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/f201",
          "display": "Dokter Bronsig"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "DiagnosticReport/f201"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "272676008",
            "display": "Sphenoid bone"
          }
        ]
      }
    ],
    "note": [
      {
        "text": "Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding."
      }
    ]
  }