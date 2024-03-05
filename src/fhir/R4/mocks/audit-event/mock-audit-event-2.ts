import { AuditEvent } from "fhir/R4/types/audit-event";

// https://hl7.org/fhir/R4/audit-event-example-login.json.html
// Login example

export const mockAuditEvent2: AuditEvent = {
    "resourceType": "AuditEvent",
    "id": "example-login",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-login</p><p><b>type</b>: User Authentication (Details: DICOM code 110114 = 'User Authentication', stated as 'User Authentication')</p><p><b>subtype</b>: Login (Details: DICOM code 110122 = 'Login', stated as 'Login')</p><p><b>action</b>: E</p><p><b>recorded</b>: 20/06/2013 11:41:23 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>127.0.0.1</td><td>2</td></tr></table></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Site</b></td><td><b>Observer</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Cloud</td><td/><td>Web Server (Details: http://terminology.hl7.org/CodeSystem/security-source-type code 3 = 'Web Server', stated as 'Web Server')</td></tr></table></div>"
    },
    "type": {
      "system": "http://dicom.nema.org/resources/ontology/DCM",
      "code": "110114",
      "display": "User Authentication"
    },
    "subtype": [
      {
        "system": "http://dicom.nema.org/resources/ontology/DCM",
        "code": "110122",
        "display": "Login"
      }
    ],
    "action": "E",
    "recorded": "2013-06-20T23:41:23Z",
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
        "requestor": true,
        "network": {
          "address": "127.0.0.1",
          "type": "2"
        }
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
    }
  }