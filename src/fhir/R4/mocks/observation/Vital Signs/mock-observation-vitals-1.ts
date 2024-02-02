import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-f202-temperature.json.html
// Real-world patient - temperature

export const mockObservationVitals1: Observation = {
    "resourceType": "Observation",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>status</b>: entered-in-error</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Temperature <span>(Details : {http://acme.lab code 'BT' = 'BT', given as 'Body temperature'}; {LOINC code '8310-5' = 'Body temperature', given as 'Body temperature'}; {LOINC code '8331-1' = 'Oral temperature', given as 'Oral temperature'}; {SNOMED CT code '56342008' = 'Temperature taking', given as 'Temperature taking'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 1:27:00 PM</p><p><b>performer</b>: <a>Practitioner/f201</a></p><p><b>value</b>: 39 degrees C<span> (Details: UCUM code Cel = 'Cel')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><p><b>bodySite</b>: Oral cavity <span>(Details : {SNOMED CT code '74262004' = 'Oral cavity', given as 'Oral cavity'})</span></p><p><b>method</b>: Oral temperature taking <span>(Details : {SNOMED CT code '89003005' = 'Oral temperature taking', given as 'Oral temperature taking'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>38.2 degrees C</td></tr></table></div>"
    },
    "status": "entered-in-error",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "vital-signs",
            "display": "Vital Signs"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://acme.lab",
          "code": "BT",
          "display": "Body temperature"
        },
        {
          "system": "http://loinc.org",
          "code": "8310-5",
          "display": "Body temperature"
        },
        {
          "system": "http://loinc.org",
          "code": "8331-1",
          "display": "Oral temperature"
        },
        {
          "system": "http://snomed.info/sct",
          "code": "56342008",
          "display": "Temperature taking"
        }
      ],
      "text": "Temperature"
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "issued": "2013-04-04T13:27:00+01:00",
    "performer": [
      {
        "reference": "Practitioner/f201"
      }
    ],
    "valueQuantity": {
      "value": 39,
      "unit": "degrees C",
      "system": "http://unitsofmeasure.org",
      "code": "Cel"
    },
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "H"
          }
        ]
      }
    ],
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "74262004",
          "display": "Oral cavity"
        }
      ]
    },
    "method": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "89003005",
          "display": "Oral temperature taking"
        }
      ]
    },
    "referenceRange": [
      {
        "high": {
          "value": 38.2,
          "unit": "degrees C"
        }
      }
    ]
  }