import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-vp-oyster.json.html
// Example of an Observations made about a location - an oyster farm

export const mockObservationLocation: Observation = {
    "resourceType": "Observation",
    "id": "vp-oyster",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vp-oyster</p><p><b>identifier</b>: 20171014-1234 (OFFICIAL)</p><p><b>status</b>: preliminary</p><p><b>code</b>: OYSTER TESTING <span>(Details : {LOINC code '41857-4' = 'Vibrio parahaemolyticus DNA [Presence] in Unspecified specimen by Probe and target amplification method', given as 'Vibrio parahaemolyticus DNA [Presence] in Unspecified specimen by Probe and target amplification method'}; {http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/test-codes code 'VP MULTI PCR' = 'VP MULTI PCR', given as 'VP MULTI PCR'})</span></p><p><b>subject</b>: Sonoma oyster farm</p><p><b>effective</b>: 12/10/2017</p><p><b>issued</b>: 14/10/2017 11:11:24 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: POSITIVE <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive (qualifier value)'}; {http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/result-codes code 'POSITIVE' = 'POSITIVE', given as 'POSITIVE'})</span></p><p><b>interpretation</b>: Abnormal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'A' = 'Abnormal', given as 'Abnormal'})</span></p><p><b>specimen</b>: Live Oysters Acc#20171014-1234</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Text</b></td></tr><tr><td>*</td><td>NEGATIVE</td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://sonomacounty.ca.gov/Health/Public-Health/Laboratory",
        "value": "20171014-1234"
      }
    ],
    "status": "preliminary",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "41857-4",
          "display": "Vibrio parahaemolyticus DNA [Presence] in Unspecified specimen by Probe and target amplification method"
        },
        {
          "system": "http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/test-codes",
          "code": "VP MULTI PCR",
          "display": "VP MULTI PCR"
        }
      ],
      "text": "OYSTER TESTING"
    },
    "subject": {
      "display": "Sonoma oyster farm"
    },
    "effectiveDateTime": "2017-10-12",
    "issued": "2017-10-14T23:11:24Z",
    "performer": [
      {
        "reference": "Practitioner/f005",
        "display": "A. Langeveld"
      }
    ],
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "10828004",
          "display": "Positive (qualifier value)"
        },
        {
          "system": "http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/result-codes",
          "code": "POSITIVE",
          "display": "POSITIVE"
        }
      ],
      "text": "POSITIVE"
    },
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "A",
            "display": "Abnormal"
          }
        ]
      }
    ],
    "specimen": {
      "display": "Live Oysters Acc#20171014-1234"
    },
    "referenceRange": [
      {
        "text": "NEGATIVE"
      }
    ]
  }