import { Bundle } from "fhir/R4/types/bundle.types";

// https://hl7.org/fhir/R4/namingsystem-registry.json.html
// Common US Driver's license identification

export const mockNamingSystem3Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "registry",
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/dicom-uid",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "dicom-uid",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: dicom-uid</p><p><b>name</b>: DICOM Unique Id</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 31/07/2015</p><p><b>publisher</b>: NEMA</p><p><b>contact</b>: </p><p><b>description</b>: An OID issued under DICOM OID rules. DICOM OIDs are represented as plain OIDs, with a prefix of &quot;urn:oid:&quot;</p><p><b>jurisdiction</b>: World <span>(Details : {http://unstats.un.org/unsd/methods/m49/m49.htm code '001' = 'World)</span></p><h3>UniqueIds</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Value</b></td><td><b>Preferred</b></td></tr><tr><td>*</td><td>uri</td><td>urn:dicom:uid</td><td>true</td></tr></table></div>"
          },
          "name": "DICOM Unique Id",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-31",
          "publisher": "NEMA",
          "contact": [
            {
              "telecom": [
                {
                  "system": "url",
                  "value": "https://www.dicomstandard.org/"
                }
              ]
            }
          ],
          "description": "An OID issued under DICOM OID rules. DICOM OIDs are represented as plain OIDs, with a prefix of \"urn:oid:\"",
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "http://unstats.un.org/unsd/methods/m49/m49.htm",
                  "code": "001"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "uri",
              "value": "urn:dicom:uid",
              "preferred": true
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/us-ssn",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "us-ssn",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: us-ssn</p><p><b>name</b>: United States Social Security Number</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 31/07/2015</p><p><b>publisher</b>: United States Social Security Administration</p><p><b>contact</b>: </p><p><b>type</b>: Social Beneficiary Identifier <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'SB' = 'Social Beneficiary Identifier)</span></p><p><b>description</b>: The SSN is represented in resources with dashes removed</p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: http://hl7.org/fhir/sid/us-ssn</p><p><b>preferred</b>: true</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.1</p></blockquote></div>"
          },
          "name": "United States Social Security Number",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-31",
          "publisher": "United States Social Security Administration",
          "contact": [
            {
              "telecom": [
                {
                  "system": "url",
                  "value": "http://www.ssa.gov/"
                }
              ]
            }
          ],
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SB"
              }
            ]
          },
          "description": "The SSN is represented in resources with dashes removed",
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "uri",
              "value": "http://hl7.org/fhir/sid/us-ssn",
              "preferred": true
            },
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.1"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/us-medicare",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "us-medicare",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: us-medicare</p><p><b>name</b>: United States Medicare Number</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 12/07/2016</p><p><b>publisher</b>: Centers for Medicare &amp; Medicaid Services</p><p><b>contact</b>: </p><p><b>type</b>: Social Beneficiary Identifier <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'SB' = 'Social Beneficiary Identifier)</span></p><p><b>description</b>: Medicare Numbers (HIC or HICN) are represented without any spaces or dashes</p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: http://hl7.org/fhir/sid/us-medicare</p><p><b>preferred</b>: true</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.572</p></blockquote></div>"
          },
          "name": "United States Medicare Number",
          "status": "active",
          "kind": "identifier",
          "date": "2016-07-12",
          "publisher": "Centers for Medicare & Medicaid Services",
          "contact": [
            {
              "telecom": [
                {
                  "system": "url",
                  "value": "https://www.medicare.gov/"
                }
              ]
            }
          ],
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SB"
              }
            ]
          },
          "description": "Medicare Numbers (HIC or HICN) are represented without any spaces or dashes",
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "uri",
              "value": "http://hl7.org/fhir/sid/us-medicare",
              "preferred": true
            },
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.572"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/us-mbi",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "us-mbi",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: us-mbi</p><p><b>name</b>: Medicare Beneficiary Identifier (United States)</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 12/07/2016</p><p><b>publisher</b>: Centers for Medicare &amp; Medicaid Services</p><p><b>contact</b>: </p><p><b>type</b>: Social Beneficiary Identifier <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'SB' = 'Social Beneficiary Identifier)</span></p><p><b>description</b>: Medicare Beneficiary Identifiers are represented without any spaces or dashes</p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: http://hl7.org/fhir/sid/us-mbi</p><p><b>preferred</b>: true</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.927</p></blockquote></div>"
          },
          "name": "Medicare Beneficiary Identifier (United States)",
          "status": "active",
          "kind": "identifier",
          "date": "2016-07-12",
          "publisher": "Centers for Medicare & Medicaid Services",
          "contact": [
            {
              "telecom": [
                {
                  "system": "url",
                  "value": "https://www.medicare.gov/"
                }
              ]
            }
          ],
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "SB"
              }
            ]
          },
          "description": "Medicare Beneficiary Identifiers are represented without any spaces or dashes",
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "uri",
              "value": "http://hl7.org/fhir/sid/us-mbi",
              "preferred": true
            },
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.927"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/us-npi",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "us-npi",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: us-npi</p><p><b>name</b>: United States National Provider Identifier</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 31/07/2015</p><p><b>publisher</b>: Centers for Medicare and Medicaid Services</p><p><b>contact</b>: </p><p><b>type</b>: Provider number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'PRN' = 'Provider number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: http://hl7.org/fhir/sid/us-npi</p><p><b>preferred</b>: true</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.6</p></blockquote></div>"
          },
          "name": "United States National Provider Identifier",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-31",
          "publisher": "Centers for Medicare and Medicaid Services",
          "contact": [
            {
              "telecom": [
                {
                  "system": "url",
                  "value": "http://www.cms.gov/"
                }
              ]
            }
          ],
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "PRN"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "uri",
              "value": "http://hl7.org/fhir/sid/us-npi",
              "preferred": true
            },
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.6"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/gtin",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "gtin",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gtin</p><p><b>name</b>: Global Trade Item Number (GTIN)</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 18/12/2017</p><p><b>publisher</b>: GS1</p><p><b>contact</b>: </p><p><b>description</b>: Note: GTINs may be used in both [Codes](datatypes.html#Coding) and [Identifiers](datatypes.html#Identifier)</p><p><b>jurisdiction</b>: World <span>(Details : {http://unstats.un.org/unsd/methods/m49/m49.htm code '001' = 'World)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 1.3.160</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: https://www.gs1.org/gtin</p></blockquote></div>"
          },
          "name": "Global Trade Item Number (GTIN)",
          "status": "active",
          "kind": "identifier",
          "date": "2017-12-18",
          "publisher": "GS1",
          "contact": [
            {
              "telecom": [
                {
                  "system": "url",
                  "value": "http://www.gs1.org/"
                }
              ]
            }
          ],
          "description": "Note: GTINs may be used in both [Codes](datatypes.html#Coding) and [Identifiers](datatypes.html#Identifier)",
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "http://unstats.un.org/unsd/methods/m49/m49.htm",
                  "code": "001"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "1.3.160"
            },
            {
              "type": "uri",
              "value": "https://www.gs1.org/gtin"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.2",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.2</p><p><b>name</b>: Alaska Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.2</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.2</p></blockquote></div>"
          },
          "name": "Alaska Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.2"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.2"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.1",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.1</p><p><b>name</b>: Alabama Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.1</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.1</p></blockquote></div>"
          },
          "name": "Alabama Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.1"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.1"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.5",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.5",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.5</p><p><b>name</b>: Arkansas Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.5</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.5</p></blockquote></div>"
          },
          "name": "Arkansas Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.5"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.5"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.4",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.4",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.4</p><p><b>name</b>: Arizona Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.4</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.4</p></blockquote></div>"
          },
          "name": "Arizona Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.4"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.4"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.6",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.6",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.6</p><p><b>name</b>: California Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.6</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.6</p></blockquote></div>"
          },
          "name": "California Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.6"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.6"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.8",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.8",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.8</p><p><b>name</b>: Colorado Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.8</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.8</p></blockquote></div>"
          },
          "name": "Colorado Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.8"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.8"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.9",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.9",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.9</p><p><b>name</b>: Connecticut Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.9</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.9</p></blockquote></div>"
          },
          "name": "Connecticut Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.9"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.9"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.11",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.11",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.11</p><p><b>name</b>: DC Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.11</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.11</p></blockquote></div>"
          },
          "name": "DC Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.11"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.11"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.10",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.10",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.10</p><p><b>name</b>: Delaware Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.10</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.10</p></blockquote></div>"
          },
          "name": "Delaware Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.10"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.10"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.12",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.12",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.12</p><p><b>name</b>: Florida Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.12</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.12</p></blockquote></div>"
          },
          "name": "Florida Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.12"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.12"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.13",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.13",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.13</p><p><b>name</b>: Georgia Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.13</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.13</p></blockquote></div>"
          },
          "name": "Georgia Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.13"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.13"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.15",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.15",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.15</p><p><b>name</b>: Hawaii Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.15</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.15</p></blockquote></div>"
          },
          "name": "Hawaii Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.15"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.15"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.18",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.18",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.18</p><p><b>name</b>: Indiana Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.18</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.18</p></blockquote></div>"
          },
          "name": "Indiana Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.18"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.18"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.19",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.19",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.19</p><p><b>name</b>: Iowa Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.19</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.19</p></blockquote></div>"
          },
          "name": "Iowa Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.19"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.19"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.16",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.16",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.16</p><p><b>name</b>: Idaho Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.16</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.16</p></blockquote></div>"
          },
          "name": "Idaho Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.16"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.16"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.17",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.17",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.17</p><p><b>name</b>: Illinois Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.17</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.17</p></blockquote></div>"
          },
          "name": "Illinois Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.17"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.17"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.20",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.20",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.20</p><p><b>name</b>: Kansas Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.20</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.20</p></blockquote></div>"
          },
          "name": "Kansas Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.20"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.20"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.21",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.21",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.21</p><p><b>name</b>: Kentucky Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.21</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.21</p></blockquote></div>"
          },
          "name": "Kentucky Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.21"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.21"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.22",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.22",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.22</p><p><b>name</b>: Louisiana Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.22</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.22</p></blockquote></div>"
          },
          "name": "Louisiana Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.22"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.22"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.25",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.25",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.25</p><p><b>name</b>: Massachusetts Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.25</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.25</p></blockquote></div>"
          },
          "name": "Massachusetts Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.25"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.25"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.24",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.24",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.24</p><p><b>name</b>: Maryland Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.24</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.24</p></blockquote></div>"
          },
          "name": "Maryland Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.24"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.24"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.23",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.23",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.23</p><p><b>name</b>: Maine Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.23</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.23</p></blockquote></div>"
          },
          "name": "Maine Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.23"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.23"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.26",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.26",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.26</p><p><b>name</b>: Michigan Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.26</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.26</p></blockquote></div>"
          },
          "name": "Michigan Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.26"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.26"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.27",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.27",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.27</p><p><b>name</b>: Minnesota Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.27</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.27</p></blockquote></div>"
          },
          "name": "Minnesota Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.27"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.27"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.29",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.29",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.29</p><p><b>name</b>: Missouri Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.29</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.29</p></blockquote></div>"
          },
          "name": "Missouri Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.29"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.29"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.28",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.28",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.28</p><p><b>name</b>: Mississippi Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.28</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.28</p></blockquote></div>"
          },
          "name": "Mississippi Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.28"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.28"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.30",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.30",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.30</p><p><b>name</b>: Montana Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.30</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.30</p></blockquote></div>"
          },
          "name": "Montana Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.30"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.30"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.36",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.36",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.36</p><p><b>name</b>: New York Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.36</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.36</p></blockquote></div>"
          },
          "name": "New York Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.36"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.36"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.37",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.37",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.37</p><p><b>name</b>: North Carolina Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.37</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.37</p></blockquote></div>"
          },
          "name": "North Carolina Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.37"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.37"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.38",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.38",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.38</p><p><b>name</b>: North Dakota Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.38</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.38</p></blockquote></div>"
          },
          "name": "North Dakota Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.38"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.38"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.31",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.31",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.31</p><p><b>name</b>: Nebraska Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.31</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.31</p></blockquote></div>"
          },
          "name": "Nebraska Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.31"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.31"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.33",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.33",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.33</p><p><b>name</b>: New Hampshire Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.33</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.33</p></blockquote></div>"
          },
          "name": "New Hampshire Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.33"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.33"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.34",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.34",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.34</p><p><b>name</b>: New Jersey Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.34</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.34</p></blockquote></div>"
          },
          "name": "New Jersey Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.34"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.34"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.35",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.35",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.35</p><p><b>name</b>: New Mexico Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.35</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.35</p></blockquote></div>"
          },
          "name": "New Mexico Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.35"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.35"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.32",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.32",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.32</p><p><b>name</b>: Nevada Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.32</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.32</p></blockquote></div>"
          },
          "name": "Nevada Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.32"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.32"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.39",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.39",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.39</p><p><b>name</b>: Ohio Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.39</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.39</p></blockquote></div>"
          },
          "name": "Ohio Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.39"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.39"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.40",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.40",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.40</p><p><b>name</b>: Oklahoma Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.40</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.40</p></blockquote></div>"
          },
          "name": "Oklahoma Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.40"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.40"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.41",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.41",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.41</p><p><b>name</b>: Oregon Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.41</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.41</p></blockquote></div>"
          },
          "name": "Oregon Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.41"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.41"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.42",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.42",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.42</p><p><b>name</b>: Pennsylvania Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.42</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.42</p></blockquote></div>"
          },
          "name": "Pennsylvania Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.42"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.42"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.44",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.44",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.44</p><p><b>name</b>: Rhode Island Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.44</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.44</p></blockquote></div>"
          },
          "name": "Rhode Island Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.44"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.44"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.45",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.45",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.45</p><p><b>name</b>: South Carolina Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.45</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.45</p></blockquote></div>"
          },
          "name": "South Carolina Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.45"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.45"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.46",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.46",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.46</p><p><b>name</b>: South Dakota Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.46</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.46</p></blockquote></div>"
          },
          "name": "South Dakota Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.46"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.46"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.47",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.47",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.47</p><p><b>name</b>: Tennessee Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.47</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.47</p></blockquote></div>"
          },
          "name": "Tennessee Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.47"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.47"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.48",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.48",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.48</p><p><b>name</b>: Texas Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.48</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.48</p></blockquote></div>"
          },
          "name": "Texas Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.48"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.48"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.49",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.49",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.49</p><p><b>name</b>: Utah Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.49</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.49</p></blockquote></div>"
          },
          "name": "Utah Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.49"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.49"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.51",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.51",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.51</p><p><b>name</b>: Virginia Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.51</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.51</p></blockquote></div>"
          },
          "name": "Virginia Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.51"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.51"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.50",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.50",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.50</p><p><b>name</b>: Vermont Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.50</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.50</p></blockquote></div>"
          },
          "name": "Vermont Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.50"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.50"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.53",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.53",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.53</p><p><b>name</b>: Washington Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.53</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.53</p></blockquote></div>"
          },
          "name": "Washington Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.53"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.53"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.55",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.55",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.55</p><p><b>name</b>: Wisconsin Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.55</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.55</p></blockquote></div>"
          },
          "name": "Wisconsin Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.55"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.55"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.54",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.54",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.54</p><p><b>name</b>: West Virginia Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.54</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.54</p></blockquote></div>"
          },
          "name": "West Virginia Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.54"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.54"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/NamingSystem/4.3.56",
        "resource": {
          "resourceType": "NamingSystem",
          "id": "4.3.56",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 4.3.56</p><p><b>name</b>: Wyoming Driver's License</p><p><b>status</b>: active</p><p><b>kind</b>: identifier</p><p><b>date</b>: 03/07/2015</p><p><b>publisher</b>: HL7 International</p><p><b>type</b>: Driver's license number <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0203 code 'DL' = 'Driver's license number)</span></p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><blockquote><p><b>uniqueId</b></p><p><b>type</b>: oid</p><p><b>value</b>: 2.16.840.1.113883.4.3.56</p></blockquote><blockquote><p><b>uniqueId</b></p><p><b>type</b>: uri</p><p><b>value</b>: urn:oid:2.16.840.1.113883.4.3.56</p></blockquote></div>"
          },
          "name": "Wyoming Driver's License",
          "status": "active",
          "kind": "identifier",
          "date": "2015-07-03",
          "publisher": "HL7 International",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "DL"
              }
            ]
          },
          "jurisdiction": [
            {
              "coding": [
                {
                  "system": "urn:iso:std:iso:3166",
                  "code": "US"
                }
              ]
            }
          ],
          "uniqueId": [
            {
              "type": "oid",
              "value": "2.16.840.1.113883.4.3.56"
            },
            {
              "type": "uri",
              "value": "urn:oid:2.16.840.1.113883.4.3.56"
            }
          ]
        }
      }
    ]
  }