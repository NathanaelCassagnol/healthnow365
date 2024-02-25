import { NutritionOrder } from "fhir/R4/types/nutrition-order";

// https://hl7.org/fhir/R4/nutritionorder-example-cardiacdiet.json.html
// Nutrition Order Low Sodium and Fluid Restricted Diet Example

export const mockNutritionOrder2: NutritionOrder = {
    "resourceType": "NutritionOrder",
    "id": "cardiacdiet",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: cardiacdiet</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: Low sodium diet <span>(Details : {SNOMED CT code '386619000' = 'Low sodium diet', given as 'Low sodium diet'}; {http://goodhealthhospital.org/diet-type-codes code '1040' = '1040', given as 'Low Sodium Diet'})</span>, Fluid restricted diet <span>(Details : {SNOMED CT code '226208002' = 'Fluid restricted diet', given as 'Fluid restricted diet'}; {http://goodhealthhospital.org/diet-type-codes code '1040' = '1040', given as 'Fluid restricted diet'})</span></p><blockquote><p><b>nutrient</b></p><p><b>modifier</b>: Sodium <span>(Details : {SNOMED CT code '39972003' = 'Sodium', given as 'Sodium'})</span></p><p><b>amount</b>: 2 grams<span> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>nutrient</b></p><p><b>modifier</b>: Fluid <span>(Details : {SNOMED CT code '33463005' = 'Fluid', given as 'Fluid'})</span></p><p><b>amount</b>: 1500 milliliter<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><p><b>instruction</b>: Starting on 2/10 breakfast, maximum 400 ml fluids per meal</p></blockquote></div>"
    },
    "identifier": [
      {
        "system": "http://goodhealthhospital.org/nutrition-requests",
        "value": "123"
      }
    ],
    "status": "active",
    "intent": "order",
    "patient": {
      "reference": "Patient/example",
      "display": "Peter Chalmers"
    },
    "encounter": {
      "reference": "Encounter/example",
      "display": "Inpatient"
    },
    "dateTime": "2014-09-17",
    "orderer": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "allergyIntolerance": [
      {
        "reference": "AllergyIntolerance/example",
        "display": "Cashew Nuts"
      }
    ],
    "foodPreferenceModifier": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/diet",
            "code": "dairy-free"
          }
        ]
      }
    ],
    "excludeFoodModifier": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "version": "20140730",
            "code": "227493005",
            "display": "Cashew Nut"
          }
        ]
      }
    ],
    "oralDiet": {
      "type": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "386619000",
              "display": "Low sodium diet"
            },
            {
              "system": "http://goodhealthhospital.org/diet-type-codes",
              "code": "1040",
              "display": "Low Sodium Diet"
            }
          ],
          "text": "Low sodium diet"
        },
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "226208002",
              "display": "Fluid restricted diet"
            },
            {
              "system": "http://goodhealthhospital.org/diet-type-codes",
              "code": "1040",
              "display": "Fluid restricted diet"
            }
          ],
          "text": "Fluid restricted diet"
        }
      ],
      "nutrient": [
        {
          "modifier": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "39972003",
                "display": "Sodium"
              }
            ]
          },
          "amount": {
            "value": 2,
            "unit": "grams",
            "system": "http://unitsofmeasure.org",
            "code": "g"
          }
        },
        {
          "modifier": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "33463005",
                "display": "Fluid"
              }
            ]
          },
          "amount": {
            "value": 1500,
            "unit": "milliliter",
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      ],
      "instruction": "Starting on 2/10 breakfast, maximum 400 ml fluids per meal"
    }
  }