import { Medication } from "../../types/Resource/medication.types";

export const medicationManufactured8: Medication = {
  resourceType : "Medication",
  id : "med0308",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0308\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0308&quot; </p></div><p><b>code</b>: Percocet tablet <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#63481-623-70 &quot;PERCOCET, 100 TABLET in 1 BOTTLE (63481-623-70) (package)&quot;)</span></p><p><b>marketingAuthorizationHolder</b>: <a name=\"mmanu\"> </a></p><blockquote><p/><p><a name=\"mmanu\"> </a></p><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Tablet dose form (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385055001)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>oxycodone hydrochloride <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#82063)</span></td></tr></table><p><b>strength</b>: 5 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1(unit TAB from http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm)<span style=\"background: LightGoldenRodYellow\"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Acetaminophen <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#161)</span></td></tr></table><p><b>strength</b>: 325 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1(unit TAB from http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm)<span style=\"background: LightGoldenRodYellow\"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote><h3>Batches</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td style=\"display: none\">*</td><td>658484</td><td>2020-07-31</td></tr></table></div>"
  },
  contained : [{
    resourceType : "Organization",
    id : "mmanu",
    name : "Medication Manufacturer"
  }],
    code : {
    coding : [{
      system : "http://hl7.org/fhir/sid/ndc",
      code : "63481-623-70",
      display : "PERCOCET, 100 TABLET in 1 BOTTLE (63481-623-70) (package)"
    }],
    text : "Percocet tablet"
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
      concept : {
        coding : [{
          system : "http://www.nlm.nih.gov/research/umls/rxnorm",
          code : "82063",
          display : "oxycodone hydrochloride"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 5,
        system : "http://unitsofmeasure.org",
        code : "mg"
      },
      denominator : {
        value : 1,
        system : "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
        code : "TAB"
      }
    }
  },
  {
    item : {
      concept : {
        coding : [{
          system : "http://www.nlm.nih.gov/research/umls/rxnorm",
          code : "161"
        }],
        text : "Acetaminophen"
      }
    },
    strengthRatio : {
      numerator : {
        value : 325,
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
    lotNumber : "658484",
    expirationDate : "2020-07-31"
  }
}