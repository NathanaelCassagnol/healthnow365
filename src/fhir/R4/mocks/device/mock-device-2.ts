import { Device } from "../../types/device";

// https://hl7.org/fhir/R4/device-example-f001-feedingtube.json.html
// Feeding Tube

export const mockDevice2: Device = {
    "resourceType": "Device",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 12345</p><p><b>status</b>: active</p></div>"
    },
    "identifier": [
      {
        "system": "http:/goodhealthhospital/identifier/devices",
        "value": "12345"
      }
    ],
    "status": "active"
  }