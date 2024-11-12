import { MedicationAdministration } from "fhir/R4/types/medication-administration";

// https://hl7.org/fhir/R4/medicationadministration0302.json.html
// Intravenous Admixture - Potassium Chloride in D5W

export const mockMedicationAdministration3: MedicationAdministration = {
    "resourceType": "MedicationAdministration",
    "id": "medadmin0302",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0302</p><p><b>contained</b>: </p><p><b>partOf</b>: <a>Procedure/biopsy</a></p><p><b>status</b>: completed</p><p><b>category</b>: Inpatient <span>(Details : {http://terminology.hl7.org/CodeSystem/medication-admin-category code 'inpatient' = 'Inpatient', given as 'Inpatient'})</span></p><p><b>medication</b>: id: med0317; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonCode</b>: Given as Ordered <span>(Details : {http://terminology.hl7.org/CodeSystem/reason-medication-given code 'b' = 'Given as Ordered', given as 'Given as Ordered'})</span></p><p><b>request</b>: <a>MedicationRequest/medrx0322</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Site</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td><td><b>Rate[x]</b></td></tr><tr><td>*</td><td>KCl 20 mEq in 1 L 0.9%NS IV at 100 ml/hr</td><td>Structure of ligament of left superior vena cava <span>(Details : {SNOMED CT code '6073002' = 'Ligament of left superior vena cava', given as 'Structure of ligament of left superior vena cava'})</span></td><td>Intravenous route (qualifier value) <span>(Details : {SNOMED CT code '47625008' = 'Intravenous route', given as 'Intravenous route (qualifier value)'})</span></td><td>Continuous infusion <span>(Details )</span></td><td>20 meq<span> (Details: UCUM code meq = 'meq')</span></td><td>100 mL<span> (Details: UCUM code mL = 'mL')</span>/1 h<span> (Details: UCUM code h = 'h')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0317",
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385219001",
              "display": "Injection Solution (qualifier value)"
            }
          ],
          "text": "Injection Solution (qualifier value)"
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                  "code": "204520",
                  "display": "Potassium Chloride"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 2,
                "system": "http://unitsofmeasure.org",
                "code": "meq"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          },
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                  "code": "313002",
                  "display": "Sodium Chloride 0.9% injectable solution"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 0.9,
                "system": "http://unitsofmeasure.org",
                "code": "g"
              },
              "denominator": {
                "value": 100,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          }
        ]
      }
    ],
    "partOf": [
      {
        "reference": "Procedure/biopsy"
      }
    ],
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/medication-admin-category",
          "code": "inpatient",
          "display": "Inpatient"
        }
      ]
    },
    "medicationReference": {
      "reference": "#med0317"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "context": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "effectivePeriod": {
      "start": "2015-01-15T04:30:00+01:00",
      "end": "2015-01-15T14:30:00+01:00"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f007",
          "display": "Patrick Pump"
        }
      }
    ],
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/reason-medication-given",
            "code": "b",
            "display": "Given as Ordered"
          }
        ]
      }
    ],
    "request": {
      "reference": "MedicationRequest/medrx0322"
    },
    "dosage": {
      "text": "KCl 20 mEq in 1 L 0.9%NS IV at 100 ml/hr",
      "site": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "6073002",
            "display": "Structure of ligament of left superior vena cava"
          }
        ]
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "47625008",
            "display": "Intravenous route (qualifier value)"
          }
        ]
      },
      "method": {
        "text": "Continuous infusion"
      },
      "dose": {
        "value": 20,
        "unit": "meq",
        "system": "http://unitsofmeasure.org",
        "code": "meq"
      },
      "rateRatio": {
        "numerator": {
          "value": 100,
          "system": "http://unitsofmeasure.org",
          "code": "mL"
        },
        "denominator": {
          "value": 1,
          "system": "http://unitsofmeasure.org",
          "code": "h"
        }
      }
    }
  }