import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-genetics-4.json.html
// Genetics example 4

export const mockObservationGenetics4: Observation = {
    "resourceType": "Observation",
    "id": "example-genetics-4",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-4</p><p><b>status</b>: final</p><p><b>code</b>: Allele ABC <span>(Details )</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Molecular Diagnostics Laboratory</a></p><p><b>interpretation</b>: Positive <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'POS' = 'Positive)</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>hasMember</b>: </p><ul><li><a>Variant-1</a></li><li><a>Variant-2</a></li><li><a>Variant-3</a></li></ul></div>"
    },
    "status": "final",
    "code": {
      "text": "Allele ABC"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Molecular Lab Patient ID: HOSP-23456"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "performer": [
      {
        "reference": "Practitioner/example",
        "display": "Molecular Diagnostics Laboratory"
      }
    ],
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "POS"
          }
        ],
        "text": "Positive"
      }
    ],
    "specimen": {
      "reference": "Specimen/genetics-example1-somatic",
      "display": "Molecular Specimen ID: MLD45-Z4-1234"
    },
    "hasMember": [
      {
        "reference": "Observation/example-genetics-1",
        "display": "Variant-1"
      },
      {
        "reference": "Observation/example-genetics-2",
        "display": "Variant-2"
      },
      {
        "reference": "Observation/example-genetics-3",
        "display": "Variant-3"
      }
    ]
  }