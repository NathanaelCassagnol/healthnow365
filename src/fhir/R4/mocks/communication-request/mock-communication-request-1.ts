import { CommunicationRequest } from "fhir/R4/types/communication-request";

// https://hl7.org/fhir/R4/communicationrequest-example.json.html
// An example of an alert message

export const mockCommunicationRequest1: CommunicationRequest = {
    "resourceType": "CommunicationRequest",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">To be filled out at a later time</div>"
    },
    "status": "active",
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    }
  }