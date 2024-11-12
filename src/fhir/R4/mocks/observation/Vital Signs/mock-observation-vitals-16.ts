import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-bloodpressure-cancel.json.html
// Blood Pressure Measurement cancelled

export const mockObservationVitals16: Observation = {
    "resourceType": "Observation",
    "id": "blood-pressure-cancel",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: blood-pressure-cancel</p><p><b>meta</b>: </p><p><b>identifier</b>: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281</p><p><b>status</b>: cancelled</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Blood pressure systolic &amp; diastolic <span>(Details : {LOINC code '85354-9' = 'Blood pressure panel with all children optional', given as 'Blood pressure panel with all children optional'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 17/09/2012</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'low'})</span></p><p><b>note</b>: In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component</p><p><b>bodySite</b>: Right arm <span>(Details : {SNOMED CT code '368209003' = 'Right upper arm', given as 'Right arm'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Systolic blood pressure <span>(Details : {LOINC code '8480-6' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {SNOMED CT code '271649006' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {http://acme.org/devices/clinical-codes code 'bp-s' = 'bp-s', given as 'Systolic Blood pressure'})</span></p><p><b>dataAbsentReason</b>: Not Asked <span>(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code 'not-asked' = 'Not Asked', given as 'Not Asked'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diastolic blood pressure <span>(Details : {LOINC code '8462-4' = 'Diastolic blood pressure', given as 'Diastolic blood pressure'})</span></p><p><b>dataAbsentReason</b>: Not Asked <span>(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code 'not-asked' = 'Not Asked', given as 'Not Asked'})</span></p></blockquote></div>"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281"
      }
    ],
    "status": "cancelled",
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
          "system": "http://loinc.org",
          "code": "85354-9",
          "display": "Blood pressure panel with all children optional"
        }
      ],
      "text": "Blood pressure systolic & diastolic"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "2012-09-17",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "L",
            "display": "low"
          }
        ],
        "text": "Below low normal"
      }
    ],
    "note": [
      {
        "text": "In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component"
      }
    ],
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "368209003",
          "display": "Right arm"
        }
      ]
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8480-6",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "271649006",
              "display": "Systolic blood pressure"
            },
            {
              "system": "http://acme.org/devices/clinical-codes",
              "code": "bp-s",
              "display": "Systolic Blood pressure"
            }
          ]
        },
        "dataAbsentReason": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
              "code": "not-asked",
              "display": "Not Asked"
            }
          ]
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8462-4",
              "display": "Diastolic blood pressure"
            }
          ]
        },
        "dataAbsentReason": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
              "code": "not-asked",
              "display": "Not Asked"
            }
          ]
        }
      }
    ]
  }