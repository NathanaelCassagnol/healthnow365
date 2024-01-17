import { Medication } from "../../types/Resource/medication.types";

export const medicationManufactured3: Medication = {
  resourceType : "Medication",
  id : "med0303",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0303\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0303&quot; </p></div><p><b>code</b>: alemtuzumab 10 MG/ML [Lemtrada] <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#1594660)</span></p><p><b>marketingAuthorizationHolder</b>: <a name=\"mmanu\"> </a></p><blockquote><p/><p><a name=\"mmanu\"> </a></p><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Injection solution (qualifier vallue) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385219001)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Alemtuzamab (substance) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#129472003)</span></td></tr></table><p><b>strength</b>: 12 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1.2 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote><h3>Batches</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td style=\"display: none\">*</td><td>9494788</td><td>2017-05-22</td></tr></table></div>"
  },
    contained : [{
    resourceType : "Organization",
    id : "mmanu",
    name : "Medication Manufacturer"
  }],
  code : {
    coding : [{
      system : "http://www.nlm.nih.gov/research/umls/rxnorm",
      code : "1594660",
      display : "alemtuzumab 10 MG/ML [Lemtrada]"
    }]
  },
  marketingAuthorizationHolder : {
    reference : "#mmanu"
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "385219001",
      display : "Injection solution (qualifier vallue)"
    }]
  },
  ingredient : [{
    item : {
      concept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "129472003",
          display : "Alemtuzamab (substance)"
        }]
      }
    },
    strengthRatio : {
      numerator : {
      value : 12,
        system : "http://unitsofmeasure.org",
        code : "mg"
      },
      denominator : {
        value : 1.2,
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