import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-diplotype1.html
// Example of diplotype data (with haplotypes observation as reference)

export const mockObservationGenetics6: Observation = {
    "resourceType": "Observation",
    "id": "example-diplotype1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-diplotype1</p><p><b>status</b>: final</p><p><b>code</b>: Diplotype Call <span>(Details : {SNOMED CT code '363779003' = 'Genotype determination', given as 'Genotype determination'})</span></p><p><b>subject</b>: <a>J*********** C***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>derivedFrom</b>: </p><ul><li><a>Observation/example-haplotype1</a></li><li><a>Observation/example-haplotype2</a></li></ul></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://www.genenames.org",
              "code": "2623",
              "display": "CYP2C9"
            }
          ]
        }
      }
    ],
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "363779003",
          "display": "Genotype determination"
        }
      ],
      "text": "Diplotype Call"
    },
    "subject": {
      "reference": "Patient/727127",
      "display": "J*********** C***********"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "specimen": {
      "reference": "Specimen/genetics-example1-somatic",
      "display": "Molecular Specimen ID: MLD45-Z4-1234"
    },
    "derivedFrom": [
      {
        "reference": "Observation/example-haplotype1"
      },
      {
        "reference": "Observation/example-haplotype2"
      }
    ]
  }