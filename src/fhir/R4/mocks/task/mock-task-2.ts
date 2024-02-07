import { Task } from "../../types/task";

// https://hl7.org/fhir/R4/task-example2.json.html
// Example of an accepted, filler generated specimen collection subtask

export const mockTask2: Task = {
    "resourceType": "Task",
    "id": "example2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example2</p><p><b>identifier</b>: 20170201-002 (OFFICIAL)</p><p><b>groupIdentifier</b>: G20170201-001 (OFFICIAL)</p><p><b>partOf</b>: <a>Lipid Panel</a></p><p><b>status</b>: accepted</p><p><b>businessStatus</b>: waiting for patient <span>(Details )</span></p><p><b>intent</b>: filler-order</p><p><b>priority</b>: routine</p><p><b>code</b>: Specimen Collection <span>(Details )</span></p><p><b>focus</b>: BloodDraw ServiceRequest</p><p><b>for</b>: <a>Peter James Chalmers</a></p><p><b>encounter</b>: <a>Example In-Patient Encounter</a></p><p><b>executionPeriod</b>: 31/10/2016 8:45:05 AM --&gt; (ongoing)</p><p><b>authoredOn</b>: 31/10/2016 8:45:05 AM</p><p><b>lastModified</b>: 31/10/2016 9:45:05 AM</p><p><b>requester</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><p><b>performerType</b>: Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/task-performer-type code 'performer' = 'performer', given as 'Performer'})</span></p><p><b>owner</b>: <a>Clinical Laboratory @ Acme Hospital</a></p><h3>Restrictions</h3><table><tr><td>-</td><td><b>Repetitions</b></td><td><b>Period</b></td></tr><tr><td>*</td><td>1</td><td>?? --&gt; 01/11/2016 9:45:05 AM</td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http:/goodhealth.org/identifiers",
        "value": "20170201-002"
      }
    ],
    "groupIdentifier": {
      "use": "official",
      "system": "http:/goodhealth.org/accession/identifiers",
      "value": "G20170201-001"
    },
    "partOf": [
      {
        "reference": "Task/example1",
        "display": "Lipid Panel"
      }
    ],
    "status": "accepted",
    "businessStatus": {
      "text": "waiting for patient"
    },
    "intent": "filler-order",
    "priority": "routine",
    "code": {
      "text": "Specimen Collection"
    },
    "focus": {
      "display": "BloodDraw ServiceRequest"
    },
    "for": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "encounter": {
      "reference": "Encounter/example",
      "display": "Example In-Patient Encounter"
    },
    "executionPeriod": {
      "start": "2016-10-31T08:45:05+10:00"
    },
    "authoredOn": "2016-10-31T08:45:05+10:00",
    "lastModified": "2016-10-31T09:45:05+10:00",
    "requester": {
      "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
      "display": "Clinical Laboratory @ Acme Hospital"
    },
    "performerType": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/task-performer-type",
            "code": "performer",
            "display": "Performer"
          }
        ],
        "text": "Performer"
      }
    ],
    "owner": {
      "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
      "display": "Clinical Laboratory @ Acme Hospital"
    },
    "restriction": {
      "repetitions": 1,
      "period": {
        "end": "2016-11-01T09:45:05+10:00"
      }
    }
  }