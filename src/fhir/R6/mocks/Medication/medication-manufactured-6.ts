import { Medication } from "../../types/Resource/medication.types";

export const medicationManufactured6: Medication = {
  resourceType : "Medication",
  id : "med0306",
  text : {
    status : "generated",
    div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Medication</b><a name=\"med0306\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Medication &quot;med0306&quot; </p></div><p><b>code</b>: Adcetris <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ndc.html\">National drug codes</a>#51144-050-01 &quot;ADCETRIS, 1 VIAL, SINGLE-DOSE in 1 BOX (51144-050-01) &gt; 10.5 mL in 1 VIAL, SINGLE-DOSE (package)&quot;)</span></p><p><b>marketingAuthorizationHolder</b>: <a name=\"mmanu\"> </a></p><blockquote><p/><p><a name=\"mmanu\"> </a></p><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Lyophilized powder for injectable solution (qualifier value)  <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#421637006)</span></p><h3>Batches</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td style=\"display: none\">*</td><td>12345</td><td>2019-10-31</td></tr></table></div>"
  },
  contained : [{
    resourceType : "Organization",
    id : "mmanu",
    name : "Medication Manufacturer"
  }],
  code : {
    coding : [{
      system : "http://hl7.org/fhir/sid/ndc",
      code : "51144-050-01",
      display : "ADCETRIS, 1 VIAL, SINGLE-DOSE in 1 BOX (51144-050-01) > 10.5 mL in 1 VIAL, SINGLE-DOSE (package)"
    }],
    text : "Adcetris"
  },
  marketingAuthorizationHolder : {
    reference : "#mmanu"
  },
  doseForm : {
    coding : [{
      system : "http://snomed.info/sct",
      code : "421637006",
      display : "Lyophilized powder for injectable solution (qualifier value) "
    }]
  },
  batch : {
    lotNumber : "12345",
    expirationDate : "2019-10-31"
  }
}