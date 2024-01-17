export const mockObservationBaseExcess = {
    resourceType : "Observation",
    id : "f002",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"f002\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;f002&quot; </p></div><p><b>identifier</b>: <span title=\"   urn:oid:2.16.840.1.113883.4.642.1.7   &amp;#10;   2.16.840.1.113883.4.642.1.118   \">id:\u00a06324\u00a0(use:\u00a0OFFICIAL)</span></p><p><b>status</b>: final</p><p><b>code</b>: Base excess in Blood by calculation <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#11555-0)</span></p><p><b>subject</b>: <a href=\"patient-example-f001-pieter.html\">Patient/f001: P. van de Heuvel</a> &quot;Pieter VAN DE HEUVEL&quot;</p><p><b>effective</b>: 2013-04-02T10:30:10+01:00</p><p><b>issued</b>: Apr 3, 2013, 2:30:10 PM</p><p><b>performer</b>: <a href=\"practitioner-example-f005-al.html\">Practitioner/f005: A. Langeveld</a> &quot;Langeveld ANNE&quot;</p><p><b>value</b>: 12.6 mmol/l<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ObservationInterpretation.html\">ObservationInterpretation</a>#H)</span></p><h3>ReferenceRanges</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td style=\"display: none\">*</td><td>7.1 mmol/l<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>11.2 mmol/l<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
    },
    identifier : [{
      use : "official",
      system : "http://www.bmc.nl/zorgportal/identifiers/observations",
      value : "6324"
    }],
    status : "final",
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "11555-0",
        display : "Base excess in Blood by calculation"
      }]
    },
    subject : {
      reference : "Patient/f001",
      display : "P. van de Heuvel"
    },
    effectiveDateTime : "2013-04-02T10:30:10+01:00",
    issued : "2013-04-03T15:30:10+01:00",
    performer : [{
      reference : "Practitioner/f005",
      display : "A. Langeveld"
    }],
    valueQuantity : {
      value : 12.6,
      unit : "mmol/l",
      system : "http://unitsofmeasure.org",
      code : "mmol/L"
    },
    interpretation : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code : "H",
        display : "High"
      }]
    }],
    referenceRange : [{
      low : {
        value : 7.1,
        unit : "mmol/l",
        system : "http://unitsofmeasure.org",
        code : "mmol/L"
      },
      high : {
        value : 11.2,
        unit : "mmol/l",
        system : "http://unitsofmeasure.org",
        code : "mmol/L"
      }
    }]
  }