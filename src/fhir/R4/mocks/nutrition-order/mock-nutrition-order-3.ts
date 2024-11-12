import { NutritionOrder } from "fhir/R4/types/nutrition-order";

// https://hl7.org/fhir/R4/nutritionorder-example-diabeticdiet.json.html
// Nutrition Order Diabetic Diet Example

export const mockNutritionOrder3: NutritionOrder = {
    "resourceType": "NutritionOrder",
    "id": "diabeticdiet",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: diabeticdiet</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: DD - Diabetic diet <span>(Details : {SNOMED CT code '160670007' = 'DD - Diabetic diet', given as 'Diabetic diet'}; {http://goodhealthhospital.org/diet-type-codes code '1030' = '1030', given as 'DD - Diabetic diet'})</span></p><p><b>schedule</b>: Starting 10/02/2015, Do 3 per 1 days</p><h3>Nutrients</h3><table><tr><td>-</td><td><b>Modifier</b></td><td><b>Amount</b></td></tr><tr><td>*</td><td>Carbohydrate <span>(Details : {SNOMED CT code '2331003' = 'Carbohydrate', given as 'Carbohydrate'})</span></td><td>75 grams<span> (Details: UCUM code g = 'g')</span></td></tr></table></blockquote></div>"
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
              "code": "160670007",
              "display": "Diabetic diet"
            },
            {
              "system": "http://goodhealthhospital.org/diet-type-codes",
              "code": "1030",
              "display": "DD - Diabetic diet"
            }
          ],
          "text": "DD - Diabetic diet"
        }
      ],
      "schedule": [
        {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-02-10"
            },
            "frequency": 3,
            "period": 1,
            "periodUnit": "d"
          }
        }
      ],
      "nutrient": [
        {
          "modifier": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "2331003",
                "display": "Carbohydrate"
              }
            ]
          },
          "amount": {
            "value": 75,
            "unit": "grams",
            "system": "http://unitsofmeasure.org",
            "code": "g"
          }
        }
      ]
    }
  }