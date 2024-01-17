import { Medication } from "../../types/Resource/medication.types";

export const medicationNameOnly: Medication = {
    resourceType : "Medication",
    id : "medicationexample1",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\">Amoxicillin 250mg/5ml Suspension</div>"
    },
    code : {
      text : "Amoxicillin 250mg/5ml Suspension"
    }
  }