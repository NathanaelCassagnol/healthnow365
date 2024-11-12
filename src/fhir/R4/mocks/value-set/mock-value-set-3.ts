import { ValueSet } from "fhir/R4/types/value-set";

// https://hl7.org/fhir/R4/valueset-example-filter.json.html
// ValueSet Example using code filter (intensional) defined in a code system resource

export const mockValueSet3: ValueSet = {
    "resourceType": "ValueSet",
    "id": "example-filter",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>ACME Codes for Cholesterol: Plasma only</h2>\n      <div>\n        <p>ACME Codes for Cholesterol: Plasma only - demonstrating the use of a filter defined in a CodeSystem</p>\n\n      </div>\n      <p>This value set includes codes from the following code systems:</p>\n      <ul>\n        <li>Include codes from \n          <a href=\"codesystem-example.html\">\n            <code>http://hl7.org/fhir/CodeSystem/example</code>\n          </a> where acme-plasma  =  true\n        </li>\n      </ul>\n    </div>"
    },
    "url": "http://hl7.org/fhir/ValueSet/example-filter",
    "version": "4.0.1",
    "name": "ACMECholCodesPlasma",
    "title": "ACME Codes for Cholesterol: Plasma only",
    "status": "draft",
    "experimental": true,
    "date": "2018-11-01",
    "publisher": "HL7 International",
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
    "description": "ACME Codes for Cholesterol: Plasma only - demonstrating the use of a filter defined in a CodeSystem",
    "compose": {
      "include": [
        {
          "system": "http://hl7.org/fhir/CodeSystem/example",
          "filter": [
            {
              "property": "acme-plasma",
              "op": "=",
              "value": "true"
            }
          ]
        }
      ]
    }
  }