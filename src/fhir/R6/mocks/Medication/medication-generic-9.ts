import { Medication } from "../../types/Resource/medication.types";

export const medicationGeneric9: Medication = {
  resourceType : "Medication",
  id : "med0320",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0320\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0320&quot; </p></div><p><b>code</b>: Azithromycin 250mg capsule (product) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#324252006)</span></p><p><b>doseForm</b>: Tablet dose form (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385055001)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Reference</b></td></tr><tr><td style=\"display: none\">*</td><td><a name=\"sub03\"> </a><blockquote><p/><p><a name=\"sub03\"> </a></p><p><b>instance</b>: false</p><h3>Codes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Azithromycin (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#387531004)</span></td></tr></table></blockquote></td></tr></table><p><b>strength</b>: 250 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1(unit TAB from http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm)<span style=\"background: LightGoldenRodYellow\"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote></div>"
  },
  contained : [{
    resourceType : "Substance",
    id : "sub03",
    instance : false,
    code : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "387531004",
          display : "Azithromycin (substance)"
        }]
      }
    }
  }],
  code : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "324252006",
      display : "Azithromycin 250mg capsule (product)"
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
      reference : {
        reference : "#sub03"
      }
    },
    strengthRatio : {
      numerator : {
        value : 250,
        system : "http://unitsofmeasure.org",
        code : "mg"
      },
      denominator : {
        value : 1,
        system : "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        code : "TAB"
      }
    }
  }]
}