import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationBloodPressureCancelled: Observation = {
    resourceType : "Observation",
    id : "blood-pressure-cancel",
    meta : {
      profile : ["http://hl7.org/fhir/StructureDefinition/vitalsigns"]
    },
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"blood-pressure-cancel\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;blood-pressure-cancel&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"vitalsigns.html\">Vital Signs Profile</a></p></div><p><b>identifier</b>: <span title=\" \tEH  Narrative created by build\n\t&lt;text&gt;\n\t\t&lt;status value=&quot;generated&quot;/&gt;\n\t\t&lt;div xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;Sept 17, 2012: Systolic Blood pressure 107/60 mmHg (low)&lt;/div&gt;\n\t&lt;/text&gt;\n \">id:\u00a0<a href=\"http://terminology.hl7.org/5.4.0/NamingSystem-uri.html\">#</a>urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281</span></p><p><b>status</b>: cancelled</p><p><b>category</b>: Vital Signs <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#vital-signs)</span></p><p><b>code</b>: Blood pressure systolic &amp; diastolic <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#85354-9 &quot;Blood pressure panel with all children optional&quot;)</span></p><p><b>subject</b>: <a href=\"patient-example.html\">Patient/example</a> &quot;Peter CHALMERS&quot;</p><p><b>effective</b>: 2012-09-17</p><p><b>performer</b>: <a href=\"practitioner-example.html\">Practitioner/example</a> &quot;Adam CAREFUL&quot;</p><p><b>interpretation</b>: <span title=\"  an interpretation offered to the combination observation\n        generally, it would only be appropriate to offer an interpretation\n        of an observation that has no value if it has &quot;COMP&quot; (component)\n        observations  \">Below low normal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-ObservationInterpretation.html\">ObservationInterpretation</a>#L &quot;low&quot;)</span></span></p><p><b>note</b>: In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component</p><p><b>bodySite</b>: <span title=\"  for an observation with components, these cannot disagree with the flags on the components  \">Right arm <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#368209003)</span></span></p><blockquote><p><b>component</b></p><p><b>code</b>: <span title=\" \n           Observations are often coded in multiple code systems.\n           - LOINC provides a very specific code (though not usefully more specific in this particular case)\n           - snomed provides a clinically relevant code that is usually less granular than LOINC\n           - the source system provides its own code, which may be less or more granular than LOINC\n\t this instance shows the concept. The other codes only have a LOINC code  \">Systolic blood pressure <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#8480-6; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#271649006; clinical-codes#bp-s &quot;Systolic Blood pressure&quot;)</span></span></p><p><b>dataAbsentReason</b>: <span title=\"  no value due to some error\n    &lt;valueQuantity&gt;\n      &lt;value value=&quot;107&quot;/&gt;\n      &lt;unit value=&quot;mm[Hg]&quot;/&gt;\n    &lt;/valueQuantity&gt;\n \">Not Asked <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-data-absent-reason.html\">DataAbsentReason</a>#not-asked)</span></span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diastolic blood pressure <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#8462-4)</span></p><p><b>dataAbsentReason</b>: <span title=\"  no value due to some error\n    &lt;valueQuantity&gt;\n      &lt;value value=&quot;60&quot;/&gt;\n      &lt;unit value=&quot;mm[Hg]&quot;/&gt;\n    &lt;/valueQuantity&gt;\n \">Not Asked <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-data-absent-reason.html\">DataAbsentReason</a>#not-asked)</span></span></p></blockquote></div>"
    },
    identifier : [{
      system : "urn:ietf:rfc:3986",
      value : "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281"
    }],
    status : "cancelled",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "vital-signs",
        display : "Vital Signs"
      }]
    }],
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "85354-9",
        display : "Blood pressure panel with all children optional"
      }],
      text : "Blood pressure systolic & diastolic"
    },
    subject : {
      reference : "Patient/example"
    },
    effectiveDateTime : "2012-09-17",
    performer : [{
      reference : "Practitioner/example"
    }],
    interpretation : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code : "L",
        display : "low"
      }],
      text : "Below low normal"
    }],
    note : [{
      text : "In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component"
    }],
    bodySite : {
      coding : [{
        system : "http://snomed.info/sct",
        code : "368209003",
        display : "Right arm"
      }]
    },
    component : [{
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "8480-6",
          display : "Systolic blood pressure"
        },
        {
          system : "http://snomed.info/sct",
          code : "271649006",
          display : "Systolic blood pressure"
        },
        {
          system : "http://acme.org/devices/clinical-codes",
          code : "bp-s",
          display : "Systolic Blood pressure"
        }]
      },
      dataAbsentReason : {
        coding : [{
          system : "http://terminology.hl7.org/CodeSystem/data-absent-reason",
          code : "not-asked",
          display : "Not Asked"
        }]
      }
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "8462-4",
          display : "Diastolic blood pressure"
        }]
      },
      dataAbsentReason : {
        coding : [{
          system : "http://terminology.hl7.org/CodeSystem/data-absent-reason",
          code : "not-asked",
          display : "Not Asked"
        }]
      }
    }]
  }