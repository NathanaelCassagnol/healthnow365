import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-hl7pay.json.html
// HL7 Payer Network

export const mockOrganization13: Organization = {
    "resourceType": "Organization",
    "id": "hl7pay",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>HL7 Payer Network</p>\n    \n    </div>"
    },
    "name": "HL7 Payer network"
  }