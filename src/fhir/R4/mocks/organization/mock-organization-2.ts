import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-gastro.json.html
// Gastroenterology team at ACME Healthcare

export const mockOrganization2: Organization = {
    "resourceType": "Organization",
    "id": "1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Gastroenterology @ Acme Hospital. ph: +1 555 234 3523, email: \n        <a href=\"mailto:gastro@acme.org\">gastro@acme.org</a>\n      </p>\n    \n    </div>"
    },
    "identifier": [
      {
        "system": "http://www.acme.org.au/units",
        "value": "Gastro"
      }
    ],
    "name": "Gastroenterology",
    "telecom": [
      {
        "system": "phone",
        "value": "+1 555 234 3523",
        "use": "mobile"
      },
      {
        "system": "email",
        "value": "gastro@acme.org",
        "use": "work"
      }
    ]
  }