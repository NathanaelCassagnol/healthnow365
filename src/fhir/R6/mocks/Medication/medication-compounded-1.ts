import { Medication } from "../../types/Resource/medication.types";

export const medicationCompounded1: Medication = {
    resourceType : "Medication",
    id : "med0317",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0317\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0317&quot; </p></div><p><b>doseForm</b>: Injection Solution (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385219001)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Potassium Chloride <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#8591)</span></td></tr></table><p><b>strength</b>: 20 meq<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code meq = 'meq')</span>/1000 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>1000 ml glucost 50mg/ml Injection <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#313002 &quot;sodium chloride 9 MG/ML Injectable Solution&quot;)</span></td></tr></table><p><b>strength</b>: 5 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span>/100 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>"
    },
    doseForm : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "385219001",
        display : "Injection Solution (qualifier value)"
      }],
      text : "Injection Solution (qualifier value)"
    },
    ingredient : [{
      item : {
        concept : {
          coding : [{
            system : "http://www.nlm.nih.gov/research/umls/rxnorm",
            code : "8591"
          }],
          text : "Potassium Chloride"
        }
      },
      strengthRatio : {
        numerator : {
          value : 20,
          system : "http://unitsofmeasure.org",
          code : "meq"
        },
        denominator : {
          value : 1000,
          system : "http://unitsofmeasure.org",
          code : "mL"
        }
      }
    },
    {
      item : {
        concept : {
          coding : [{
            system : "http://www.nlm.nih.gov/research/umls/rxnorm",
            code : "313002",
            display : "sodium chloride 9 MG/ML Injectable Solution"
          }],
          text : "1000 ml glucost 50mg/ml Injection"
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
          code : "mL"
        }
      }
    }]
  }