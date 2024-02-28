import { MedicationAdministration } from "fhir/R4/types/medication-administration";

// https://hl7.org/fhir/R4/medicationadministration0306.json.html
// Oral Antibiotic - Azithromycin

export const mockMedicationAdministration7: MedicationAdministration = {
    "resourceType": "MedicationAdministration",
    "id": "medadmin0306",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0306</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0306; Azithromycin 250mg capsule (product) <span>(Details : {SNOMED CT code '324252006' = 'Azithromycin 250mg capsule', given as 'Azithromycin 250mg capsule (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/med-admin-perform-function code 'performer' = 'Performer', given as 'Performer'})</span></td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0302</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>Two tablets at once</td><td>Oral Route <span>(Details : {SNOMED CT code '26643006' = 'Oral route', given as 'Oral Route'})</span></td><td>Swallow - dosing instruction imperative (qualifier value) <span>(Details : {SNOMED CT code '421521009' = 'Swallow', given as 'Swallow - dosing instruction imperative (qualifier value)'})</span></td><td>2 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0306",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "324252006",
              "display": "Azithromycin 250mg capsule (product)"
            }
          ]
        }
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#med0306"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "context": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "effectivePeriod": {
      "start": "2015-01-15T04:30:00+01:00",
      "end": "2015-01-15T14:30:00+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
              "code": "performer",
              "display": "Performer"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/f007",
          "display": "Patrick Pump"
        }
      }
    ],
    "request": {
      "reference": "MedicationRequest/medrx0302"
    },
    "dosage": {
      "text": "Two tablets at once",
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral Route"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "421521009",
            "display": "Swallow - dosing instruction imperative (qualifier value)"
          }
        ]
      },
      "dose": {
        "value": 2,
        "unit": "TAB",
        "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        "code": "TAB"
      }
    }
  }