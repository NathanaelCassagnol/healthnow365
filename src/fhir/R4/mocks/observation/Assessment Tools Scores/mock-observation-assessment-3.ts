import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-1minute-apgar-score.json.html
// Example of a 1 minute Apgar score with individual score as components

export const mockObservationAssessment3: Observation = {
    "resourceType": "Observation",
    "id": "1minute-apgar-score",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 1minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 1 minute Apgar Score <span>(Details : {LOINC code '9272-6' = '1 minute Apgar Score', given as '1 minute Apgar Score'}; {SNOMED CT code '169895004' = 'Apgar at 1 minute', given as 'Apgar at 1 minute'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 0 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {LOINC code '32406-1' = '1 minute Apgar Color', given as '1 minute Apgar Color'}; {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 0. The baby's whole body is completely bluish-gray or pale <span>(Details : {LOINC code 'LA6722-8' = 'The baby's whole body is completely bluish-gray or pale', given as 'The baby's whole body is completely bluish-gray or pale'}; {http://acme.ped/apgarcolor code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32407-9' = '1 minute Apgar Heart rate', given as '1 minute Apgar Heart Rate'}; {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 0. No heart rate <span>(Details : {LOINC code 'LA6716-0' = 'No heart rate', given as 'No heart rate'}; {http://acme.ped/apgarheartrate code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {LOINC code '32409-5' = '1 minute Apgar Reflex irritability', given as '1 minute Apgar Reflex Irritability'}; {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 0. No response to airways being suctioned <span>(Details : {LOINC code 'LA6719-4' = 'No response to airways being suctioned', given as 'No response to airways being suctioned'}; {http://acme.ped/apgarreflexirritability code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {LOINC code '32408-7' = '1 minute Apgar Muscle tone', given as '1 minute Apgar Muscle Tone'}; {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 0. Limp; no movement <span>(Details : {LOINC code 'LA6713-7' = 'Limp; no movement', given as 'Limp; no movement'}; {http://acme.ped/apgarmuscletone code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32410-3' = '1 minute Apgar Respiratory effort', given as '1 minute Apgar Respiratory effort'}; {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 0. Not breathing <span>(Details : {LOINC code 'LA6725-1' = 'Not breathing', given as 'Not breathing'}; {http://acme.ped/apgarrespiratoryeffort code '0' = '0)</span></p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "newborn",
        "identifier": [
          {
            "system": "http://acmehealthcare/org/mrns",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2016-05-18",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "2016-05-18T10:28:45Z"
            }
          ]
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "survey",
            "display": "Survey"
          }
        ],
        "text": "Survey"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "9272-6",
          "display": "1 minute Apgar Score"
        },
        {
          "system": "http://snomed.info/sct",
          "code": "169895004",
          "display": "Apgar at 1 minute"
        }
      ],
      "text": "1 minute Apgar Score"
    },
    "subject": {
      "reference": "#newborn"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "valueQuantity": {
      "value": 0,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32406-1",
              "display": "1 minute Apgar Color"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249227004",
              "display": "Apgar color score"
            }
          ],
          "text": "Apgar color score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6722-8",
              "display": "The baby's whole body is completely bluish-gray or pale"
            },
            {
              "system": "http://acme.ped/apgarcolor",
              "code": "0"
            }
          ],
          "text": "0. The baby's whole body is completely bluish-gray or pale"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32407-9",
              "display": "1 minute Apgar Heart Rate"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249223000",
              "display": "Apgar heart rate score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6716-0",
              "display": "No heart rate"
            },
            {
              "system": "http://acme.ped/apgarheartrate",
              "code": "0"
            }
          ],
          "text": "0. No heart rate"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32409-5",
              "display": "1 minute Apgar Reflex Irritability"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249226008",
              "display": "Apgar response to stimulus score"
            }
          ],
          "text": "Apgar response to stimulus score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6719-4",
              "display": "No response to airways being suctioned"
            },
            {
              "system": "http://acme.ped/apgarreflexirritability",
              "code": "0"
            }
          ],
          "text": "0. No response to airways being suctioned"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32408-7",
              "display": "1 minute Apgar Muscle Tone"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249225007",
              "display": "Apgar muscle tone score"
            }
          ],
          "text": "Apgar muscle tone score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6713-7",
              "display": "Limp; no movement"
            },
            {
              "system": "http://acme.ped/apgarmuscletone",
              "code": "0"
            }
          ],
          "text": "0. Limp; no movement"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "32410-3",
              "display": "1 minute Apgar Respiratory effort"
            },
            {
              "system": "http://snomed.info/sct",
              "code": "249224006",
              "display": "Apgar respiratory effort score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 0
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6725-1",
              "display": "Not breathing"
            },
            {
              "system": "http://acme.ped/apgarrespiratoryeffort",
              "code": "0"
            }
          ],
          "text": "0. Not breathing"
        }
      }
    ]
  }