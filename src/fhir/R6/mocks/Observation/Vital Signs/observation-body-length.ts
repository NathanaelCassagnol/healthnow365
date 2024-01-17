import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationBodyLength: Observation = {
    resourceType : "Observation",
    id : "body-length",
    meta : {
      profile : ["http://hl7.org/fhir/StructureDefinition/vitalsigns"]
    },
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"body-length\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;body-length&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"vitalsigns.html\">Vital Signs Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#vital-signs)</span></p><p><b>code</b>: <span title=\"   This example demonstrates the use of a code translation to allow the observation to be interpreted as Body Length  ( typically used for infants)   \">Body Length <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#8302-2 &quot;Body height&quot;; <a href=\"https://loinc.org/\">LOINC</a>#8306-3 &quot;Body height --lying&quot;)</span></span></p><p><b>subject</b>: <a href=\"patient-example.html\">Patient/example</a> &quot;Peter CHALMERS&quot;</p><p><b>effective</b>: 1999-07-02</p><p><b>value</b>: 25 cm<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code cm = 'cm')</span></p></div>"
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
        code : "8302-2",
        display : "Body height"
      },
      {
        system : "http://loinc.org",
        code : "8306-3",
        display : "Body height --lying",
        userSelected : true
      }],
      text : "Body Length"
    },
    subject : {
      reference : "Patient/example"
    },
    effectiveDateTime : "1999-07-02",
    valueQuantity : {
      value : 25,
      unit : "cm",
      system : "http://unitsofmeasure.org",
      code : "cm"
    }
  }