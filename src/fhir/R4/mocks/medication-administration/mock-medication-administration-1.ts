import { MedicationAdministration } from "fhir/R4/types/medication-administration";

// https://hl7.org/fhir/R4/medicationadministrationexample3.json.html
// Example of an IV administration not given with a note - Alemtuzumab

export const mockMedicationAdministration1: MedicationAdministration = {
    "resourceType": "MedicationAdministration",
    "id": "medadminexample03",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadminexample03</p><p><b>contained</b>: </p><p><b>status</b>: on-hold</p><p><b>statusReason</b>: Administration of medication not done due to a contraindication (situation) <span>(Details : {SNOMED CT code '373147003' = 'Medication not administered because contraindicated', given as 'Administration of medication not done due to a contraindication (situation)'})</span></p><p><b>medication</b>: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>Encounter/f001</a></p><p><b>supportingInformation</b>: <a>Condition/f204</a></p><p><b>effective</b>: 15/01/2015 2:30:00 PM --&gt; 15/01/2015 2:30:00 PM</p><p><b>request</b>: <a>MedicationRequest/medrx0317</a></p><p><b>note</b>: Patient started Bupropion this morning - will administer in a reduced dose tomorrow</p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0303",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1594660",
              "display": "Alemtuzumab 10mg/ml (Lemtrada)"
            }
          ]
        }
      }
    ],
    "status": "on-hold",
    "statusReason": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "373147003",
            "display": "Administration of medication not done due to a contraindication (situation)"
          }
        ]
      }
    ],
    "medicationReference": {
      "reference": "#med0303"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "context": {
      "reference": "Encounter/f001"
    },
    "supportingInformation": [
      {
        "reference": "Condition/f204"
      }
    ],
    "effectivePeriod": {
      "start": "2015-01-15T14:30:00+01:00",
      "end": "2015-01-15T14:30:00+01:00"
    },
    "request": {
      "reference": "MedicationRequest/medrx0317"
    },
    "note": [
      {
        "text": "Patient started Bupropion this morning - will administer in a reduced dose tomorrow"
      }
    ]
  }