import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-opioidcds-recommendation-07.json.html
// Opioid CDS Recommendation 7 Logic

export const mockLibrary17: Library = {
    "resourceType": "Library",
    "id": "opioidcds-recommendation-07",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-07</p><p><b>identifier</b>: OpioidCDS_REC_07 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #7</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic to evaluate benefits and harms with patients within 1 to 4 weeks of starting opioid therapy and harms of continued therapy with patients every 3 months or more frequently.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine whether the patient has been evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently.</p><p><b>usage</b>: This library is used to notify the prescriber/user whether an evaluation for benefits and harms associated with opioid therapy is recommended for the patient.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>dataRequirement</b>: , , , , </p><p><b>content</b>: </p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "OpioidCDS_REC_07"
      }
    ],
    "version": "0.1.0",
    "title": "Opioid CDS Logic for recommendation #7",
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
    "description": "Opioid decision support logic to evaluate benefits and harms with patients within 1 to 4 weeks of starting opioid therapy and harms of continued therapy with patients every 3 months or more frequently.",
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
    "purpose": "The purpose of this library is to determine whether the patient has been evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently.",
    "usage": "This library is used to notify the prescriber/user whether an evaluation for benefits and harms associated with opioid therapy is recommended for the patient.",
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
            "valueSet": "http://example.org/fhir/ValueSet/opioids-indicating-end-of-life"
          }
        ]
      },
      {
        "type": "Procedure",
        "codeFilter": [
          {
            "path": "code"
          }
        ]
      },
      {
        "type": "Procedure",
        "codeFilter": [
          {
            "path": "code"
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
        "type": "Encounter"
      }
    ],
    "content": [
      {
        "contentType": "application/elm+xml",
        "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNzYiIHN0YXJ0Q2hhcj0iMyIgZW5kTGluZT0iNzYiIGVuZENoYXI9IjUxIiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBjb2RlIHBhdGggbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCBmb3IgdGhlIHR5cGUgb2YgdGhlIHJldHJpZXZlIEZISVIuTWVkaWNhdGlvblJlcXVlc3QuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNzYiIHN0YXJ0Q2hhcj0iMyIgZW5kTGluZT0iNzYiIGVuZENoYXI9IjUxIiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijg1IiBzdGFydENoYXI9IjQiIGVuZExpbmU9Ijg1IiBlbmRDaGFyPSI1MyIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgbWVtYmVyc2hpcCBvcGVyYXRvciBmb3IgdGVybWlub2xvZ3kgdGFyZ2V0IG9mIHRoZSByZXRyaWV2ZS4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSI4NiIgc3RhcnRDaGFyPSIxMyIgZW5kTGluZT0iODYiIGVuZENoYXI9IjUyIiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijk1IiBzdGFydENoYXI9IjMiIGVuZExpbmU9Ijk1IiBlbmRDaGFyPSI2NiIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijk1IiBzdGFydENoYXI9IjMiIGVuZExpbmU9Ijk1IiBlbmRDaGFyPSI2NiIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgbWVtYmVyc2hpcCBvcGVyYXRvciBmb3IgdGVybWlub2xvZ3kgdGFyZ2V0IG9mIHRoZSByZXRyaWV2ZS4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSIxMDMiIHN0YXJ0Q2hhcj0iMTAiIGVuZExpbmU9IjEwMyIgZW5kQ2hhcj0iNzAiIG1lc3NhZ2U9Ikxpc3QtdmFsdWVkIGV4cHJlc3Npb24gd2FzIGRlbW90ZWQgdG8gYSBzaW5nbGV0b24uIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjkiIHN0YXJ0Q2hhcj0iNTkiIGVuZExpbmU9IjY5IiBlbmRDaGFyPSI4OCIgbWVzc2FnZT0iTGlzdC12YWx1ZWQgZXhwcmVzc2lvbiB3YXMgZGVtb3RlZCB0byBhIHNpbmdsZXRvbi4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSIxMTUiIHN0YXJ0Q2hhcj0iNiIgZW5kTGluZT0iMTE1IiBlbmRDaGFyPSIzNSIgbWVzc2FnZT0iTGlzdC12YWx1ZWQgZXhwcmVzc2lvbiB3YXMgZGVtb3RlZCB0byBhIHNpbmdsZXRvbi4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGlkZW50aWZpZXIgaWQ9Ik9waW9pZENEU19TVFU0X1JFQ18wNyIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPHNjaGVtYUlkZW50aWZpZXIgaWQ9InVybjpobDctb3JnOmVsbSIgdmVyc2lvbj0icjEiLz4KICAgPHVzaW5ncz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IlN5c3RlbSIgdXJpPSJ1cm46aGw3LW9yZzplbG0tdHlwZXM6cjEiLz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IkZISVIiIHVyaT0iaHR0cDovL2hsNy5vcmcvZmhpciIgdmVyc2lvbj0iMy4yLjAiLz4KICAgPC91c2luZ3M+CiAgIDxpbmNsdWRlcz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IkNvbW1vbiIgcGF0aD0iT3Bpb2lkQ0RTX1NUVTRfQ29tbW9uIiB2ZXJzaW9uPSIwLjEuMCIvPgogICA8L2luY2x1ZGVzPgogICA8cGFyYW1ldGVycz4KICAgICAgPGRlZiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxwYXJhbWV0ZXJUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgIDxlbGVtZW50VHlwZSBuYW1lPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvcGFyYW1ldGVyVHlwZVNwZWNpZmllcj4KICAgICAgPC9kZWY+CiAgIDwvcGFyYW1ldGVycz4KICAgPGNvZGVTeXN0ZW1zPgogICAgICA8ZGVmIG5hbWU9IlNOT01FRCIgaWQ9Imh0dHA6Ly9zbm9tZWQuaW5mby9zY3QiIGFjY2Vzc0xldmVsPSJQdWJsaWMiLz4KICAgPC9jb2RlU3lzdGVtcz4KICAgPGNvZGVzPgogICAgICA8ZGVmIG5hbWU9IkFzc2Vzc21lbnQgb2YgcmlzayBmb3Igb3Bpb2lkIGFidXNlIiBpZD0iNDU0MjgxMDAwMTI0MTAwIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGNvZGVTeXN0ZW0gbmFtZT0iU05PTUVEIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkhpZ2ggcmlzayBkcnVnIG1vbml0b3JpbmciIGlkPSIyNjg1MjUwMDgiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8Y29kZVN5c3RlbSBuYW1lPSJTTk9NRUQiLz4KICAgICAgPC9kZWY+CiAgIDwvY29kZXM+CiAgIDxzdGF0ZW1lbnRzPgogICAgICA8ZGVmIG5hbWU9IlBhdGllbnQiIGNvbnRleHQ9IlBhdGllbnQiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOlBhdGllbnQiIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlJpc2sgQXNzZXNzbWVudCBJbnRlcnZhbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIGxvd0Nsb3NlZD0idHJ1ZSIgaGlnaENsb3NlZD0idHJ1ZSIgeHNpOnR5cGU9IkludGVydmFsIj4KICAgICAgICAgICAgPGxvdyB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9kYXkiLz4KICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjkxIiB1bml0PSJkYXlzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9sb3c+CiAgICAgICAgICAgIDxoaWdoIHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iMSIgdW5pdD0iZGF5IiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9oaWdoPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkVuY291bnRlciBJbnRlcnZhbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIGxvd0Nsb3NlZD0idHJ1ZSIgaGlnaENsb3NlZD0idHJ1ZSIgeHNpOnR5cGU9IkludGVydmFsIj4KICAgICAgICAgICAgPGxvdyB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9kYXkiLz4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjEyIiB1bml0PSJtb250aHMiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlPSIxIiB1bml0PSJkYXlzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9sb3c+CiAgICAgICAgICAgIDxoaWdoIHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iMSIgdW5pdD0iZGF5IiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9oaWdoPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0idHJpZ2dlclNjcmlwdCI+CiAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iUGFyYW1ldGVyUmVmIi8+CiAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8d2hlcmUgbmFtZT0iSXNPcGlvaWRXaXRoQW1idWxhdG9yeUFidXNlUG90ZW50aWFsIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJUb0NvZGUiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJbmRleGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9Im1lZGljYXRpb24iIHNjb3BlPSJ0cmlnZ2VyU2NyaXB0IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iTWVkaWNhdGlvbnMgSW5kaWNhdGluZyBFbmQgT2YgTGlmZSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9ImVuZE9mTGlmZVJ4Ij4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIGNvZGVQcm9wZXJ0eT0ibWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgICAgPGNvZGVzIG5hbWU9IkVuZCBPZiBMaWZlIE9waW9pZHMiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJWYWx1ZVNldFJlZiIvPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ic3RhdHVzIiBzY29wZT0iZW5kT2ZMaWZlUngiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJhY3RpdmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iRXhjbHVzaW9uIENyaXRlcmlhIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ik1lZGljYXRpb25zIEluZGljYXRpbmcgRW5kIE9mIExpZmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iT3Bpb2lkIFJpc2sgQXNzZXNzbWVudCBpbiBQYXN0IDkwIERheXMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJyaXNrQXNzZXNzbWVudCI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJVbmlvbiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOlByb2NlZHVyZSIgY29kZVByb3BlcnR5PSJjb2RlIiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQXNzZXNzbWVudCBvZiByaXNrIGZvciBvcGlvaWQgYWJ1c2UiIHhzaTp0eXBlPSJDb2RlUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6UHJvY2VkdXJlIiBjb2RlUHJvcGVydHk9ImNvZGUiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJIaWdoIHJpc2sgZHJ1ZyBtb25pdG9yaW5nIiB4c2k6dHlwZT0iQ29kZVJlZiIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iSW4iPgogICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJzdGFydCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJwZXJmb3JtZWQiIHNjb3BlPSJyaXNrQXNzZXNzbWVudCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlJpc2sgQXNzZXNzbWVudCBJbnRlcnZhbCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgQWN0aXZlIEFtYnVsYXRvcnkgT3Bpb2lkIFJ4IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iUngiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQW1idWxhdG9yeSBBYnVzZSBQb3RlbnRpYWwgT3Bpb2lkcyIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IlZhbHVlU2V0UmVmIi8+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ic3RhdHVzIiBzY29wZT0iUngiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJhY3RpdmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJGbGF0dGVuIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iJHRoaXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJjYXRlZ29yeSIgc2NvcGU9IlJ4IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmV0dXJuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iJHRoaXMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Im91dHBhdGllbnQiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJFbmNvdW50ZXIgaW4gcGFzdCAxMiBtb250aHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJFIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gZGF0YVR5cGU9ImZoaXI6RW5jb3VudGVyIiB4c2k6dHlwZT0iUmV0cmlldmUiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iSW4iPgogICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJzdGFydCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJwZXJpb2QiIHNjb3BlPSJFIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iRW5jb3VudGVyIEludGVydmFsIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3doZXJlPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlJ4IEFjdGl2ZSA3IG9mIFBhc3QgMTAgRGF5cyBXaXRoIEVuY291bnRlciIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlByb2JhYmxlRGF5c0luUmFuZ2UiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkdldCBBY3RpdmUgQW1idWxhdG9yeSBPcGlvaWQgUngiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMTAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iNyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJFbmNvdW50ZXIgaW4gcGFzdCAxMiBtb250aHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJSeCBBY3RpdmUgNjMgb2YgUGFzdCA5MCBEYXlzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iUHJvYmFibGVEYXlzSW5SYW5nZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iR2V0IEFjdGl2ZSBBbWJ1bGF0b3J5IE9waW9pZCBSeCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSI5MCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSI2MyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJbmNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJWYWxpZGF0ZSBUcmlnZ2VyIEV2ZW50IiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iRXhjbHVzaW9uIENyaXRlcmlhIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJPcGlvaWQgUmlzayBBc3Nlc3NtZW50IGluIFBhc3QgOTAgRGF5cyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iUnggQWN0aXZlIDcgb2YgUGFzdCAxMCBEYXlzIFdpdGggRW5jb3VudGVyIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlJ4IEFjdGl2ZSA2MyBvZiBQYXN0IDkwIERheXMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBJbmRpY2F0b3IiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0id2FybmluZyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFN1bW1hcnkiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUGF0aWVudHMgb24gb3Bpb2lkIHRoZXJhcHkgc2hvdWxkIGJlIGV2YWx1YXRlZCBmb3IgYmVuZWZpdHMgYW5kIGhhcm1zIHdpdGhpbiAxIHRvIDQgd2Vla3Mgb2Ygc3RhcnRpbmcgb3Bpb2lkIHRoZXJhcHkgYW5kIGV2ZXJ5IDMgbW9udGhzIG9yIG1vcmUgc3Vic2VxdWVudGx5LiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IERldGFpbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgIDxjb25kaXRpb24geHNpOnR5cGU9IlNpbmdsZXRvbkZyb20iPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJSeCBBY3RpdmUgNjMgb2YgUGFzdCA5MCBEYXlzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ik5vIGV2YWx1YXRpb24gZm9yIGJlbmVmaXRzIGFuZCBoYXJtcyBhc3NvY2lhdGVkIHdpdGggb3Bpb2lkIHRoZXJhcHkgaGFzIGJlZW4gcGVyZm9ybWVkIGZvciB0aGUgcGF0aWVudCBpbiB0aGUgcGFzdCAzIG1vbnRocyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPGVsc2UgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ik5vIGV2YWx1YXRpb24gZm9yIGJlbmVmaXRzIGFuZCBoYXJtcyBoYXMgYmVlbiBwZXJmb3JtZWQgZm9yIHRoZSBwYXRpZW50IHN0YXJ0aW5nIG9waW9pZCB0aGVyYXB5IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICA8L3N0YXRlbWVudHM+CjwvbGlicmFyeT4K"
      }
    ]
  }