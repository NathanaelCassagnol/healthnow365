import { Medication } from "../../types/Resource/medication.types";

export const medicationGeneric5: Medication = {
  resourceType : "Medication",
  id : "med0314",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0314\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0314&quot; </p></div><p><b>code</b>: alprazolam 0.25 MG Oral Tablet <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#308047)</span></p><p><b>doseForm</b>: Tablet dose form (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385055001)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Alprazolam (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#386983007)</span></td></tr></table><p><b>strength</b>: 0.25 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1 Tablet<span style=\"background: LightGoldenRodYellow\"> (Details: SNOMED CT code 385055001 = 'Tablet')</span></p></blockquote></div>"
  },
  code : {
    coding : [{
      system : "http://www.nlm.nih.gov/research/umls/rxnorm",
      code : "308047",
      display : "alprazolam 0.25 MG Oral Tablet"
    }]
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "385055001",
      display : "Tablet dose form (qualifier value)"
    }]
  },
  ingredient : [{
    item : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "386983007",
          display : "Alprazolam (substance)"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 0.25,
        system : "http://unitsofmeasure.org",
        code : "mg"
      },
      denominator : {
        value : 1,
        unit : "Tablet",
        system : "http://snomed.info/sct",
        code : "385055001"
      }
    }
  }]
}