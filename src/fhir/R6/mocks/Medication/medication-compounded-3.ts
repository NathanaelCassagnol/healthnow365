import { Medication } from "../../types/Resource/medication.types";

export const medicationCompounded3: Medication = {
  resourceType : "Medication",
  id : "med0319",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0319\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0319&quot; </p></div><p><b>doseForm</b>: Ointment <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385101003)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Salicylic Acid (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#387253001)</span></td></tr></table><p><b>strength</b>: 5 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span>/100 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Hydrocortisone (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#396458002)</span></td></tr></table><p><b>strength</b>: 1 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span>/100 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>White Petrolatum (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#126066007)</span></td></tr></table><p><b>strength</b>: 94 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span>/100 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span></p></blockquote></div>"
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "385101003",
      display : "Ointment"
    }],
    text : "Ointment"
  },
  ingredient : [{
    item : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "387253001",
          display : "Salicylic Acid (substance)"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 5,
        system : "http://unitsofmeasure.org",
        code : "g"
      },
      denominator : {
        value : 100,
        system : "http://unitsofmeasure.org",
        code : "g"
      }
    }
  },
  {
    item : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "396458002",
          display : "Hydrocortisone (substance)"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 1,
        system : "http://unitsofmeasure.org",
        code : "g"
      },
      denominator : {
        value : 100,
        system : "http://unitsofmeasure.org",
        code : "g"
      }
    }
  },
  {
    item : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "126066007",
          display : "White Petrolatum (substance)"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 94,
        system : "http://unitsofmeasure.org",
        code : "g"
      },
      denominator : {
        value : 100,
        system : "http://unitsofmeasure.org",
        code : "g"
      }
    }
  }]
}