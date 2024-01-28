import { Observation } from "../../../types/Resource/observation.types";

// https://hl7.org/fhir/R4/observation-example-f003-co2.json.html
// Real-world patient - CO2

export const mockObservationLab5: Observation = {
    "resourceType": "Observation",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: 6325 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Carbon dioxide in blood <span>(Details : {LOINC code '11557-6' = 'Carbon dioxide [Partial pressure] in Blood', given as 'Carbon dioxide in blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.2 kPa<span> (Details: UCUM code kPa = 'kPa')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>4.8 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td><td>6.0 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
        "value": "6325"
      }
    ],
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "11557-6",
          "display": "Carbon dioxide in blood"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "effectivePeriod": {
      "start": "2013-04-02T10:30:10+01:00",
      "end": "2013-04-05T10:30:10+01:00"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "performer": [
      {
        "reference": "Practitioner/f005",
        "display": "A. Langeveld"
      }
    ],
    "valueQuantity": {
      "value": 6.2,
      "unit": "kPa",
      "system": "http://unitsofmeasure.org",
      "code": "kPa"
    },
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "H",
            "display": "High"
          }
        ]
      }
    ],
    "referenceRange": [
      {
        "low": {
          "value": 4.8,
          "unit": "kPa",
          "system": "http://unitsofmeasure.org",
          "code": "kPa"
        },
        "high": {
          "value": 6.0,
          "unit": "kPa",
          "system": "http://unitsofmeasure.org",
          "code": "kPa"
        }
      }
    ]
  }