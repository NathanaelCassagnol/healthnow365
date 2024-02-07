import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationGCS1: Observation = {
    resourceType : "Observation",
    id : "glasgow",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"glasgow\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;glasgow&quot; </p></div><p><b>status</b>: <span title=\"   the mandatory quality flags:   \">final</span></p><p><b>code</b>: <span title=\"  \n    Observations are often coded in multiple code systems.\n      - LOINC\n\t\t- or SNOMED\n      -and/or the source system may provides its own &quot;local&quot; code, which may be less or more granular than LOINC.\n\tIn this example there is only LOINC\n    \">Glasgow Coma Scale , (GCS) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#9269-2 &quot;Glasgow coma score total&quot;)</span></span></p><p><b>subject</b>: <a href=\"patient-example.html\">Patient/example: Peter James Chalmers</a> &quot;Peter CHALMERS&quot;</p><p><b>effective</b>: 2014-12-11T04:44:16Z</p><p><b>value</b>: <span title=\"   In FHIR, units may be represented twice. Once in the\n    agreed human representation, and once in a coded form.\n    In this example the UCUM unit is provided but no human representation since this is often not displayed\n     \">13 {score}<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code {score} = '{score}')</span></span></p><blockquote><p><b>referenceRange</b></p><p><b>high</b>: 8 {score}<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: <span title=\"   meaning as text   \">Severe TBI <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ()</span></span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 9 {score}<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code {score} = '{score}')</span></p><p><b>high</b>: 12 {score}<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: <span title=\"   meaning as text   \">Moderate TBI <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ()</span></span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 13 {score}<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: <span title=\"   meaning as text   \">Mild TBI <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ()</span></span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: GCS Motor <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#9268-4 &quot;Glasgow coma score motor&quot;)</span></p><p><b>value</b>: 5 (Localizes painful stimuli) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (codes#5 &quot;Localizes painful stimuli&quot;; <a href=\"https://loinc.org/\">LOINC</a>#LA6566-9 &quot;Localizing pain&quot;)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: GSC Verbal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#9270-0 &quot;Glasgow coma score verbal&quot;)</span></p><p><b>value</b>: 4 (Confused, disoriented) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (codes#4 &quot;Confused, disoriented&quot;; <a href=\"https://loinc.org/\">LOINC</a>#LA6560-2 &quot;Confused&quot;)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Eyes <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#9267-6 &quot;Glasgow coma score eye opening&quot;)</span></p><p><b>value</b>: 4 (Opens eyes spontaneously) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (codes#4 &quot;Opens eyes spontaneously&quot;; <a href=\"https://loinc.org/\">LOINC</a>#LA6556-0 &quot;Eyes open spontaneously&quot;)</span></p></blockquote></div>"
    },
    status : "final",
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "9269-2",
        display : "Glasgow coma score total"
      }],
      text : "Glasgow Coma Scale , (GCS)"
    },
    subject : {
      reference : "Patient/example",
      display : "Peter James Chalmers"
    },
    effectiveDateTime : "2014-12-11T04:44:16Z",
    valueQuantity : {
      value : 13,
      system : "http://unitsofmeasure.org",
      code : "{score}"
    },
    referenceRange : [{
      high : {
        value : 8,
        system : "http://unitsofmeasure.org",
        code : "{score}"
      },
      type : {
        text : "Severe TBI"
      }
    },
    {
      low : {
        value : 9,
        system : "http://unitsofmeasure.org",
        code : "{score}"
      },
      high : {
        value : 12,
        system : "http://unitsofmeasure.org",
        code : "{score}"
      },
      type : {
        text : "Moderate TBI"
      }
    },
    {
      low : {
        value : 13,
        system : "http://unitsofmeasure.org",
        code : "{score}"
      },
      type : {
        text : "Mild TBI"
      }
    }],
    component : [{
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "9268-4",
          display : "Glasgow coma score motor"
        }],
        text : "GCS Motor"
      },
      valueCodeableConcept : {
        coding : [{
          system : "http://acme.ec/codes",
          code : "5",
          display : "Localizes painful stimuli"
        },
        {
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 5
          }],
          system : "http://loinc.org",
          code : "LA6566-9",
          display : "Localizing pain"
        }],
        text : "5 (Localizes painful stimuli)"
      }
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "9270-0",
          display : "Glasgow coma score verbal"
        }],
        text : "GSC Verbal"
      },
      valueCodeableConcept : {
        coding : [{
          system : "http://acme.ec/codes",
          code : "4",
          display : "Confused, disoriented"
        },
        {
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 4
          }],
          system : "http://loinc.org",
          code : "LA6560-2",
          display : "Confused"
        }],
        text : "4 (Confused, disoriented)"
      }
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "9267-6",
          display : "Glasgow coma score eye opening"
        }],
        text : "Eyes"
      },
      valueCodeableConcept : {
        coding : [{
          system : "http://acme.ec/codes",
          code : "4",
          display : "Opens eyes spontaneously"
        },
        {
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 4
          }],
          system : "http://loinc.org",
          code : "LA6556-0",
          display : "Eyes open spontaneously"
        }],
        text : "4 (Opens eyes spontaneously)"
      }
    }]
  }