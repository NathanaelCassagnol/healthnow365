import { Medication } from "../../types/Resource/medication.types";

export const medicationCompounded2: Medication = {
  resourceType : "Medication",
  id : "med0318",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0318\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0318&quot; </p></div><p><b>doseForm</b>: Injection emulsion <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#385221006)</span></p><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Clinimix 4.25/10 sulfite-free (4.25% Amino Acid in 10% Dextrose) Injection, 1000ml <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#0338-1134-03 &quot;CLINIMIX, 1000 mL in 1 BAG (0338-1134-03) (package)&quot;)</span></td></tr></table></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>TPN Electrolytes SODIUM CHLORIDE, CALCIUM CHLORIDE, POTASSIUM CHLORIDE, MAGNESIUM CHLORIDE, and SODIUM ACETATE ANHYDROUS | INJECTION, SOLUTION, CONCENTRATE | 321 mg/20mL, 331 mg/20mL, 1491 mg/20mL, 508 mg/20mL, 2420 mg/20mL <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#0409-5779-01 &quot;TPN Electrolytes, 25 VIAL, SINGLE-DOSE in 1 CARTON (0409-5779-01) &gt; 20 mL in 1 VIAL, SINGLE-DOSE (0409-5779-11) (package)&quot;)</span></td></tr></table></blockquote><blockquote><p><b>ingredient</b></p><h3>Items</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Intralipid 20% IV Fat Emulsion <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#0338-0519-02 &quot;Intralipid, 250 mL in 1 BAG (0338-0519-02) (package)&quot;)</span></td></tr></table></blockquote><h3>Batches</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td style=\"display: none\">*</td><td>123455</td><td>2016-07-09</td></tr></table></div>"
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "385221006",
      display : "Injection emulsion"
    }]
  },
  ingredient : [{
    item : {
      concept : {
        coding : [{
          system : "http://hl7.org/fhir/sid/ndc",
          code : "0338-1134-03",
          display : "CLINIMIX, 1000 mL in 1 BAG (0338-1134-03) (package)"
        }],
        text : "Clinimix 4.25/10 sulfite-free (4.25% Amino Acid in 10% Dextrose) Injection, 1000ml"
      }
    }
  },
  {
    item : {
      concept : {
        coding : [{
          system : "http://hl7.org/fhir/sid/ndc",
          code : "0409-5779-01",
          display : "TPN Electrolytes, 25 VIAL, SINGLE-DOSE in 1 CARTON (0409-5779-01) > 20 mL in 1 VIAL, SINGLE-DOSE (0409-5779-11) (package)"
        }],
        text : "TPN Electrolytes SODIUM CHLORIDE, CALCIUM CHLORIDE, POTASSIUM CHLORIDE, MAGNESIUM CHLORIDE, and SODIUM ACETATE ANHYDROUS | INJECTION, SOLUTION, CONCENTRATE | 321 mg/20mL, 331 mg/20mL, 1491 mg/20mL, 508 mg/20mL, 2420 mg/20mL"
      }
    }
  },
  {
    item : {
      concept : {
        coding : [{
          system : "http://hl7.org/fhir/sid/ndc",
          code : "0338-0519-02",
          display : "Intralipid, 250 mL in 1 BAG (0338-0519-02) (package)"
        }],
        text : "Intralipid 20% IV Fat Emulsion"
      }
    }
  }],
  batch : {
    lotNumber : "123455",
    expirationDate : "2016-07-09"
  }
}