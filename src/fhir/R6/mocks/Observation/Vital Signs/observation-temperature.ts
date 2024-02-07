import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationTemperature: Observation = {
    resourceType : "Observation",
    id : "f202",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"f202\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;f202&quot; </p></div><p><b>status</b>: <span title=\"  Oral temperature was measured on April fourth  \">entered-in-error</span></p><p><b>category</b>: <span title=\"  category code is A code that classifies the general type of observation being made. This is used for searching, sorting and display purposes. \">Vital Signs <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#vital-signs)</span></span></p><p><b>code</b>: Temperature <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (acme.lab#BT &quot;Body temperature&quot;; <a href=\"https://loinc.org/\">LOINC</a>#8310-5 &quot;Body temperature&quot;; <a href=\"https://loinc.org/\">LOINC</a>#8331-1 &quot;Oral temperature&quot;; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#56342008 &quot;Temperature taking&quot;)</span></p><p><b>subject</b>: <span title=\"  No identifier could be provided to this observation  \"><a href=\"patient-example-f201-roel.html\">Patient/f201: Roel</a> &quot;Roel&quot;</span></p><p><b>issued</b>: Apr 4, 2013, 12:27:00 PM</p><p><b>performer</b>: <a href=\"practitioner-example-f201-ab.html\">Practitioner/f201</a> &quot;Dokter Bronsig&quot;</p><p><b>value</b>: 39 degrees C<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code Cel = 'Cel')</span></p><p><b>interpretation</b>: High <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ObservationInterpretation.html\">ObservationInterpretation</a>#H)</span></p><p><b>bodySite</b>: <span title=\"  In the meantime a new oral temperature is measured  &amp;#10;  http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3418963/  \">Oral cavity <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#74262004)</span></span></p><p><b>method</b>: Oral temperature taking <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#89003005)</span></p><h3>ReferenceRanges</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>High</b></td></tr><tr><td style=\"display: none\">*</td><td><span title=\"   0..* Provides guide for interpretation   \">38.2 degrees C</span></td></tr></table></div>"
    },
    status : "entered-in-error",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "vital-signs",
        display : "Vital Signs"
      }]
    }],
    code : {
      coding : [{
        system : "http://acme.lab",
        code : "BT",
        display : "Body temperature"
      },
      {
        system : "http://loinc.org",
        code : "8310-5",
        display : "Body temperature"
      },
      {
        system : "http://loinc.org",
        code : "8331-1",
        display : "Oral temperature"
      },
      {
        system : "http://snomed.info/sct",
        code : "56342008",
        display : "Temperature taking"
      }],
      text : "Temperature"
    },
    subject : {
      reference : "Patient/f201",
      display : "Roel"
    },
    issued : "2013-04-04T13:27:00+01:00",
    performer : [{
      reference : "Practitioner/f201"
    }],
    valueQuantity : {
      value : 39,
      unit : "degrees C",
      system : "http://unitsofmeasure.org",
      code : "Cel"
    },
    interpretation : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code : "H"
      }]
    }],
    bodySite : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "74262004",
        display : "Oral cavity"
      }]
    },
    method : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "89003005",
        display : "Oral temperature taking"
      }]
    },
    referenceRange : [{
      high : {
        value : 38.2,
        unit : "degrees C"
      }
    }]
  }