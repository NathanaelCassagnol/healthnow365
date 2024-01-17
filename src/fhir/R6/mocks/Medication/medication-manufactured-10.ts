import { Medication } from "../../types/Resource/medication.types";

export const medicationManufactured10: Medication = {
  resourceType : "Medication",
  id : "medexample015",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"medexample015\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;medexample015&quot; </p></div><p><b>code</b>: capecitabine 500 MG Oral Tablet [Xeloda] <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#213293)</span></p><p><b>marketingAuthorizationHolder</b>: <a name=\"mmanu\"> </a></p><blockquote><p/><p><a name=\"mmanu\"> </a></p><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Tablet dose form (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385055001)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Reference</b></td></tr><tr><td style=\"display: none\">*</td><td><a name=\"sub04\"> </a><blockquote><p/><p><a name=\"sub04\"> </a></p><p><b>instance</b>: false</p><h3>Codes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Capecitabine (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#386906001)</span></td></tr></table></blockquote></td></tr></table><p><b>strength</b>: 500 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1(unit TAB from http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm)<span style=\"background: LightGoldenRodYellow\"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote><h3>Batches</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td style=\"display: none\">*</td><td>9494788</td><td>2017-05-22</td></tr></table></div>"
  },
  contained : [{
    resourceType : "Organization",
    id : "mmanu",
    name : "Medication Manufacturer"
  },
  {
    resourceType : "Substance",
    id : "sub04",
    instance : false,
    code : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "386906001",
          display : "Capecitabine (substance)"
        }]
      }
    }
  }],
  code : {
    coding : [{
      system : "http://www.nlm.nih.gov/research/umls/rxnorm",
      code : "213293",
      display : "capecitabine 500 MG Oral Tablet [Xeloda]"
    }]
  },
  marketingAuthorizationHolder : {
    reference : "#mmanu"
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
        reference : "#sub04"
      }
    },
    strengthRatio : {
      numerator : {
        value : 500,
        system : "http://unitsofmeasure.org",
        code : "mg"
      },
      denominator : {
        value : 1,
        system : "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        code : "TAB"
      }
    }
  }],
  batch : {
    lotNumber : "9494788",
    expirationDate : "2017-05-22"
  }
}