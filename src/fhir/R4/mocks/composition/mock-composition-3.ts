import { Composition } from "fhir/R4/types/composition";

// https://hl7.org/fhir/R4/composition-example-mixed.json.html
// Example of a composition covering details from more than one patient

export const mockComposition3: Composition = {
    "resourceType": "Composition",
    "id": "example-mixed",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-mixed</p><p><b>status</b>: final</p><p><b>type</b>: Neonatal perinatal medicine Discharge summary <span>(Details : {LOINC code '78418-1' = 'Neonatal perinatal medicine Discharge summary', given as 'Neonatal perinatal medicine Discharge summary'})</span></p><p><b>category</b>: Report <span>(Details : {LOINC code 'LP173421-1' = 'Report', given as 'Report'})</span></p><p><b>date</b>: 30/10/2018 4:56:04 PM</p><p><b>author</b>: <a>Harold Hippocrates, MD</a></p><p><b>title</b>: Discharge Summary (Neonatal Service)</p><p><b>confidentiality</b>: N</p><h3>Attesters</h3><table><tr><td>-</td><td><b>Mode</b></td><td><b>Time</b></td><td><b>Party</b></td></tr><tr><td>*</td><td>legal</td><td>04/01/2012 9:10:14 AM</td><td><a>Harold Hippocrates, MD</a></td></tr></table><p><b>custodian</b>: <a>Good Health Clinic</a></p></div>"
    },
    "status": "final",
    "type": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "78418-1",
          "display": "Neonatal perinatal medicine Discharge summary"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "LP173421-1",
            "display": "Report"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/newborn",
      "display": "Tahlia Smith"
    },
    "date": "2018-10-30T16:56:04+11:00",
    "author": [
      {
        "reference": "Practitioner/xcda-author",
        "display": "Harold Hippocrates, MD"
      }
    ],
    "title": "Discharge Summary (Neonatal Service)",
    "confidentiality": "N",
    "attester": [
      {
        "mode": "legal",
        "time": "2012-01-04T09:10:14Z",
        "party": {
          "reference": "Practitioner/xcda-author",
          "display": "Harold Hippocrates, MD"
        }
      }
    ],
    "custodian": {
      "reference": "Organization/2.16.840.1.113883.19.5",
      "display": "Good Health Clinic"
    },
    "section": [
      {
        "title": "Child's Details",
        "code": {
          "coding": [
            {
              "system": "http://acme.org/codes/SectionType",
              "code": "newborn",
              "display": "New Born Details"
            }
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n        (snip)\n\t\t\t</div>"
        }
      },
      {
        "title": "Mpther's Details",
        "code": {
          "coding": [
            {
              "system": "http://acme.org/codes/SectionType",
              "code": "mother",
              "display": "Mother's Details"
            }
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t(snip)\n\t\t\t</div>"
        }
      }
    ]
  }