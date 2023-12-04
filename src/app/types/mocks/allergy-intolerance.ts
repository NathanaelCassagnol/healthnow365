import { AllergyIntolerance } from "../fhir/allergy-intolerance.types";

export const mockAllergyIntolerance1: AllergyIntolerance = {
		id: "eeJxm9Vi8-QmUQuWDhBMklw3",
		clinicalStatus: {
			coding: {
			    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
				version: "4.0.0",
				code: "active",
				display: "Active"
			}
		},
		verificationStatus: {
			coding: {
				system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
				version: "4.0.0",
				code: "confirmed",
				display: "Confirmed",
			}
		},
		category: "medication",
		code: {
			coding: [
				{
					system: "urn:oid:2.16.840.1.113883.6.88",
					code: "9835",
					display: "SMALLPOX VACCINE",
				},
				{
					system: "urn:oid:2.16.840.1.113883.4.9",
					code: "4SV59689SK",
				}
			],
			text: "SMALLPOX VACCINE"
		},
	    patient: {
			reference: "https://hostname/instance/api/FHIR/R4/Patient/e06xbT0QqabCKCMIqZo98DA3",
			display: "Lurch, William"
		},
        reaction: [
            {
                description: "Caused allergic reaction around injection site",
                manifestation: {
                    //Don't know what this looks like so I'll mock an empty object ig
                    coding: {
                    }
                },
                severity: "moderate",
            }
        ],
		recordedDate: "2019-04-19",
}