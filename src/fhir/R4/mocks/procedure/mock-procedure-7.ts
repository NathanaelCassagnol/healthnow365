import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-f004-tracheotomy.json.html
// Real-world procedure example

export const mockProcedure7: Procedure = {
    "resourceType": "Procedure",
    "id": "f004",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f004</p><p><b>status</b>: completed</p><p><b>code</b>: Tracheotomy <span>(Details : {SNOMED CT code '48387007' = 'Incision of trachea', given as 'Tracheotomy'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>performed</b>: 22/03/2013 9:30:10 AM --&gt; 22/03/2013 10:30:10 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>A. Langeveld</a></td></tr></table><p><b>reasonCode</b>: ensure breathing during surgery <span>(Details )</span></p><p><b>bodySite</b>: Retropharyngeal area <span>(Details : {SNOMED CT code '83030008' = 'Retropharyngeal area', given as 'Retropharyngeal area'})</span></p><p><b>outcome</b>: removal of the retropharyngeal abscess <span>(Details )</span></p><p><b>report</b>: <a>???????????</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "48387007",
          "display": "Tracheotomy"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f003"
    },
    "performedPeriod": {
      "start": "2013-03-22T09:30:10+01:00",
      "end": "2013-03-22T10:30:10+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
              "code": "01.000",
              "display": "Arts"
            }
          ],
          "text": "Care role"
        },
        "actor": {
          "reference": "Practitioner/f005",
          "display": "A. Langeveld"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "ensure breathing during surgery"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "83030008",
            "display": "Retropharyngeal area"
          }
        ]
      }
    ],
    "outcome": {
      "text": "removal of the retropharyngeal abscess"
    },
    "report": [
      {
        "reference": "DiagnosticReport/f001",
        "display": "???????????"
      }
    ],
    "followUp": [
      {
        "text": "described in care plan"
      }
    ]
  }