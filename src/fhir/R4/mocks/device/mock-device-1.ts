import { Device } from "../../types/device";

// https://hl7.org/fhir/R4/device-example.json.html
// General Device Example

export const mockDevice1: Device = {
    "resourceType": "Device",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 345675</p></div>"
    },
    "identifier": [
      {
        "system": "http://goodcare.org/devices/id",
        "value": "345675"
      }
    ]
  }