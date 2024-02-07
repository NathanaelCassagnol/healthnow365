import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationApgar1min: Observation = {
    resourceType : "Observation",
    id : "1minute-apgar-score",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"1minute-apgar-score\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;1minute-apgar-score&quot; </p></div><p><b>status</b>: final</p><p><b>category</b>: Survey <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#survey)</span></p><p><b>code</b>: 1 minute Apgar Score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#9272-6; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#169895004 &quot;Apgar at 1 minute&quot;)</span></p><p><b>subject</b>: <a name=\"newborn\"> </a></p><blockquote><p style=\"border: 1px #661aff solid; background-color: #e6e6ff; padding: 10px;\"><b>Peter James Chalmers </b> male, DoB: 2016-05-18 ( id:\u00a012345)</p><hr/><table class=\"grid\"><tr><td style=\"background-color: #f3f5da\" title=\"Record is active\">Active:</td><td colspan=\"3\">true</td></tr></table></blockquote><p><b>effective</b>: 2016-05-18T22:33:22Z</p><p><b>performer</b>: <a href=\"practitioner-example.html\">Practitioner/example</a> &quot;Adam CAREFUL&quot;</p><p><b>value</b>: 0 {score}<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#32406-1 &quot;1 minute Apgar Color&quot;; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249227004)</span></p><p><b>value</b>: 0. The baby's whole body is completely bluish-gray or pale <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6722-8 &quot;The baby's whole body is completely bluish-gray or pale&quot;; apgarcolor#0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#32407-9 &quot;1 minute Apgar Heart Rate&quot;; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249223000 &quot;Apgar heart rate score&quot;)</span></p><p><b>value</b>: 0. No heart rate <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6716-0 &quot;No heart rate&quot;; apgarheartrate#0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#32409-5 &quot;1 minute Apgar Reflex Irritability&quot;; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249226008)</span></p><p><b>value</b>: 0. No response to airways being suctioned <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6719-4 &quot;No response to airways being suctioned&quot;; apgarreflexirritability#0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#32408-7 &quot;1 minute Apgar Muscle Tone&quot;; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249225007)</span></p><p><b>value</b>: 0. Limp; no movement <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6713-7 &quot;Limp; no movement&quot;; apgarmuscletone#0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#32410-3 &quot;1 minute Apgar Respiratory effort&quot;; <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#249224006)</span></p><p><b>value</b>: 0. Not breathing <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#LA6725-1 &quot;Not breathing&quot;; apgarrespiratoryeffort#0)</span></p></blockquote></div>"
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
        code : "9272-6",
        display : "1 minute Apgar Score"
      },
      {
        system : "http://snomed.info/sct",
        code : "169895004",
        display : "Apgar at 1 minute"
      }],
      text : "1 minute Apgar Score"
    },
    subject : {
      reference : "#newborn"
    },
    effectiveDateTime : "2016-05-18T22:33:22Z",
    performer : [{
      reference : "Practitioner/example"
    }],
    valueQuantity : {
      value : 0,
      system : "http://unitsofmeasure.org",
      code : "{score}"
    },
    component : [{
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "32406-1",
          display : "1 minute Apgar Color"
        },
        {
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
            valueDecimal : 0
          }],
          system : "http://loinc.org",
          code : "LA6722-8",
          display : "The baby's whole body is completely bluish-gray or pale"
        },
        {
          system : "http://acme.ped/apgarcolor",
          code : "0"
        }],
        text : "0. The baby's whole body is completely bluish-gray or pale"
      }
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "32407-9",
          display : "1 minute Apgar Heart Rate"
        },
        {
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
            valueDecimal : 0
          }],
          system : "http://loinc.org",
          code : "LA6716-0",
          display : "No heart rate"
        },
        {
          system : "http://acme.ped/apgarheartrate",
          code : "0"
        }],
        text : "0. No heart rate"
      }
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "32409-5",
          display : "1 minute Apgar Reflex Irritability"
        },
        {
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
            valueDecimal : 0
          }],
          system : "http://loinc.org",
          code : "LA6719-4",
          display : "No response to airways being suctioned"
        },
        {
          system : "http://acme.ped/apgarreflexirritability",
          code : "0"
        }],
        text : "0. No response to airways being suctioned"
      }
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "32408-7",
          display : "1 minute Apgar Muscle Tone"
        },
        {
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
            valueDecimal : 0
          }],
          system : "http://loinc.org",
          code : "LA6713-7",
          display : "Limp; no movement"
        },
        {
          system : "http://acme.ped/apgarmuscletone",
          code : "0"
        }],
        text : "0. Limp; no movement"
      }
    },
    {
      code : {
        coding : [{
          system : "http://loinc.org",
          code : "32410-3",
          display : "1 minute Apgar Respiratory effort"
        },
        {
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
            valueDecimal : 0
          }],
          system : "http://loinc.org",
          code : "LA6725-1",
          display : "Not breathing"
        },
        {
          system : "http://acme.ped/apgarrespiratoryeffort",
          code : "0"
        }],
        text : "0. Not breathing"
      }
    }]
  }