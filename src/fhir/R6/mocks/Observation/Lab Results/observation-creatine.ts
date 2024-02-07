import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationCreatine: Observation = {
    resourceType : "Observation",
    id : "f204",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"f204\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;f204&quot; </p></div><p><b>identifier</b>: <span title=\"  The observation is complete  &amp;#10;  No reliability concerns  \">id:\u00a01304-03720-Creatinine</span></p><p><b>status</b>: <span title=\"  Creatinine was measured on April fourth  \">final</span></p><p><b>code</b>: Creatinine(Serum) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (labtestcodes#20005)</span></p><p><b>subject</b>: <a href=\"patient-example-f201-roel.html\">Patient/f201: Roel</a> &quot;Roel&quot;</p><p><b>issued</b>: Apr 4, 2013, 1:34:00 PM</p><p><b>performer</b>: <a href=\"practitioner-example-f202-lm.html\">Practitioner/f202: Luigi Maas</a> &quot;Luigi Maas&quot;</p><p><b>value</b>: 122 umol/L<span style=\"background: LightGoldenRodYellow\"> (Details: SNOMED CT code 258814008 = 'umol/L')</span></p><p><b>interpretation</b>: Serum creatinine raised <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#166717003; <a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ObservationInterpretation.html\">ObservationInterpretation</a>#H)</span></p><h3>ReferenceRanges</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Low</b></td><td><b>High</b></td><td><b>Type</b></td></tr><tr><td style=\"display: none\">*</td><td><span title=\"  Healthy creatinine level ranges from 64umol/L to 104umol/L  \">64</span></td><td>104</td><td>Normal Range <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-referencerange-meaning.html\">Observation Reference Range Meaning Codes</a>#normal)</span></td></tr></table></div>"
    },
    identifier : [{
      system : "https://intranet.aumc.nl/labvalues",
      value : "1304-03720-Creatinine"
    }],
    status : "final",
    code : {
      coding : [{
        system : "https://intranet.aumc.nl/labtestcodes",
        code : "20005",
        display : "Creatinine(Serum)"
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
    valueQuantity : {
      value : 122,
      unit : "umol/L",
      system : "http://snomed.info/sct",
      code : "258814008"
    },
    interpretation : [{
      coding : [{
        system : "http://snomed.info/sct",
        code : "166717003",
        display : "Serum creatinine raised"
      },
      {
        system : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code : "H"
      }]
    }],
    referenceRange : [{
      low : {
        value : 64
      },
      high : {
        value : 104
      },
      type : {
        coding : [{
          system : "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
          code : "normal",
          display : "Normal Range"
        }]
      }
    }]
  }