import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-colonoscopy.json.html
// Example of colonoscopy procedure with complication

export const mockProcedure11: Procedure = {
    "resourceType": "Procedure",
    "id": "colonoscopy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Colonoscopy with complication</div>"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "73761001",
          "display": "Colonoscopy (procedure)"
        }
      ],
      "text": "Colonoscopy"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        }
      }
    ],
    "location": {
      "reference": "Location/1",
      "display": "Burgers University Medical Center, South Wing, second floor"
    },
    "complicationDetail": [
      {
        "display": "Perforated intestine condition"
      }
    ],
    "usedReference": [
      {
        "display": "Colonoscope device"
      }
    ]
  }