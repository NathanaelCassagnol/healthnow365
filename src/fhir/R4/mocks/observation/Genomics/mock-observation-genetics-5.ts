import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-genetics-5.json.html
// Genetics example 5

export const mockObservationGenetics5: Observation = {
    "resourceType": "Observation",
    "id": "example-genetics-5",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-5</p><p><b>status</b>: final</p><p><b>code</b>: PCR validation <span>(Details )</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Sequence Analysis Laboratory</a></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/observation-sequelTo",
        "valueReference": {
          "reference": "Observation/example-genetics-1",
          "display": "ObservationForGenetics profile example 1"
        }
      }
    ],
    "status": "final",
    "code": {
      "text": "PCR validation"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Molecular Lab Patient ID: HOSP-23456"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "performer": [
      {
        "reference": "Practitioner/example",
        "display": "Sequence Analysis Laboratory"
      }
    ],
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "260385009",
          "display": "Negative"
        }
      ]
    }
  }