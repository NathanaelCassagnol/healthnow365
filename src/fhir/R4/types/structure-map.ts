import { uri, Identifier, dateTime, ContactDetail, markdown, UsageContext, CodeableConcept, BackboneElement, canonical, id, integer, decimal, code, time, anyBasicType } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type StructureMap = DomainResource & {
    resourceType: "StructureMap",
    url: uri,
    identifier?: Identifier[],
    version?: string,
    name: string,
    title?: string,
    status: "draft" | "active" | "retired" | "unknown",
    experimental?: boolean,
    date?: dateTime,
    publisher?: string,
    contact?: ContactDetail[],
    description?: markdown,
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[],
    purpose?: markdown,
    structure?: (BackboneElement & {
        url: canonical,
        mode: "source" | "queried" | "target" | "produced",
        alias?: string,
        documentation?: string,
    })[],
    import?: canonical[],
    group: (BackboneElement & {
        name: id,
        extends?: id,
        typeMode: "none" | "types" | "type-and-types",
        documentation?: string,
        input: (BackboneElement & {
            name: id,
            type?: string,
            mode: "source" | "target",
            documentation?: string,
        })[],
        rule: StructureMapRule[],
    })[],
};

type StructureMapRule = BackboneElement & {
    name: id,
    source: (BackboneElement & {
        context: id,
        min?: integer,
        max?: string,
        type?: string,
        [key: `defaultValue${string}`]: anyBasicType,
        element?: string,
        listMode?: "first" | "not_first" | "last" | "not_last" | "only_one",
        variable?: id,
        condition?: string,
        check?: string,
        logMessage?: string,
    })[],
    target?: (BackboneElement & {
        context?: id,
        contextType?: "type" | "variable",
        element?: string,
        variable?: id,
        listMode?: ("first" | "share" | "last" | "collate")[],
        listRuleId?: id,
        transform?: "create" | "copy" | "truncate" | "escape" | "cast" | "append" | "translate" | "reference" | "dateOp" | "uuid" | "pointer" | "evaluate" | "cc" | "c" | "qty" | "id" | "cp",
        parameter?: (BackboneElement & {
            valueId?: id,
            valueString?: string,
            valueBoolean?: boolean,
            valueInteger?: integer,
            valueDecimal?: decimal,
        })[],
    })[],
    rule?: StructureMapRule[],
    dependent?: (BackboneElement & {
        name: id,
        variable: string[],
    })[],
    documentation?: string,
}