import { ValueSet } from "fhir/R4/types/value-set";

// https://hl7.org/fhir/R4/valueset-example-hierarchical.json.html
// ValueSet Example showing how to specify a hierarchy for UI using extensions

export const mockValueSet5: ValueSet = {
    "resourceType": "ValueSet",
    "id": "example-hierarchical",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n     <table class=\"grid\">\n      <tr><td/><td>(Most common)</td></tr>\n      <tr><td>..login</td><td>Login Required</td></tr>\n      <tr><td>..conflict</td><td>Edit Version Conflict</td></tr>\n      <tr><td>processing</td><td>Processing Failure</td></tr>\n      <tr><td>..duplicate</td><td>Duplicate</td></tr>\n      <tr><td>..not-found</td><td>Not Found</td></tr>\n      <tr><td>invalid</td><td>Invalid Content</td></tr>\n      <tr><td>..structure</td><td>Structural Issue</td></tr>\n      <tr><td>..required</td><td>Required element missing</td></tr>\n      <tr><td>..value</td><td>Element value invalid</td></tr>\n      <tr><td>transient</td><td>Transient Issue</td></tr>\n      <tr><td>..lock-error</td><td>Lock Error</td></tr>\n      <tr><td>..exception</td><td>Exception</td></tr>\n      <tr><td>..throttled</td><td>Throttled</td></tr>\n      <tr><td>security</td><td>Security Problem</td></tr>\n      <tr><td>..login</td><td>Login Required</td></tr>\n      <tr><td>..unknown</td><td>Unknown User</td></tr>\n     </table>\n\t\t</div>"
    },
    "contained": [
      {
        "resourceType": "CodeSystem",
        "id": "hacked",
        "url": "http://hl7.org/fhir/hacked",
        "status": "draft",
        "description": "Issue type in an error message - hack from real FHIR List",
        "content": "complete",
        "property": [
          {
            "code": "notSelectable",
            "uri": "http://hl7.org/fhir/concept-properties#notSelectable",
            "type": "boolean"
          }
        ],
        "concept": [
          {
            "code": "invalid",
            "display": "Invalid Content",
            "property": [
              {
                "code": "notSelectable",
                "valueBoolean": true
              }
            ],
            "concept": [
              {
                "code": "structure",
                "display": "Structural Issue"
              },
              {
                "code": "required",
                "display": "Required element missing"
              },
              {
                "code": "value",
                "display": "Element value invalid"
              }
            ]
          },
          {
            "code": "security",
            "display": "Security Problem",
            "property": [
              {
                "code": "notSelectable",
                "valueBoolean": true
              }
            ],
            "concept": [
              {
                "code": "login",
                "display": "Login Required"
              },
              {
                "code": "unknown",
                "display": "Unknown User"
              },
              {
                "code": "expired",
                "display": "Session Expired"
              }
            ]
          },
          {
            "code": "processing",
            "display": "Processing Failure",
            "concept": [
              {
                "code": "duplicate",
                "display": "Duplicate"
              },
              {
                "code": "not-found",
                "display": "Not Found"
              },
              {
                "code": "conflict",
                "display": "Edit Version Conflict"
              }
            ]
          },
          {
            "code": "transient",
            "display": "Transient Issue",
            "concept": [
              {
                "code": "lock-error",
                "display": "Lock Error"
              },
              {
                "code": "exception",
                "display": "Exception"
              },
              {
                "code": "throttled",
                "display": "Throttled"
              }
            ]
          }
        ]
      }
    ],
    "url": "http://hl7.org/fhir/ValueSet/example-hierarchical",
    "version": "4.0.1",
    "name": "Example Hierarchical ValueSet",
    "status": "draft",
    "experimental": true,
    "date": "2018-07-20",
    "publisher": "FHIR Project team",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "Demonstration of extensions that build a hierarchical contains",
    "compose": {
      "include": [
        {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-rules",
              "valueCode": "groups-only"
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group",
              "extension": [
                {
                  "url": "display",
                  "valueString": "(Most common)"
                },
                {
                  "url": "member",
                  "valueCode": "login"
                },
                {
                  "url": "member",
                  "valueCode": "conflict"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group",
              "extension": [
                {
                  "url": "code",
                  "valueCode": "processing"
                },
                {
                  "url": "member",
                  "valueCode": "duplicate"
                },
                {
                  "url": "member",
                  "valueCode": "not-found"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group",
              "extension": [
                {
                  "url": "code",
                  "valueCode": "invalid"
                },
                {
                  "url": "member",
                  "valueCode": "structure"
                },
                {
                  "url": "member",
                  "valueCode": "required"
                },
                {
                  "url": "member",
                  "valueCode": "value"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group",
              "extension": [
                {
                  "url": "code",
                  "valueCode": "transient"
                },
                {
                  "url": "member",
                  "valueCode": "lock"
                },
                {
                  "url": "member",
                  "valueCode": "exception"
                },
                {
                  "url": "member",
                  "valueCode": "throttled"
                }
              ]
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group",
              "extension": [
                {
                  "url": "code",
                  "valueCode": "security"
                },
                {
                  "url": "member",
                  "valueCode": "login"
                },
                {
                  "url": "member",
                  "valueCode": "unknown"
                }
              ]
            }
          ],
          "system": "#hacked",
          "concept": [
            {
              "code": "invalid"
            },
            {
              "code": "structure"
            },
            {
              "code": "required"
            },
            {
              "code": "value"
            },
            {
              "code": "processing"
            },
            {
              "code": "duplicate"
            },
            {
              "code": "not-found"
            },
            {
              "code": "conflict"
            },
            {
              "code": "lock"
            },
            {
              "code": "exception"
            },
            {
              "code": "tbrottled"
            },
            {
              "code": "login"
            },
            {
              "code": "unknown"
            }
          ]
        }
      ]
    },
    "expansion": {
      "identifier": "urn:uuid:42316ff8-2714-4680-9980-f37a6d1a71bc",
      "timestamp": "2018-07-20T23:14:07+10:00",
      "parameter": [
        {
          "name": "excludeNotForUI",
          "valueUri": "false"
        }
      ],
      "contains": [
        {
          "abstract": true,
          "display": "(Most common)",
          "contains": [
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "login",
              "display": "Login Required"
            },
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "conflict",
              "display": "Edit Version Conflict"
            }
          ]
        },
        {
          "system": "http://hl7.org/fhir/hacked",
          "code": "processing",
          "display": "Processing Failure",
          "contains": [
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "duplicate",
              "display": "Duplicate"
            },
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "not-found",
              "display": "Not Found"
            }
          ]
        },
        {
          "system": "http://hl7.org/fhir/hacked",
          "abstract": true,
          "code": "invalid",
          "display": "Invalid Content",
          "contains": [
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "structure",
              "display": "Structural Issue"
            },
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "required",
              "display": "Required element missing"
            },
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "value",
              "display": "Element value invalid"
            }
          ]
        },
        {
          "system": "http://hl7.org/fhir/hacked",
          "abstract": true,
          "code": "transient",
          "display": "Transient Issue",
          "contains": [
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "lock-error",
              "display": "Lock Error"
            },
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "exception",
              "display": "Exception"
            },
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "throttled",
              "display": "Throttled"
            }
          ]
        },
        {
          "system": "http://hl7.org/fhir/hacked",
          "abstract": true,
          "code": "security",
          "display": "Security Problem",
          "contains": [
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "login",
              "display": "Login Required"
            },
            {
              "system": "http://hl7.org/fhir/hacked",
              "code": "unknown",
              "display": "Unknown User"
            }
          ]
        }
      ]
    }
  }