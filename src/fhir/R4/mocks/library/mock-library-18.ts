import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-opioidcds-recommendation-08.json.html
// Opioid CDS Recommendation 8 Logic

export const mockLibrary18: Library = {
    "resourceType": "Library",
    "id": "opioidcds-recommendation-08",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-08</p><p><b>identifier</b>: OpioidCDS_REC_04 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #4</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic to consider offering Naloxone when factors that increase risk for opioid overdose are present.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine whether increased risks for opioid overdose are present.</p><p><b>usage</b>: This library is used to recommend the prescriber/user to consider offering Naloxone when increased risks for opioid overdose are present.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , , </p><p><b>dataRequirement</b>: , , , </p><p><b>content</b>: </p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "OpioidCDS_REC_04"
      }
    ],
    "version": "0.1.0",
    "title": "Opioid CDS Logic for recommendation #4",
    "status": "active",
    "experimental": false,
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/library-type",
          "code": "logic-library",
          "display": "Logic Library"
        }
      ]
    },
    "date": "2018-03-25T13:49:09-06:00",
    "publisher": "Centers for Disease Control and Prevention (CDC)",
    "description": "Opioid decision support logic to consider offering Naloxone when factors that increase risk for opioid overdose are present.",
    "useContext": [
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus",
          "display": "Clinical Focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "182888003",
              "display": "Medication requested (situation)"
            }
          ]
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus",
          "display": "Clinical Focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "82423001",
              "display": "Chronic pain (finding)"
            }
          ]
        }
      }
    ],
    "jurisdiction": [
      {
        "coding": [
          {
            "system": "urn:iso:std:iso:3166",
            "code": "US",
            "display": "United States of America"
          }
        ]
      }
    ],
    "purpose": "The purpose of this library is to determine whether increased risks for opioid overdose are present.",
    "usage": "This library is used to recommend the prescriber/user to consider offering Naloxone when increased risks for opioid overdose are present.",
    "copyright": "© CDC 2016+.",
    "topic": [
      {
        "text": "Opioid Prescribing"
      }
    ],
    "author": [
      {
        "name": "Kensaku Kawamoto, MD, PhD, MHS"
      },
      {
        "name": "Bryn Rhodes"
      },
      {
        "name": "Floyd Eisenberg, MD, MPH"
      },
      {
        "name": "Robert McClure, MD, MPH"
      }
    ],
    "relatedArtifact": [
      {
        "type": "documentation",
        "display": "CDC guideline for prescribing opioids for chronic pain",
        "url": "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420"
      },
      {
        "type": "depends-on",
        "resource": "Library/opioidcds-common"
      },
      {
        "type": "documentation",
        "display": "MME Conversion Tables",
        "url": "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf"
      }
    ],
    "dataRequirement": [
      {
        "type": "MedicationRequest",
        "codeFilter": [
          {
            "path": "medicationCodeableConcept",
            "valueSet": "http://example.org/fhir/ValueSet/naloxone"
          }
        ]
      },
      {
        "type": "MedicationRequest",
        "codeFilter": [
          {
            "path": "medicationCodeableConcept",
            "valueSet": "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care"
          }
        ]
      },
      {
        "type": "MedicationRequest",
        "codeFilter": [
          {
            "path": "medicationCodeableConcept",
            "valueSet": "http://example.org/fhir/ValueSet/benzodiazepines"
          }
        ]
      },
      {
        "type": "Condition",
        "codeFilter": [
          {
            "path": "code",
            "valueSet": "http://example.org/fhir/ValueSet/substance-abuse"
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "application/elm+xml",
        "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjMiIHN0YXJ0Q2hhcj0iMTEiIGVuZExpbmU9IjYzIiBlbmRDaGFyPSI0OCIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjYzIiBzdGFydENoYXI9IjExIiBlbmRMaW5lPSI2MyIgZW5kQ2hhcj0iNDgiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iODEiIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iODEiIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBjb2RlIHBhdGggbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCBmb3IgdGhlIHR5cGUgb2YgdGhlIHJldHJpZXZlIEZISVIuTWVkaWNhdGlvblJlcXVlc3QuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iODEiIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iODEiIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc0IiBzdGFydENoYXI9IjExIiBlbmRMaW5lPSI3NCIgZW5kQ2hhcj0iNTUiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIGNvZGUgcGF0aCBtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IGZvciB0aGUgdHlwZSBvZiB0aGUgcmV0cmlldmUgRkhJUi5NZWRpY2F0aW9uUmVxdWVzdC4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSI3NCIgc3RhcnRDaGFyPSIxMSIgZW5kTGluZT0iNzQiIGVuZENoYXI9IjU1IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc3IiBzdGFydENoYXI9IjEyIiBlbmRMaW5lPSI3NyIgZW5kQ2hhcj0iNDEiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxpZGVudGlmaWVyIGlkPSJPcGlvaWRDRFNfU1RVNF9SRUNfMDgiIHZlcnNpb249IjAuMS4wIi8+CiAgIDxzY2hlbWFJZGVudGlmaWVyIGlkPSJ1cm46aGw3LW9yZzplbG0iIHZlcnNpb249InIxIi8+CiAgIDx1c2luZ3M+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJTeXN0ZW0iIHVyaT0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIi8+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJGSElSIiB1cmk9Imh0dHA6Ly9obDcub3JnL2ZoaXIiIHZlcnNpb249IjMuMi4wIi8+CiAgIDwvdXNpbmdzPgogICA8aW5jbHVkZXM+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJDb21tb24iIHBhdGg9Ik9waW9pZENEU19TVFU0X0NvbW1vbiIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPC9pbmNsdWRlcz4KICAgPHBhcmFtZXRlcnM+CiAgICAgIDxkZWYgbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8cGFyYW1ldGVyVHlwZVNwZWNpZmllciB4c2k6dHlwZT0iTGlzdFR5cGVTcGVjaWZpZXIiPgogICAgICAgICAgICA8ZWxlbWVudFR5cGUgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L3BhcmFtZXRlclR5cGVTcGVjaWZpZXI+CiAgICAgIDwvZGVmPgogICA8L3BhcmFtZXRlcnM+CiAgIDx2YWx1ZVNldHM+CiAgICAgIDxkZWYgbmFtZT0iU3Vic3RhbmNlIEFidXNlIiBpZD0iVE9ETyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIvPgogICA8L3ZhbHVlU2V0cz4KICAgPHN0YXRlbWVudHM+CiAgICAgIDxkZWYgbmFtZT0iUGF0aWVudCIgY29udGV4dD0iUGF0aWVudCI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6UGF0aWVudCIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSJ0cmlnZ2VyU2NyaXB0Ij4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDx3aGVyZSBuYW1lPSJJc09waW9pZFdpdGhBbWJ1bGF0b3J5QWJ1c2VQb3RlbnRpYWwiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9InRyaWdnZXJTY3JpcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJFeGNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIGNvZGVQcm9wZXJ0eT0ibWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgPGNvZGVzIG5hbWU9Ik5hbG94b25lIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBBY3RpdmUgQW1idWxhdG9yeSBPcGlvaWQgUngiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iVW5pb24iPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSJSeCI+CiAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGRhdGFUeXBlPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiBjb2RlUHJvcGVydHk9Im1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJBbWJ1bGF0b3J5IEFidXNlIFBvdGVudGlhbCBPcGlvaWRzIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iRXF1YWwiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJzdGF0dXMiIHNjb3BlPSJSeCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9ImFjdGl2ZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iRXF1YWwiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHhzaTp0eXBlPSJJbmRleGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkZsYXR0ZW4iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSIkdGhpcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9ImNhdGVnb3J5IiBzY29wZT0iUngiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IiR0aGlzIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0ib3V0cGF0aWVudCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iUGFyYW1ldGVyUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iQXZlcmFnZSBNTUUiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJUb3RhbE1NRSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iR2V0IEFjdGl2ZSBBbWJ1bGF0b3J5IE9waW9pZCBSeCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJNTUUgPj0gNTAgbWcvZD8iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iQXZlcmFnZSBNTUUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpCb29sZWFuIiB2YWx1ZT0iZmFsc2UiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDxlbHNlIHhzaTp0eXBlPSJHcmVhdGVyT3JFcXVhbCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkF2ZXJhZ2UgTU1FIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iNTAiIHVuaXQ9Im1nL2QiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2Vsc2U+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iT24gQmVuem9kaWF6ZXBpbmUiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIGNvZGVQcm9wZXJ0eT0ibWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgPGNvZGVzIG5hbWU9IkJlbnpvZGlhemVwaW5lcyIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IlZhbHVlU2V0UmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJbmNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJFeGNsdXNpb24gQ3JpdGVyaWEiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iT3IiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJNTUUgPj0gNTAgbWcvZD8iIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ik9uIEJlbnpvZGlhemVwaW5lIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iSGFzIFN1YnN0YW5jZSBBYnVzZSBIaXN0b3J5IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOkNvbmRpdGlvbiIgY29kZVByb3BlcnR5PSJjb2RlIiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iU3Vic3RhbmNlIEFidXNlIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBJbmRpY2F0b3IiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0id2FybmluZyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFN1bW1hcnkiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iSW5jb3Jwb3JhdGUgaW50byB0aGUgbWFuYWdlbWVudCBwbGFuIHN0cmF0ZWdpZXMgdG8gbWl0aWdhdGUgcmlzazsgaW5jbHVkaW5nIGNvbnNpZGVyaW5nIG9mZmVyaW5nIG5hbG94b25lIHdoZW4gZmFjdG9ycyB0aGF0IGluY3JlYXNlIHJpc2sgZm9yIG9waW9pZCBvdmVyZG9zZSBhcmUgcHJlc2VudCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IE5vdGlmaWNhdGlvbiIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJDb25zaWRlciBvZmZlcmluZyBuYWxveG9uZSBnaXZlbiBmb2xsb3dpbmcgcmlzayBmYWN0b3IocykgZm9yIG9waW9pZCBvdmVyZG9zZTogIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJNTUUgPj0gNTAgbWcvZD8iIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvY29uZGl0aW9uPgogICAgICAgICAgICAgICA8dGhlbiB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iQXZlcmFnZSBNTUUgKCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvU3RyaW5nIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iQXZlcmFnZSBNTUUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iKSA+PSA1MCBtZy9kYXksICIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICAgICA8ZWxzZSB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJPbiBCZW56b2RpYXplcGluZSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJjb25jdXJyZW50IHVzZSBvZiBiZW56b2RpYXplcGluZSwgIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8ZWxzZSB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZWxzZT4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICA8L3N0YXRlbWVudHM+CjwvbGlicmFyeT4K"
      }
    ]
  }