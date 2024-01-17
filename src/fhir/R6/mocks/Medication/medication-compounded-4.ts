import { Medication } from "../../types/Resource/medication.types";

export const medicationCompounded4: Medication = {
  resourceType : "Medication",
  id : "med0323",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0323\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0323&quot; </p></div><p><b>code</b>: WHO Hand Sanitizer Formulation 1% - 10L <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ()</span></p><p><b>doseForm</b>: Solution (basic dose form) (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#739006009)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Reference</b></td></tr><tr><td style=\"display: none\">*</td><td><a name=\"sub10\"> </a><blockquote><p/><p><a name=\"sub10\"> </a></p><p><b>instance</b>: false</p><h3>Codes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Ethanol (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#419442005)</span></td></tr></table></blockquote></td></tr></table><p><b>strength</b>: 8333 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Reference</b></td></tr><tr><td style=\"display: none\">*</td><td><a name=\"sub11\"> </a><blockquote><p/><p><a name=\"sub11\"> </a></p><p><b>instance</b>: false</p><h3>Codes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Hydrogen peroxide (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#387171003)</span></td></tr></table></blockquote></td></tr></table><p><b>strength</b>: 417 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Reference</b></td></tr><tr><td style=\"display: none\">*</td><td><a name=\"sub12\"> </a><blockquote><p/><p><a name=\"sub12\"> </a></p><p><b>instance</b>: false</p><h3>Codes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Glycerol (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#80582002)</span></td></tr></table></blockquote></td></tr></table><p><b>strength</b>: 145 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Reference</b></td></tr><tr><td style=\"display: none\">*</td><td><a name=\"sub13\"> </a><blockquote><p/><p><a name=\"sub13\"> </a></p><p><b>instance</b>: false</p><h3>Codes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Distilled Water (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#444883009)</span></td></tr></table></blockquote></td></tr></table><p><b>strength</b>: QS <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"codesystem-medication-ingredientstrength.html\">Medication Ingredient Strength Codes</a>#qs)</span></p></blockquote></div>"
  },
  contained : [{
    resourceType : "Substance",
    id : "sub10",
    instance : false,
    code : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "419442005",
          display : "Ethanol (substance)"
        }]
      }
    }
  },
  {
    resourceType : "Substance",
    id : "sub11",
    instance : false,
    code : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "387171003",
          display : "Hydrogen peroxide (substance)"
        }]
      }
    }
  },
  {
    resourceType : "Substance",
    id : "sub12",
    instance : false,
    code : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "80582002",
          display : "Glycerol (substance)"
        }]
      }
    }
  },
  {
    resourceType : "Substance",
    id : "sub13",
    instance : false,
    code : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "444883009",
          display : "Distilled Water (substance)"
        }]
      }
    }
  }],
  code : {
    text : "WHO Hand Sanitizer Formulation 1% - 10L"
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "739006009",
      display : "Solution (basic dose form) (qualifier value)"
    }]
  },
  ingredient : [{
    item : {
      reference : {
        reference : "#sub10"
      }
    },
    strengthQuantity : {
      value : 8333,
      system : "http://unitsofmeasure.org",
      code : "mL"
    }
  },
  {
    item : {
      reference : {
        reference : "#sub11"
      }
    },
    strengthQuantity : {
      value : 417,
      system : "http://unitsofmeasure.org",
      code : "mL"
    }
  },
  {
    item : {
      reference : {
        reference : "#sub12"
      }
    },
    strengthQuantity : {
      value : 145,
      system : "http://unitsofmeasure.org",
      code : "mL"
    }
  },
  {
    item : {
      reference : {
        reference : "#sub13"
      }
    },
    strengthCodeableConcept : {
      coding : [{
        system : "http://hl7.org/fhir/CodeSystem/medication-ingredientstrength",
        code : "qs",
        display : "QS"
      }]
    }
  }]
}