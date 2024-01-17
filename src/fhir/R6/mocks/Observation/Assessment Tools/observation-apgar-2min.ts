import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationApgar2min: Observation = {
    resourceType : "Observation",
    id : "2minute-apgar-score",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"2minute-apgar-score\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;2minute-apgar-score&quot; </p></div><p><b>status</b>: final</p><p><b>category</b>: Survey <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#survey)</span></p><p><b>code</b>: 2 minute Apgar Score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#9273-4)</span></p><p><b>subject</b>: <a name=\"newborn\"> </a></p><blockquote><p style=\"border: 1px #661aff solid; background-color: #e6e6ff; padding: 10px;\"><b>Peter James Chalmers </b> male, DoB: 2016-05-18 ( id:\u00a012345)</p><hr/><table class=\"grid\"><tr><td style=\"background-color: #f3f5da\" title=\"Record is active\">Active:</td><td colspan=\"3\">true</td></tr></table></blockquote><p><b>effective</b>: 2016-05-18T22:33:22Z</p><p><b>performer</b>: <a href=\"practitioner-example.html\">Practitioner/example</a> &quot;Adam CAREFUL&quot;</p><p><b>value</b>: 5 {score}<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249227004)</span></p><p><b>value</b>: 1. Good color in body with bluish hands or feet <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6723-6 &quot;Good color in body with bluish hands or feet&quot;; apgarcolor#1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249223000 &quot;Apgar heart rate score&quot;)</span></p><p><b>value</b>: 1. Fewer than 100 beats per minute <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6720-2 &quot;Fewer than 100 beats per minute&quot;; apgarheartrate#1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249226008)</span></p><p><b>value</b>: 1. Grimace during suctioning <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6721-0 &quot;Grimace during suctioning&quot;; apgarreflexirritability#1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249225007)</span></p><p><b>value</b>: 1. Some flexion of arms and legs <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6714-5 &quot;Some flexion of arms and legs&quot;; apgarmuscletone#1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249224006)</span></p><p><b>value</b>: 1. Weak cry; may sound like whimpering, slow or irregular breathing <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6726-9 &quot;Weak cry; may sound like whimpering, slow or irregular breathing&quot;; apgarrespiratoryeffort#1)</span></p></blockquote></div>"
    },
    contained : [{
      resourceType : "Patient",
      id : "newborn",
      identifier : [{
        system : "http://acmehealthcare/org/mrns",
        value : "12345"
      }],
      active : true,
      name : [{
        family : "Chalmers",
        given : ["Peter", "James"]
      }],
      gender : "male",
      birthDate : "2016-05-18",
      _birthDate : {
        extension : [{
          url : "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
          valueDateTime : "2016-05-18T10:28:45Z"
        }]
      }
    }],
    status : "final",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "survey",
        display : "Survey"
      }],
      text : "Survey"
    }],
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "9273-4",
        display : "2 minute Apgar Score"
      }],
      text : "2 minute Apgar Score"
    },
    subject : {
      reference : "#newborn"
    },
    effectiveDateTime : "2016-05-18T22:33:22Z",
    performer : [{
      reference : "Practitioner/example"
    }],
    valueQuantity : {
      value : 5,
      system : "http://unitsofmeasure.org",
      code : "{score}"
    },
    component : [{
      code : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "249227004",
          display : "Apgar color score"
        }],
        text : "Apgar color score"
      },
      valueCodeableConcept : {
        coding : [{
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 1
          }],
          system : "http://loinc.org",
          code : "LA6723-6",
          display : "Good color in body with bluish hands or feet"
        },
        {
          system : "http://acme.ped/apgarcolor",
          code : "1"
        }],
        text : "1. Good color in body with bluish hands or feet"
      }
    },
    {
      code : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "249223000",
          display : "Apgar heart rate score"
        }],
        text : "Apgar respiratory effort score"
      },
      valueCodeableConcept : {
        coding : [{
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 1
          }],
          system : "http://loinc.org",
          code : "LA6720-2",
          display : "Fewer than 100 beats per minute"
        },
        {
          system : "http://acme.ped/apgarheartrate",
          code : "1"
        }],
        text : "1. Fewer than 100 beats per minute"
      }
    },
    {
      code : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "249226008",
          display : "Apgar response to stimulus score"
        }],
        text : "Apgar response to stimulus score"
      },
      valueCodeableConcept : {
        coding : [{
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 1
          }],
          system : "http://loinc.org",
          code : "LA6721-0",
          display : "Grimace during suctioning"
        },
        {
          system : "http://acme.ped/apgarreflexirritability",
          code : "1"
        }],
        text : "1. Grimace during suctioning"
      }
    },
    {
      code : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "249225007",
          display : "Apgar muscle tone score"
        }],
        text : "Apgar muscle tone score"
      },
      valueCodeableConcept : {
        coding : [{
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 1
          }],
          system : "http://loinc.org",
          code : "LA6714-5",
          display : "Some flexion of arms and legs"
        },
        {
          system : "http://acme.ped/apgarmuscletone",
          code : "1"
        }],
        text : "1. Some flexion of arms and legs"
      }
    },
    {
      code : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "249224006",
          display : "Apgar respiratory effort score"
        }],
        text : "Apgar respiratory effort score"
      },
      valueCodeableConcept : {
        coding : [{
          extension : [{
            url : "http://hl7.org/fhir/StructureDefinition/itemWeight",
            valueDecimal : 1
          }],
          system : "http://loinc.org",
          code : "LA6726-9",
          display : "Weak cry; may sound like whimpering, slow or irregular breathing"
        },
        {
          system : "http://acme.ped/apgarrespiratoryeffort",
          code : "1"
        }],
        text : "1. Weak cry; may sound like whimpering, slow or irregular breathing"
      }
    }]
  }