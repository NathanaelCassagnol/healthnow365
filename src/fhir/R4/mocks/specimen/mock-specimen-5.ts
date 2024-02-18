import { Specimen } from "../../types/specimen";

// https://hl7.org/fhir/R4/specimen-example-pooled-serum.json.html
// Pooled serum sample

export const mockSpecimen5: Specimen = {
    "resourceType": "Specimen",
    "id": "pooled-serum",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: pooled-serum</p><p><b>accessionIdentifier</b>: 20171120-1234</p><p><b>type</b>: Pooled serum sample <span>(Details : {https://vetmed.iastate.edu/vdl code 'Serum sample, pooled' = 'Serum sample, pooled', given as 'Serum sample, pooled'})</span></p><p><b>subject</b>: <a>Group/herd1</a></p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td></tr><tr><td>*</td><td>James Herriot, FRCVS</td><td>14/11/2017</td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Type</b></td></tr><tr><td>*</td><td>Red Top Blood Collection Tube <span>(Details : {https://vetmed.iastate.edu/vdl code 'RTT' = 'RTT', given as 'Red Top Tube'})</span></td></tr></table><p><b>note</b>: Pooled serum sample from 30 individuals</p></div>"
    },
    "accessionIdentifier": {
      "system": "https://vetmed.iastate.edu/vdl",
      "value": "20171120-1234"
    },
    "type": {
      "coding": [
        {
          "system": "https://vetmed.iastate.edu/vdl",
          "code": "Serum sample, pooled",
          "display": "Serum sample, pooled"
        }
      ],
      "text": "Pooled serum sample"
    },
    "subject": {
      "reference": "Group/herd1"
    },
    "collection": {
      "collector": {
        "display": "James Herriot, FRCVS"
      },
      "collectedDateTime": "2017-11-14"
    },
    "container": [
      {
        "type": {
          "coding": [
            {
              "system": "https://vetmed.iastate.edu/vdl",
              "code": "RTT",
              "display": "Red Top Tube"
            }
          ],
          "text": "Red Top Blood Collection Tube"
        }
      }
    ],
    "note": [
      {
        "text": "Pooled serum sample from 30 individuals"
      }
    ]
  }