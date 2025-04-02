import { Domain } from "aws-cdk-lib/aws-opensearchservice";
import { DomainResource, Resource } from "./_resource.types";
import { BackboneElement } from "./_basic-types";

// Financial
export type Coverage = DomainResource & {
    resourceType: 'Coverage';
};
export type CoverageEligibilityRequest = DomainResource & {
    resourceType: 'CoverageEligibilityRequest';
};
export type CoverageEligibilityResponse = DomainResource & {
    resourceType: 'CoverageEligibilityResponse';
};
export type EnrollmentRequest = DomainResource & {
    resourceType: 'EnrollmentRequest';
};
export type EnrollmentResponse = DomainResource & {
    resourceType: 'EnrollmentResponse';
};

export type Claim = DomainResource & {
    resourceType: 'Claim';
};
export type ClaimResponse = DomainResource & {
    resourceType: 'ClaimResponse';
};
export type Invoice = DomainResource & {
    resourceType: 'Invoice';
};

export type PaymentNotice = DomainResource & {
    resourceType: 'PaymentNotice';
};
export type PaymentReconciliation = DomainResource & {
    resourceType: 'PaymentReconciliation';
};

export type Account = DomainResource & {
    resourceType: 'Account';
};
export type ChargeItem = DomainResource & {
    resourceType: 'ChargeItem';
};
export type ChargeItemDefinition = DomainResource & {
    resourceType: 'ChargeItemDefinition';
};
export type Contract = DomainResource & {
    resourceType: 'Contract';
};
export type ExplanationOfBenefit = DomainResource & {
    resourceType: 'ExplanationOfBenefit';
};
export type InsurancePlan = DomainResource & {
    resourceType: 'InsurancePlan';
};

// Specialized
export type ResearchStudy = DomainResource & {
    resourceType: 'ResearchStudy';
};
export type ResearchSubject = DomainResource & {
    resourceType: 'ResearchSubject';
};

export type ActivityDefinition = DomainResource & {
    resourceType: 'ActivityDefinition';
};
export type DeviceDefinition = DomainResource & {
    resourceType: 'DeviceDefinition';
};
export type EventDefinition = DomainResource & {
    resourceType: 'EventDefinition';
};
export type ObservationDefinition = DomainResource & {
    resourceType: 'ObservationDefinition';
};
export type PlanDefinition = DomainResource & {
    resourceType: 'PlanDefinition';
};
export type Questionnaire = DomainResource & {
    resourceType: 'Questionnaire';
};
export type SpecimenDefinition = DomainResource & {
    resourceType: 'SpecimenDefinition';
};

export type ResearchDefinition = DomainResource & {
    resourceType: 'ResearchDefinition';
}
export type ResearchElementDefinition = DomainResource & {
    resourceType: 'ResearchElementDefinition';
}
export type Evidence = DomainResource & {
    resourceType: 'Evidence';
};
export type EvidenceVariable = DomainResource & {
    resourceType: 'EvidenceVariable';
};
export type EffectEvidenceSynthesis = DomainResource & {
    resourceType: 'EffectEvidenceSynthesis';
};
export type RiskEvidenceSynthesis = DomainResource & {
    resourceType: 'RiskEvidenceSynthesis';
};

export type Measure = DomainResource & {
    resourceType: 'Measure';
};
export type MeasureReport = DomainResource & {
    resourceType: 'MeasureReport';
};
export type TestScript = DomainResource & {
    resourceType: 'TestScript';
};
export type TestReport = DomainResource & {
    resourceType: 'TestReport';
};

export type MedicinalProduct = DomainResource & {
    resourceType: 'MedicinalProduct';
};
export type MedicinalProductAuthorization = DomainResource & {
    resourceType: 'MedicinalProductAuthorization';
};
export type MedicinalProductContraindication = DomainResource & {
    resourceType: 'MedicinalProductContraindication';
};
export type MedicinalProductIndication = DomainResource & {
    resourceType: 'MedicinalProductIndication';
};
export type MedicinalProductIngredient = DomainResource & {
    resourceType: 'MedicinalProductIngredient';
};
export type MedicinalProductInteraction = DomainResource & {
    resourceType: 'MedicinalProductInteraction';
};
export type MedicinalProductManufactured = DomainResource & {
    resourceType: 'MedicinalProductManufactured';
};
export type MedicinalProductPackaged = DomainResource & {
    resourceType: 'MedicinalProductPackaged';
};
export type MedicinalProductPharmaceutical = DomainResource & {
    resourceType: 'MedicinalProductPharmaceutical';
};
export type MedicinalProductUndesirableEffect = DomainResource & {
    resourceType: 'MedicinalProductUndesirableEffect';
};
export type SubstanceNucleicAcid = DomainResource & {
    resourceType: 'SubstanceNucleicAcid';
};
export type SubstancePolymer = DomainResource & {
    resourceType: 'SubstancePolymer';
};
export type SubstanceProtein = DomainResource & {
    resourceType: 'SubstanceProtein';
};
export type SubstanceReferenceInformation = DomainResource & {
    resourceType: 'SubstanceReferenceInformation';
};
export type SubstanceSpecification = DomainResource & {
    resourceType: 'SubstanceSpecification';
};
export type SubstanceSourceMaterial = DomainResource & {
    resourceType: 'SubstanceSourceMaterial';
};
