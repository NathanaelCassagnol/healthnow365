import { Medication } from "../../types/Resource/medication.types";

export const medicationManufactured2: Medication = {
  resourceType : "Medication",
  id : "med0302",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0302\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0302&quot; </p></div><p><b>code</b>: Zosyn (piperacillin/tazobactam) 4.5gm injection <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#0206-8862-02 &quot;Zosyn in Galaxy Containers, 12 BAG in 1 BOX (0206-8862-02) &gt; 100 mL in 1 BAG (0206-8862-01) (package)&quot;)</span></p><p><b>marketingAuthorizationHolder</b>: <a name=\"mmanu\"> </a></p><blockquote><p/><p><a name=\"mmanu\"> </a></p><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Injection solution (qualifier vallue) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385219001)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Piperacillin Sodium <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#203134)</span></td></tr></table><p><b>strength</b>: 4 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span>/20 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Tazobactam Sodium <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#221167)</span></td></tr></table><p><b>strength</b>: 0.5 g<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code g = 'g')</span>/20 mL<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>"
  },
    contained : [{
    resourceType : "Organization",
    id : "mmanu",
    name : "Medication Manufacturer"
  }],
  code : {
    coding : [{
      system : "http://hl7.org/fhir/sid/ndc",
      code : "0206-8862-02",
      display : "Zosyn in Galaxy Containers, 12 BAG in 1 BOX (0206-8862-02) > 100 mL in 1 BAG (0206-8862-01) (package)"
    }],
    text : "Zosyn (piperacillin/tazobactam) 4.5gm injection"
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
          system : "http://www.nlm.nih.gov/research/umls/rxnorm",
          code : "203134",
          display : "Piperacillin Sodium"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 4,
        system : "http://unitsofmeasure.org",
        code : "g"
      },
      denominator : {
        value : 20,
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
          code : "221167",
          display : "Tazobactam Sodium"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 0.5,
        system : "http://unitsofmeasure.org",
        code : "g"
      },
      denominator : {
        value : 20,
        system : "http://unitsofmeasure.org",
        code : "mL"
      }
    }
  }]
}