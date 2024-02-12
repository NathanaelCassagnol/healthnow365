import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/diagnosticreport-micro1.json.html
// An example of a complex Micro Isolate and Sensitivities.

export const mockDiagnosticReport7Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "micro",
    "type": "collection",
    "entry": [
      {
        "fullUrl": "https://example.com/base/DiagnosticReport/micro",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "micro",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: micro</p><p><b>identifier</b>: 290741144</p><p><b>basedOn</b>: <a>ServiceRequest/req</a></p><p><b>status</b>: final</p><p><b>category</b>: Microbiology <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0074 code 'MB' = 'Microbiology)</span></p><p><b>code</b>: Culture, MRSA <span>(Details : {LOINC code '632-0' = 'Bacteria identified in Wound by Aerobe culture)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>issued</b>: 10/08/2009 8:25:44 AM</p><p><b>performer</b>: Todd Ashby</p><p><b>result</b>: <a>Observation/org1</a></p></div>"
          },
          "identifier": [
            {
              "system": "http://hnam.org/identifiers/orders",
              "value": "290741144"
            }
          ],
          "basedOn": [
            {
              "reference": "ServiceRequest/req"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "MB"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "632-0"
              }
            ],
            "text": "Culture, MRSA"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "issued": "2009-08-10T08:25:44+10:00",
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "result": [
            {
              "reference": "Observation/org1"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/obx1-4",
        "resource": {
          "resourceType": "Observation",
          "id": "obx1-4",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx1-4</p><p><b>status</b>: final</p><p><b>code</b>: ORGANISM <span>(Details : {http://acme.org/lab/codes/tests code 'ORGANISM' = 'ORGANISM)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: Staphylococcus aureus <span>(Details : {http://acme.org/lab/codes/organisms code 'Staaur' = 'Staaur)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "ORGANISM"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/organisms",
                "code": "Staaur"
              }
            ],
            "text": "Staphylococcus aureus"
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/obx1-5",
        "resource": {
          "resourceType": "Observation",
          "id": "obx1-5",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx1-5</p><p><b>status</b>: final</p><p><b>code</b>: CULTPOSNEG <span>(Details : {http://acme.org/lab/codes/tests code 'CULTPOSNEG' = 'CULTPOSNEG)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: POS <span>(Details : {http://acme.org/lab/codes/flags code 'POS' = 'POS)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "CULTPOSNEG"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/flags",
                "code": "POS"
              }
            ]
          }
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/obx2-1",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-1</p><p><b>status</b>: final</p><p><b>code</b>: Ampicillin <span>(Details : {http://acme.org/lab/codes/tests code '60504' = '60504', given as 'Ampicillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>interpretation</b>: Resistant <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'R' = 'Resistant)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60504",
                "display": "Ampicillin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
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
        "fullUrl": "https://example.com/base/Observation/obx2-2",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-2</p><p><b>status</b>: final</p><p><b>code</b>: Cefazolin <span>(Details : {http://acme.org/lab/codes/tests code '60512' = '60512', given as 'Cefazolin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=2</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60512",
                "display": "Cefazolin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 2,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-4",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-4",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-4</p><p><b>status</b>: final</p><p><b>code</b>: Cefoxitin <span>(Details : {http://acme.org/lab/codes/tests code '60516' = '60516', given as 'Cefoxitin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=4</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60516",
                "display": "Cefoxitin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 4,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-6",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-6",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-6</p><p><b>status</b>: final</p><p><b>code</b>: Clindamycin <span>(Details : {http://acme.org/lab/codes/tests code '60527' = '60527', given as 'Clindamycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60527",
                "display": "Clindamycin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5,
            "comparator": ">="
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
        "fullUrl": "https://example.com/base/Observation/obx2-8",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-8",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-8</p><p><b>status</b>: final</p><p><b>code</b>: Daptomycin <span>(Details : {http://acme.org/lab/codes/tests code '61203' = '61203', given as 'Daptomycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=1</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "61203",
                "display": "Daptomycin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 1,
            "comparator": ">="
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
        "fullUrl": "https://example.com/base/Observation/obx2-10",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-10",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-10</p><p><b>status</b>: final</p><p><b>code</b>: Doxycycline <span>(Details : {http://acme.org/lab/codes/tests code '60532' = '60532', given as 'Doxycycline'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60532",
                "display": "Doxycycline"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-12",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-12",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-12</p><p><b>status</b>: final</p><p><b>code</b>: Erythromycin <span>(Details : {http://acme.org/lab/codes/tests code '60533' = '60533', given as 'Erythromycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=8</p><p><b>interpretation</b>: Resistant <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'R' = 'Resistant)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60533",
                "display": "Erythromycin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 8,
            "comparator": ">="
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
        "fullUrl": "https://example.com/base/Observation/obx2-14",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-14",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-14</p><p><b>status</b>: final</p><p><b>code</b>: Gentamicin <span>(Details : {http://acme.org/lab/codes/tests code '60536' = '60536', given as 'Gentamicin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=2</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60536",
                "display": "Gentamicin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 2,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-16",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-16",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-16</p><p><b>status</b>: final</p><p><b>code</b>: Levofloxacin <span>(Details : {http://acme.org/lab/codes/tests code '61007' = '61007', given as 'Levofloxacin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "61007",
                "display": "Levofloxacin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-18",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-18",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-18</p><p><b>status</b>: final</p><p><b>code</b>: Linezolid <span>(Details : {http://acme.org/lab/codes/tests code '60699' = '60699', given as 'Linezolid'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 4</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60699",
                "display": "Linezolid"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 4
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
        "fullUrl": "https://example.com/base/Observation/obx2-20",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-20",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-20</p><p><b>status</b>: final</p><p><b>code</b>: Moxifloxacin <span>(Details : {http://acme.org/lab/codes/tests code '61204' = '61204', given as 'Moxifloxacin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "61204",
                "display": "Moxifloxacin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-22",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-22",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-22</p><p><b>status</b>: final</p><p><b>code</b>: Oxacillin <span>(Details : {http://acme.org/lab/codes/tests code '60551' = '60551', given as 'Oxacillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60551",
                "display": "Oxacillin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5
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
        "fullUrl": "https://example.com/base/Observation/obx2-24",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-24",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-24</p><p><b>status</b>: final</p><p><b>code</b>: Penicillin <span>(Details : {http://acme.org/lab/codes/tests code '60552' = '60552', given as 'Penicillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &gt;=2</p><p><b>interpretation</b>: Resistant <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'R' = 'Resistant)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60552",
                "display": "Penicillin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 2,
            "comparator": ">="
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
        "fullUrl": "https://example.com/base/Observation/obx2-26",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-26",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-26</p><p><b>status</b>: final</p><p><b>code</b>: Quinupristin/Dalfopristin <span>(Details : {http://acme.org/lab/codes/tests code '60697' = '60697', given as 'Quinupristin/Dalfopristin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60697",
                "display": "Quinupristin/Dalfopristin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5
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
        "fullUrl": "https://example.com/base/Observation/obx2-28",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-28",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-28</p><p><b>status</b>: final</p><p><b>code</b>: Rifampin <span>(Details : {http://acme.org/lab/codes/tests code '60555' = '60555', given as 'Rifampin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60555",
                "display": "Rifampin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-30",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-30",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-30</p><p><b>status</b>: final</p><p><b>code</b>: Tetracycline <span>(Details : {http://acme.org/lab/codes/tests code '60558' = '60558', given as 'Tetracycline'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.5</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60558",
                "display": "Tetracycline"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.5,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-32",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-32",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-32</p><p><b>status</b>: final</p><p><b>code</b>: Trimethoprim/Sulfamethoxazole <span>(Details : {http://acme.org/lab/codes/tests code '60561' = '60561', given as 'Trimethoprim/Sulfamethoxazole'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: &lt;=0.0526</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60561",
                "display": "Trimethoprim/Sulfamethoxazole"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 0.0526,
            "comparator": "<="
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
        "fullUrl": "https://example.com/base/Observation/obx2-34",
        "resource": {
          "resourceType": "Observation",
          "id": "obx2-34",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx2-34</p><p><b>status</b>: final</p><p><b>code</b>: Vancomycin <span>(Details : {http://acme.org/lab/codes/tests code '60563' = '60563', given as 'Vancomycin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: 1</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60563",
                "display": "Vancomycin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueQuantity": {
            "value": 1
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
        "fullUrl": "https://example.com/base/Observation/nte-1",
        "resource": {
          "resourceType": "Observation",
          "id": "nte-1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: nte-1</p><p><b>status</b>: final</p><p><b>code</b>: D-Test <span>(Details : {http://acme.org/lab/codes/tests code '2099930' = '2099930', given as 'D-Test'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>value</b>: D-Test:  Negative - This isolate does not demonstrate inducible clindamycin resistance in vitro.</p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "2099930",
                "display": "D-Test"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "valueString": "D-Test:  Negative - This isolate does not demonstrate inducible clindamycin resistance in vitro."
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/obx3-1",
        "resource": {
          "resourceType": "Observation",
          "id": "obx3-1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obx3-1</p><p><b>status</b>: final</p><p><b>code</b>: Oxacillin <span>(Details : {http://acme.org/lab/codes/tests code '60036' = '60036', given as 'Oxacillin'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>interpretation</b>: Susceptible <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'S' = 'Susceptible)</span></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/tests",
                "code": "60036",
                "display": "Oxacillin"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
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
        "fullUrl": "https://example.com/base/Observation/obr-2",
        "resource": {
          "resourceType": "Observation",
          "id": "obr-2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obr-2</p><p><b>status</b>: final</p><p><b>code</b>: Susceptibility - Automated broth dilution (Billed) <span>(Details : {http://acme.org/lab/codes/panels code '60790' = '60790', given as 'Susceptibility - Automated broth dilution (Billed)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performer</b>: Todd Ashby</p><p><b>hasMember</b>: </p><ul><li><a>Observation/obx2-1</a></li><li><a>Observation/obx2-2</a></li><li><a>Observation/obx2-4</a></li><li><a>Observation/obx2-6</a></li><li><a>Observation/obx2-8</a></li><li><a>Observation/obx2-10</a></li><li><a>Observation/obx2-12</a></li><li><a>Observation/obx2-14</a></li><li><a>Observation/obx2-16</a></li><li><a>Observation/obx2-18</a></li><li><a>Observation/obx2-20</a></li><li><a>Observation/obx2-22</a></li><li><a>Observation/obx2-24</a></li><li><a>Observation/obx2-26</a></li><li><a>Observation/obx2-28</a></li><li><a>Observation/obx2-30</a></li><li><a>Observation/obx2-32</a></li><li><a>Observation/obx2-34</a></li><li><a>Observation/nte-1</a></li></ul></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/panels",
                "code": "60790",
                "display": "Susceptibility - Automated broth dilution (Billed)"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "performer": [
            {
              "display": "Todd Ashby"
            }
          ],
          "hasMember": [
            {
              "reference": "Observation/obx2-1"
            },
            {
              "reference": "Observation/obx2-2"
            },
            {
              "reference": "Observation/obx2-4"
            },
            {
              "reference": "Observation/obx2-6"
            },
            {
              "reference": "Observation/obx2-8"
            },
            {
              "reference": "Observation/obx2-10"
            },
            {
              "reference": "Observation/obx2-12"
            },
            {
              "reference": "Observation/obx2-14"
            },
            {
              "reference": "Observation/obx2-16"
            },
            {
              "reference": "Observation/obx2-18"
            },
            {
              "reference": "Observation/obx2-20"
            },
            {
              "reference": "Observation/obx2-22"
            },
            {
              "reference": "Observation/obx2-24"
            },
            {
              "reference": "Observation/obx2-26"
            },
            {
              "reference": "Observation/obx2-28"
            },
            {
              "reference": "Observation/obx2-30"
            },
            {
              "reference": "Observation/obx2-32"
            },
            {
              "reference": "Observation/obx2-34"
            },
            {
              "reference": "Observation/nte-1"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/obr-3",
        "resource": {
          "resourceType": "Observation",
          "id": "obr-3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: obr-3</p><p><b>status</b>: final</p><p><b>code</b>: Susceptibility - Disk diffusion (Billed) <span>(Details : {http://acme.org/lab/codes/panels code '60418' = '60418', given as 'Susceptibility - Disk diffusion (Billed)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>hasMember</b>: <a>Observation/obx3-1</a></p></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/panels",
                "code": "60418",
                "display": "Susceptibility - Disk diffusion (Billed)"
              }
            ]
          },
          "subject": {
            "reference": "Patient/example"
          },
          "hasMember": [
            {
              "reference": "Observation/obx3-1"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/Observation/org1",
        "resource": {
          "resourceType": "Observation",
          "id": "org1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: org1</p><p><b>status</b>: final</p><p><b>code</b>: Staphylococcus aureus Panel <span>(Details : {http://acme.org/lab/codes/organisms code 'Staaur' = 'Staaur)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>hasMember</b>: </p><ul><li><a>Observation/obx1-4</a></li><li><a>Observation/obx1-5</a></li><li><a>Observation/obr-2</a></li><li><a>Observation/obr-3</a></li></ul></div>"
          },
          "status": "final",
          "code": {
            "coding": [
              {
                "system": "http://acme.org/lab/codes/organisms",
                "code": "Staaur"
              }
            ],
            "text": "Staphylococcus aureus Panel"
          },
          "subject": {
            "reference": "Patient/example"
          },
          "hasMember": [
            {
              "reference": "Observation/obx1-4"
            },
            {
              "reference": "Observation/obx1-5"
            },
            {
              "reference": "Observation/obr-2"
            },
            {
              "reference": "Observation/obr-3"
            }
          ]
        }
      },
      {
        "fullUrl": "https://example.com/base/ServiceRequest/req",
        "resource": {
          "resourceType": "ServiceRequest",
          "id": "req",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: req</p><p><b>identifier</b>: 255337816</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Culture, MRSA <span>(Details : {LOINC code '632-0' = 'Bacteria identified in Wound by Aerobe culture)</span></p><p><b>subject</b>: <a>Patient/example</a></p></div>"
          },
          "identifier": [
            {
              "value": "255337816"
            }
          ],
          "status": "active",
          "intent": "original-order",
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "632-0"
              }
            ],
            "text": "Culture, MRSA"
          },
          "subject": {
            "reference": "Patient/example"
          }
        }
      }
    ]
  }