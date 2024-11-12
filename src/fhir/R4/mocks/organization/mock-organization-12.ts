import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-mihealth.json.html
// Government Department of Health

export const mockOrganization12: Organization = {
    "resourceType": "Organization",
    "id": "3",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Michigan Helth</p>\n    \n    </div>"
    },
    "identifier": [
      {
        "system": "http://michigan.gov/state-dept-ids",
        "value": "25"
      }
    ],
    "name": "Michigan Health",
    "alias": [
      "Michigan State Department of Health"
    ]
  }