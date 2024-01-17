import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationOxygenSaturation: Observation = {
    resourceType : "Observation",
    id : "satO2",
    meta : {
      profile : ["http://hl7.org/fhir/StructureDefinition/vitalsigns"]
    },
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"satO2\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;satO2&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"vitalsigns.html\">Vital Signs Profile</a></p></div><p><b>identifier</b>: id:\u00a0o1223435-10</p><p><b>partOf</b>: <a href=\"procedure-example-ob.html\">Procedure/ob</a></p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#vital-signs)</span></p><p><b>code</b>: Oxygen saturation in Arterial blood <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#2708-6; <a href=\"https://loinc.org/\">LOINC</a>#59408-5 &quot;Oxygen saturation in Arterial blood by Pulse oximetry&quot;; <a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-mdc.html\">ISO 11073-10101 Health informatics - Point-of-care</a>#150456 &quot;MDC_PULS_OXIM_SAT_O2&quot;)</span></p><p><b>subject</b>: <a href=\"patient-example.html\">Patient/example</a> &quot;Peter CHALMERS&quot;</p><p><b>effective</b>: 2014-12-05T09:30:10+01:00</p><p><b>value</b>: 95 %<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code % = '%')</span></p><p><b>interpretation</b>: Normal (applies to non-numeric results) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ObservationInterpretation.html\">ObservationInterpretation</a>#N &quot;Normal&quot;)</span></p><p><b>device</b>: <a href=\"devicemetric-example.html\">DeviceMetric/example</a></p><h3>ReferenceRanges</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td style=\"display: none\">*</td><td>90 %<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code % = '%')</span></td><td>99 %<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code % = '%')</span></td></tr></table></div>"
    },
    identifier : [{
      system : "http://goodcare.org/observation/id",
      value : "o1223435-10"
    }],
    partOf : [{
      reference : "Procedure/ob"
    }],
    status : "final",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "vital-signs",
        display : "Vital Signs"
      }],
      text : "Vital Signs"
    }],
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "2708-6",
        display : "Oxygen saturation in Arterial blood"
      },
      {
        system : "http://loinc.org",
        code : "59408-5",
        display : "Oxygen saturation in Arterial blood by Pulse oximetry"
      },
      {
        system : "urn:iso:std:iso:11073:10101",
        code : "150456",
        display : "MDC_PULS_OXIM_SAT_O2"
      }]
    },
    subject : {
      reference : "Patient/example"
    },
    effectiveDateTime : "2014-12-05T09:30:10+01:00",
    valueQuantity : {
      value : 95,
      unit : "%",
      system : "http://unitsofmeasure.org",
      code : "%"
    },
    interpretation : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code : "N",
        display : "Normal"
      }],
      text : "Normal (applies to non-numeric results)"
    }],
    device : {
      reference : "DeviceMetric/example"
    },
    referenceRange : [{
      low : {
        value : 90,
        unit : "%",
        system : "http://unitsofmeasure.org",
        code : "%"
      },
      high : {
        value : 99,
        unit : "%",
        system : "http://unitsofmeasure.org",
        code : "%"
      }
    }]
  }