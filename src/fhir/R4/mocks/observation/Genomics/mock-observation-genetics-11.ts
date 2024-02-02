import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-TPMT-haplotype-one.json.html
// Example of a TPMT haplotype observation

export const mockObservationGenetics11: Observation = {
    "resourceType": "Observation",
    "id": "example-TPMT-haplotype-one",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-TPMT-haplotype-one</p><p><b>status</b>: unknown</p><p><b>code</b>: Haplotype Call <span>(Details : {SNOMED CT code '363779003' = 'Genotype determination', given as 'Genotype determination'})</span></p><p><b>subject</b>: <a>E***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *1 <span>(Details : {http://pharmakb.org code 'PA166128347' = 'PA166128347', given as '*1'})</span></p><p><b>derivedFrom</b>: <a>MolecularSequence/example-TPMT-one</a></p></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://www.genenames.org",
              "code": "12014",
              "display": "TPMT"
            }
          ]
        }
      }
    ],
    "status": "unknown",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "363779003",
          "display": "Genotype determination"
        }
      ],
      "text": "Haplotype Call"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "E***********"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://pharmakb.org",
          "code": "PA166128347",
          "display": "*1"
        }
      ]
    },
    "derivedFrom": [
      {
        "reference": "MolecularSequence/example-TPMT-one"
      }
    ]
  }