import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationBloodGroup: Observation = {
    resourceType : "Observation",
    id : "bloodgroup",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"bloodgroup\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;bloodgroup&quot; </p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Blood Group <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#883-9 &quot;ABO group [Type] in Blood&quot;)</span></p><p><b>subject</b>: <a href=\"broken-link.html\">Patient/infant</a></p><p><b>effective</b>: 2018-03-11T16:07:54Z</p><p><b>value</b>: A <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#112144000 &quot;Blood group A (finding)&quot;)</span></p></div>"
    },
    status : "final",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "laboratory",
        display : "Laboratory"
      }],
      text : "Laboratory"
    }],
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "883-9",
        display : "ABO group [Type] in Blood"
      }],
      text : "Blood Group"
    },
    subject : {
      reference : "Patient/infant"
    },
    effectiveDateTime : "2018-03-11T16:07:54+00:00",
    valueCodeableConcept : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "112144000",
        display : "Blood group A (finding)"
      }],
      text : "A"
    }
  }