export const environment = {
  production: false,
  // Epic's FHIR endpoints (these vary by Epic organization)
  fhirServerUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4',
  // Your registered client ID with Epic
  fhirClientId: 'YOUR_EPIC_CLIENT_ID',
  // Epic's authorization endpoints
  authServerUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2',
  baseHref: '/'
};
