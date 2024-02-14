import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/diagnosticreport-example-lri.json.html
// An collection Bundle showing an example of a complex Micro Isolate and Sensitivities

export const mockDiagnosticReport8Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "lri-example",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2017-06-27T00:52:51Z"
    },
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://test.fhir.org/r4/DiagnosticReport/lri-example",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "lri-example",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: lri-example</p><p><b>identifier</b>: Placer Identifier = RP723234, Filler Identifier = 250401, Group = RFP 123456</p><p><b>basedOn</b>: <a>ServiceRequest/example</a></p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0074 code 'LAB' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 15/08/2016</p><p><b>issued</b>: 18/08/2016 6:14:35 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>specimen</b>: <a>Specimen/example</a></p><p><b>result</b>: </p><ul><li><a>Normal Flora</a></li><li><a>Klebsiella pneumoniae</a></li><li><a>Staphlyococcuc aureus</a></li><li><a>Many WBCs</a></li><li><a>Moderate Gram Positive Rods</a></li><li><a>Moderate Gram Positive Cocci in Chains</a></li><li><a>Many Gram Negative Rods</a></li></ul></div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "PLAC",
                    "display": "Placer Identifier"
                  }
                ]
              },
              "system": "https://acme.org/identifiers",
              "value": "RP723234"
            },
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "FILL",
                    "display": "Filler Identifier"
                  }
                ]
              },
              "system": "https://acme.org/identifiers",
              "value": "250401"
            },
            {
              "type": {
                "coding": [
                  {
                    "system": "https://acme.org/identifiers",
                    "code": "GRP",
                    "display": "Group"
                  }
                ]
              },
              "system": "https://acme.org/identifiers",
              "value": "RFP 123456"
            }
          ],
          "basedOn": [
            {
              "reference": "ServiceRequest/example"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "LAB",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "624-7",
                "display": "Bacteria Spt Resp Cul"
              }
            ],
            "text": "Aerobic Respiratory Culture, Sputum"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-15",
          "issued": "2016-08-18T18:14:35Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "specimen": [
            {
              "reference": "Specimen/example"
            }
          ],
          "result": [
            {
              "reference": "Observation/organism1",
              "display": "Normal Flora"
            },
            {
              "reference": "Observation/organism2",
              "display": "Klebsiella pneumoniae"
            },
            {
              "reference": "Observation/organism3",
              "display": "Staphlyococcuc aureus"
            },
            {
              "reference": "Observation/gramstain1",
              "display": "Many WBCs"
            },
            {
              "reference": "Observation/gramstain2",
              "display": "Moderate Gram Positive Rods"
            },
            {
              "reference": "Observation/gramstain3",
              "display": "Moderate Gram Positive Cocci in Chains"
            },
            {
              "reference": "Observation/gramstain4",
              "display": "Many Gram Negative Rods"
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-gramstain1",
        "resource": {
          "resourceType": "Observation",
          "id": "gramstain1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain1</p><p><b>identifier</b>: gramstain1</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Many <span>(Details : {https://acme.org/codes code 'MNY' = 'MNY', given as 'Many'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: WBCS <span>(Details : {https://acme.org/codes code 'WBCS' = 'WBCS', given as 'WBCS'})</span></p></blockquote></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "gramstain1"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "664-3",
                "display": "Gram Stn XXX"
              },
              {
                "system": "https://acme.org/codes",
                "code": "GMST",
                "display": "Gram Stain"
              }
            ],
            "text": "Gram Stain"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "MNY",
                    "display": "Many"
                  }
                ],
                "text": "Many"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "WBCS",
                    "display": "WBCS"
                  }
                ],
                "text": "WBCS"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-gramstain2",
        "resource": {
          "resourceType": "Observation",
          "id": "gramstain2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain2</p><p><b>identifier</b>: gramstain2</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Moderate <span>(Details : {https://acme.org/codes code 'MOD' = 'MOD', given as 'Moderate'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Gram Positive Rods <span>(Details : {https://acme.org/codes code 'GPR' = 'GPR', given as 'Moderate'})</span></p></blockquote></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "gramstain2"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "664-3",
                "display": "Gram Stn XXX"
              },
              {
                "system": "https://acme.org/codes",
                "code": "GMST",
                "display": "Gram Stain"
              }
            ],
            "text": "Gram Stain"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "MOD",
                    "display": "Moderate"
                  }
                ],
                "text": "Moderate"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "GPR",
                    "display": "Moderate"
                  }
                ],
                "text": "Gram Positive Rods"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-gramstain3",
        "resource": {
          "resourceType": "Observation",
          "id": "gramstain3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain3</p><p><b>identifier</b>: gramstain3</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Moderate <span>(Details : {https://acme.org/codes code 'MOD' = 'MOD', given as 'Moderate'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Gram Positive Cocci in Chains <span>(Details : {https://acme.org/codes code 'GPCCH' = 'GPCCH', given as 'Gram Positive Cocci in Chains'})</span></p></blockquote></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "gramstain3"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "664-3",
                "display": "Gram Stn XXX"
              },
              {
                "system": "https://acme.org/codes",
                "code": "GMST",
                "display": "Gram Stain"
              }
            ],
            "text": "Gram Stain"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "MOD",
                    "display": "Moderate"
                  }
                ],
                "text": "Moderate"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "GPCCH",
                    "display": "Gram Positive Cocci in Chains"
                  }
                ],
                "text": "Gram Positive Cocci in Chains"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-gramstain4",
        "resource": {
          "resourceType": "Observation",
          "id": "gramstain4",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gramstain4</p><p><b>identifier</b>: gramstain4</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'}; {https://acme.org/codes code 'GMST' = 'GMST', given as 'Gram Stain'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Many <span>(Details : {https://acme.org/codes code 'MNY' = 'MNY', given as 'Many'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Gram Stain <span>(Details : {LOINC code '664-3' = 'Microscopic observation [Identifier] in Unspecified specimen by Gram stain', given as 'Gram Stn XXX'})</span></p><p><b>value</b>: Gram Negative Rods <span>(Details : {https://acme.org/codes code 'GNR' = 'GNR', given as 'Gram Negative Rods'})</span></p></blockquote></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "gramstain4"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "664-3",
                "display": "Gram Stn XXX"
              },
              {
                "system": "https://acme.org/codes",
                "code": "GMST",
                "display": "Gram Stain"
              }
            ],
            "text": "Gram Stain"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "MNY",
                    "display": "Many"
                  }
                ],
                "text": "Many"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "664-3",
                    "display": "Gram Stn XXX"
                  }
                ],
                "text": "Gram Stain"
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://acme.org/codes",
                    "code": "GNR",
                    "display": "Gram Negative Rods"
                  }
                ],
                "text": "Gram Negative Rods"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-growth1",
        "resource": {
          "resourceType": "Observation",
          "id": "growth1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: growth1</p><p><b>identifier</b>: growth1</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'GROWTH' = 'GROWTH', given as 'Growth'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Moderate Growth <span>(Details : {SNOMED CT code '263812008' = 'Moderate growth', given as 'Moderate Growth'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "growth1"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "624-7",
                "display": "Bacteria Spt Resp Cul"
              },
              {
                "system": "https://acme.org/codes",
                "code": "GROWTH",
                "display": "Growth"
              }
            ],
            "text": "Aerobic Respiratory Culture, Sputum"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "263812008",
                "display": "Moderate Growth"
              }
            ],
            "text": "Moderate Growth"
          }
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-growth2",
        "resource": {
          "resourceType": "Observation",
          "id": "growth2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: growth2</p><p><b>identifier</b>: growth2</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'GROWTH' = 'GROWTH', given as 'Growth'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Heavy growth <span>(Details : {SNOMED CT code '263776006' = 'Heavy growth', given as 'Heavy growth'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "growth2"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "624-7",
                "display": "Bacteria Spt Resp Cul"
              },
              {
                "system": "https://acme.org/codes",
                "code": "GROWTH",
                "display": "Growth"
              }
            ],
            "text": "Aerobic Respiratory Culture, Sputum"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "263776006",
                "display": "Heavy growth"
              }
            ],
            "text": "Heavy growth"
          }
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-growth3",
        "resource": {
          "resourceType": "Observation",
          "id": "growth3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: growth3</p><p><b>identifier</b>: growth3</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'GROWTH' = 'GROWTH', given as 'Growth'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Heavy growth <span>(Details : {SNOMED CT code '263776006' = 'Heavy growth', given as 'Heavy growth'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "growth3"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "624-7",
                "display": "Bacteria Spt Resp Cul"
              },
              {
                "system": "https://acme.org/codes",
                "code": "GROWTH",
                "display": "Growth"
              }
            ],
            "text": "Aerobic Respiratory Culture, Sputum"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "263776006",
                "display": "Heavy growth"
              }
            ],
            "text": "Heavy growth"
          }
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-org2-amp",
        "resource": {
          "resourceType": "Observation",
          "id": "org2-amp",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org2-amp</p><p><b>identifier</b>: org2-amp</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ampicilin MIC <span>(Details : {LOINC code '28-1' = 'Ampicillin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ampicilin Islt MIC'}; {https://acme.org/codes code 'AMPMIC' = 'AMPMIC', given as 'Ampicilin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.06 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "org2-amp"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "28-1",
                "display": "Ampicilin Islt MIC"
              },
              {
                "system": "https://acme.org/codes",
                "code": "AMPMIC",
                "display": "Ampicilin MIC"
              }
            ],
            "text": "Ampicilin MIC"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueQuantity": {
            "value": 0.06,
            "comparator": "<",
            "unit": "ug/ml",
            "system": "http://unitsofmeasure.org",
            "code": "ug/mL"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "S",
                  "display": "Susceptible"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-org2-cip",
        "resource": {
          "resourceType": "Observation",
          "id": "org2-cip",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org2-cip</p><p><b>identifier</b>: org2-cip</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ciprofloxacin MIC <span>(Details : {LOINC code '185-9' = 'Ciprofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ciprofloxacin Islt MIC'}; {https://acme.org/codes code 'CIPMIC' = 'CIPMIC', given as 'Ciprofloxacin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "org2-cip"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "185-9",
                "display": "Ciprofloxacin Islt MIC"
              },
              {
                "system": "https://acme.org/codes",
                "code": "CIPMIC",
                "display": "Ciprofloxacin MIC"
              }
            ],
            "text": "Ciprofloxacin MIC"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueQuantity": {
            "value": 0.05,
            "comparator": "<",
            "unit": "ug/ml",
            "system": "http://unitsofmeasure.org",
            "code": "ug/mL"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "S",
                  "display": "Susceptible"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-org2-gent",
        "resource": {
          "resourceType": "Observation",
          "id": "org2-gent",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org2-gent</p><p><b>identifier</b>: org2-gent</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Gentamicin MIC <span>(Details : {LOINC code '267-5' = 'Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Gentamicin Islt MIC'}; {https://acme.org/codes code 'CIPMIC' = 'CIPMIC', given as 'Gentamicin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "org2-gent"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "267-5",
                "display": "Gentamicin Islt MIC"
              },
              {
                "system": "https://acme.org/codes",
                "code": "CIPMIC",
                "display": "Gentamicin MIC"
              }
            ],
            "text": "Gentamicin MIC"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueQuantity": {
            "value": 0.05,
            "comparator": "<",
            "unit": "ug/ml",
            "system": "http://unitsofmeasure.org",
            "code": "ug/mL"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "S",
                  "display": "Susceptible"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-org3-amp",
        "resource": {
          "resourceType": "Observation",
          "id": "org3-amp",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org3-amp</p><p><b>identifier</b>: org3-amp</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ampicilin MIC <span>(Details : {LOINC code '28-1' = 'Ampicillin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ampicilin Islt MIC'}; {https://acme.org/codes code 'AMPMIC' = 'AMPMIC', given as 'Ampicilin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.06 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "org3-amp"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "28-1",
                "display": "Ampicilin Islt MIC"
              },
              {
                "system": "https://acme.org/codes",
                "code": "AMPMIC",
                "display": "Ampicilin MIC"
              }
            ],
            "text": "Ampicilin MIC"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueQuantity": {
            "value": 0.06,
            "comparator": "<",
            "unit": "ug/ml",
            "system": "http://unitsofmeasure.org",
            "code": "ug/mL"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "S",
                  "display": "Susceptible"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-org3-cip",
        "resource": {
          "resourceType": "Observation",
          "id": "org3-cip",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org3-cip</p><p><b>identifier</b>: org3-cip</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Ciprofloxacin MIC <span>(Details : {LOINC code '185-9' = 'Ciprofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Ciprofloxacin Islt MIC'}; {https://acme.org/codes code 'CIPMIC' = 'CIPMIC', given as 'Ciprofloxacin MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "org3-cip"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "185-9",
                "display": "Ciprofloxacin Islt MIC"
              },
              {
                "system": "https://acme.org/codes",
                "code": "CIPMIC",
                "display": "Ciprofloxacin MIC"
              }
            ],
            "text": "Ciprofloxacin MIC"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueQuantity": {
            "value": 0.05,
            "comparator": "<",
            "unit": "ug/ml",
            "system": "http://unitsofmeasure.org",
            "code": "ug/mL"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "S",
                  "display": "Susceptible"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-org3-gent",
        "resource": {
          "resourceType": "Observation",
          "id": "org3-gent",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org3-gent</p><p><b>identifier</b>: org3-gent</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span></p><p><b>code</b>: Gentamicin MIC <span>(Details : {LOINC code '267-5' = 'Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)', given as 'Gentamicin Islt MIC'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: &lt;0.05 ug/ml<span> (Details: UCUM code ug/mL = 'ug/mL')</span></p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible', given as 'Susceptible'})</span></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "org3-gent"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "267-5",
                "display": "Gentamicin Islt MIC"
              }
            ],
            "text": "Gentamicin MIC"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueQuantity": {
            "value": 0.05,
            "comparator": "<",
            "unit": "ug/ml",
            "system": "http://unitsofmeasure.org",
            "code": "ug/mL"
          },
          "interpretation": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  "code": "S",
                  "display": "Susceptible"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-organism1",
        "resource": {
          "resourceType": "Observation",
          "id": "organism1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: organism1</p><p><b>identifier</b>: organism1</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'CULTID' = 'CULTID', given as 'Culture ID'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Normal flora <span>(Details : {SNOMED CT code '23506009' = 'Normal flora', given as 'Normal flora'})</span></p><p><b>hasMember</b>: <a>Moderate growth</a></p></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "organism1"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "624-7",
                "display": "Bacteria Spt Resp Cul"
              },
              {
                "system": "https://acme.org/codes",
                "code": "CULTID",
                "display": "Culture ID"
              }
            ],
            "text": "Aerobic Respiratory Culture, Sputum"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "23506009",
                "display": "Normal flora"
              }
            ],
            "text": "Normal flora"
          },
          "hasMember": [
            {
              "reference": "Observation/growth1",
              "display": "Moderate growth"
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-organism2",
        "resource": {
          "resourceType": "Observation",
          "id": "organism2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: organism2</p><p><b>identifier</b>: organism2</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'CULTID' = 'CULTID', given as 'Culture ID'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Klebsiella pneumonia <span>(Details : {SNOMED CT code '56415008' = 'Klebsiella pneumoniae', given as 'Klebsiella pneumonia'})</span></p><p><b>hasMember</b>: </p><ul><li><a>Heavy growth</a></li><li><a>Ampicillin MIC - Susceptible</a></li><li><a>Ciprofloxacin MIC - Susceptible</a></li><li><a>Gentamicin MIC  - Susceptible</a></li></ul></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "organism2"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "624-7",
                "display": "Bacteria Spt Resp Cul"
              },
              {
                "system": "https://acme.org/codes",
                "code": "CULTID",
                "display": "Culture ID"
              }
            ],
            "text": "Aerobic Respiratory Culture, Sputum"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "56415008",
                "display": "Klebsiella pneumonia"
              }
            ],
            "text": "Klebsiella pneumonia"
          },
          "hasMember": [
            {
              "reference": "Observation/growth2",
              "display": "Heavy growth"
            },
            {
              "reference": "Observation/org2-amp",
              "display": "Ampicillin MIC - Susceptible"
            },
            {
              "reference": "Observation/org2-cip",
              "display": "Ciprofloxacin MIC - Susceptible"
            },
            {
              "reference": "Observation/org2-gent",
              "display": "Gentamicin MIC  - Susceptible"
            }
          ]
        }
      },
      {
        "fullUrl": "http://test.fhir.org/r4/Observation/lri-organism3",
        "resource": {
          "resourceType": "Observation",
          "id": "organism3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: organism3</p><p><b>identifier</b>: organism3</p><p><b>status</b>: final</p><p><b>category</b>: Micro <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology', given as 'microbiology'})</span>, Result <span>(Details : {urn:oid:2.16.840.1.113883.9.195.4.61 code 'RSLT' = 'RSLT', given as 'Result'})</span></p><p><b>code</b>: Aerobic Respiratory Culture, Sputum <span>(Details : {LOINC code '624-7' = 'Bacteria identified in Sputum by Respiratory culture', given as 'Bacteria Spt Resp Cul'}; {https://acme.org/codes code 'CULTID' = 'CULTID', given as 'Culture ID'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/08/2016</p><p><b>issued</b>: 18/08/2016 11:06:32 PM</p><p><b>performer</b>: <a>Organization/example</a></p><p><b>value</b>: Staphlyococcuc aureus <span>(Details : {SNOMED CT code '3092008' = 'Staphylococcus aureus', given as 'Staphlyococcuc aureus'})</span></p><p><b>hasMember</b>: </p><ul><li><a>Heavy growth</a></li><li><a>Ampicillin MIC - Susceptible</a></li><li><a>Ciprofloxacin MIC - Susceptible</a></li><li><a>Gentamicin MIC  - Susceptible</a></li></ul></div>"
          },
          "identifier": [
            {
              "system": "https://acme.org/identifiers",
              "value": "organism3"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "laboratory",
                  "display": "Laboratory"
                },
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB",
                  "display": "microbiology"
                }
              ],
              "text": "Micro"
            },
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.9.195.4.61",
                  "code": "RSLT",
                  "display": "Result"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "624-7",
                "display": "Bacteria Spt Resp Cul"
              },
              {
                "system": "https://acme.org/codes",
                "code": "CULTID",
                "display": "Culture ID"
              }
            ],
            "text": "Aerobic Respiratory Culture, Sputum"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "effectiveDateTime": "2016-08-18",
          "issued": "2016-08-18T23:06:32Z",
          "performer": [
            {
              "reference": "Organization/example"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "3092008",
                "display": "Staphlyococcuc aureus"
              }
            ],
            "text": "Staphlyococcuc aureus"
          },
          "hasMember": [
            {
              "reference": "Observation/growth3",
              "display": "Heavy growth"
            },
            {
              "reference": "Observation/org3-amp",
              "display": "Ampicillin MIC - Susceptible"
            },
            {
              "reference": "Observation/org3-cip",
              "display": "Ciprofloxacin MIC - Susceptible"
            },
            {
              "reference": "Observation/org3-gent",
              "display": "Gentamicin MIC  - Susceptible"
            }
          ]
        }
      }
    ]
  }