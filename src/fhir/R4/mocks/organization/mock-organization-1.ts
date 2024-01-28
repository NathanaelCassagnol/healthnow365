import { Organization } from "../../types/Resource/organization.types";

// https://hl7.org/fhir/R4/organization-example.json.html
// HL7 itself

export const mockOrganization1: Organization = {
    "resourceType": "Organization",
    "id": "hl7",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Health Level Seven International\n      <br/>\n\t\t\t\t3300 Washtenaw Avenue, Suite 227\n      <br/>\n\t\t\t\tAnn Arbor, MI 48104\n      <br/>\n\t\t\t\tUSA\n      <br/>\n\t\t\t\t(+1) 734-677-7777 (phone)\n      <br/>\n\t\t\t\t(+1) 734-677-6622 (fax)\n      <br/>\n\t\t\t\tE-mail:  \n      <a href=\"mailto:hq@HL7.org\">hq@HL7.org</a>\n    \n    </div>"
    },
    "name": "Health Level Seven International",
    "alias": [
      "HL7 International"
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "(+1) 734-677-7777"
      },
      {
        "system": "fax",
        "value": "(+1) 734-677-6622"
      },
      {
        "system": "email",
        "value": "hq@HL7.org"
      }
    ],
    "address": [
      {
        "line": [
          "3300 Washtenaw Avenue, Suite 227"
        ],
        "city": "Ann Arbor",
        "state": "MI",
        "postalCode": "48104",
        "country": "USA"
      }
    ],
    "endpoint": [
      {
        "reference": "Endpoint/example"
      }
    ]
  }