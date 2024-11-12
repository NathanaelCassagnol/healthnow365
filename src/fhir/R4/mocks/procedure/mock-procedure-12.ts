import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-appendectomy-narrative.json.html
// Example of an appendectomy procedure that is primarily narrative

export const mockProcedure12: Procedure = {
    "resourceType": "Procedure",
    "id": "appendectomy-narrative",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Routine Appendectomy in April 2013 performed by Dr Cecil Surgeon</div>"
    },
    "status": "completed",
    "subject": {
      "reference": "Patient/example"
    }
  }