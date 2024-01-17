import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationEstimatedGFR: Observation = {
    resourceType : "Observation",
    id : "f205",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"f205\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;f205&quot; </p></div><p><b>identifier</b>: id:\u00a01304-03720-eGFR</p><p><b>status</b>: <span title=\"   eGFR was measured on April fourth   \">final</span></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#33914-3)</span></p><p><b>subject</b>: <a href=\"patient-example-f201-roel.html\">Patient/f201: Roel</a> &quot;Roel&quot;</p><p><b>issued</b>: Apr 4, 2013, 1:34:00 PM</p><p><b>performer</b>: <a href=\"practitioner-example-f202-lm.html\">Practitioner/f202: Luigi Maas</a> &quot;Luigi Maas&quot;</p><p><b>interpretation</b>: <span title=\"  no value element since have only component values and unable to interpret results needs clinical interpretation  \">interpretation of results should be assigned based upon the level of kindey function <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ()</span></span></p><p><b>note</b>: GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)....</p><p><b>method</b>: <span title=\"   The observation is complete   &amp;#10;   No reliability concerns   \">MDRD <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#702668005)</span></span></p><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#48643-1)</span></p><p><b>value</b>: &gt;60 mL/min/1.73m2<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Low</b></td><td><b>AppliesTo</b></td><td><b>Age</b></td></tr><tr><td style=\"display: none\">*</td><td>60 mL/min/1.73m2<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></td><td>non-black/african-american <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ()</span></td><td>18-? yrs</td></tr></table></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#48642-3)</span></p><p><b>value</b>: 60 mL/min/1.73m2<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Low</b></td><td><b>Age</b></td></tr><tr><td style=\"display: none\">*</td><td>60 mL/min/1.73m2<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></td><td>18-? yrs</td></tr></table></blockquote></div>"
    },
    identifier : [{
      system : "https://intranet.aumc.nl/labvalues",
      value : "1304-03720-eGFR"
    }],
    status : "final",
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "33914-3",
        display : "Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)"
      }]
    },
    subject : {
      reference : "Patient/f201",
      display : "Roel"
    },
    issued : "2013-04-04T14:34:00+01:00",
    performer : [{
      reference : "Practitioner/f202",
      display : "Luigi Maas"
    }],
    interpretation : [{
      text : "interpretation of results should be assigned based upon the level of kindey function"
    }],
    note : [{
      text : "GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)...."
    }],
    method : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "702668005",
        display : "MDRD"
      }]
    },
    component : [{
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "48643-1",
          display : "Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD)"
        }]
      },
      valueQuantity : {
        value : 60,
        comparator : ">",
        unit : "mL/min/1.73m2",
        system : "http://unitsofmeasure.org",
        code : "mL/min/{1.73_m2}"
      },
      referenceRange : [{
        low : {
          value : 60,
          unit : "mL/min/1.73m2",
          system : "http://unitsofmeasure.org",
          code : "mL/min/{1.73_m2}"
        },
        appliesTo : [{
          text : "non-black/african-american"
        }],
        age : {
          low : {
            value : 18,
            unit : "yrs",
            system : "http://unitsofmeasure.org",
            code : "a"
          }
        }
      }]
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "48642-3",
          display : "Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)"
        }]
      },
      valueQuantity : {
        value : 60,
        unit : "mL/min/1.73m2",
        system : "http://unitsofmeasure.org",
        code : "mL/min/{1.73_m2}"
      },
      referenceRange : [{
        low : {
          value : 60,
          unit : "mL/min/1.73m2",
          system : "http://unitsofmeasure.org",
          code : "mL/min/{1.73_m2}"
        },
        age : {
          low : {
            value : 18,
            unit : "yrs",
            system : "http://unitsofmeasure.org",
            code : "a"
          }
        }
      }]
    }]
  }