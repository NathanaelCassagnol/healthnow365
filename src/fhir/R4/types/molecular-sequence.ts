import { Identifier, CodeableConcept, integer, Reference, Quantity, BackboneElement, decimal, uri } from "./_basic-types"
import { DomainResource } from "./_resource.types"
import { Device } from "./device"
import { Observation } from "./observation.types"
import { Organization } from "./organization.types"
import { Patient } from "./patient.types"
import { Specimen } from "./specimen"

export type MolecularSequence = DomainResource & {
    resourceType: "MolecularSequence",
    identifier?: Identifier[],
    type?: "aa" | "dna" | "rna",
    coordinateSystem: integer,
    patient?: Reference<Patient>,
    specimen?: Reference<Specimen>,
    device?: Reference<Device>,
    performer?: Reference<Organization>,
    quantity?: Quantity,
    referenceSeq?: BackboneElement & {
        chromosome?: CodeableConcept,
        genomeBuild?: string,
        orientation?: "sense" | "antisense",
        referenceSeqId?: CodeableConcept,
        referenceSeqPointer?: Reference<MolecularSequence>,
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
        variantPointer?: Reference<Observation>
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
    pointer?: Reference<MolecularSequence>[],
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
