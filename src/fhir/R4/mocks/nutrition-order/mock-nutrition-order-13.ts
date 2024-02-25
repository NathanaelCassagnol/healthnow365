import { NutritionOrder } from "fhir/R4/types/nutrition-order";

// https://hl7.org/fhir/R4/nutritionorder-example-infantenteral.json.html
// Nutrition Order Infant Enteral Feeding Example

export const mockNutritionOrder13: NutritionOrder = {
    "resourceType": "NutritionOrder",
    "id": "infantenteral",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infantenteral</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><blockquote><p><b>enteralFormula</b></p><p><b>baseFormulaType</b>: infant formula + iron <span>(Details : {SNOMED CT code '412414007' = 'Infant formula + iron', given as 'infant formula + iron'})</span></p><p><b>baseFormulaProductName</b>: Acme Infant Formula + Iron</p><p><b>additiveType</b>: Carbohydrate <span>(Details : {http://terminology.hl7.org/CodeSystem/entformula-additive code 'carbohydrate' = 'Carbohydrate', given as 'Carbohydrate'})</span></p><p><b>additiveProductName</b>: Acme High Carbohydrate Additive</p><p><b>caloricDensity</b>: 20 calories per ounce<span> (Details: UCUM code cal/[foz_us] = 'cal/foz_us')</span></p><p><b>routeofAdministration</b>: Swallow, oral <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'PO' = 'Swallow, oral', given as 'Swallow, oral'})</span></p><h3>Administrations</h3><table><tr><td>-</td><td><b>Schedule</b></td><td><b>Quantity</b></td></tr><tr><td>*</td><td>Starting 17/09/2014, Do Once per 3 hours</td><td>4 ounces<span> (Details: UCUM code [foz_us] = 'foz_us')</span></td></tr></table><p><b>maxVolumeToDeliver</b>: 32 ounces<span> (Details: UCUM code [foz_us] = 'foz_us')</span></p><p><b>administrationInstruction</b>: Add high calorie high carbohydrate additive to increase cal/oz from 24 cal/oz to 27 cal/oz.</p></blockquote></div>"
    },
    "identifier": [
      {
        "system": "http://www.acme.org/nutritionorders",
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
    "enteralFormula": {
      "baseFormulaType": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "412414007",
            "display": "infant formula + iron"
          }
        ]
      },
      "baseFormulaProductName": "Acme Infant Formula + Iron",
      "additiveType": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/entformula-additive",
            "code": "carbohydrate",
            "display": "Carbohydrate"
          }
        ]
      },
      "additiveProductName": "Acme High Carbohydrate Additive",
      "caloricDensity": {
        "value": 20,
        "unit": "calories per ounce",
        "system": "http://unitsofmeasure.org",
        "code": "cal/[foz_us]"
      },
      "routeofAdministration": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
            "code": "PO",
            "display": "Swallow, oral",
            "userSelected": true
          }
        ]
      },
      "administration": [
        {
          "schedule": {
            "repeat": {
              "boundsPeriod": {
                "start": "2014-09-17"
              },
              "frequency": 1,
              "period": 3,
              "periodUnit": "h"
            }
          },
          "quantity": {
            "value": 4,
            "unit": "ounces",
            "system": "http://unitsofmeasure.org",
            "code": "[foz_us]"
          }
        }
      ],
      "maxVolumeToDeliver": {
        "value": 32,
        "unit": "ounces",
        "system": "http://unitsofmeasure.org",
        "code": "[foz_us]"
      },
      "administrationInstruction": "Add high calorie high carbohydrate additive to increase cal/oz from 24 cal/oz to 27 cal/oz."
    }
  }