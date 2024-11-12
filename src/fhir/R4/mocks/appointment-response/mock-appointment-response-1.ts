import { AppointmentResponse } from "../../types/appointment-response";

// https://hl7.org/fhir/R4/appointmentresponse-example.json.html
// General Person Example

export const mockAppointmentResponse1: AppointmentResponse = {
    "resourceType": "AppointmentResponse",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Accept Brian MRI results discussion</div>"
    },
    "appointment": {
      "reference": "Appointment/example",
      "display": "Brian MRI results discussion"
    },
    "actor": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "participantStatus": "accepted"
  }