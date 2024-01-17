import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationErythrocyte: Observation = {
    resourceType : "Observation",
    id : "f004",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"f004\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;f004&quot; </p></div><p><b>identifier</b>: <span title=\"    urn:oid:2.16.840.1.113883.4.642.1.7    \">id:\u00a06326\u00a0(use:\u00a0OFFICIAL)</span></p><p><b>status</b>: final</p><p><b>code</b>: Erythrocytes [#/volume] in Blood by Automated count <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#789-8)</span></p><p><b>subject</b>: <a href=\"patient-example-f001-pieter.html\">Patient/f001: P. van de Heuvel</a> &quot;Pieter VAN DE HEUVEL&quot;</p><p><b>effective</b>: 2013-04-02T10:30:10+01:00</p><p><b>issued</b>: Apr 3, 2013, 2:30:10 PM</p><p><b>performer</b>: <a href=\"practitioner-example-f005-al.html\">Practitioner/f005: A. Langeveld</a> &quot;Langeveld ANNE&quot;</p><p><b>value</b>: 4.12 10^12/L<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code 10*12/L = '10*12/L')</span></p><p><b>interpretation</b>: Low <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ObservationInterpretation.html\">ObservationInterpretation</a>#L)</span></p><h3>ReferenceRanges</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Text</b></td></tr><tr><td style=\"display: none\">*</td><td>12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L</td></tr></table></div>"
    },
    identifier : [{
      use : "official",
      system : "http://www.bmc.nl/zorgportal/identifiers/observations",
      value : "6326"
    }],
    status : "final",
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "789-8",
        display : "Erythrocytes [#/volume] in Blood by Automated count"
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
      value : 4.12,
      unit : "10^12/L",
      system : "http://unitsofmeasure.org",
      code : "10*12/L"
    },
    interpretation : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code : "L",
        display : "Low"
      }]
    }],
    referenceRange : [{
      text : "12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L"
    }]
  }