import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationAskOrder: Observation = {
    resourceType : "Observation",
    id : "date-lastmp",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"date-lastmp\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;date-lastmp&quot; </p></div><p><b>status</b>: final</p><p><b>category</b>: AOE <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#survey &quot;Survey&quot;)</span></p><p><b>code</b>: Date last menstrual period <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#8665-2)</span></p><p><b>subject</b>: <a href=\"patient-example-b.html\">Patient/pat2</a> &quot;Duck DONALD&quot;</p><p><b>effective</b>: 2016-01-24</p><p><b>value</b>: 2016-12-30</p></div>"
    },
    status : "final",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "survey",
        display : "Survey"
      }],
      text : "AOE"
    }],
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "8665-2",
        display : "Date last menstrual period"
      }],
      text : "Date last menstrual period"
    },
    subject : {
      reference : "Patient/pat2"
    },
    effectiveDateTime : "2016-01-24",
    valueDateTime : "2016-12-30"
  }