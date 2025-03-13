import { Reference, CodeableConcept, dateTime, Timing, date, BackboneElement, Signature } from "./_basic-types"
import { DomainResource, FHIRResource } from "./_resource.types"
import { Organization } from "./organization.types"
import { Practitioner } from "./practitioner"
import { PractitionerRole } from "./practitioner-role"

export type VerificationResult = DomainResource & {
    resourceType: "VerificationResult",
    target?: Reference<FHIRResource>[],
    targetLocation?: string[],
    need?: CodeableConcept,
    status: "attested" | "validated" | "in-process" | "req-revalid" | "val-fail" | "reval-fail",
    statusDate?: dateTime,
    validationType?: CodeableConcept,
    validationProcess?: CodeableConcept[],
    frequency?: Timing,
    lastPerformed?: dateTime,
    nextScheduled?: date,
    failureAction?: CodeableConcept,
    primarySource?: (BackboneElement & {
        who?: Reference<Organization | Practitioner | PractitionerRole>,
        type?: CodeableConcept[],
        communicationMethod?: CodeableConcept[],
        validationStatus?: CodeableConcept,
        validationDate?: dateTime,
        canPushUpdates?: CodeableConcept,
        pushTypeAvailable?: CodeableConcept[]
    })[],
    attestation?: (BackboneElement & {
        who?: Reference<Practitioner | PractitionerRole | Organization>,
        onBehalfOf?: Reference<Organization | Practitioner | PractitionerRole>,
        communicationMethod?: CodeableConcept,
        date?: date,
        sourceIdentityCertificate?: string,
        proxyIdentityCertificate?: string,
        proxySignature?: Signature,
        sourceSignature?: Signature
    }),
    validator?: (BackboneElement & {
        organization: Reference<Organization>,
        identityCertificate?: string,
        attestationSignature?: Signature
    })[];
}