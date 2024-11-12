import { AuditEvent } from "fhir/R4/types/audit-event";

// https://hl7.org/fhir/R4/audit-event-example-vread.json.html
// RESTful vread Operation

export const mockAuditEvent4: AuditEvent = {
    "resourceType": "AuditEvent",
    "id": "example-rest",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-rest</p><p><b>type</b>: Restful Operation (Details: http://terminology.hl7.org/CodeSystem/audit-event-type code rest = 'RESTful Operation', stated as 'Restful Operation')</p><p><b>subtype</b>: vread (Details: http://hl7.org/fhir/restful-interaction code vread = 'vread', stated as 'vread')</p><p><b>action</b>: R</p><p><b>recorded</b>: 20/06/2013 11:42:24 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Site</b></td><td><b>Observer</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Cloud</td><td/><td>Web Server (Details: http://terminology.hl7.org/CodeSystem/security-source-type code 3 = 'Web Server', stated as 'Web Server')</td></tr></table><h3>Entities</h3><table><tr><td>-</td><td><b>What</b></td><td><b>Type</b></td><td><b>Lifecycle</b></td></tr><tr><td>*</td><td><a>Patient/example/_history/1</a></td><td>System Object (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 2 = 'System Object', stated as 'System Object')</td><td>Access / Use (Details: http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle code 6 = 'Access / Use', stated as 'Access / Use')</td></tr></table></div>"
    },
    "type": {
      "system": "http://terminology.hl7.org/CodeSystem/audit-event-type",
      "code": "rest",
      "display": "Restful Operation"
    },
    "subtype": [
      {
        "system": "http://hl7.org/fhir/restful-interaction",
        "code": "vread",
        "display": "vread"
      }
    ],
    "action": "R",
    "recorded": "2013-06-20T23:42:24Z",
    "outcome": "0",
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
              "code": "humanuser",
              "display": "human user"
            }
          ]
        },
        "who": {
          "identifier": {
            "value": "95"
          }
        },
        "altId": "601847123",
        "name": "Grahame Grieve",
        "requestor": true
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://dicom.nema.org/resources/ontology/DCM",
              "code": "110153",
              "display": "Source Role ID"
            }
          ]
        },
        "who": {
          "identifier": {
            "system": "urn:oid:2.16.840.1.113883.4.2",
            "value": "2.16.840.1.113883.4.2"
          }
        },
        "altId": "6580",
        "requestor": false,
        "network": {
          "address": "Workstation1.ehr.familyclinic.com",
          "type": "1"
        }
      }
    ],
    "source": {
      "site": "Cloud",
      "observer": {
        "identifier": {
          "value": "hl7connect.healthintersections.com.au"
        }
      },
      "type": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
          "code": "3",
          "display": "Web Server"
        }
      ]
    },
    "entity": [
      {
        "what": {
          "reference": "Patient/example/_history/1"
        },
        "type": {
          "system": "http://terminology.hl7.org/CodeSystem/audit-entity-type",
          "code": "2",
          "display": "System Object"
        },
        "lifecycle": {
          "system": "http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle",
          "code": "6",
          "display": "Access / Use"
        }
      }
    ]
  }