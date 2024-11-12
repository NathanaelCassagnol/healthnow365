import { CodeSystem } from "fhir/R4/types/CodeSystem";

// https://hl7.org/fhir/R4/codesystem-example.json.html
// Simple Code System

export const mockCodeSystem1: CodeSystem = {
    "resourceType": "CodeSystem",
    "id": "example",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>CodeSystem &quot;ACME Codes for Cholesterol&quot;: This is an example code system that includes \n        all the codes for serum cholesterol defined by ACME inc.</p>\n      <p>Developed by: FHIR project team (example)</p>\n      <p>Published for testing on 28-Jan 2016</p>\n      <p>This code system defines all the ACME codes for serum cholesterol:</p>\n      <table class=\"grid\">\n        <tr>\n          <td>\n            <b>Code</b>\n          </td>\n          <td>\n            <b>Display</b>\n          </td>\n          <td>\n            <b>Definition</b>\n          </td>\n        </tr>\n        <tr>\n          <td>chol-mmol</td>\n          <td>SChol (mmol/L)</td>\n          <td>Serum Cholesterol, in mmol/L</td>\n        </tr>\n        <tr>\n          <td>chol-mass</td>\n          <td>SChol (mg/L)</td>\n          <td>Serum Cholesterol, in mg/L</td>\n        </tr>\n        <tr>\n          <td>chol</td>\n          <td>SChol</td>\n          <td>Serum Cholesterol</td>\n        </tr>\n      </table>\n    </div>"
    },
    "url": "http://hl7.org/fhir/CodeSystem/example",
    "identifier": [
      {
        "system": "http://acme.com/identifiers/codesystems",
        "value": "internal-cholesterol-inl"
      }
    ],
    "version": "20160128",
    "name": "ACMECholCodesBlood",
    "title": "ACME Codes for Cholesterol in Serum/Plasma",
    "status": "draft",
    "experimental": true,
    "date": "2016-01-28",
    "publisher": "Acme Co",
    "contact": [
      {
        "name": "FHIR project team",
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "This is an example code system that includes all the ACME codes for serum/plasma cholesterol from v2.36.",
    "caseSensitive": true,
    "content": "complete",
    "filter": [
      {
        "code": "acme-plasma",
        "description": "An internal filter used to select codes that are only used with plasma",
        "operator": [
          "="
        ],
        "value": "the value of this filter is either 'true' or 'false'"
      }
    ],
    "concept": [
      {
        "code": "chol-mmol",
        "display": "SChol (mmol/L)",
        "definition": "Serum Cholesterol, in mmol/L",
        "designation": [
          {
            "use": {
              "system": "http://acme.com/config/fhir/codesystems/internal",
              "code": "internal-label"
            },
            "value": "From ACME POC Testing"
          }
        ]
      },
      {
        "code": "chol-mass",
        "display": "SChol (mg/L)",
        "definition": "Serum Cholesterol, in mg/L",
        "designation": [
          {
            "use": {
              "system": "http://acme.com/config/fhir/codesystems/internal",
              "code": "internal-label"
            },
            "value": "From Paragon Labs"
          }
        ]
      },
      {
        "code": "chol",
        "display": "SChol",
        "definition": "Serum Cholesterol",
        "designation": [
          {
            "use": {
              "system": "http://acme.com/config/fhir/codesystems/internal",
              "code": "internal-label"
            },
            "value": "Obdurate Labs uses this with both kinds of units..."
          }
        ]
      }
    ]
  }