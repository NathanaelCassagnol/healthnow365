import { Identifier, CodeableConcept, integer, Reference, Quantity, BackboneElement, decimal, uri } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type MolecularSequence = DomainResource & {
    resourceType: "MolecularSequence",
    identifier?: Identifier[],
    type?: CodeableConcept,
    coordinateSystem: integer,
    patient?: Reference,
    specimen?: Reference,
    device?: Reference,
    performer?: Reference,
    quantity?: Quantity,
    referenceSeq?: MolecularSequenceReferenceSeq,
    variant?: MolecularSequenceVariant[],
    observedSeq?: string,
    quality?: MolecularSequenceQuality[],
    readCoverage?: integer,
    repository?: MolecularSequenceRepository[],
    pointer?: Reference[],
    structureVariant?: MolecularSequenceStructureVariant[]
}

type MolecularSequenceReferenceSeq = BackboneElement & {
    chromosome?: CodeableConcept,
    genomeBuild?: string,
    orientation?: "sense" | "antisense",
    referenceSeqId?: CodeableConcept,
    referenceSeqPointer?: Reference,
    referenceSeqString?: string,
    strand?: "watson" | "crick"
}

type MolecularSequenceVariant = BackboneElement & {
    start?: integer,
    end?: integer,
    observedAllele?: string,
    referenceAllele?: string,
    cigar?: string,
    variantPointer?: Reference
}

type MolecularSequenceQuality = BackboneElement & {
    type?: "indel" | "snp" | "unknown",
    standardSequence?: CodeableConcept,
    start?: integer,
    end?: integer,
    score?: Quantity,
    method?: CodeableConcept,
    truthTP?: decimal,
    queryTP?: decimal,
    truthFN?: decimal,
    queryFP?: decimal,
    gtFP?: decimal,
    precision?: decimal,
    recall?: decimal,
    fScore?: decimal,
    roc?: MolecularSequenceQualityRoc
}

type MolecularSequenceQualityRoc = BackboneElement & {
    score?: decimal,
    numTP?: integer,
    numFP?: integer,
    numFN?: integer,
    precision?: decimal,
    sensitivity?: decimal
}

type MolecularSequenceRepository = BackboneElement & {
    type?: CodeableConcept,
    url?: uri,
    name?: string,
    datasetId?: string,
    variantsetId?: string,
    readsetId?: string
}

type MolecularSequenceStructureVariant = BackboneElement & {
    variantType?: CodeableConcept,
    exact?: boolean,
    length?: integer,
    outer?: MolecularSequenceStructureVariantOuter,
    inner?: MolecularSequenceStructureVariantInner,
    variantPointer?: Reference
}

type MolecularSequenceStructureVariantOuter = BackboneElement & {
    start?: integer,
    end?: integer
}

type MolecularSequenceStructureVariantInner = BackboneElement & {
    start?: integer,
    end?: integer
}