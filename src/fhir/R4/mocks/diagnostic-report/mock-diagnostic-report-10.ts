import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/diagnosticreport-example-ghp.json.html
// An Example of a report with multiple specimen and panels

export const mockDiagnosticReport10Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "ghp",
    "type": "collection",
    "entry": [
      {
        "fullUrl": "https://example.com/base/DiagnosticReport/ghp",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "ghp",
          "meta": {
            "lastUpdated": "2015-08-16T10:35:23Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ghp</p><p><b>meta</b>: </p><p><b>identifier</b>: ghp-example</p><p><b>status</b>: final</p><p><b>code</b>: General Health Profile <span>(Details : {http://acme.com/labs/reports code 'GHP' = 'GHP', given as 'General Health Profile'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>specimen</b>: </p><ul><li><a>Red Top Tube</a></li><li><a>Lavender Top Tube</a></li><li><a>Urine Sample</a></li></ul><p><b>result</b>: </p><ul><li><a>Chemistry Panel</a></li><li><a>CBC</a></li><li><a>Urinalysis</a></li></ul></div>"
          },
          "identifier": [
            {
              "system": "http://acme.com/lab/reports",
              "value": "ghp-example"
            }
          ],
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.com/labs/reports",
                "code": "GHP",
                "display": "General Health Profile"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "specimen": [
            {
              "reference": "Specimen/rtt",
              "display": "Red Top Tube"
            },
            {
              "reference": "Specimen/ltt",
              "display": "Lavender Top Tube"
            },
            {
              "reference": "Specimen/urine",
              "display": "Urine Sample"
            }
          ],
          "result": [
            {
              "reference": "Observation/p1",
              "display": "Chemistry Panel"
            },
            {
              "reference": "Observation/p2",
              "display": "CBC"
            },
            {
              "reference": "Observation/p3",
              "display": "Urinalysis"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Specimen/rtt",
        "resource": {
          "resourceType": "Specimen",
          "id": "rtt",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: rtt</p><p><b>accessionIdentifier</b>: 20150816-00124</p><p><b>type</b>: Serum sample <span>(Details : {SNOMED CT code '119364003' = 'Serum specimen', given as 'Serum sample'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td></tr><tr><td>*</td><td><a>Practitioner/f202</a></td><td>16/08/2015 6:40:17 AM</td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Type</b></td></tr><tr><td>*</td><td>Serum Separator Tube <span>(Details : {http://acme.com/labs code 'SST' = 'SST', given as 'Serum Separator Tube'})</span></td></tr></table></div>"
          },
          "accessionIdentifier": {
            "system": "http://acme.com/labs/accession-ids",
            "value": "20150816-00124"
          },
          "type": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "119364003",
                "display": "Serum sample"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "collection": {
            "collector": {
              "reference": "Practitioner/f202"
            },
            "collectedDateTime": "2015-08-16T06:40:17Z"
          },
          "container": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://acme.com/labs",
                    "code": "SST",
                    "display": "Serum Separator Tube"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Specimen/ltt",
        "resource": {
          "resourceType": "Specimen",
          "id": "ltt",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ltt</p><p><b>accessionIdentifier</b>: 20150816-00124</p><p><b>type</b>: Blood specimen with EDTA <span>(Details : {SNOMED CT code '445295009' = 'Blood specimen with EDTA', given as 'Blood specimen with EDTA'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td></tr><tr><td>*</td><td><a>Practitioner/f202</a></td><td>16/08/2015 6:40:17 AM</td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Type</b></td></tr><tr><td>*</td><td>Lavender Top Tube <span>(Details : {http://acme.com/labs code 'LTT' = 'LTT', given as 'Lavender Top Tube'})</span></td></tr></table></div>"
          },
          "accessionIdentifier": {
            "system": "http://acme.com/labs/accession-ids",
            "value": "20150816-00124"
          },
          "type": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "445295009",
                "display": "Blood specimen with EDTA"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "collection": {
            "collector": {
              "reference": "Practitioner/f202"
            },
            "collectedDateTime": "2015-08-16T06:40:17Z"
          },
          "container": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://acme.com/labs",
                    "code": "LTT",
                    "display": "Lavender Top Tube"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Specimen/urine",
        "resource": {
          "resourceType": "Specimen",
          "id": "urine",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: urine</p><p><b>accessionIdentifier</b>: 20150816-00124</p><p><b>type</b>: Urine specimen <span>(Details : {SNOMED CT code '122575003' = 'Urine specimen', given as 'Urine specimen'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><h3>Collections</h3><table><tr><td>-</td><td><b>Collector</b></td><td><b>Collected[x]</b></td></tr><tr><td>*</td><td><a>Practitioner/f202</a></td><td>16/08/2015 6:40:17 AM</td></tr></table><h3>Containers</h3><table><tr><td>-</td><td><b>Type</b></td></tr><tr><td>*</td><td>100mL sterile cup <span>(Details : {http://acme.com/labs code 'UCUP' = 'UCUP', given as '100mL sterile cup'})</span></td></tr></table></div>"
          },
          "accessionIdentifier": {
            "system": "http://acme.com/labs/accession-ids",
            "value": "20150816-00124"
          },
          "type": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "122575003",
                "display": "Urine specimen"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "collection": {
            "collector": {
              "reference": "Practitioner/f202"
            },
            "collectedDateTime": "2015-08-16T06:40:17Z"
          },
          "container": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://acme.com/labs",
                    "code": "UCUP",
                    "display": "100mL sterile cup"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/p2",
        "resource": {
          "resourceType": "Observation",
          "id": "p2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: p2</p><p><b>status</b>: final</p><p><b>code</b>: Complete blood count (hemogram) panel - Blood by Automated count <span>(Details : {LOINC code '58410-2' = 'Complete blood count (hemogram) panel - Blood by Automated count', given as 'Complete blood count (hemogram) panel - Blood by Automated count'})</span></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>specimen</b>: <a>Lavender Top Tube</a></p><p><b>hasMember</b>: </p><ul><li><a>Observation/r1</a></li><li><a>Observation/r2</a></li><li><a>Observation/r3</a></li><li><a>Observation/r4</a></li><li><a>Observation/r5</a></li><li><a>Observation/r6</a></li><li><a>Observation/r7</a></li><li><a>Observation/r8</a></li><li><a>Observation/r9</a></li><li><a>Observation/r10</a></li><li><a>Observation/r11</a></li><li><a>Observation/r12</a></li><li><a>Observation/r13</a></li><li><a>Observation/r14</a></li><li><a>Observation/r15</a></li><li><a>Observation/r16</a></li><li><a>Observation/r17</a></li></ul></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "58410-2",
                "display": "Complete blood count (hemogram) panel - Blood by Automated count"
              }
            ]
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "specimen": {
            "reference": "Specimen/ltt",
            "display": "Lavender Top Tube"
          },
          "hasMember": [
            {
              "reference": "Observation/r1"
            },
            {
              "reference": "Observation/r2"
            },
            {
              "reference": "Observation/r3"
            },
            {
              "reference": "Observation/r4"
            },
            {
              "reference": "Observation/r5"
            },
            {
              "reference": "Observation/r6"
            },
            {
              "reference": "Observation/r7"
            },
            {
              "reference": "Observation/r8"
            },
            {
              "reference": "Observation/r9"
            },
            {
              "reference": "Observation/r10"
            },
            {
              "reference": "Observation/r11"
            },
            {
              "reference": "Observation/r12"
            },
            {
              "reference": "Observation/r13"
            },
            {
              "reference": "Observation/r14"
            },
            {
              "reference": "Observation/r15"
            },
            {
              "reference": "Observation/r16"
            },
            {
              "reference": "Observation/r17"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r1",
        "resource": {
          "resourceType": "Observation",
          "id": "r1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r1</p><p><b>status</b>: final</p><p><b>code</b>: Haemoglobin <span>(Details : {LOINC code '718-7' = 'Hemoglobin [Mass/volume] in Blood', given as 'Hemoglobin [Mass/volume] in Blood'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 176 g/L<span> (Details: UCUM code g/L = 'g/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>135 g/L<span> (Details: UCUM code g/L = 'g/L')</span></td><td>180 g/L<span> (Details: UCUM code g/L = 'g/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "718-7",
                "display": "Hemoglobin [Mass/volume] in Blood"
              }
            ],
            "text": "Haemoglobin"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 176,
            "unit": "g/L",
            "system": "http://unitsofmeasure.org",
            "code": "g/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 135,
                "unit": "g/L",
                "system": "http://unitsofmeasure.org",
                "code": "g/L"
              },
              "high": {
                "value": 180,
                "unit": "g/L",
                "system": "http://unitsofmeasure.org",
                "code": "g/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r2",
        "resource": {
          "resourceType": "Observation",
          "id": "r2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r2</p><p><b>status</b>: final</p><p><b>code</b>: Red Cell Count <span>(Details : {LOINC code '789-8' = 'Erythrocytes [#/volume] in Blood by Automated count', given as 'Erythrocytes [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 5.9 x10*12/L<span> (Details: UCUM code 10*12/L = '10*12/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>4.2 x10*12/L<span> (Details: UCUM code 10*12/L = '10*12/L')</span></td><td>6.0 x10*12/L<span> (Details: UCUM code 10*12/L = '10*12/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "789-8",
                "display": "Erythrocytes [#/volume] in Blood by Automated count"
              }
            ],
            "text": "Red Cell Count"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 5.9,
            "unit": "x10*12/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*12/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 4.2,
                "unit": "x10*12/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*12/L"
              },
              "high": {
                "value": 6.0,
                "unit": "x10*12/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*12/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r3",
        "resource": {
          "resourceType": "Observation",
          "id": "r3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r3</p><p><b>status</b>: final</p><p><b>code</b>: Haematocrit <span>(Details : {LOINC code '4544-3' = 'Hematocrit [Volume Fraction] of Blood by Automated count', given as 'Hematocrit [Volume Fraction] of Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 55 %</p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>38 %</td><td>52 %</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "4544-3",
                "display": "Hematocrit [Volume Fraction] of Blood by Automated count"
              }
            ],
            "text": "Haematocrit"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 55,
            "unit": "%"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "H"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 38,
                "unit": "%"
              },
              "high": {
                "value": 52,
                "unit": "%"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r4",
        "resource": {
          "resourceType": "Observation",
          "id": "r4",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r4</p><p><b>status</b>: final</p><p><b>code</b>: Mean Cell Volume <span>(Details : {LOINC code '787-2' = 'Erythrocyte mean corpuscular volume [Entitic volume] by Automated count', given as 'Erythrocyte mean corpuscular volume [Entitic volume] by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 99 fL<span> (Details: UCUM code fL = 'fL')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>80 fL<span> (Details: UCUM code fL = 'fL')</span></td><td>98 fL<span> (Details: UCUM code fL = 'fL')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "787-2",
                "display": "Erythrocyte mean corpuscular volume [Entitic volume] by Automated count"
              }
            ],
            "text": "Mean Cell Volume"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 99,
            "unit": "fL",
            "system": "http://unitsofmeasure.org",
            "code": "fL"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "H"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 80,
                "unit": "fL",
                "system": "http://unitsofmeasure.org",
                "code": "fL"
              },
              "high": {
                "value": 98,
                "unit": "fL",
                "system": "http://unitsofmeasure.org",
                "code": "fL"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r5",
        "resource": {
          "resourceType": "Observation",
          "id": "r5",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r5</p><p><b>status</b>: final</p><p><b>code</b>: Mean Cell Haemoglobin <span>(Details : {LOINC code '785-6' = 'Erythrocyte mean corpuscular hemoglobin [Entitic mass] by Automated count', given as 'Erythrocyte mean corpuscular hemoglobin [Entitic mass] by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 36 pg<span> (Details: UCUM code pg = 'pg')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>27 pg<span> (Details: UCUM code pg = 'pg')</span></td><td>35 pg<span> (Details: UCUM code pg = 'pg')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "785-6",
                "display": "Erythrocyte mean corpuscular hemoglobin [Entitic mass] by Automated count"
              }
            ],
            "text": "Mean Cell Haemoglobin"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 36,
            "unit": "pg",
            "system": "http://unitsofmeasure.org",
            "code": "pg"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "H"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 27,
                "unit": "pg",
                "system": "http://unitsofmeasure.org",
                "code": "pg"
              },
              "high": {
                "value": 35,
                "unit": "pg",
                "system": "http://unitsofmeasure.org",
                "code": "pg"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r6",
        "resource": {
          "resourceType": "Observation",
          "id": "r6",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r6</p><p><b>status</b>: final</p><p><b>code</b>: Platelet Count <span>(Details : {LOINC code '777-3' = 'Platelets [#/volume] in Blood by Automated count', given as 'Platelets [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 444 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>150 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td><td>450 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "777-3",
                "display": "Platelets [#/volume] in Blood by Automated count"
              }
            ],
            "text": "Platelet Count"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 444,
            "unit": "x10*9/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*9/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 150,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              },
              "high": {
                "value": 450,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r7",
        "resource": {
          "resourceType": "Observation",
          "id": "r7",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r7</p><p><b>status</b>: final</p><p><b>code</b>: White Cell Count <span>(Details : {LOINC code '6690-2' = 'Leukocytes [#/volume] in Blood by Automated count', given as 'Leukocytes [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 4.6 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>4.0 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td><td>11.0 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "6690-2",
                "display": "Leukocytes [#/volume] in Blood by Automated count"
              }
            ],
            "text": "White Cell Count"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 4.6,
            "unit": "x10*9/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*9/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 4.0,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              },
              "high": {
                "value": 11.0,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r8",
        "resource": {
          "resourceType": "Observation",
          "id": "r8",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r8</p><p><b>status</b>: final</p><p><b>code</b>: Neutrophils <span>(Details : {LOINC code '770-8' = 'Neutrophils/100 leukocytes in Blood by Automated count', given as 'Neutrophils/100 leukocytes in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 20 %<span> (Details: UCUM code % = '%')</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "770-8",
                "display": "Neutrophils/100 leukocytes in Blood by Automated count"
              }
            ],
            "text": "Neutrophils"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 20,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r9",
        "resource": {
          "resourceType": "Observation",
          "id": "r9",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r9</p><p><b>status</b>: final</p><p><b>code</b>: Neutrophils <span>(Details : {LOINC code '751-8' = 'Neutrophils [#/volume] in Blood by Automated count', given as 'Neutrophils [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 0.9 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></p><p><b>interpretation</b>: Critical low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'LL' = 'Critical low)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>2.0 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td><td>7.5 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "751-8",
                "display": "Neutrophils [#/volume] in Blood by Automated count"
              }
            ],
            "text": "Neutrophils"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 0.9,
            "unit": "x10*9/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*9/L"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "LL"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 2.0,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              },
              "high": {
                "value": 7.5,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r10",
        "resource": {
          "resourceType": "Observation",
          "id": "r10",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r10</p><p><b>status</b>: final</p><p><b>code</b>: Lymphocytes <span>(Details : {LOINC code '736-9' = 'Lymphocytes/100 leukocytes in Blood by Automated count', given as 'Lymphocytes/100 leukocytes in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 20 %<span> (Details: UCUM code % = '%')</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "736-9",
                "display": "Lymphocytes/100 leukocytes in Blood by Automated count"
              }
            ],
            "text": "Lymphocytes"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 20,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r11",
        "resource": {
          "resourceType": "Observation",
          "id": "r11",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r11</p><p><b>status</b>: final</p><p><b>code</b>: Lymphocytes <span>(Details : {LOINC code '731-0' = 'Lymphocytes [#/volume] in Blood by Automated count', given as 'Lymphocytes [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 0.9 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>1.1 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td><td>4.0 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "731-0",
                "display": "Lymphocytes [#/volume] in Blood by Automated count"
              }
            ],
            "text": "Lymphocytes"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 0.9,
            "unit": "x10*9/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*9/L"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "L"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 1.1,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              },
              "high": {
                "value": 4.0,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r12",
        "resource": {
          "resourceType": "Observation",
          "id": "r12",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r12</p><p><b>status</b>: final</p><p><b>code</b>: Monocytes <span>(Details : {LOINC code '5905-5' = 'Monocytes/100 leukocytes in Blood by Automated count', given as 'Monocytes/100 leukocytes in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 20 %<span> (Details: UCUM code % = '%')</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "5905-5",
                "display": "Monocytes/100 leukocytes in Blood by Automated count"
              }
            ],
            "text": "Monocytes"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 20,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r13",
        "resource": {
          "resourceType": "Observation",
          "id": "r13",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r13</p><p><b>status</b>: final</p><p><b>code</b>: Monocytes <span>(Details : {LOINC code '742-7' = 'Monocytes [#/volume] in Blood by Automated count', given as 'Monocytes [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 0.9 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0.2 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td><td>1.0 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "742-7",
                "display": "Monocytes [#/volume] in Blood by Automated count"
              }
            ],
            "text": "Monocytes"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 0.9,
            "unit": "x10*9/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*9/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 0.2,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              },
              "high": {
                "value": 1.0,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r14",
        "resource": {
          "resourceType": "Observation",
          "id": "r14",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r14</p><p><b>status</b>: final</p><p><b>code</b>: Eosinophils <span>(Details : {LOINC code '713-8' = 'Eosinophils/100 leukocytes in Blood by Automated count', given as 'Eosinophils/100 leukocytes in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 20 %<span> (Details: UCUM code % = '%')</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "713-8",
                "display": "Eosinophils/100 leukocytes in Blood by Automated count"
              }
            ],
            "text": "Eosinophils"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 20,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r15",
        "resource": {
          "resourceType": "Observation",
          "id": "r15",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r15</p><p><b>status</b>: final</p><p><b>code</b>: Eosinophils <span>(Details : {LOINC code '711-2' = 'Eosinophils [#/volume] in Blood by Automated count', given as 'Eosinophils [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 0.92 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></p><p><b>interpretation</b>: Critical high <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'HH' = 'Critical high)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0.04 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td><td>0.40 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "711-2",
                "display": "Eosinophils [#/volume] in Blood by Automated count"
              }
            ],
            "text": "Eosinophils"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 0.92,
            "unit": "x10*9/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*9/L"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "HH"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 0.04,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              },
              "high": {
                "value": 0.40,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r16",
        "resource": {
          "resourceType": "Observation",
          "id": "r16",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r16</p><p><b>status</b>: final</p><p><b>code</b>: Basophils <span>(Details : {LOINC code '706-2' = 'Basophils/100 leukocytes in Blood by Automated count', given as 'Basophils/100 leukocytes in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 20 %<span> (Details: UCUM code % = '%')</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "706-2",
                "display": "Basophils/100 leukocytes in Blood by Automated count"
              }
            ],
            "text": "Basophils"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 20,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/r17",
        "resource": {
          "resourceType": "Observation",
          "id": "r17",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: r17</p><p><b>status</b>: final</p><p><b>code</b>: Basophils <span>(Details : {LOINC code '704-7' = 'Basophils [#/volume] in Blood by Automated count', given as 'Basophils [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 0.92 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>0.21 x10*9/L<span> (Details: UCUM code 10*9/L = '10*9/L')</span></td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "704-7",
                "display": "Basophils [#/volume] in Blood by Automated count"
              }
            ],
            "text": "Basophils"
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 0.92,
            "unit": "x10*9/L",
            "system": "http://unitsofmeasure.org",
            "code": "10*9/L"
          },
          "referenceRange": [
            {
              "high": {
                "value": 0.21,
                "unit": "x10*9/L",
                "system": "http://unitsofmeasure.org",
                "code": "10*9/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/p1",
        "resource": {
          "resourceType": "Observation",
          "id": "p1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: p1</p><p><b>status</b>: final</p><p><b>code</b>: Comprehensive metabolic 2000 panel - Serum or Plasma <span>(Details : {LOINC code '24323-8' = 'Comprehensive metabolic 2000 panel - Serum or Plasma', given as 'Comprehensive metabolic 2000 panel - Serum or Plasma'})</span></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>specimen</b>: <a>Red Top Tube</a></p><p><b>hasMember</b>: </p><ul><li><a>Observation/o1</a></li><li><a>Observation/o2</a></li><li><a>Observation/o3</a></li><li><a>Observation/o4</a></li><li><a>Observation/o5</a></li><li><a>Observation/o6</a></li><li><a>Observation/o7</a></li><li><a>Observation/o8</a></li><li><a>Observation/o9</a></li><li><a>Observation/o10</a></li><li><a>Observation/o11</a></li><li><a>Observation/o12</a></li><li><a>Observation/o13</a></li><li><a>Observation/o14</a></li><li><a>Observation/o15</a></li><li><a>Observation/o16</a></li><li><a>Observation/o17</a></li><li><a>Observation/o18</a></li><li><a>Observation/o19</a></li><li><a>Observation/o20</a></li><li><a>Observation/o21</a></li><li><a>Observation/o22</a></li></ul></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "24323-8",
                "display": "Comprehensive metabolic 2000 panel - Serum or Plasma"
              }
            ]
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "specimen": {
            "reference": "Specimen/rtt",
            "display": "Red Top Tube"
          },
          "hasMember": [
            {
              "reference": "Observation/o1"
            },
            {
              "reference": "Observation/o2"
            },
            {
              "reference": "Observation/o3"
            },
            {
              "reference": "Observation/o4"
            },
            {
              "reference": "Observation/o5"
            },
            {
              "reference": "Observation/o6"
            },
            {
              "reference": "Observation/o7"
            },
            {
              "reference": "Observation/o8"
            },
            {
              "reference": "Observation/o9"
            },
            {
              "reference": "Observation/o10"
            },
            {
              "reference": "Observation/o11"
            },
            {
              "reference": "Observation/o12"
            },
            {
              "reference": "Observation/o13"
            },
            {
              "reference": "Observation/o14"
            },
            {
              "reference": "Observation/o15"
            },
            {
              "reference": "Observation/o16"
            },
            {
              "reference": "Observation/o17"
            },
            {
              "reference": "Observation/o18"
            },
            {
              "reference": "Observation/o19"
            },
            {
              "reference": "Observation/o20"
            },
            {
              "reference": "Observation/o21"
            },
            {
              "reference": "Observation/o22"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o1",
        "resource": {
          "resourceType": "Observation",
          "id": "o1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o1</p><p><b>status</b>: final</p><p><b>code</b>: Sodium [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '2951-2' = 'Sodium [Moles/volume] in Serum or Plasma', given as 'Sodium [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '104934005' = 'Sodium measurement, serum)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 140 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>137 mmol/L</td><td>147 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2951-2",
                "display": "Sodium [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "104934005"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 140,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 137,
                "unit": "mmol/L"
              },
              "high": {
                "value": 147,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o2",
        "resource": {
          "resourceType": "Observation",
          "id": "o2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o2</p><p><b>status</b>: final</p><p><b>code</b>: Potassium [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '2823-3' = 'Potassium [Moles/volume] in Serum or Plasma', given as 'Potassium [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '59573005' = 'Potassium measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 4.2 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.5 mmol/L</td><td>5.0 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2823-3",
                "display": "Potassium [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "59573005"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 4.2,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 3.5,
                "unit": "mmol/L"
              },
              "high": {
                "value": 5.0,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o3",
        "resource": {
          "resourceType": "Observation",
          "id": "o3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o3</p><p><b>status</b>: final</p><p><b>code</b>: Chloride [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '2075-0' = 'Chloride [Moles/volume] in Serum or Plasma', given as 'Chloride [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '46511006' = 'Chloride measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 105 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>96 mmol/L</td><td>109 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2075-0",
                "display": "Chloride [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "46511006"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 105,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 96,
                "unit": "mmol/L"
              },
              "high": {
                "value": 109,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o4",
        "resource": {
          "resourceType": "Observation",
          "id": "o4",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o4</p><p><b>status</b>: final</p><p><b>code</b>: Bicarbonate [Moles/volume] in Serum <span>(Details : {LOINC code '1963-8' = 'Bicarbonate [Moles/volume] in Serum', given as 'Bicarbonate [Moles/volume] in Serum'}; {SNOMED CT code '88645003' = 'Bicarbonate measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 26 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>25 mmol/L</td><td>33 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "1963-8",
                "display": "Bicarbonate [Moles/volume] in Serum"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "88645003"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 26,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 25,
                "unit": "mmol/L"
              },
              "high": {
                "value": 33,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o5",
        "resource": {
          "resourceType": "Observation",
          "id": "o5",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o5</p><p><b>status</b>: final</p><p><b>code</b>: Anion gap 4 in Serum or Plasma <span>(Details : {LOINC code '1863-0' = 'Anion gap 4 in Serum or Plasma', given as 'Anion gap 4 in Serum or Plasma'}; {SNOMED CT code '271057005' = 'Serum anion gap measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 13 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>4 mmol/L</td><td>17 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "1863-0",
                "display": "Anion gap 4 in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "271057005"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 13,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 4,
                "unit": "mmol/L"
              },
              "high": {
                "value": 17,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o6",
        "resource": {
          "resourceType": "Observation",
          "id": "o6",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o6</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '14749-6' = 'Glucose [Moles/volume] in Serum or Plasma', given as 'Glucose [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '36048009' = 'Glucose measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 7.4 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.0 mmol/L</td><td>7.7 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "14749-6",
                "display": "Glucose [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "36048009"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 7.4,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 3.0,
                "unit": "mmol/L"
              },
              "high": {
                "value": 7.7,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o7",
        "resource": {
          "resourceType": "Observation",
          "id": "o7",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o7</p><p><b>status</b>: final</p><p><b>code</b>: Urea nitrogen [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '14937-7' = 'Urea nitrogen [Moles/volume] in Serum or Plasma', given as 'Urea nitrogen [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '273967009' = 'Serum urea level)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 4.7 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>2.0 mmol/L</td><td>7.0 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "14937-7",
                "display": "Urea nitrogen [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "273967009"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 4.7,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 2.0,
                "unit": "mmol/L"
              },
              "high": {
                "value": 7.0,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o8",
        "resource": {
          "resourceType": "Observation",
          "id": "o8",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o8</p><p><b>status</b>: final</p><p><b>code</b>: Creatinine [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '14682-9' = 'Creatinine [Moles/volume] in Serum or Plasma', given as 'Creatinine [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '70901006' = 'Creatinine measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 0.09 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0.04 mmol/L</td><td>0.11 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "14682-9",
                "display": "Creatinine [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "70901006"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 0.09,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 0.04,
                "unit": "mmol/L"
              },
              "high": {
                "value": 0.11,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o9",
        "resource": {
          "resourceType": "Observation",
          "id": "o9",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o9</p><p><b>status</b>: final</p><p><b>code</b>: Urate [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '14933-6' = 'Urate [Moles/volume] in Serum or Plasma', given as 'Urate [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '86228006' = 'Uric acid measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 0.39 mmol/L</p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0.14 mmol/L</td><td>0.35 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "14933-6",
                "display": "Urate [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "86228006"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 0.39,
            "unit": "mmol/L"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "H"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 0.14,
                "unit": "mmol/L"
              },
              "high": {
                "value": 0.35,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o10",
        "resource": {
          "resourceType": "Observation",
          "id": "o10",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o10</p><p><b>status</b>: final</p><p><b>code</b>: Bilirubin.total [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '14631-6' = 'Bilirubin.total [Moles/volume] in Serum or Plasma', given as 'Bilirubin.total [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '27171005' = 'Urinalysis)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 7 umol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>2 umol/L</td><td>20 umol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "14631-6",
                "display": "Bilirubin.total [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "27171005"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 7,
            "unit": "umol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 2,
                "unit": "umol/L"
              },
              "high": {
                "value": 20,
                "unit": "umol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o11",
        "resource": {
          "resourceType": "Observation",
          "id": "o11",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o11</p><p><b>status</b>: final</p><p><b>code</b>: Bilirubin.direct [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '14629-0' = 'Bilirubin.direct [Moles/volume] in Serum or Plasma', given as 'Bilirubin.direct [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '39748002' = 'Bilirubin, direct measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 3 umol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0 umol/L</td><td>8 umol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "14629-0",
                "display": "Bilirubin.direct [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "39748002"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 3,
            "unit": "umol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 0,
                "unit": "umol/L"
              },
              "high": {
                "value": 8,
                "unit": "umol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o12",
        "resource": {
          "resourceType": "Observation",
          "id": "o12",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o12</p><p><b>status</b>: final</p><p><b>code</b>: Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma <span>(Details : {LOINC code '6768-6' = 'Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma', given as 'Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma'}; {SNOMED CT code '88810008' = 'Alkaline phosphatase measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 108 U/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>30 U/L</td><td>115 U/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "6768-6",
                "display": "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "88810008"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 108,
            "unit": "U/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 30,
                "unit": "U/L"
              },
              "high": {
                "value": 115,
                "unit": "U/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o13",
        "resource": {
          "resourceType": "Observation",
          "id": "o13",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o13</p><p><b>status</b>: final</p><p><b>code</b>: Gamma glutamyl transferase [Enzymatic activity/volume] in Serum or Plasma <span>(Details : {LOINC code '2324-2' = 'Gamma glutamyl transferase [Enzymatic activity/volume] in Serum or Plasma', given as 'Gamma glutamyl transferase [Enzymatic activity/volume] in Serum or Plasma'}; {SNOMED CT code '69480007' = 'Gamma glutamyl transferase measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 35 U/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0 U/L</td><td>45 U/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2324-2",
                "display": "Gamma glutamyl transferase [Enzymatic activity/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "69480007"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 35,
            "unit": "U/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 0,
                "unit": "U/L"
              },
              "high": {
                "value": 45,
                "unit": "U/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o14",
        "resource": {
          "resourceType": "Observation",
          "id": "o14",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o14</p><p><b>status</b>: final</p><p><b>code</b>: Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma <span>(Details : {LOINC code '1742-6' = 'Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma', given as 'Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma'}; {SNOMED CT code '34608000' = 'Alanine aminotransferase measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 54 U/L</p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0 U/L</td><td>45 U/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "1742-6",
                "display": "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "34608000"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 54,
            "unit": "U/L"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "H"
                }
              ]
            }
          ],
          "referenceRange": [
            {
              "low": {
                "value": 0,
                "unit": "U/L"
              },
              "high": {
                "value": 45,
                "unit": "U/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o15",
        "resource": {
          "resourceType": "Observation",
          "id": "o15",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o15</p><p><b>status</b>: final</p><p><b>code</b>: Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma <span>(Details : {LOINC code '1920-8' = 'Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma', given as 'Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma'}; {SNOMED CT code '45896001' = 'Aspartate aminotransferase measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 30 U/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0 U/L</td><td>41 U/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "1920-8",
                "display": "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "45896001"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 30,
            "unit": "U/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 0,
                "unit": "U/L"
              },
              "high": {
                "value": 41,
                "unit": "U/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o16",
        "resource": {
          "resourceType": "Observation",
          "id": "o16",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o16</p><p><b>status</b>: final</p><p><b>code</b>: Lactate dehydrogenase [Enzymatic activity/volume] in Serum or Plasma <span>(Details : {LOINC code '2532-0' = 'Lactate dehydrogenase [Enzymatic activity/volume] in Serum or Plasma', given as 'Lactate dehydrogenase [Enzymatic activity/volume] in Serum or Plasma'}; {SNOMED CT code '11274001' = 'Lactate dehydrogenase measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 131 U/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>80 U/L</td><td>250 U/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2532-0",
                "display": "Lactate dehydrogenase [Enzymatic activity/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "11274001"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 131,
            "unit": "U/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 80,
                "unit": "U/L"
              },
              "high": {
                "value": 250,
                "unit": "U/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o17",
        "resource": {
          "resourceType": "Observation",
          "id": "o17",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o17</p><p><b>status</b>: final</p><p><b>code</b>: Calcium [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '2000-8' = 'Calcium [Moles/volume] in Serum or Plasma', given as 'Calcium [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '71878006' = 'Calcium measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 2.38 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>2.25 mmol/L</td><td>2.65 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2000-8",
                "display": "Calcium [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "71878006"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 2.38,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 2.25,
                "unit": "mmol/L"
              },
              "high": {
                "value": 2.65,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o18",
        "resource": {
          "resourceType": "Observation",
          "id": "o18",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o18</p><p><b>status</b>: final</p><p><b>code</b>: Calcium.ionized [Moles/volume] in Serum or Plasma by calculation <span>(Details : {LOINC code '13959-2' = 'Calcium.ionized [Moles/volume] in Serum or Plasma by calculation', given as 'Calcium.ionized [Moles/volume] in Serum or Plasma by calculation'}; {SNOMED CT code '166708003' = 'Corrected serum calcium measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 2.39 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>2.25 mmol/L</td><td>2.65 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "13959-2",
                "display": "Calcium.ionized [Moles/volume] in Serum or Plasma by calculation"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "166708003"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 2.39,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 2.25,
                "unit": "mmol/L"
              },
              "high": {
                "value": 2.65,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o19",
        "resource": {
          "resourceType": "Observation",
          "id": "o19",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o19</p><p><b>status</b>: final</p><p><b>code</b>: Phosphate [Moles/volume] in Serum or Plasma <span>(Details : {LOINC code '14879-1' = 'Phosphate [Moles/volume] in Serum or Plasma', given as 'Phosphate [Moles/volume] in Serum or Plasma'}; {SNOMED CT code '104866001' = 'Phosphate measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 1.5 mmol/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>0.8 mmol/L</td><td>1.5 mmol/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "14879-1",
                "display": "Phosphate [Moles/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "104866001"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 1.5,
            "unit": "mmol/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 0.8,
                "unit": "mmol/L"
              },
              "high": {
                "value": 1.5,
                "unit": "mmol/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o20",
        "resource": {
          "resourceType": "Observation",
          "id": "o20",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o20</p><p><b>status</b>: final</p><p><b>code</b>: Protein [Mass/volume] in Serum or Plasma <span>(Details : {LOINC code '2885-2' = 'Protein [Mass/volume] in Serum or Plasma', given as 'Protein [Mass/volume] in Serum or Plasma'}; {SNOMED CT code '74040009' = 'Protein measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 67 g/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>60 g/L</td><td>82 g/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2885-2",
                "display": "Protein [Mass/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "74040009"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 67,
            "unit": "g/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 60,
                "unit": "g/L"
              },
              "high": {
                "value": 82,
                "unit": "g/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o21",
        "resource": {
          "resourceType": "Observation",
          "id": "o21",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o21</p><p><b>status</b>: final</p><p><b>code</b>: Albumin [Mass/volume] in Serum or Plasma <span>(Details : {LOINC code '1751-7' = 'Albumin [Mass/volume] in Serum or Plasma', given as 'Albumin [Mass/volume] in Serum or Plasma'}; {SNOMED CT code '104485008' = 'Albumin measurement, serum)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 42 g/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>35 g/L</td><td>50 g/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "1751-7",
                "display": "Albumin [Mass/volume] in Serum or Plasma"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "104485008"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 42,
            "unit": "g/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 35,
                "unit": "g/L"
              },
              "high": {
                "value": 50,
                "unit": "g/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/o22",
        "resource": {
          "resourceType": "Observation",
          "id": "o22",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: o22</p><p><b>status</b>: final</p><p><b>code</b>: Globulin [Mass/volume] in Serum by calculation <span>(Details : {LOINC code '10834-0' = 'Globulin [Mass/volume] in Serum by calculation', given as 'Globulin [Mass/volume] in Serum by calculation'}; {SNOMED CT code '104979009' = 'Total globulins measurement)</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 25 g/L</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>20 g/L</td><td>40 g/L</td></tr></table></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "10834-0",
                "display": "Globulin [Mass/volume] in Serum by calculation"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "104979009"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 25,
            "unit": "g/L"
          },
          "referenceRange": [
            {
              "low": {
                "value": 20,
                "unit": "g/L"
              },
              "high": {
                "value": 40,
                "unit": "g/L"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/p3",
        "resource": {
          "resourceType": "Observation",
          "id": "p3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: p3</p><p><b>status</b>: final</p><p><b>code</b>: Urinalysis macro (dipstick) panel - Urine <span>(Details : {LOINC code '24357-6' = 'Urinalysis macro (dipstick) panel - Urine', given as 'Urinalysis macro (dipstick) panel - Urine'})</span></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>specimen</b>: <a>Urine Sample</a></p><p><b>hasMember</b>: </p><ul><li><a>Observation/u1</a></li><li><a>Observation/u2</a></li><li><a>Observation/u3</a></li><li><a>Observation/u4</a></li><li><a>Observation/u5</a></li><li><a>Observation/u6</a></li><li><a>Observation/u7</a></li><li><a>Observation/u8</a></li><li><a>Observation/u9</a></li></ul></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "24357-6",
                "display": "Urinalysis macro (dipstick) panel - Urine"
              }
            ]
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          },
          "hasMember": [
            {
              "reference": "Observation/u1"
            },
            {
              "reference": "Observation/u2"
            },
            {
              "reference": "Observation/u3"
            },
            {
              "reference": "Observation/u4"
            },
            {
              "reference": "Observation/u5"
            },
            {
              "reference": "Observation/u6"
            },
            {
              "reference": "Observation/u7"
            },
            {
              "reference": "Observation/u8"
            },
            {
              "reference": "Observation/u9"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u1",
        "resource": {
          "resourceType": "Observation",
          "id": "u1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u1</p><p><b>status</b>: final</p><p><b>code</b>: pH of Urine <span>(Details : {LOINC code '2756-5' = 'pH of Urine', given as 'pH of Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 5.0 pH</p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2756-5",
                "display": "pH of Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 5.0,
            "unit": "pH"
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u2",
        "resource": {
          "resourceType": "Observation",
          "id": "u2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u2</p><p><b>status</b>: final</p><p><b>code</b>: Protein [Presence] in Urine <span>(Details : {LOINC code '2887-8' = 'Protein [Presence] in Urine', given as 'Protein [Presence] in Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2887-8",
                "display": "Protein [Presence] in Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "260385009",
                "display": "Negative"
              }
            ]
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u3",
        "resource": {
          "resourceType": "Observation",
          "id": "u3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u3</p><p><b>status</b>: final</p><p><b>code</b>: Specific gravity of Urine <span>(Details : {LOINC code '2965-2' = 'Specific gravity of Urine', given as 'Specific gravity of Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 1.009</p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2965-2",
                "display": "Specific gravity of Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 1.009
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u4",
        "resource": {
          "resourceType": "Observation",
          "id": "u4",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u4</p><p><b>status</b>: final</p><p><b>code</b>: Erythrocytes [Presence] in Urine <span>(Details : {LOINC code '33051-4' = 'Erythrocytes [Presence] in Urine', given as 'Erythrocytes [Presence] in Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "33051-4",
                "display": "Erythrocytes [Presence] in Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "260385009",
                "display": "Negative"
              }
            ]
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u5",
        "resource": {
          "resourceType": "Observation",
          "id": "u5",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u5</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Presence] in Urine <span>(Details : {LOINC code '2349-9' = 'Glucose [Presence] in Urine', given as 'Glucose [Presence] in Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "2349-9",
                "display": "Glucose [Presence] in Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "260385009",
                "display": "Negative"
              }
            ]
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u6",
        "resource": {
          "resourceType": "Observation",
          "id": "u6",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u6</p><p><b>status</b>: final</p><p><b>code</b>: Leukocytes [Presence] in Urine <span>(Details : {LOINC code '33052-2' = 'Leukocytes [Presence] in Urine', given as 'Leukocytes [Presence] in Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "33052-2",
                "display": "Leukocytes [Presence] in Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "260385009",
                "display": "Negative"
              }
            ]
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u7",
        "resource": {
          "resourceType": "Observation",
          "id": "u7",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u7</p><p><b>status</b>: final</p><p><b>code</b>: Leukocytes [#/volume] in Urine <span>(Details : {LOINC code '30405-5' = 'Leukocytes [#/volume] in Urine', given as 'Leukocytes [#/volume] in Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: 1 /uL</p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "30405-5",
                "display": "Leukocytes [#/volume] in Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 1,
            "unit": "/uL"
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u8",
        "resource": {
          "resourceType": "Observation",
          "id": "u8",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u8</p><p><b>status</b>: final</p><p><b>code</b>: Erythocytes [#/volume] in Urine <span>(Details : {LOINC code '30391-7' = 'Erythrocytes [#/volume] in Urine', given as 'Erythocytes [#/volume] in Urine'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: &lt;1 /uL</p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "30391-7",
                "display": "Erythocytes [#/volume] in Urine"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 1,
            "comparator": "<",
            "unit": "/uL"
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/u9",
        "resource": {
          "resourceType": "Observation",
          "id": "u9",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: u9</p><p><b>status</b>: final</p><p><b>code</b>: Epithelial cells.squamous [#/volume] in Urine sediment <span>(Details : {LOINC code '13654-9' = 'Epithelial cells.squamous [#/volume] in Urine sediment', given as 'Epithelial cells.squamous [#/volume] in Urine sediment'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 16/08/2015 6:40:17 AM</p><p><b>issued</b>: 17/08/2015 6:40:17 AM</p><p><b>performer</b>: <a>Acme Laboratory, Inc</a></p><p><b>value</b>: &lt;1 /mL</p><p><b>specimen</b>: <a>Urine Sample</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "13654-9",
                "display": "Epithelial cells.squamous [#/volume] in Urine sediment"
              }
            ]
          },
          "subject": {
            "reference": "Patient/pat2"
          },
          "effectiveDateTime": "2015-08-16T06:40:17Z",
          "issued": "2015-08-17T06:40:17Z",
          "performer": [
            {
              "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
              "display": "Acme Laboratory, Inc"
            }
          ],
          "valueQuantity": {
            "value": 1,
            "comparator": "<",
            "unit": "/mL"
          },
          "specimen": {
            "reference": "Specimen/urine",
            "display": "Urine Sample"
          }
        }
      }
    ]
  }