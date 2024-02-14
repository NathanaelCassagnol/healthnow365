import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/diagnosticreport-examples-general.json.html
// Various reports gathered from v2 messages

export const mockDiagnosticReport2Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "72ac8493-52ac-41bd-8d5d-7258c289b5ea",
    "meta": {
      "lastUpdated": "2012-04-14T10:35:23Z"
    },
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/3",
        "resource": {
          "resourceType": "Bundle",
          "id": "3",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/3",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "3",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "text": {
                  "status": "generated",
                  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Sodium</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>140</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>137-147</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Serum Potassium</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>4.2</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>3.5-5.0</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Chloride</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>105</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>96-109</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Bicarbonate</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>26</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>25-33</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Other Anions</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>13</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>4-17</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Glucose</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>7.4</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>3.0-7.7</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Urea</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>4.7</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>2.0-7.0</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Serum Creatinine</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0.09</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0.04-0.11</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Serum Uric Acid</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0.39</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0.14-0.35</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<b>+</b>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Total Bilirubin</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>7</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>umol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>2-20</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Direct Bilirubin</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>3</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>umol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0-8</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>108</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>U/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>30-115</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Gamma G.T.</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>35</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>U/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0-45</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>ALT</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>54</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>U/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0-45</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<b>+</b>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>AST</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>30</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>U/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0-41</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>LD</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>131</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>U/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>80-250</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Serum Calcium</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>2.38</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>2.25-2.65</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Corrected Calcium</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>2.39</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>2.25-2.65</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Serum Phosphate</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>1.5</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0.8-1.5</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Total Protein</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>67</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>g/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>60-82</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Serum Albumin</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>42</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>g/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>35-50</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Globulins</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>25</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>g/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>20-40</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Iron</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>5</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>umol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>10-33</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<b>--</b>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Cholesterol</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>3.8</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>3.6-6.7</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td> </td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">Revised NHF cholesterol guidelines (Nov.,2001): Target below 4.0 mmol/L if high risk patient. Consider lipid lowering treatment if cholesterol above 6.0 mmol/L, and no other risk factor of CHD.</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>Triglycerides</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0.9</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>0.3-4.0</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>HDL Cholesterol</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>1.2</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mmol/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>1.0-2.0</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://acme.com/labs/reports",
                      "code": "25T",
                      "display": "E/LFT (MASTER)"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "effectiveDateTime": "2005-01-27T06:40:17Z",
                "issued": "2005-01-27T06:40:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-3"
                  },
                  {
                    "reference": "Observation/o2-3"
                  },
                  {
                    "reference": "Observation/o3-3"
                  },
                  {
                    "reference": "Observation/o4-3"
                  },
                  {
                    "reference": "Observation/o5-3"
                  },
                  {
                    "reference": "Observation/o6-3"
                  },
                  {
                    "reference": "Observation/o7-3"
                  },
                  {
                    "reference": "Observation/o8-3"
                  },
                  {
                    "reference": "Observation/o9-3"
                  },
                  {
                    "reference": "Observation/o10-3"
                  },
                  {
                    "reference": "Observation/o11-3"
                  },
                  {
                    "reference": "Observation/o12-3"
                  },
                  {
                    "reference": "Observation/o13-3"
                  },
                  {
                    "reference": "Observation/o14-3"
                  },
                  {
                    "reference": "Observation/o15-3"
                  },
                  {
                    "reference": "Observation/o16-3"
                  },
                  {
                    "reference": "Observation/o17-3"
                  },
                  {
                    "reference": "Observation/o18-3"
                  },
                  {
                    "reference": "Observation/o19-3"
                  },
                  {
                    "reference": "Observation/o20-3"
                  },
                  {
                    "reference": "Observation/o21-3"
                  },
                  {
                    "reference": "Observation/o22-3"
                  },
                  {
                    "reference": "Observation/o23-3"
                  },
                  {
                    "reference": "Observation/o24-3"
                  },
                  {
                    "reference": "Observation/o25-3"
                  },
                  {
                    "reference": "Observation/o26-3"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o2-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o3-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o4-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o5-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o6-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o7-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o8-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o9-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o10-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o11-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o12-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o13-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o14-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o15-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o16-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o17-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o18-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o19-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o20-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o21-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o22-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-3",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o23-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-3",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 5,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-3",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 3.8,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-3",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o26-3",
              "resource": {
                "resourceType": "Observation",
                "id": "o26-3",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "2085-9",
                      "display": "Cholesterol in HDL [Mass/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "17888004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.0,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 1.0,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 2.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/4",
        "resource": {
          "resourceType": "Bundle",
          "id": "4",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/4",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "4",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "effectiveDateTime": "2004-12-08T07:45:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-4"
                  },
                  {
                    "reference": "Observation/o2-4"
                  },
                  {
                    "reference": "Observation/o3-4"
                  },
                  {
                    "reference": "Observation/o4-4"
                  },
                  {
                    "reference": "Observation/o5-4"
                  },
                  {
                    "reference": "Observation/o6-4"
                  },
                  {
                    "reference": "Observation/o7-4"
                  },
                  {
                    "reference": "Observation/o8-4"
                  },
                  {
                    "reference": "Observation/o9-4"
                  },
                  {
                    "reference": "Observation/o10-4"
                  },
                  {
                    "reference": "Observation/o11-4"
                  },
                  {
                    "reference": "Observation/o12-4"
                  },
                  {
                    "reference": "Observation/o13-4"
                  },
                  {
                    "reference": "Observation/o14-4"
                  },
                  {
                    "reference": "Observation/o15-4"
                  },
                  {
                    "reference": "Observation/o16-4"
                  },
                  {
                    "reference": "Observation/o17-4"
                  },
                  {
                    "reference": "Observation/o18-4"
                  },
                  {
                    "reference": "Observation/o19-4"
                  },
                  {
                    "reference": "Observation/o20-4"
                  },
                  {
                    "reference": "Observation/o21-4"
                  },
                  {
                    "reference": "Observation/o22-4"
                  },
                  {
                    "reference": "Observation/o23-4"
                  },
                  {
                    "reference": "Observation/o24-4"
                  },
                  {
                    "reference": "Observation/o25-4"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 138,
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
              "fullUrl": "https://example.com/base/Observation/o2-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.1,
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
              "fullUrl": "https://example.com/base/Observation/o3-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 103,
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
              "fullUrl": "https://example.com/base/Observation/o4-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 27,
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
              "fullUrl": "https://example.com/base/Observation/o5-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 12,
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
              "fullUrl": "https://example.com/base/Observation/o6-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.8,
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
              "fullUrl": "https://example.com/base/Observation/o7-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 8.2,
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
              "fullUrl": "https://example.com/base/Observation/o8-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.07,
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
              "fullUrl": "https://example.com/base/Observation/o9-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.42,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 16,
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
              "fullUrl": "https://example.com/base/Observation/o11-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 8,
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
              "fullUrl": "https://example.com/base/Observation/o12-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 369,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 438,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 263,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 87,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o16-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 179,
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
              "fullUrl": "https://example.com/base/Observation/o17-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o18-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.42,
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
              "fullUrl": "https://example.com/base/Observation/o19-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.3,
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
              "fullUrl": "https://example.com/base/Observation/o20-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-4",
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
                  "reference": "Patient/2"
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
              "fullUrl": "https://example.com/base/Observation/o21-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 39,
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
              "fullUrl": "https://example.com/base/Observation/o22-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-4",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 28,
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
              "fullUrl": "https://example.com/base/Observation/o23-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-4",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 8,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-4",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.8,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-4",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-4",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.2,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/5",
        "resource": {
          "resourceType": "Bundle",
          "id": "5",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/5",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "5",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "effectiveDateTime": "2004-12-15T07:20:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-5"
                  },
                  {
                    "reference": "Observation/o2-5"
                  },
                  {
                    "reference": "Observation/o3-5"
                  },
                  {
                    "reference": "Observation/o4-5"
                  },
                  {
                    "reference": "Observation/o5-5"
                  },
                  {
                    "reference": "Observation/o6-5"
                  },
                  {
                    "reference": "Observation/o7-5"
                  },
                  {
                    "reference": "Observation/o8-5"
                  },
                  {
                    "reference": "Observation/o9-5"
                  },
                  {
                    "reference": "Observation/o10-5"
                  },
                  {
                    "reference": "Observation/o11-5"
                  },
                  {
                    "reference": "Observation/o12-5"
                  },
                  {
                    "reference": "Observation/o13-5"
                  },
                  {
                    "reference": "Observation/o14-5"
                  },
                  {
                    "reference": "Observation/o15-5"
                  },
                  {
                    "reference": "Observation/o16-5"
                  },
                  {
                    "reference": "Observation/o17-5"
                  },
                  {
                    "reference": "Observation/o18-5"
                  },
                  {
                    "reference": "Observation/o19-5"
                  },
                  {
                    "reference": "Observation/o20-5"
                  },
                  {
                    "reference": "Observation/o21-5"
                  },
                  {
                    "reference": "Observation/o22-5"
                  },
                  {
                    "reference": "Observation/o23-5"
                  },
                  {
                    "reference": "Observation/o24-5"
                  },
                  {
                    "reference": "Observation/o25-5"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 142,
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
              "fullUrl": "https://example.com/base/Observation/o2-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.0,
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
              "fullUrl": "https://example.com/base/Observation/o3-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-5",
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
                  "reference": "Patient/3"
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
              "fullUrl": "https://example.com/base/Observation/o4-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 28,
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
              "fullUrl": "https://example.com/base/Observation/o5-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-5",
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
                  "reference": "Patient/3"
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
              "fullUrl": "https://example.com/base/Observation/o6-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 5.2,
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
              "fullUrl": "https://example.com/base/Observation/o7-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.4,
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
              "fullUrl": "https://example.com/base/Observation/o8-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-5",
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
                  "reference": "Patient/3"
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
              "fullUrl": "https://example.com/base/Observation/o9-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.46,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 13,
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
              "fullUrl": "https://example.com/base/Observation/o11-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6,
                  "unit": "umol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.1,
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
              "fullUrl": "https://example.com/base/Observation/o12-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 204,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 192,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 70,
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
              "fullUrl": "https://example.com/base/Observation/o15-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 26,
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
              "fullUrl": "https://example.com/base/Observation/o16-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 150,
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
              "fullUrl": "https://example.com/base/Observation/o17-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.37,
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
              "fullUrl": "https://example.com/base/Observation/o18-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.47,
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
              "fullUrl": "https://example.com/base/Observation/o19-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.4,
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
              "fullUrl": "https://example.com/base/Observation/o20-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-5",
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
                  "reference": "Patient/3"
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
              "fullUrl": "https://example.com/base/Observation/o21-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 39,
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
              "fullUrl": "https://example.com/base/Observation/o22-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-5",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 28,
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
              "fullUrl": "https://example.com/base/Observation/o23-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-5",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 5,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-5",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.4,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-5",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-5",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.1,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/6",
        "resource": {
          "resourceType": "Bundle",
          "id": "6",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/6",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "6",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/4"
                },
                "effectiveDateTime": "2004-12-22T07:45:17Z",
                "issued": "2004-12-21T00:00:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-6"
                  },
                  {
                    "reference": "Observation/o2-6"
                  },
                  {
                    "reference": "Observation/o3-6"
                  },
                  {
                    "reference": "Observation/o4-6"
                  },
                  {
                    "reference": "Observation/o5-6"
                  },
                  {
                    "reference": "Observation/o6-6"
                  },
                  {
                    "reference": "Observation/o7-6"
                  },
                  {
                    "reference": "Observation/o8-6"
                  },
                  {
                    "reference": "Observation/o9-6"
                  },
                  {
                    "reference": "Observation/o10-6"
                  },
                  {
                    "reference": "Observation/o11-6"
                  },
                  {
                    "reference": "Observation/o12-6"
                  },
                  {
                    "reference": "Observation/o13-6"
                  },
                  {
                    "reference": "Observation/o14-6"
                  },
                  {
                    "reference": "Observation/o15-6"
                  },
                  {
                    "reference": "Observation/o16-6"
                  },
                  {
                    "reference": "Observation/o17-6"
                  },
                  {
                    "reference": "Observation/o18-6"
                  },
                  {
                    "reference": "Observation/o19-6"
                  },
                  {
                    "reference": "Observation/o20-6"
                  },
                  {
                    "reference": "Observation/o21-6"
                  },
                  {
                    "reference": "Observation/o22-6"
                  },
                  {
                    "reference": "Observation/o23-6"
                  },
                  {
                    "reference": "Observation/o24-6"
                  },
                  {
                    "reference": "Observation/o25-6"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 142,
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
              "fullUrl": "https://example.com/base/Observation/o2-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.0,
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
              "fullUrl": "https://example.com/base/Observation/o3-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 107,
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
              "fullUrl": "https://example.com/base/Observation/o4-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-6",
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
                  "reference": "Patient/4"
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
              "fullUrl": "https://example.com/base/Observation/o5-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-6",
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
                  "reference": "Patient/4"
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
              "fullUrl": "https://example.com/base/Observation/o6-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.3,
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
              "fullUrl": "https://example.com/base/Observation/o7-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.7,
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
              "fullUrl": "https://example.com/base/Observation/o8-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.08,
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
              "fullUrl": "https://example.com/base/Observation/o9-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.40,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 9,
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
              "fullUrl": "https://example.com/base/Observation/o11-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4,
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
              "fullUrl": "https://example.com/base/Observation/o12-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 144,
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
              "fullUrl": "https://example.com/base/Observation/o13-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 106,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-6",
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
                  "reference": "Patient/4"
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
                      "value": 45,
                      "unit": "U/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o15-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 18,
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
              "fullUrl": "https://example.com/base/Observation/o16-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 143,
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
              "fullUrl": "https://example.com/base/Observation/o17-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.28,
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
              "fullUrl": "https://example.com/base/Observation/o18-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o19-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.3,
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
              "fullUrl": "https://example.com/base/Observation/o20-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 66,
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
              "fullUrl": "https://example.com/base/Observation/o21-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-6",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 41,
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
              "fullUrl": "https://example.com/base/Observation/o22-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-6",
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
                  "reference": "Patient/4"
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
              "fullUrl": "https://example.com/base/Observation/o23-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-6",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/4"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-6",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.0,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-6",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-6",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.0,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/7",
        "resource": {
          "resourceType": "Bundle",
          "id": "7",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/7",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "7",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "effectiveDateTime": "2004-12-03T09:45:17Z",
                "issued": "2004-12-03T00:00:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-7"
                  },
                  {
                    "reference": "Observation/o2-7"
                  },
                  {
                    "reference": "Observation/o3-7"
                  },
                  {
                    "reference": "Observation/o4-7"
                  },
                  {
                    "reference": "Observation/o5-7"
                  },
                  {
                    "reference": "Observation/o6-7"
                  },
                  {
                    "reference": "Observation/o7-7"
                  },
                  {
                    "reference": "Observation/o8-7"
                  },
                  {
                    "reference": "Observation/o9-7"
                  },
                  {
                    "reference": "Observation/o10-7"
                  },
                  {
                    "reference": "Observation/o11-7"
                  },
                  {
                    "reference": "Observation/o12-7"
                  },
                  {
                    "reference": "Observation/o13-7"
                  },
                  {
                    "reference": "Observation/o14-7"
                  },
                  {
                    "reference": "Observation/o15-7"
                  },
                  {
                    "reference": "Observation/o16-7"
                  },
                  {
                    "reference": "Observation/o17-7"
                  },
                  {
                    "reference": "Observation/o18-7"
                  },
                  {
                    "reference": "Observation/o19-7"
                  },
                  {
                    "reference": "Observation/o20-7"
                  },
                  {
                    "reference": "Observation/o21-7"
                  },
                  {
                    "reference": "Observation/o22-7"
                  },
                  {
                    "reference": "Observation/o23-7"
                  },
                  {
                    "reference": "Observation/o24-7"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 141,
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
              "fullUrl": "https://example.com/base/Observation/o2-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-7",
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
                  "reference": "Patient/5"
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
              "fullUrl": "https://example.com/base/Observation/o3-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 106,
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
              "fullUrl": "https://example.com/base/Observation/o4-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 29,
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
              "fullUrl": "https://example.com/base/Observation/o5-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 10,
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
              "fullUrl": "https://example.com/base/Observation/o6-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 7.0,
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
              "fullUrl": "https://example.com/base/Observation/o7-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-7",
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
                  "reference": "Patient/5"
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
              "fullUrl": "https://example.com/base/Observation/o8-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.05,
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
              "fullUrl": "https://example.com/base/Observation/o9-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.32,
                  "unit": "mmol/L"
                },
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
              "fullUrl": "https://example.com/base/Observation/o10-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 43,
                  "unit": "umol/L"
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
              "fullUrl": "https://example.com/base/Observation/o11-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 708,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o12-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1131,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 475,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 176,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 324,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o16-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o17-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.45,
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
              "fullUrl": "https://example.com/base/Observation/o18-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
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
              "fullUrl": "https://example.com/base/Observation/o19-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 71,
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
              "fullUrl": "https://example.com/base/Observation/o20-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 38,
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
              "fullUrl": "https://example.com/base/Observation/o21-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-7",
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
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 33,
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
              "fullUrl": "https://example.com/base/Observation/o22-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-7",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 17,
                  "unit": "umol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o23-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-7",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 7.0,
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
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-7",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-7",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/8",
        "resource": {
          "resourceType": "Bundle",
          "id": "8",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/8",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "8",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/6"
                },
                "effectiveDateTime": "2004-12-03T20:30:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-8"
                  },
                  {
                    "reference": "Observation/o2-8"
                  },
                  {
                    "reference": "Observation/o3-8"
                  },
                  {
                    "reference": "Observation/o4-8"
                  },
                  {
                    "reference": "Observation/o5-8"
                  },
                  {
                    "reference": "Observation/o6-8"
                  },
                  {
                    "reference": "Observation/o7-8"
                  },
                  {
                    "reference": "Observation/o8-8"
                  },
                  {
                    "reference": "Observation/o9-8"
                  },
                  {
                    "reference": "Observation/o10-8"
                  },
                  {
                    "reference": "Observation/o11-8"
                  },
                  {
                    "reference": "Observation/o12-8"
                  },
                  {
                    "reference": "Observation/o13-8"
                  },
                  {
                    "reference": "Observation/o14-8"
                  },
                  {
                    "reference": "Observation/o15-8"
                  },
                  {
                    "reference": "Observation/o16-8"
                  },
                  {
                    "reference": "Observation/o17-8"
                  },
                  {
                    "reference": "Observation/o18-8"
                  },
                  {
                    "reference": "Observation/o19-8"
                  },
                  {
                    "reference": "Observation/o20-8"
                  },
                  {
                    "reference": "Observation/o21-8"
                  },
                  {
                    "reference": "Observation/o22-8"
                  },
                  {
                    "reference": "Observation/o23-8"
                  },
                  {
                    "reference": "Observation/o24-8"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 142,
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
              "fullUrl": "https://example.com/base/Observation/o2-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 3.6,
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
              "fullUrl": "https://example.com/base/Observation/o3-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 104,
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
              "fullUrl": "https://example.com/base/Observation/o4-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 30,
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
              "fullUrl": "https://example.com/base/Observation/o5-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 12,
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
              "fullUrl": "https://example.com/base/Observation/o6-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.2,
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
              "fullUrl": "https://example.com/base/Observation/o7-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.5,
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
              "fullUrl": "https://example.com/base/Observation/o8-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.06,
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
              "fullUrl": "https://example.com/base/Observation/o9-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.37,
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
              "fullUrl": "https://example.com/base/Observation/o10-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 50,
                  "unit": "umol/L"
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
              "fullUrl": "https://example.com/base/Observation/o11-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 684,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o12-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1105,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 466,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 198,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 323,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o16-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o17-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.45,
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
              "fullUrl": "https://example.com/base/Observation/o18-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
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
              "fullUrl": "https://example.com/base/Observation/o19-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 70,
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
              "fullUrl": "https://example.com/base/Observation/o20-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 38,
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
              "fullUrl": "https://example.com/base/Observation/o21-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-8",
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
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 32,
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
              "fullUrl": "https://example.com/base/Observation/o22-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-8",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 11,
                  "unit": "umol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o23-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-8",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.9,
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
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-8",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-8",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.9,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/9",
        "resource": {
          "resourceType": "Bundle",
          "id": "9",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/9",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "9",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/7"
                },
                "effectiveDateTime": "2004-12-05T07:15:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-9"
                  },
                  {
                    "reference": "Observation/o2-9"
                  },
                  {
                    "reference": "Observation/o3-9"
                  },
                  {
                    "reference": "Observation/o4-9"
                  },
                  {
                    "reference": "Observation/o5-9"
                  },
                  {
                    "reference": "Observation/o6-9"
                  },
                  {
                    "reference": "Observation/o7-9"
                  },
                  {
                    "reference": "Observation/o8-9"
                  },
                  {
                    "reference": "Observation/o9-9"
                  },
                  {
                    "reference": "Observation/o10-9"
                  },
                  {
                    "reference": "Observation/o11-9"
                  },
                  {
                    "reference": "Observation/o12-9"
                  },
                  {
                    "reference": "Observation/o13-9"
                  },
                  {
                    "reference": "Observation/o14-9"
                  },
                  {
                    "reference": "Observation/o15-9"
                  },
                  {
                    "reference": "Observation/o16-9"
                  },
                  {
                    "reference": "Observation/o17-9"
                  },
                  {
                    "reference": "Observation/o18-9"
                  },
                  {
                    "reference": "Observation/o19-9"
                  },
                  {
                    "reference": "Observation/o20-9"
                  },
                  {
                    "reference": "Observation/o21-9"
                  },
                  {
                    "reference": "Observation/o22-9"
                  },
                  {
                    "reference": "Observation/o23-9"
                  },
                  {
                    "reference": "Observation/o24-9"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 143,
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
              "fullUrl": "https://example.com/base/Observation/o2-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.3,
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
              "fullUrl": "https://example.com/base/Observation/o3-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 108,
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
              "fullUrl": "https://example.com/base/Observation/o4-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 25,
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
              "fullUrl": "https://example.com/base/Observation/o5-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 14,
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
              "fullUrl": "https://example.com/base/Observation/o6-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.3,
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
              "fullUrl": "https://example.com/base/Observation/o7-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.6,
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
              "fullUrl": "https://example.com/base/Observation/o8-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.06,
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
              "fullUrl": "https://example.com/base/Observation/o9-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.41,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 27,
                  "unit": "umol/L"
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
              "fullUrl": "https://example.com/base/Observation/o11-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 631,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o12-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 956,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 398,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 120,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 243,
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
              "fullUrl": "https://example.com/base/Observation/o16-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.33,
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
              "fullUrl": "https://example.com/base/Observation/o17-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.52,
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
              "fullUrl": "https://example.com/base/Observation/o18-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.2,
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
              "fullUrl": "https://example.com/base/Observation/o19-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 71,
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
              "fullUrl": "https://example.com/base/Observation/o20-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 36,
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
              "fullUrl": "https://example.com/base/Observation/o21-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-9",
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
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 35,
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
              "fullUrl": "https://example.com/base/Observation/o22-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-9",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 39,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o23-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-9",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/7"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.8,
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
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-9",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-9",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/7"
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
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/15",
        "resource": {
          "resourceType": "Bundle",
          "id": "15",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/15",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "15",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/8"
                },
                "effectiveDateTime": "2005-01-27T06:40:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-15"
                  },
                  {
                    "reference": "Observation/o2-15"
                  },
                  {
                    "reference": "Observation/o3-15"
                  },
                  {
                    "reference": "Observation/o4-15"
                  },
                  {
                    "reference": "Observation/o5-15"
                  },
                  {
                    "reference": "Observation/o6-15"
                  },
                  {
                    "reference": "Observation/o7-15"
                  },
                  {
                    "reference": "Observation/o8-15"
                  },
                  {
                    "reference": "Observation/o9-15"
                  },
                  {
                    "reference": "Observation/o10-15"
                  },
                  {
                    "reference": "Observation/o11-15"
                  },
                  {
                    "reference": "Observation/o12-15"
                  },
                  {
                    "reference": "Observation/o13-15"
                  },
                  {
                    "reference": "Observation/o14-15"
                  },
                  {
                    "reference": "Observation/o15-15"
                  },
                  {
                    "reference": "Observation/o16-15"
                  },
                  {
                    "reference": "Observation/o17-15"
                  },
                  {
                    "reference": "Observation/o18-15"
                  },
                  {
                    "reference": "Observation/o19-15"
                  },
                  {
                    "reference": "Observation/o20-15"
                  },
                  {
                    "reference": "Observation/o21-15"
                  },
                  {
                    "reference": "Observation/o22-15"
                  },
                  {
                    "reference": "Observation/o23-15"
                  },
                  {
                    "reference": "Observation/o24-15"
                  },
                  {
                    "reference": "Observation/o25-15"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o2-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o3-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o4-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o5-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o6-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o7-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o8-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o9-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o10-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o11-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o12-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o13-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o14-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o15-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o16-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o17-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o18-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o19-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o20-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o21-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o22-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-15",
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
                  "reference": "Patient/8"
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
              "fullUrl": "https://example.com/base/Observation/o23-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-15",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/8"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 5,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-15",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/8"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 3.8,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-15",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-15",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/8"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/16",
        "resource": {
          "resourceType": "Bundle",
          "id": "16",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/16",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "16",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/9"
                },
                "effectiveDateTime": "2004-12-08T07:45:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-16"
                  },
                  {
                    "reference": "Observation/o2-16"
                  },
                  {
                    "reference": "Observation/o3-16"
                  },
                  {
                    "reference": "Observation/o4-16"
                  },
                  {
                    "reference": "Observation/o5-16"
                  },
                  {
                    "reference": "Observation/o6-16"
                  },
                  {
                    "reference": "Observation/o7-16"
                  },
                  {
                    "reference": "Observation/o8-16"
                  },
                  {
                    "reference": "Observation/o9-16"
                  },
                  {
                    "reference": "Observation/o10-16"
                  },
                  {
                    "reference": "Observation/o11-16"
                  },
                  {
                    "reference": "Observation/o12-16"
                  },
                  {
                    "reference": "Observation/o13-16"
                  },
                  {
                    "reference": "Observation/o14-16"
                  },
                  {
                    "reference": "Observation/o15-16"
                  },
                  {
                    "reference": "Observation/o16-16"
                  },
                  {
                    "reference": "Observation/o17-16"
                  },
                  {
                    "reference": "Observation/o18-16"
                  },
                  {
                    "reference": "Observation/o19-16"
                  },
                  {
                    "reference": "Observation/o20-16"
                  },
                  {
                    "reference": "Observation/o21-16"
                  },
                  {
                    "reference": "Observation/o22-16"
                  },
                  {
                    "reference": "Observation/o23-16"
                  },
                  {
                    "reference": "Observation/o24-16"
                  },
                  {
                    "reference": "Observation/o25-16"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 138,
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
              "fullUrl": "https://example.com/base/Observation/o2-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.1,
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
              "fullUrl": "https://example.com/base/Observation/o3-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 103,
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
              "fullUrl": "https://example.com/base/Observation/o4-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 27,
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
              "fullUrl": "https://example.com/base/Observation/o5-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 12,
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
              "fullUrl": "https://example.com/base/Observation/o6-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.8,
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
              "fullUrl": "https://example.com/base/Observation/o7-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 8.2,
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
              "fullUrl": "https://example.com/base/Observation/o8-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.07,
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
              "fullUrl": "https://example.com/base/Observation/o9-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.42,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 16,
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
              "fullUrl": "https://example.com/base/Observation/o11-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 8,
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
              "fullUrl": "https://example.com/base/Observation/o12-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 369,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 438,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 263,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 87,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o16-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 179,
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
              "fullUrl": "https://example.com/base/Observation/o17-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o18-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.42,
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
              "fullUrl": "https://example.com/base/Observation/o19-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.3,
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
              "fullUrl": "https://example.com/base/Observation/o20-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-16",
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
                  "reference": "Patient/9"
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
              "fullUrl": "https://example.com/base/Observation/o21-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 39,
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
              "fullUrl": "https://example.com/base/Observation/o22-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-16",
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
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 28,
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
              "fullUrl": "https://example.com/base/Observation/o23-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-16",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 8,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-16",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.8,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-16",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-16",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/9"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.2,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/17",
        "resource": {
          "resourceType": "Bundle",
          "id": "17",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/17",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "17",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/10"
                },
                "effectiveDateTime": "2004-12-15T07:20:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-17"
                  },
                  {
                    "reference": "Observation/o2-17"
                  },
                  {
                    "reference": "Observation/o3-17"
                  },
                  {
                    "reference": "Observation/o4-17"
                  },
                  {
                    "reference": "Observation/o5-17"
                  },
                  {
                    "reference": "Observation/o6-17"
                  },
                  {
                    "reference": "Observation/o7-17"
                  },
                  {
                    "reference": "Observation/o8-17"
                  },
                  {
                    "reference": "Observation/o9-17"
                  },
                  {
                    "reference": "Observation/o10-17"
                  },
                  {
                    "reference": "Observation/o11-17"
                  },
                  {
                    "reference": "Observation/o12-17"
                  },
                  {
                    "reference": "Observation/o13-17"
                  },
                  {
                    "reference": "Observation/o14-17"
                  },
                  {
                    "reference": "Observation/o15-17"
                  },
                  {
                    "reference": "Observation/o16-17"
                  },
                  {
                    "reference": "Observation/o17-17"
                  },
                  {
                    "reference": "Observation/o18-17"
                  },
                  {
                    "reference": "Observation/o19-17"
                  },
                  {
                    "reference": "Observation/o20-17"
                  },
                  {
                    "reference": "Observation/o21-17"
                  },
                  {
                    "reference": "Observation/o22-17"
                  },
                  {
                    "reference": "Observation/o23-17"
                  },
                  {
                    "reference": "Observation/o24-17"
                  },
                  {
                    "reference": "Observation/o25-17"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 142,
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
              "fullUrl": "https://example.com/base/Observation/o2-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.0,
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
              "fullUrl": "https://example.com/base/Observation/o3-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-17",
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
                  "reference": "Patient/10"
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
              "fullUrl": "https://example.com/base/Observation/o4-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 28,
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
              "fullUrl": "https://example.com/base/Observation/o5-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-17",
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
                  "reference": "Patient/10"
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
              "fullUrl": "https://example.com/base/Observation/o6-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 5.2,
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
              "fullUrl": "https://example.com/base/Observation/o7-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.4,
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
              "fullUrl": "https://example.com/base/Observation/o8-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-17",
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
                  "reference": "Patient/10"
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
              "fullUrl": "https://example.com/base/Observation/o9-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.46,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 13,
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
              "fullUrl": "https://example.com/base/Observation/o11-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6,
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
              "fullUrl": "https://example.com/base/Observation/o12-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 204,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 192,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 70,
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
              "fullUrl": "https://example.com/base/Observation/o15-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 26,
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
              "fullUrl": "https://example.com/base/Observation/o16-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 150,
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
              "fullUrl": "https://example.com/base/Observation/o17-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.37,
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
              "fullUrl": "https://example.com/base/Observation/o18-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.47,
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
              "fullUrl": "https://example.com/base/Observation/o19-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.4,
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
              "fullUrl": "https://example.com/base/Observation/o20-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-17",
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
                  "reference": "Patient/10"
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
              "fullUrl": "https://example.com/base/Observation/o21-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 39,
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
              "fullUrl": "https://example.com/base/Observation/o22-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-17",
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
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 28,
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
              "fullUrl": "https://example.com/base/Observation/o23-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-17",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 5,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-17",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.4,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-17",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-17",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/10"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.1,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/18",
        "resource": {
          "resourceType": "Bundle",
          "id": "18",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/18",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "18",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "effectiveDateTime": "2004-12-22T07:45:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-18"
                  },
                  {
                    "reference": "Observation/o2-18"
                  },
                  {
                    "reference": "Observation/o3-18"
                  },
                  {
                    "reference": "Observation/o4-18"
                  },
                  {
                    "reference": "Observation/o5-18"
                  },
                  {
                    "reference": "Observation/o6-18"
                  },
                  {
                    "reference": "Observation/o7-18"
                  },
                  {
                    "reference": "Observation/o8-18"
                  },
                  {
                    "reference": "Observation/o9-18"
                  },
                  {
                    "reference": "Observation/o10-18"
                  },
                  {
                    "reference": "Observation/o11-18"
                  },
                  {
                    "reference": "Observation/o12-18"
                  },
                  {
                    "reference": "Observation/o13-18"
                  },
                  {
                    "reference": "Observation/o14-18"
                  },
                  {
                    "reference": "Observation/o15-18"
                  },
                  {
                    "reference": "Observation/o16-18"
                  },
                  {
                    "reference": "Observation/o17-18"
                  },
                  {
                    "reference": "Observation/o18-18"
                  },
                  {
                    "reference": "Observation/o19-18"
                  },
                  {
                    "reference": "Observation/o20-18"
                  },
                  {
                    "reference": "Observation/o21-18"
                  },
                  {
                    "reference": "Observation/o22-18"
                  },
                  {
                    "reference": "Observation/o23-18"
                  },
                  {
                    "reference": "Observation/o24-18"
                  },
                  {
                    "reference": "Observation/o25-18"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 142,
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
              "fullUrl": "https://example.com/base/Observation/o2-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.0,
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
              "fullUrl": "https://example.com/base/Observation/o3-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 107,
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
              "fullUrl": "https://example.com/base/Observation/o4-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-18",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o5-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-18",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o6-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.3,
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
              "fullUrl": "https://example.com/base/Observation/o7-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.7,
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
              "fullUrl": "https://example.com/base/Observation/o8-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.08,
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
              "fullUrl": "https://example.com/base/Observation/o9-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.40,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 9,
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
              "fullUrl": "https://example.com/base/Observation/o11-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4,
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
              "fullUrl": "https://example.com/base/Observation/o12-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 144,
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
              "fullUrl": "https://example.com/base/Observation/o13-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 106,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-18",
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
                  "reference": "Patient/1"
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
                      "value": 45,
                      "unit": "U/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o15-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 18,
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
              "fullUrl": "https://example.com/base/Observation/o16-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 143,
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
              "fullUrl": "https://example.com/base/Observation/o17-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.28,
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
              "fullUrl": "https://example.com/base/Observation/o18-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o19-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.3,
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
              "fullUrl": "https://example.com/base/Observation/o20-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 66,
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
              "fullUrl": "https://example.com/base/Observation/o21-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-18",
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
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 41,
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
              "fullUrl": "https://example.com/base/Observation/o22-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-18",
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
                  "reference": "Patient/1"
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
              "fullUrl": "https://example.com/base/Observation/o23-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-18",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-18",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.0,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o25-18",
              "resource": {
                "resourceType": "Observation",
                "id": "o25-18",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.0,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/19",
        "resource": {
          "resourceType": "Bundle",
          "id": "19",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/19",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "19",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "effectiveDateTime": "2004-12-03T09:45:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-19"
                  },
                  {
                    "reference": "Observation/o2-19"
                  },
                  {
                    "reference": "Observation/o3-19"
                  },
                  {
                    "reference": "Observation/o4-19"
                  },
                  {
                    "reference": "Observation/o5-19"
                  },
                  {
                    "reference": "Observation/o6-19"
                  },
                  {
                    "reference": "Observation/o7-19"
                  },
                  {
                    "reference": "Observation/o8-19"
                  },
                  {
                    "reference": "Observation/o9-19"
                  },
                  {
                    "reference": "Observation/o10-19"
                  },
                  {
                    "reference": "Observation/o11-19"
                  },
                  {
                    "reference": "Observation/o12-19"
                  },
                  {
                    "reference": "Observation/o13-19"
                  },
                  {
                    "reference": "Observation/o14-19"
                  },
                  {
                    "reference": "Observation/o15-19"
                  },
                  {
                    "reference": "Observation/o16-19"
                  },
                  {
                    "reference": "Observation/o17-19"
                  },
                  {
                    "reference": "Observation/o18-19"
                  },
                  {
                    "reference": "Observation/o19-19"
                  },
                  {
                    "reference": "Observation/o20-19"
                  },
                  {
                    "reference": "Observation/o21-19"
                  },
                  {
                    "reference": "Observation/o22-19"
                  },
                  {
                    "reference": "Observation/o23-19"
                  },
                  {
                    "reference": "Observation/o24-19"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 141,
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
              "fullUrl": "https://example.com/base/Observation/o2-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-19",
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
                  "reference": "Patient/2"
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
              "fullUrl": "https://example.com/base/Observation/o3-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 106,
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
              "fullUrl": "https://example.com/base/Observation/o4-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 29,
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
              "fullUrl": "https://example.com/base/Observation/o5-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 10,
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
              "fullUrl": "https://example.com/base/Observation/o6-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 7.0,
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
              "fullUrl": "https://example.com/base/Observation/o7-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-19",
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
                  "reference": "Patient/2"
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
              "fullUrl": "https://example.com/base/Observation/o8-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.05,
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
              "fullUrl": "https://example.com/base/Observation/o9-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.32,
                  "unit": "mmol/L"
                },
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
              "fullUrl": "https://example.com/base/Observation/o10-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 43,
                  "unit": "umol/L"
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
              "fullUrl": "https://example.com/base/Observation/o11-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 708,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o12-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1131,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 475,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 176,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 324,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o16-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o17-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.45,
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
              "fullUrl": "https://example.com/base/Observation/o18-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
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
              "fullUrl": "https://example.com/base/Observation/o19-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 71,
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
              "fullUrl": "https://example.com/base/Observation/o20-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 38,
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
              "fullUrl": "https://example.com/base/Observation/o21-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-19",
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
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 33,
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
              "fullUrl": "https://example.com/base/Observation/o22-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-19",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 17,
                  "unit": "umol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o23-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-19",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 7.0,
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
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-19",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-19",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/2"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/20",
        "resource": {
          "resourceType": "Bundle",
          "id": "20",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/20",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "20",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "effectiveDateTime": "2004-12-03T20:30:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-20"
                  },
                  {
                    "reference": "Observation/o2-20"
                  },
                  {
                    "reference": "Observation/o3-20"
                  },
                  {
                    "reference": "Observation/o4-20"
                  },
                  {
                    "reference": "Observation/o5-20"
                  },
                  {
                    "reference": "Observation/o6-20"
                  },
                  {
                    "reference": "Observation/o7-20"
                  },
                  {
                    "reference": "Observation/o8-20"
                  },
                  {
                    "reference": "Observation/o9-20"
                  },
                  {
                    "reference": "Observation/o10-20"
                  },
                  {
                    "reference": "Observation/o11-20"
                  },
                  {
                    "reference": "Observation/o12-20"
                  },
                  {
                    "reference": "Observation/o13-20"
                  },
                  {
                    "reference": "Observation/o14-20"
                  },
                  {
                    "reference": "Observation/o15-20"
                  },
                  {
                    "reference": "Observation/o16-20"
                  },
                  {
                    "reference": "Observation/o17-20"
                  },
                  {
                    "reference": "Observation/o18-20"
                  },
                  {
                    "reference": "Observation/o19-20"
                  },
                  {
                    "reference": "Observation/o20-20"
                  },
                  {
                    "reference": "Observation/o21-20"
                  },
                  {
                    "reference": "Observation/o22-20"
                  },
                  {
                    "reference": "Observation/o23-20"
                  },
                  {
                    "reference": "Observation/o24-20"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 142,
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
              "fullUrl": "https://example.com/base/Observation/o2-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 3.6,
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
              "fullUrl": "https://example.com/base/Observation/o3-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 104,
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
              "fullUrl": "https://example.com/base/Observation/o4-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 30,
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
              "fullUrl": "https://example.com/base/Observation/o5-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 12,
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
              "fullUrl": "https://example.com/base/Observation/o6-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.2,
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
              "fullUrl": "https://example.com/base/Observation/o7-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.5,
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
              "fullUrl": "https://example.com/base/Observation/o8-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.06,
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
              "fullUrl": "https://example.com/base/Observation/o9-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.37,
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
              "fullUrl": "https://example.com/base/Observation/o10-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 50,
                  "unit": "umol/L"
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
              "fullUrl": "https://example.com/base/Observation/o11-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 684,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o12-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1105,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 466,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 198,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 323,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o16-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.32,
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
              "fullUrl": "https://example.com/base/Observation/o17-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.45,
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
              "fullUrl": "https://example.com/base/Observation/o18-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.9,
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
              "fullUrl": "https://example.com/base/Observation/o19-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 70,
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
              "fullUrl": "https://example.com/base/Observation/o20-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 38,
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
              "fullUrl": "https://example.com/base/Observation/o21-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-20",
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
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 32,
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
              "fullUrl": "https://example.com/base/Observation/o22-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-20",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 11,
                  "unit": "umol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o23-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-20",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.9,
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
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-20",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-20",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/3"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.9,
                  "unit": "mmol/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/21",
        "resource": {
          "resourceType": "Bundle",
          "id": "21",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/21",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "21",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "text": "SERUM CHEMISTRY"
                },
                "subject": {
                  "reference": "Patient/4"
                },
                "effectiveDateTime": "2004-12-05T07:15:17Z",
                "issued": "2005-02-23T10:04:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-21"
                  },
                  {
                    "reference": "Observation/o2-21"
                  },
                  {
                    "reference": "Observation/o3-21"
                  },
                  {
                    "reference": "Observation/o4-21"
                  },
                  {
                    "reference": "Observation/o5-21"
                  },
                  {
                    "reference": "Observation/o6-21"
                  },
                  {
                    "reference": "Observation/o7-21"
                  },
                  {
                    "reference": "Observation/o8-21"
                  },
                  {
                    "reference": "Observation/o9-21"
                  },
                  {
                    "reference": "Observation/o10-21"
                  },
                  {
                    "reference": "Observation/o11-21"
                  },
                  {
                    "reference": "Observation/o12-21"
                  },
                  {
                    "reference": "Observation/o13-21"
                  },
                  {
                    "reference": "Observation/o14-21"
                  },
                  {
                    "reference": "Observation/o15-21"
                  },
                  {
                    "reference": "Observation/o16-21"
                  },
                  {
                    "reference": "Observation/o17-21"
                  },
                  {
                    "reference": "Observation/o18-21"
                  },
                  {
                    "reference": "Observation/o19-21"
                  },
                  {
                    "reference": "Observation/o20-21"
                  },
                  {
                    "reference": "Observation/o21-21"
                  },
                  {
                    "reference": "Observation/o22-21"
                  },
                  {
                    "reference": "Observation/o23-21"
                  },
                  {
                    "reference": "Observation/o24-21"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 143,
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
              "fullUrl": "https://example.com/base/Observation/o2-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.3,
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
              "fullUrl": "https://example.com/base/Observation/o3-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 108,
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
              "fullUrl": "https://example.com/base/Observation/o4-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 25,
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
              "fullUrl": "https://example.com/base/Observation/o5-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 14,
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
              "fullUrl": "https://example.com/base/Observation/o6-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.3,
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
              "fullUrl": "https://example.com/base/Observation/o7-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4.6,
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
              "fullUrl": "https://example.com/base/Observation/o8-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.06,
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
              "fullUrl": "https://example.com/base/Observation/o9-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.41,
                  "unit": "mmol/L"
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
              "fullUrl": "https://example.com/base/Observation/o10-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 27,
                  "unit": "umol/L"
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
              "fullUrl": "https://example.com/base/Observation/o11-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 631,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o12-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 956,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o13-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 398,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o14-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 120,
                  "unit": "U/L"
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
              "fullUrl": "https://example.com/base/Observation/o15-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 243,
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
              "fullUrl": "https://example.com/base/Observation/o16-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.33,
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
              "fullUrl": "https://example.com/base/Observation/o17-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.52,
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
              "fullUrl": "https://example.com/base/Observation/o18-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1.2,
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
              "fullUrl": "https://example.com/base/Observation/o19-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o19-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 71,
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
              "fullUrl": "https://example.com/base/Observation/o20-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o20-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 36,
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
              "fullUrl": "https://example.com/base/Observation/o21-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o21-21",
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
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 35,
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
              "fullUrl": "https://example.com/base/Observation/o22-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o22-21",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14798-3",
                      "display": "Iron [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "42950004"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 39,
                  "unit": "umol/L"
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
                      "value": 10,
                      "unit": "umol/L"
                    },
                    "high": {
                      "value": 33,
                      "unit": "umol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o23-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o23-21",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14647-2",
                      "display": "Cholesterol [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "77068002"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/4"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 6.8,
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
                      "value": 3.6,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 6.7,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o24-21",
              "resource": {
                "resourceType": "Observation",
                "id": "o24-21",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "14927-8",
                      "display": "Triglyceride [Moles/volume] in Serum or Plasma"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "104784006"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/4"
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
                      "value": 0.3,
                      "unit": "mmol/L"
                    },
                    "high": {
                      "value": 4.0,
                      "unit": "mmol/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/25",
        "resource": {
          "resourceType": "Bundle",
          "id": "25",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/25",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "25",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "18769-0",
                      "display": "Microbial susceptibility tests Set"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "effectiveDateTime": "2005-11-07T21:44:17Z",
                "issued": "2005-11-07T23:38:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "specimen": [
                  {
                    "display": "URINE, CLEAN CATCH/MIDSTREAM"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-25"
                  },
                  {
                    "reference": "Observation/o2-25"
                  },
                  {
                    "reference": "Observation/o3-25"
                  },
                  {
                    "reference": "Observation/o4-25"
                  },
                  {
                    "reference": "Observation/o5-25"
                  },
                  {
                    "reference": "Observation/o6-25"
                  },
                  {
                    "reference": "Observation/o7-25"
                  },
                  {
                    "reference": "Observation/o8-25"
                  },
                  {
                    "reference": "Observation/o9-25"
                  },
                  {
                    "reference": "Observation/o10-25"
                  },
                  {
                    "reference": "Observation/o11-25"
                  },
                  {
                    "reference": "Observation/o12-25"
                  },
                  {
                    "reference": "Observation/o13-25"
                  },
                  {
                    "reference": "Observation/o14-25"
                  },
                  {
                    "reference": "Observation/o15-25"
                  },
                  {
                    "reference": "Observation/o16-25"
                  },
                  {
                    "reference": "Observation/o17-25"
                  },
                  {
                    "reference": "Observation/o18-25"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "11475-1",
                      "display": "Microorganism identified in Unspecified specimen by Culture"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueCodeableConcept": {
                  "text": "KLEBSIELLA PNEUMONIAE"
                }
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o2-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o2-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "43161-9",
                      "display": "Microorganism [#/volume] in Unspecified specimen by Viability count"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 20000,
                  "unit": "CFU/ML"
                }
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o3-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o3-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "AMS",
                      "display": "AMPICILLIN/SULBACTAM"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4,
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o4-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o4-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "AM",
                      "display": "AMPICILLIN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 16,
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "R"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o5-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o5-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "ATM",
                      "display": "AZTREONAM"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o6-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o6-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "CFZ",
                      "display": "CEFAZOLIN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o7-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o7-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "FEP",
                      "display": "CEFEPIME"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o8-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o8-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "CTN",
                      "display": "CEFOTETAN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o9-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o9-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "TAZ",
                      "display": "CEFTAZIDIME"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o10-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o10-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "CRO",
                      "display": "CEFTRIAXONE"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o11-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o11-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "CIPRO",
                      "display": "CIPROFLOXACIN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.25,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o12-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o12-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "GM",
                      "display": "GENTAMICIN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o13-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o13-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "IPM",
                      "display": "IMIPENEM"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o14-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o14-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "LVX",
                      "display": "LEVOFLOXACIN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 0.25,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o15-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o15-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "NIT",
                      "display": "NITROFURANTOIN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 32,
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o16-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o16-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "PTZ",
                      "display": "PIPERACILLIN/TAZOBAC"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 4,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o17-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o17-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "TRSUV",
                      "display": "TRIMETH/SULFA"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 20,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o18-25",
              "resource": {
                "resourceType": "Observation",
                "id": "o18-25",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://example.org/local",
                      "code": "TOB",
                      "display": "TOBRAMYCIN"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/5"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 1,
                  "comparator": "<=",
                  "unit": "U"
                },
                "interpretation": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                        "code": "S"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/26",
        "resource": {
          "resourceType": "Bundle",
          "id": "26",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/26",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "26",
                "meta": {
                  "lastUpdated": "2012-04-14T10:35:23Z"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "5234342"
                  }
                ],
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://acme.com/labs/reports",
                      "code": "142080",
                      "display": "Rapid Plasma Reagin"
                    }
                  ],
                  "text": "RPR"
                },
                "subject": {
                  "reference": "Patient/6"
                },
                "effectiveDateTime": "2005-03-07T14:02:17Z",
                "issued": "2005-03-07T14:02:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-26"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-26",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-26",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "20507-0",
                      "display": "Reagin Ab [Presence] in Serum by RPR"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/6"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueString": "Non-reactive"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Bundle/27",
        "resource": {
          "resourceType": "Bundle",
          "id": "27",
          "type": "collection",
          "entry": [
            {
              "fullUrl": "https://example.com/base/DiagnosticReport/27",
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "27",
                "meta": {
                  "lastUpdated": "2012-05-23T14:27:01Z"
                },
                "text": {
                  "status": "generated",
                  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>hsCRP</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>2.8</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>mg/L</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>1.0-3.0</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>"
                },
                "identifier": [
                  {
                    "system": "http://acme.com/lab/reports",
                    "value": "23412355"
                  }
                ],
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://acme.com/labs/reports",
                      "code": "bchem2",
                      "display": "Specialist Biochemistry"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "effectiveDateTime": "2012-05-21T10:45:00Z",
                "issued": "2012-05-23T14:27:01Z",
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/o1-27"
                  }
                ]
              }
            },
            {
              "fullUrl": "https://example.com/base/Observation/o1-27",
              "resource": {
                "resourceType": "Observation",
                "id": "o1-27",
                "status": "final",
                "code": {
                  "coding": [
                    {
                      "system": "http://loinc.org",
                      "code": "30522-7",
                      "display": "C reactive protein [Mass/volume] in Serum or Plasma by High sensitivity method"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "55235003"
                    }
                  ],
                  "text": "hsCRP"
                },
                "subject": {
                  "reference": "Patient/1"
                },
                "performer": [
                  {
                    "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
                    "display": "Acme Laboratory, Inc"
                  }
                ],
                "valueQuantity": {
                  "value": 2.8,
                  "unit": "mg/L"
                },
                "referenceRange": [
                  {
                    "low": {
                      "value": 1.0,
                      "unit": "mg/L"
                    },
                    "high": {
                      "value": 3.0,
                      "unit": "mg/L"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }