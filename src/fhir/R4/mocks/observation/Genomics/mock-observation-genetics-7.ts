import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-haplotype1.json.html
// Example of haplotype data that is basis of a diplotype data

export const mockObservationGenetics7: Observation = {
    "resourceType": "Observation",
    "id": "example-haplotype1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-haplotype1</p><p><b>status</b>: unknown</p><p><b>code</b>: Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result. <span>(Details : {LOINC code '55233-1' = 'Genetic analysis master panel - Blood or Tissue by Molecular genetics method', given as 'Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.'})</span></p><p><b>subject</b>: <a>J*********** C***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *35B <span>(Details : {http://pharmakb.org code 'PA165971587' = 'PA165971587', given as '*35B'})</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>derivedFrom</b>: </p><ul><li><a>MolecularSequence/example-pgx-1</a></li><li><a>MolecularSequence/example-pgx-2</a></li></ul></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://www.genenames.org",
              "code": "2625",
              "display": "CYP2D6"
            }
          ]
        }
      }
    ],
    "status": "unknown",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "55233-1",
          "display": "Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result."
        }
      ]
    },
    "subject": {
      "reference": "Patient/727127",
      "display": "J*********** C***********"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://pharmakb.org",
          "code": "PA165971587",
          "display": "*35B"
        }
      ]
    },
    "specimen": {
      "reference": "Specimen/genetics-example1-somatic",
      "display": "Molecular Specimen ID: MLD45-Z4-1234"
    },
    "derivedFrom": [
      {
        "reference": "MolecularSequence/example-pgx-1"
      },
      {
        "reference": "MolecularSequence/example-pgx-2"
      }
    ]
  }