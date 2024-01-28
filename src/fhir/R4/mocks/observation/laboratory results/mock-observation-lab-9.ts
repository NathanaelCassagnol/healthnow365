import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-unsat.json.html
// Specimen Reject Example

export const mockObservationLab9: Observation = {
    "resourceType": "Observation",
    "id": "unsat",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: unsat</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: cancelled</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; 05/04/2013 9:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>dataAbsentReason</b>: Specimen unsatisfactory for evaluation <span>(Details : {SNOMED CT code '125154007' = 'Specimen unsatisfactory for evaluation', given as 'Specimen unsatisfactory for evaluation'})</span></p><p><b>note</b>: Tube broken in transit and sample leaked</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
        "value": "6323"
      }
    ],
    "status": "cancelled",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "15074-8",
          "display": "Glucose [Moles/volume] in Blood"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "effectivePeriod": {
      "start": "2013-04-02T09:30:10+01:00",
      "end": "2013-04-05T09:30:10+01:00"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "performer": [
      {
        "reference": "Practitioner/f005",
        "display": "A. Langeveld"
      }
    ],
    "dataAbsentReason": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "125154007",
          "display": "Specimen unsatisfactory for evaluation"
        }
      ]
    },
    "note": [
      {
        "text": "Tube broken in transit and sample leaked"
      }
    ],
    "referenceRange": [
      {
        "low": {
          "value": 3.1,
          "unit": "mmol/l",
          "system": "http://unitsofmeasure.org",
          "code": "mmol/L"
        },
        "high": {
          "value": 6.2,
          "unit": "mmol/l",
          "system": "http://unitsofmeasure.org",
          "code": "mmol/L"
        }
      }
    ]
  }