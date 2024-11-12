import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-opioidcds-recommendation-11.json.html
// Opioid CDS Recommendation 11 Logic

export const mockLibrary20: Library = {
    "resourceType": "Library",
    "id": "opioidcds-recommendation-11",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-11</p><p><b>identifier</b>: OpioidCDS_REC_11 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #11</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic to avoid prescribing opioid pain medication and benzodiazepines concurrently whenever possible.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine whether opioid pain medication and benzodiazepines have been prescribed concurrently.</p><p><b>usage</b>: This library is used to notify the prescriber/user to avoid prescribing opioid pain medication and benzodiazepines concurrently.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>dataRequirement</b>: , </p><p><b>content</b>: </p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "OpioidCDS_REC_11"
      }
    ],
    "version": "0.1.0",
    "title": "Opioid CDS Logic for recommendation #11",
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
    "description": "Opioid decision support logic to avoid prescribing opioid pain medication and benzodiazepines concurrently whenever possible.",
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
    "purpose": "The purpose of this library is to determine whether opioid pain medication and benzodiazepines have been prescribed concurrently.",
    "usage": "This library is used to notify the prescriber/user to avoid prescribing opioid pain medication and benzodiazepines concurrently.",
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
      }
    ],
    "dataRequirement": [
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
        "type": "MedicationRequest",
        "codeFilter": [
          {
            "path": "medicationCodeableConcept",
            "valueSet": "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care"
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "application/elm+xml",
        "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNTQiIHN0YXJ0Q2hhcj0iMTMiIGVuZExpbmU9IjU0IiBlbmRDaGFyPSI1NyIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjU0IiBzdGFydENoYXI9IjEzIiBlbmRMaW5lPSI1NCIgZW5kQ2hhcj0iNTciIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNTgiIHN0YXJ0Q2hhcj0iMTQiIGVuZExpbmU9IjU4IiBlbmRDaGFyPSI3NyIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjU4IiBzdGFydENoYXI9IjE0IiBlbmRMaW5lPSI1OCIgZW5kQ2hhcj0iNzciIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxpZGVudGlmaWVyIGlkPSJPcGlvaWRDRFNfU1RVNF9SRUNfMTEiIHZlcnNpb249IjAuMS4wIi8+CiAgIDxzY2hlbWFJZGVudGlmaWVyIGlkPSJ1cm46aGw3LW9yZzplbG0iIHZlcnNpb249InIxIi8+CiAgIDx1c2luZ3M+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJTeXN0ZW0iIHVyaT0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIi8+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJGSElSIiB1cmk9Imh0dHA6Ly9obDcub3JnL2ZoaXIiIHZlcnNpb249IjMuMi4wIi8+CiAgIDwvdXNpbmdzPgogICA8aW5jbHVkZXM+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJDb21tb24iIHBhdGg9Ik9waW9pZENEU19TVFU0X0NvbW1vbiIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPC9pbmNsdWRlcz4KICAgPHBhcmFtZXRlcnM+CiAgICAgIDxkZWYgbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8cGFyYW1ldGVyVHlwZVNwZWNpZmllciB4c2k6dHlwZT0iTGlzdFR5cGVTcGVjaWZpZXIiPgogICAgICAgICAgICA8ZWxlbWVudFR5cGUgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L3BhcmFtZXRlclR5cGVTcGVjaWZpZXI+CiAgICAgIDwvZGVmPgogICA8L3BhcmFtZXRlcnM+CiAgIDxzdGF0ZW1lbnRzPgogICAgICA8ZGVmIG5hbWU9IlBhdGllbnQiIGNvbnRleHQ9IlBhdGllbnQiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOlBhdGllbnQiIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQgRm9yIEJlbnpvZGlhemVwaW5lIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9InRyaWdnZXJTY3JpcHQiPgogICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgeHNpOnR5cGU9IlBhcmFtZXRlclJlZiIvPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIG5hbWU9IklzQmVuem9kaWF6ZXBpbmUiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9InRyaWdnZXJTY3JpcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJWYWxpZGF0ZSBUcmlnZ2VyIEV2ZW50IEZvciBBbWJ1bGF0b3J5IENhcmUgQWJ1c2UgUG90ZW50aWFsIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9InRyaWdnZXJTY3JpcHQiPgogICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgeHNpOnR5cGU9IlBhcmFtZXRlclJlZiIvPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIG5hbWU9IklzT3Bpb2lkV2l0aEFtYnVsYXRvcnlBYnVzZVBvdGVudGlhbCIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9Db2RlIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJtZWRpY2F0aW9uIiBzY29wZT0idHJpZ2dlclNjcmlwdCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9Ik9uIEJlbnpvZGlhemVwaW5lIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCBGb3IgQmVuem9kaWF6ZXBpbmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQmVuem9kaWF6ZXBpbmVzIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iT3Bpb2lkIHdpdGggQW1idWxhdG9yeSBDYXJlIEFidXNlIFBvdGVudGlhbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJPciI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQgRm9yIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQW1idWxhdG9yeSBBYnVzZSBQb3RlbnRpYWwgT3Bpb2lkcyIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IlZhbHVlU2V0UmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkluY2x1c2lvbiBDcml0ZXJpYSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCBGb3IgQmVuem9kaWF6ZXBpbmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQgRm9yIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iT24gQmVuem9kaWF6ZXBpbmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iT3Bpb2lkIHdpdGggQW1idWxhdG9yeSBDYXJlIEFidXNlIFBvdGVudGlhbCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgSW5kaWNhdG9yIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Indhcm5pbmciIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBTdW1tYXJ5IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkF2b2lkIHByZXNjcmliaW5nIG9waW9pZCBwYWluIG1lZGljYXRpb24gYW5kIGJlbnpvZGlhemVwaW5lIGNvbmN1cnJlbnRseSB3aGVuZXZlciBwb3NzaWJsZS4iIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBEZXRhaWwiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJWYWxpZGF0ZSBUcmlnZ2VyIEV2ZW50IEZvciBCZW56b2RpYXplcGluZSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJUaGUgYmVuem9kaWF6ZXBpbmUgcHJlc2NyaXB0aW9uIHJlcXVlc3QgaXMgY29uY3VycmVudCB3aXRoIGFuIGFjdGl2ZSBvcGlvaWQgcHJlc2NyaXB0aW9uIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8ZWxzZSB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iVGhlIG9waW9pZCBwcmVzY3JpcHRpb24gcmVxdWVzdCBpcyBjb25jdXJyZW50IHdpdGggYW4gYWN0aXZlIGJlbnpvZGlhemVwaW5lIHByZXNjcmlwdGlvbiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgPC9zdGF0ZW1lbnRzPgo8L2xpYnJhcnk+Cg=="
      }
    ]
  }