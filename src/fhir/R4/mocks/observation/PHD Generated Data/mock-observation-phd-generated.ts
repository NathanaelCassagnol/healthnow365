import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-spirometry.json.html
// Spirometry Example referencing DeviceComponent

export const mockObservationPHD1: Observation = {
    "resourceType": "Observation",
    "id": "656",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 656</p><p><b>identifier</b>: patientId-urn:oid:1.2.4~0000000000000000~152584~20170503155426~820</p><p><b>status</b>: final</p><p><b>code</b>: MDC_FLOW_AWAY_EXP_FORCED_PEAK <span>(Details : {urn:iso:std:iso:11073:10101 code '152584' = '152584', given as 'MDC_FLOW_AWAY_EXP_FORCED_PEAK'})</span></p><p><b>subject</b>: <a>Patient/PatientId-patientId</a></p><p><b>effective</b>: 03/05/2017 3:54:26 PM</p><p><b>performer</b>: <a>Patient/PatientId-patientId</a></p><p><b>value</b>: 820 cL/s<span> (Details: urn:iso:std:iso:11073:10101 code 265201 = '265201')</span></p></div>"
    },
    "identifier": [
      {
        "value": "patientId-urn:oid:1.2.4~0000000000000000~152584~20170503155426~820"
      }
    ],
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "urn:iso:std:iso:11073:10101",
          "code": "152584",
          "display": "MDC_FLOW_AWAY_EXP_FORCED_PEAK"
        }
      ]
    },
    "subject": {
      "reference": "Patient/PatientId-patientId"
    },
    "effectiveDateTime": "2017-05-03T15:54:26-04:00",
    "performer": [
      {
        "reference": "Patient/PatientId-patientId"
      }
    ],
    "valueQuantity": {
      "value": 820,
      "unit": "cL/s",
      "system": "urn:iso:std:iso:11073:10101",
      "code": "265201"
    }
  }