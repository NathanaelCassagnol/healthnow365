import { MedicationAdministration } from "fhir/R4/types/medication-administration";

// https://hl7.org/fhir/R4/medicationadministration0312.json.html
// Medication Code - Patch - Fentanyl

export const mockMedicationAdministration13: MedicationAdministration = {
    "resourceType": "MedicationAdministration",
    "id": "medadmin0312",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0312</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>medication</b>: Fentanyl 25micrograms/hour patch (product) <span>(Details : {SNOMED CT code '333919005' = 'Fentanyl 25micrograms/hour patch', given as 'Fentanyl 25micrograms/hour patch (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 15/01/2015 10:03:00 PM --&gt; 16/01/2015 2:03:00 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0305</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>apply one patch three times per week</td><td>1 patch<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code patch = 'patch')</span></td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/administrations",
        "value": "12345689"
      }
    ],
    "status": "completed",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "333919005",
          "display": "Fentanyl 25micrograms/hour patch (product)"
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
    "request": {
      "reference": "MedicationRequest/medrx0305"
    },
    "dosage": {
      "text": "apply one patch three times per week",
      "dose": {
        "value": 1,
        "unit": "patch",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "patch"
      }
    }
  }