import { Medication } from "../../types/Resource/medication.types";

export const medicationGeneric6: Medication = {
  resourceType : "Medication",
  id : "med0315",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0315\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0315&quot; </p></div><p><b>code</b>: mometasone furoate 0.05 MG/ACTUAT <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#358793)</span></p><p><b>doseForm</b>: Nasal Spray <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385157007)</span></p></div>"
  },
  code : {
    coding : [{
      system : "http://www.nlm.nih.gov/research/umls/rxnorm",
      code : "358793",
      display : "mometasone furoate 0.05 MG/ACTUAT"
    }]
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "385157007",
      display : "Nasal Spray"
    }]
  }
}