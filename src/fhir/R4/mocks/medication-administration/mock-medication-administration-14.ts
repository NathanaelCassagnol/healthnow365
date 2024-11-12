import { MedicationAdministration } from "fhir/R4/types/medication-administration";

// https://hl7.org/fhir/R4/medicationadministration0313.json.html
// Medication Code - Rectal Suppository - Acetaminophen

export const mockMedicationAdministration14: MedicationAdministration = {
    "resourceType": "MedicationAdministration",
    "id": "medadmin0313",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0313</p><p><b>status</b>: completed</p><p><b>medication</b>: Paracetamol 240mg suppository (product) <span>(Details : {SNOMED CT code '322254008' = 'Paracetamol 240mg suppository', given as 'Paracetamol 240mg suppository (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 10:03:00 PM --&gt; 16/01/2015 2:03:00 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonCode</b>: Emergency <span>(Details : {http://terminology.hl7.org/CodeSystem/reason-medication-given code 'c' = 'Emergency', given as 'Emergency'})</span></p><p><b>request</b>: <a>MedicationRequest/medrx0324</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Site</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>Insert one suppository rectally twice daily as needed for fever to a maximim of 3 per day</td><td>Rectum structure <span>(Details : {SNOMED CT code '34402009' = 'Rectum', given as 'Rectum structure'})</span></td><td>240 mg<span> (Details: UCUM code mg = 'mg')</span></td></tr></table></div>"
    },
    "status": "completed",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "322254008",
          "display": "Paracetamol 240mg suppository (product)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "effectivePeriod": {
      "start": "2015-01-15T22:03:00+01:00",
      "end": "2015-01-16T02:03:00+01:00"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f007",
          "display": "Patrick Pump"
        }
      }
    ],
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/reason-medication-given",
            "code": "c",
            "display": "Emergency"
          }
        ]
      }
    ],
    "request": {
      "reference": "MedicationRequest/medrx0324"
    },
    "dosage": {
      "text": "Insert one suppository rectally twice daily as needed for fever to a maximim of 3 per day",
      "site": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "34402009",
            "display": "Rectum structure"
          }
        ]
      },
      "dose": {
        "value": 240,
        "unit": "mg",
        "system": "http://unitsofmeasure.org",
        "code": "mg"
      }
    }
  }