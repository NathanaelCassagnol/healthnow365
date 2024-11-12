import { Endpoint } from "../../types/endpoint";

// https://hl7.org/fhir/R4/endpoint-example-wadors.json.html
// Example of DICOM WADO-RS endpoint

export const mockEndpoint4: Endpoint = {
    "resourceType": "Endpoint",
    "id": "example-wadors",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>"
    },
    "status": "active",
    "connectionType": {
      "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
      "code": "dicom-wado-rs"
    },
    "name": "PACS Hospital DICOM WADO-RS endpoint",
    "payloadType": [
      {
        "text": "DICOM WADO-RS"
      }
    ],
    "payloadMimeType": [
      "application/dicom"
    ],
    "address": "https://pacs.hospital.org/wado-rs"
  }