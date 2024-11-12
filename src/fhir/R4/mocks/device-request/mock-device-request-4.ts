import { DeviceRequest } from "fhir/R4/types/device-request";

// https://hl7.org/fhir/R4/devicerequest-left-lens.json.html
// Left Lens prescription using the parameters element

export const mockDeviceRequest4: DeviceRequest = {
    "resourceType": "DeviceRequest",
    "id": "left-lens",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: left-lens</p><p><b>identifier</b>: 15013L</p><p><b>groupIdentifier</b>: 15013</p><p><b>status</b>: completed</p><p><b>intent</b>: original-order</p><p><b>code</b>: Lens <span>(Details : {http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct code 'lens' = 'Lens)</span></p><blockquote><p><b>parameter</b></p><p><b>code</b>: sphere, left lens <span>(Details : {LOINC code '28842-3' = 'Sphere distance Glasses prescription.lens - left', given as 'Sphere distance Glasses prescription.lens - left'})</span></p><p><b>value</b>: -1.00 Diopter<span> (Details: UCUM code [diop] = 'diop')</span></p></blockquote><blockquote><p><b>parameter</b></p><p><b>code</b>: cylinder, left lens <span>(Details : {LOINC code '28843-1' = 'Cylinder distance Glasses prescription.lens - left', given as 'Cylinder base distance Glasses prescription.lens - left'})</span></p><p><b>value</b>: -0.50 Diopter<span> (Details: UCUM code [diop] = 'diop')</span></p></blockquote><blockquote><p><b>parameter</b></p><p><b>code</b>: axis, left lens <span>(Details : {LOINC code '28844-9' = 'Axis distance Glasses prescription.lens - left', given as ' Axis distance Glasses prescription.lens - left'})</span></p><p><b>value</b>: 180 Degrees<span> (Details: UCUM code deg = 'deg')</span></p></blockquote><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: 15/06/2014</p><p><b>requester</b>: <a>Practitioner/example</a></p></div>"
    },
    "identifier": [
      {
        "system": "http://www.happysight.com/prescription",
        "value": "15013L"
      }
    ],
    "groupIdentifier": {
      "system": "http://acme.org",
      "value": "15013"
    },
    "status": "completed",
    "intent": "original-order",
    "codeCodeableConcept": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
          "code": "lens"
        }
      ]
    },
    "parameter": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "28842-3",
              "display": "Sphere distance Glasses prescription.lens - left"
            }
          ],
          "text": "sphere, left lens"
        },
        "valueQuantity": {
          "value": -1.00,
          "unit": "Diopter",
          "system": "http://unitsofmeasure.org",
          "code": "[diop]"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "28843-1",
              "display": "Cylinder base distance Glasses prescription.lens - left"
            }
          ],
          "text": "cylinder, left lens"
        },
        "valueQuantity": {
          "value": -0.50,
          "unit": "Diopter",
          "system": "http://unitsofmeasure.org",
          "code": "[diop]"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "28844-9",
              "display": " Axis distance Glasses prescription.lens - left"
            }
          ],
          "text": "axis, left lens"
        },
        "valueQuantity": {
          "value": 180,
          "unit": "Degrees",
          "system": "http://unitsofmeasure.org",
          "code": "deg"
        }
      }
    ],
    "subject": {
      "reference": "Patient/example"
    },
    "occurrenceDateTime": "2014-06-15",
    "requester": {
      "reference": "Practitioner/example"
    }
  }