import { AllergyIntolerance } from "../../types/Resource/allergy-intolerance.types";

export const noKnownDrugAllergy: AllergyIntolerance = {
    resourceType : "AllergyIntolerance",
    id : "nkda",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>No Known Drug Allergy</p>\n      <p>recordedDate:2015-08-06</p>\n    </div>"
    },
    code : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "409137002",
        display : "No Known Drug Allergy (situation)"
      }],
      text : "NKDA"
    },
    patient : {
      reference : "Patient/mom"
    },
    recordedDate : "2015-08-06T15:37:31-06:00",
    participant : [{
    function : {
        coding : [{
          system : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
          code : "author",
          display : "Author"
        }]
      },
      actor : {
        reference : "Practitioner/example"
      }
    }]
  }