import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-mmanu.json.html
// Medication Manufacturer

export const mockOrganization11: Organization = {
    "resourceType": "Organization",
    "id": "mmanu",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Acme Corporation, Proud member of the pharma industry</p>\n    </div>"
    },
    "active": true,
    "name": "Acme Corporation",
    "address": [
      {
        "country": "Swizterland"
      }
    ]
  }