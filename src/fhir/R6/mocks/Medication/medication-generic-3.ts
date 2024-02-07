import { Medication } from "../../types/Resource/medication.types";

export const medicationGeneric3: Medication = {
  resourceType : "Medication",
  id : "med0312",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0312\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0312&quot; </p></div><p><b>code</b>: Nystatin 100,000 units/ml oral suspension (product) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#324689003)</span></p><p><b>doseForm</b>: Oral suspension (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#387048002)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Reference</b></td></tr><tr><td style=\"display: none\">*</td><td><a name=\"sub02\"> </a><blockquote><p/><p><a name=\"sub02\"> </a></p><p><b>instance</b>: false</p><h3>Codes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Nystatin (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#387048002)</span></td></tr></table></blockquote></td></tr></table><p><b>strength</b>: 100000 [IU]<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code [IU] = 'IU')</span>/1 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>"
  },
  contained : [{
    resourceType : "Substance",
    id : "sub02",
    instance : false,
    code : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "387048002",
          display : "Nystatin (substance)"
        }]
      }
    }
  }],
  code : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "324689003",
      display : "Nystatin 100,000 units/ml oral suspension (product)"
    }]
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "387048002",
      display : "Oral suspension (qualifier value)"
    }]
  },
  ingredient : [{
    item : {
      reference : {
        reference : "#sub02"
      }
    },
    strengthRatio : {
      numerator : {
        value : 100000,
        system : "http://unitsofmeasure.org",
        code : "[IU]"
      },
      denominator : {
        value : 1,
        system : "http://unitsofmeasure.org",
        code : "mL"
      }
    }
  }]
}