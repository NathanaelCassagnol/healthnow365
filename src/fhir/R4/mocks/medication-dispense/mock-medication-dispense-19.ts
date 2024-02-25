import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0318.json.html
// Dispense for Levothyroxine (NDC code) in-progress with authorizing prescription

export const mockMedicationDispense19: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0318",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0318</p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Levothyroxine Sodium Tablets, USP (75mcg) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0378-1805-01' = 'n/a', given as 'Levothyroxine Sodium Tablets, USP (75mcg)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0314</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 100 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 16/03/2015 5:13:00 PM</p><p><b>dosageInstruction</b>: </p><h3>Substitutions</h3><table><tr><td>-</td><td><b>WasSubstituted</b></td><td><b>Type</b></td><td><b>Reason</b></td><td><b>ResponsibleParty</b></td></tr><tr><td>*</td><td>true</td><td>formulary <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution code 'F' = 'formulary', given as 'formulary'})</span></td><td>Formulary Policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'Formulary Policy'})</span></td><td><a>Practitioner/f006</a></td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/dispenses",
        "value": "12345689"
      }
    ],
    "status": "in-progress",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0378-1805-01",
          "display": "Levothyroxine Sodium Tablets, USP (75mcg)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0314"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 100,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-03-16T17:13:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "75mcg daily daily",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 75,
              "unit": "mcg",
              "system": "http://unitsofmeasure.org",
              "code": "mcg"
            }
          }
        ]
      }
    ],
    "substitution": {
      "wasSubstituted": true,
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
            "code": "F",
            "display": "formulary"
          }
        ]
      },
      "reason": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
              "code": "FP",
              "display": "Formulary Policy"
            }
          ]
        }
      ],
      "responsibleParty": [
        {
          "reference": "Practitioner/f006"
        }
      ]
    }
  }