import { Composition } from "fhir/R4/types/composition";

// https://hl7.org/fhir/R4/composition-example.json.html
// Simple Example of a Composition

export const mockComposition1: Composition = {
    "resourceType": "Composition",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>Consultation note for Henry Levin the 7th</p>\n\t\t\t<p>Managed by Good Health Clinic</p>\n\t\t</div>"
    },
    "identifier": {
      "system": "http://healthintersections.com.au/test",
      "value": "1"
    },
    "status": "final",
    "type": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "11488-4",
          "display": "Consult note"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "LP173421-1",
            "display": "Report"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/xcda",
      "display": "Henry Levin the 7th"
    },
    "encounter": {
      "reference": "Encounter/xcda"
    },
    "date": "2012-01-04T09:10:14Z",
    "author": [
      {
        "reference": "Practitioner/xcda-author",
        "display": "Harold Hippocrates, MD"
      }
    ],
    "title": "Consultation Note",
    "confidentiality": "N",
    "attester": [
      {
        "mode": "legal",
        "time": "2012-01-04T09:10:14Z",
        "party": {
          "reference": "Practitioner/xcda-author",
          "display": "Harold Hippocrates, MD"
        }
      }
    ],
    "custodian": {
      "reference": "Organization/2.16.840.1.113883.19.5",
      "display": "Good Health Clinic"
    },
    "relatesTo": [
      {
        "code": "replaces",
        "targetReference": {
          "reference": "Composition/old-example"
        }
      },
      {
        "code": "appends",
        "targetIdentifier": {
          "system": "http://example.org/fhir/NamingSystem/document-ids",
          "value": "ABC123"
        }
      }
    ],
    "event": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                "code": "HEALTHREC",
                "display": "health record"
              }
            ]
          }
        ],
        "period": {
          "start": "2010-07-18",
          "end": "2012-11-12"
        },
        "detail": [
          {
            "reference": "Observation/example"
          }
        ]
      }
    ],
    "section": [
      {
        "title": "History of present illness",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11348-0",
              "display": "History of past illness Narrative"
            }
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Code</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Date</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Type</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>BodySite</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Severity</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Stroke</td>\n\t\t\t\t\t\t<td>2010-07-18</td>\n\t\t\t\t\t\t<td>Diagnosis</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Burnt Ear</td>\n\t\t\t\t\t\t<td>2012-05-24</td>\n\t\t\t\t\t\t<td>Diagnosis</td>\n\t\t\t\t\t\t<td>Left Ear</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Asthma</td>\n\t\t\t\t\t\t<td>2012-11-12</td>\n\t\t\t\t\t\t<td>Finding</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t<td>Mild</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>"
        },
        "mode": "snapshot",
        "orderedBy": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/list-order",
              "code": "event-date",
              "display": "Sorted by Event Date"
            }
          ]
        },
        "entry": [
          {
            "reference": "Condition/stroke"
          },
          {
            "reference": "Condition/example"
          },
          {
            "reference": "Condition/example2"
          }
        ]
      },
      {
        "title": "History of family member diseases",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "10157-6",
              "display": "History of family member diseases Narrative"
            }
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t<p>History of family member diseases - not available</p>\n\t\t\t</div>"
        },
        "mode": "snapshot",
        "emptyReason": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/list-empty-reason",
              "code": "withheld",
              "display": "Information Withheld"
            }
          ]
        }
      }
    ]
  }