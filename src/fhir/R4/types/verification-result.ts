import { Reference, CodeableConcept, dateTime, Timing, date, BackboneElement, Signature } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type VerificationResult = DomainResource & {
    resourceType: "VerificationResult",
    target?: Reference[],
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
        who?: Reference,
        type?: CodeableConcept[],
        communicationMethod?: CodeableConcept[],
        validationStatus?: CodeableConcept,
        validationDate?: dateTime,
        canPushUpdates?: CodeableConcept,
        pushTypeAvailable?: CodeableConcept[]
    })[],
    attestation?: (BackboneElement & {
        who?: Reference,
        onBehalfOf?: Reference,
        communicationMethod?: CodeableConcept,
        date?: date,
        sourceIdentityCertificate?: string,
        proxyIdentityCertificate?: string,
        proxySignature?: Signature,
        sourceSignature?: Signature
    }),
    validator?: (BackboneElement & {
        organization: Reference,
        identityCertificate?: string,
        attestationSignature?: Signature
    })[];
}