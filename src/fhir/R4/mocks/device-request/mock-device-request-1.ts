import { DeviceRequest } from "fhir/R4/types/device-request";

// https://hl7.org/fhir/R4/devicerequest-example.json.html
// Wheelchair assignment

export const mockDeviceRequest1: DeviceRequest = {
    "resourceType": "DeviceRequest",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>status</b>: completed</p><p><b>intent</b>: original-order</p><p><b>code</b>: <a>Device/example</a></p><p><b>subject</b>: <a>Patient/example</a></p></div>"
    },
    "status": "completed",
    "intent": "original-order",
    "codeReference": {
      "reference": "Device/example"
    },
    "subject": {
      "reference": "Patient/example"
    }
  }