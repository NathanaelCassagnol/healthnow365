import { Identifier, CodeableConcept, integer, Reference, Quantity, BackboneElement, decimal, uri } from "./_basic-types"
import { DomainResource } from "./_resource.types"

export type MolecularSequence = DomainResource & {
    resourceType: "MolecularSequence",
    identifier?: Identifier[],
    type?: "aa" | "dna" | "rna",
    coordinateSystem: integer,
    patient?: Reference,
    specimen?: Reference,
    device?: Reference,
    performer?: Reference,
    quantity?: Quantity,
    referenceSeq?: BackboneElement & {
        chromosome?: CodeableConcept,
        genomeBuild?: string,
        orientation?: "sense" | "antisense",
        referenceSeqId?: CodeableConcept,
        referenceSeqPointer?: Reference,
        referenceSeqString?: string,
        strand?: "watson" | "crick",
        windowStart?: integer,
        windowEnd?: integer
    },
    variant?: (BackboneElement & {
        start?: integer,
        end?: integer,
        observedAllele?: string,
        referenceAllele?: string,
        cigar?: string,
        variantPointer?: Reference
    })[],
    observedSeq?: string,
    quality?: (BackboneElement & {
        type: "indel" | "snp" | "unknown",
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
        roc?: BackboneElement & {
            score?: decimal[],
            numTP?: integer[],
            numFP?: integer[],
            numFN?: integer[],
            precision?: decimal[],
            sensitivity?: decimal[],
            fMeasure?: decimal[]
        }
    })[],
    readCoverage?: integer,
    repository?: (BackboneElement & {
        type: "directLink" | "openapi" | "login" | "oauth" | "other",
        url?: uri,
        name?: string,
        datasetId?: string,
        variantsetId?: string,
        readsetId?: string
    })[],
    pointer?: Reference[],
    structureVariant?: (BackboneElement & {
        variantType?: CodeableConcept,
        exact?: boolean,
        length?: integer,
        outer?: BackboneElement & {
            start?: integer,
            end?: integer
        },
        inner?: BackboneElement & {
            start?: integer,
            end?: integer
        },
    })[]
}
