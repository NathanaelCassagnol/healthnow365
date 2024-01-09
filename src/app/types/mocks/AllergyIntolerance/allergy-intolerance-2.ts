import { AllergyIntolerance } from "../../fhir/allergy-intolerance.types";

// https://build.fhir.org/allergyintolerance-medication.json.html
export const mockAllergyIntolerance2: AllergyIntolerance = {
    resourceType : "AllergyIntolerance",
    id : "medication",
    text : {
      status : "generated",
      div : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: AllergyIntolerance</b><a name=\"medication\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource AllergyIntolerance &quot;medication&quot; </p></div><p><b>clinicalStatus</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-allergyintolerance-clinical.html\">AllergyIntolerance Clinical Status Codes</a>#active)</span></p><p><b>verificationStatus</b>: Unconfirmed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-allergyintolerance-verification.html\">AllergyIntolerance Verification Status</a>#unconfirmed)</span></p><p><b>category</b>: medication</p><p><b>criticality</b>: high</p><p><b>code</b>: <span title=\"  subtance, coded from RxNorm  \">Penicillin G <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-v3-rxNorm.html\">RxNorm</a>#7980)</span></span></p><p><b>patient</b>: <span title=\"  the patient that actually has the risk of adverse reaction  \"><a href=\"patient-example.html\">Patient/example</a> &quot;Peter CHALMERS&quot;</span></p><p><b>recordedDate</b>: <span title=\"  the date that this entry was recorded  \">2010-03-01</span></p><h3>Participants</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td style=\"display: none\">*</td><td>Author <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.4.0/CodeSystem-provenance-participant-type.html\">Provenance participant type</a>#author)</span></td><td><a href=\"practitioner-example.html\">Practitioner/example</a> &quot;Adam CAREFUL&quot;</td></tr></table><blockquote><p><b>reaction</b></p><h3>Manifestations</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Concept</b></td></tr><tr><td style=\"display: none\">*</td><td>Hives <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#247472004)</span></td></tr></table></blockquote></div>"
    },
    clinicalStatus : {
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        code : "active",
        display : "Active"
      }]
    },
    verificationStatus : {
      coding : [{
        system : "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        code : "unconfirmed",
        display : "Unconfirmed"
      }]
    },
    category : ["medication"],
    criticality : "high",
    code : {
      coding : [{
        system : "http://www.nlm.nih.gov/research/umls/rxnorm",
        code : "7980",
        display : "Penicillin G"
      }]
    },
    patient : {
      reference : "Patient/example"
    },
    recordedDate : "2010-03-01",
    participant : [{
      function : {
        coding : [{
          system : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
          code : "author",
          display : "Author"
        }]
      },
      actor : {
        reference : "Practitioner/example"
      }
    }],
    reaction : [{
      manifestation : [{
        concept : {
          coding : [{
            system : "http://snomed.info/sct",
            code : "247472004",
            display : "Hives"
          }]
        }
      }]
    }]
  }