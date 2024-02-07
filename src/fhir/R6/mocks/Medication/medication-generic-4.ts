import { Medication } from "../../types/Resource/medication.types";

export const medicationGeneric4: Medication = {
  resourceType : "Medication",
  id : "med0313",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0313\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0313&quot; </p></div><p><b>code</b>: Lorazepam 2mg/ml injection solution 1ml vial (product) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#400621001)</span></p><p><b>doseForm</b>: Injection solution (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385219001)</span></p><p><b>totalVolume</b>: 1 ml<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code ml = 'ml')</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Lorazepam (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#387106007)</span></td></tr></table><p><b>strength</b>: 2 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>"
  },
  code : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "400621001",
      display : "Lorazepam 2mg/ml injection solution 1ml vial (product)"
    }]
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "385219001",
      display : "Injection solution (qualifier value)"
    }]
  },
  totalVolume : {
    value : 1,
    unit : "ml",
    system : "http://unitsofmeasure.org",
    code : "ml"
  },
  ingredient : [{
    item : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "387106007",
          display : "Lorazepam (substance)"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 2,
        system : "http://unitsofmeasure.org",
        code : "mg"
      },
      denominator : {
        value : 1,
        system : "http://unitsofmeasure.org",
        code : "mL"
      }
    }
  }]
}