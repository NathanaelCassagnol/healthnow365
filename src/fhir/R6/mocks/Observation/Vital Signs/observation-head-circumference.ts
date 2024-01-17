import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationHeadCircumference: Observation = {
    resourceType : "Observation",
    id : "head-circumference",
    meta : {
      profile : ["http://hl7.org/fhir/StructureDefinition/vitalsigns"]
    },
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"head-circumference\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;head-circumference&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"vitalsigns.html\">Vital Signs Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#vital-signs)</span></p><p><b>code</b>: Head Circumference <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#9843-4 &quot;Head Occipital-frontal circumference&quot;)</span></p><p><b>subject</b>: <a href=\"patient-example.html\">Patient/example</a> &quot;Peter CHALMERS&quot;</p><p><b>effective</b>: 1999-07-02</p><p><b>value</b>: 51.2 cm<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code cm = 'cm')</span></p></div>"
    },
    status : "final",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "vital-signs",
        display : "Vital Signs"
      }],
      text : "Vital Signs"
    }],
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "9843-4",
        display : "Head Occipital-frontal circumference"
      }],
      text : "Head Circumference"
    },
    subject : {
      reference : "Patient/example"
    },
    effectiveDateTime : "1999-07-02",
    valueQuantity : {
      value : 51.2,
      unit : "cm",
      system : "http://unitsofmeasure.org",
      code : "cm"
    }
  }