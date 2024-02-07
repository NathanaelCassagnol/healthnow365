import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationStaphylococcus: Observation = {
    resourceType : "Observation",
    id : "f206",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"f206\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;f206&quot; </p></div><p><b>status</b>: final</p><p><b>code</b>: Blood culture <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (acmelabs.org#104177; <a href=\"https://loinc.org/\">LOINC</a>#600-7 &quot;Bacteria identified in Blood by Culture&quot;)</span></p><p><b>subject</b>: <span title=\"  No identifier could be provided to this observation  \"><a href=\"patient-example-f201-roel.html\">Patient/f201: Roel</a> &quot;Roel&quot;</span></p><p><b>issued</b>: Mar 11, 2013, 9:28:00 AM</p><p><b>performer</b>: <a href=\"practitioner-example-f202-lm.html\">Practitioner/f202: Luigi Maas</a> &quot;Luigi Maas&quot;</p><p><b>value</b>: Staphylococcus aureus <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#3092008)</span></p><p><b>interpretation</b>: Positive <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ObservationInterpretation.html\">ObservationInterpretation</a>#POS)</span></p><p><b>method</b>: <span title=\"  BodySite not relevant  \">Blood culture for bacteria, including anaerobic screen <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#104177005)</span></span></p></div>"
    },
    status : "final",
    code : {
      coding : [{
        system : "http://acmelabs.org",
        code : "104177",
        display : "Blood culture"
      },
      {
        system : "http://loinc.org",
        code : "600-7",
        display : "Bacteria identified in Blood by Culture"
      }]
    },
    subject : {
      reference : "Patient/f201",
      display : "Roel"
    },
    issued : "2013-03-11T10:28:00+01:00",
    performer : [{
      reference : "Practitioner/f202",
      display : "Luigi Maas"
    }],
    valueCodeableConcept : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "3092008",
        display : "Staphylococcus aureus"
      }]
    },
    interpretation : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code : "POS"
      }]
    }],
    method : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "104177005",
        display : "Blood culture for bacteria, including anaerobic screen"
      }]
    }
  }