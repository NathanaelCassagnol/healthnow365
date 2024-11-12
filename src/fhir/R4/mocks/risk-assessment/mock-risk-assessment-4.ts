import { RiskAssessment } from "fhir/R4/types/risk-assessment";

// https://hl7.org/fhir/R4/riskassessment-example-population.json.html
// Public health population risk assessment

export const mockRiskAssessment4: RiskAssessment = {
    "resourceType": "RiskAssessment",
    "id": "population",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Todo - e.g. probable number of infections in a given region over a time period for a given disease based on vaccination rates and other factors</p>\n    </div>"
    },
    "contained": [
      {
        "resourceType": "Group",
        "id": "group1",
        "type": "person",
        "actual": false
      }
    ],
    "status": "final",
    "subject": {
      "reference": "#group1"
    }
  }