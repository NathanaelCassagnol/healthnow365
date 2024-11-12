import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample1.json.html
// Name element only populated - Amoxicillin 250mg/5ml Suspension

export const mockMedicationNameOnly: Medication = {
    "resourceType": "Medication",
    "id": "medicationexample1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Amoxicillin 250mg/5ml Suspension</div>"
    },
    "code": {
      "text": "Amoxicillin 250mg/5ml Suspension"
    }
  }