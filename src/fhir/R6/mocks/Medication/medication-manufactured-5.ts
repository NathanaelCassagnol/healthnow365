import { Medication } from "../../types/Resource/medication.types";

export const medicationManufactured5: Medication = {
  resourceType : "Medication",
  id : "med0305",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0305\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0305&quot; </p></div><p><b>code</b>: Timoptic 5mg/ml solution <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#24208-813-10 &quot;Timoptic, 1 BOTTLE, DISPENSING in 1 CARTON (24208-813-10) &gt; 10 mL in 1 BOTTLE, DISPENSING (package)&quot;)</span></p><p><b>marketingAuthorizationHolder</b>: <a name=\"mmanu\"> </a></p><blockquote><p/><p><a name=\"mmanu\"> </a></p><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Opthalmic Solution (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#75359005)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Timolol Maleate (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#75359005)</span></td></tr></table><p><b>strength</b>: 5 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote><h3>Batches</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td style=\"display: none\">*</td><td>9494788</td><td>2017-05-22</td></tr></table></div>"
  },
  contained : [{
    resourceType : "Organization",
    id : "mmanu",
    name : "Medication Manufacturer"
  }],
  code : {
    coding : [{
      system : "http://hl7.org/fhir/sid/ndc",
      code : "24208-813-10",
      display : "Timoptic, 1 BOTTLE, DISPENSING in 1 CARTON (24208-813-10) > 10 mL in 1 BOTTLE, DISPENSING (package)"
    }],
    text : "Timoptic 5mg/ml solution"
  },
  marketingAuthorizationHolder : {
    reference : "#mmanu"
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "75359005",
      display : "Opthalmic Solution (qualifier value)"
    }]
  },
  ingredient : [{
    item : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "75359005",
          display : "Timolol Maleate (substance)"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 5,
        system : "http://unitsofmeasure.org",
        code : "mg"
      },
      denominator : {
        value : 1,
        system : "http://unitsofmeasure.org",
        code : "mL"
      }
    }
  }],
  batch : {
    lotNumber : "9494788",
    expirationDate : "2017-05-22"
  }
}