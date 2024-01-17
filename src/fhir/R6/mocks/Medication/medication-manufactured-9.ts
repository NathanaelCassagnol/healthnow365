import { Medication } from "../../types/Resource/medication.types";

export const medicationManufactured9: Medication = {
  resourceType : "Medication",
  id : "med0309",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0309\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0309&quot; </p></div><p><b>code</b>: Tylenol PM <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#50580-608-02 &quot;Tylenol PM Extra Strength, 1 BOTTLE in 1 CARTON (50580-608-02) &gt; 100 TABLET, FILM COATED in 1 BOTTLE (package)&quot;)</span></p><p><b>marketingAuthorizationHolder</b>: <a name=\"mmanu\"> </a></p><blockquote><p/><p><a name=\"mmanu\"> </a></p><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Film-coated tablet (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385057009)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Acetaminophen 500 MG <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#315266)</span></td></tr></table><p><b>strength</b>: 500 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1(unit TAB from http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm)<span style=\"background: LightGoldenRodYellow\"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Diphenhydramine Hydrochloride 25 mg <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#901813)</span></td></tr></table><p><b>strength</b>: 25 mg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mg = 'mg')</span>/1(unit TAB from http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm)<span style=\"background: LightGoldenRodYellow\"> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote><h3>Batches</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td style=\"display: none\">*</td><td>9494788</td><td>2017-05-22</td></tr></table></div>"
  },
  contained : [{
    resourceType : "Organization",
    id : "mmanu",
    name : "Medication Manufacturer"
  }],
  code : {
    coding : [{
      system : "http://hl7.org/fhir/sid/ndc",
      code : "50580-608-02",
      display : "Tylenol PM Extra Strength, 1 BOTTLE in 1 CARTON (50580-608-02) > 100 TABLET, FILM COATED in 1 BOTTLE (package)"
    }],
    text : "Tylenol PM"
  },
  marketingAuthorizationHolder : {
    reference : "#mmanu"
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "385057009",
      display : "Film-coated tablet (qualifier value)"
    }]
  },
  ingredient : [{
    item : {
      concept : {
        coding : [{
          system : "http://www.nlm.nih.gov/research/umls/rxnorm",
          code : "315266",
          display : "Acetaminophen 500 MG"
        }]
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
  },
  {
    item : {
      concept : {
        coding : [{
        system : "http://www.nlm.nih.gov/research/umls/rxnorm",
        code : "901813",
          display : "Diphenhydramine Hydrochloride 25 mg"
        }]
      }
    },
    strengthRatio : {
      numerator : {
        value : 25,
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