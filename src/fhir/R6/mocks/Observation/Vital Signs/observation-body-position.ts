import { Observation } from "../../../types/Resource/observation.types";

export const mockObservationBodyPosition: Observation = {
    resourceType : "Observation",
    id : "map-sitting",
    text : {
      status : "extensions",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Observation</b><a name=\"map-sitting\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Observation &quot;map-sitting&quot; </p></div><p><b>Observation Body Position</b>: Sitting position (finding) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#33586001)</span></p><p><b>Observation Delta</b>: Decreased (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#1250004)</span></p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-observation-category.html\">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Mean blood pressure <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#8478-0)</span></p><p><b>subject</b>: <a href=\"patient-example.html\">Patient/example</a> &quot;Peter CHALMERS&quot;</p><p><b>encounter</b>: <a href=\"encounter-example.html\">Encounter/example</a></p><p><b>effective</b>: 2018-04-02T10:30:10+01:00 --&gt; 2018-04-05T10:30:10+01:00</p><p><b>issued</b>: Apr 3, 2018, 2:30:10 PM</p><p><b>value</b>: 60 mm Hg<span style=\"background: LightGoldenRodYellow\"> (Details: UCUM code mm[Hg] = 'mmHg')</span></p><p><b>interpretation</b>: Below low normal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (v2-0078#L &quot;Low&quot;)</span></p></div>"
    },
    extension : [{
      url : "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition",
      valueCodeableConcept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "33586001",
          display : "Sitting position (finding)"
        }]
      }
    },
    {
      url : "http://hl7.org/fhir/StructureDefinition/observation-delta",
      valueCodeableConcept : {
        coding : [{
          system : "http://snomed.info/sct",
          code : "1250004",
          display : "Decreased (qualifier value)"
        }]
      }
    }],
    status : "final",
    category : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/observation-category",
        code : "laboratory",
        display : "Laboratory"
      }]
    }],
    code : {
      coding : [{
        system : "http://loinc.org",
        code : "8478-0",
        display : "Mean blood pressure"
      }]
    },
    subject : {
      reference : "Patient/example"
    },
    encounter : {
      reference : "Encounter/example"
    },
    effectivePeriod : {
      start : "2018-04-02T10:30:10+01:00",
      end : "2018-04-05T10:30:10+01:00"
    },
    issued : "2018-04-03T15:30:10+01:00",
    valueQuantity : {
      value : 60,
      unit : "mm Hg",
      system : "http://unitsofmeasure.org",
      code : "mm[Hg]"
    },
    interpretation : [{
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/v2-0078",
        code : "L",
        display : "Low"
      }],
      text : "Below low normal"
    }]
  }