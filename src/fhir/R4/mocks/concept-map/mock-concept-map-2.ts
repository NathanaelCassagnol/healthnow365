import { ConceptMap } from "fhir/R4/types/concept-map";

// https://hl7.org/fhir/R4/conceptmap-103.json.html
// SNOMED CT / ICD-10 mapping example

export const mockConceptMap2: ConceptMap = {
    "resourceType": "ConceptMap",
    "id": "103",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>SNOMED CT to ICD-10-CM mappings for fracture of ulna (http://hl7.org/fhir/ConceptMap/103)</h2>\n      <p>Mapping from http://snomed.info/sct?fhir_vs to http://hl7.org/fhir/sid/icd-10-us</p>\n      <p>DRAFT (not intended for production usage). Published on 13/06/2012 by HL7, Inc (FHIR project team (example): \n        <a href=\"http://hl7.org/fhir\">http://hl7.org/fhir</a>). Creative Commons 0\n      </p>\n      <div>\n        <p>Example rule-based mappings between SNOMED CT to ICD-10-CM for fracture of ulna</p>\n\n      </div>\n      <br/>\n      <table class=\"grid\">\n        <tr>\n          <td>\n            <b>Source Code</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td>\n            <b>Destination Code</b>\n          </td>\n          <td>\n            <b>Comment</b>\n          </td>\n        </tr>\n        <tr>\n          <td>263204007 (Fracture of shaft of ulna)</td>\n          <td>narrower</td>\n          <td>S52.209A</td>\n          <td>The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent) and fracture type is required for a valid ICD-10-CM mapping.</td>\n        </tr>\n        <tr>\n          <td/>\n          <td>narrower</td>\n          <td>S52.209D</td>\n          <td>The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent), fracture type and healing (for subsequent encounter) is required for a valid ICD-10-CM mapping.</td>\n        </tr>\n      </table>\n    </div>"
    },
    "url": "http://hl7.org/fhir/ConceptMap/103",
    "identifier": {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:53cd62ee-033e-414c-9f58-3ca97b5ffc3b"
    },
    "version": "4.0.1",
    "name": "SNOMED CT to ICD-10-CM mappings for fracture of ulna",
    "status": "draft",
    "experimental": true,
    "date": "2012-06-13",
    "publisher": "HL7, Inc",
    "contact": [
      {
        "name": "FHIR project team (example)",
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "Example rule-based mappings between SNOMED CT to ICD-10-CM for fracture of ulna",
    "jurisdiction": [
      {
        "coding": [
          {
            "system": "http://unstats.un.org/unsd/methods/m49/m49.htm",
            "code": "840",
            "display": "United States of America"
          }
        ]
      }
    ],
    "purpose": "Show example rule based mappings",
    "copyright": "Creative Commons 0",
    "sourceCanonical": "http://snomed.info/sct?fhir_vs",
    "targetCanonical": "http://hl7.org/fhir/sid/icd-10-us",
    "group": [
      {
        "source": "http://snomed.info/sct",
        "sourceVersion": "March 2015 US Edition",
        "target": "http://hl7.org/fhir/sid/icd-10-us",
        "targetVersion": "2015",
        "element": [
          {
            "code": "263204007",
            "target": [
              {
                "code": "S52.209A",
                "equivalence": "narrower",
                "comment": "The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent) and fracture type is required for a valid ICD-10-CM mapping."
              }
            ]
          },
          {
            "target": [
              {
                "code": "S52.209D",
                "equivalence": "narrower",
                "comment": "The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent), fracture type and healing (for subsequent encounter) is required for a valid ICD-10-CM mapping."
              }
            ]
          }
        ]
      }
    ]
  }