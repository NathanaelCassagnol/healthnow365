import { BackboneElement, anyBasicType } from "./_basic-types";
import { FHIRResource, Resource } from "./_resource.types";

export type Parameters = Resource & {
    resourceType: "Parameters",
    parameter?: ParameterPart[],
};

type ParameterPart = BackboneElement & {
    name: string,
    [key: `value${string}`]: anyBasicType,
    resource?: FHIRResource,
    part?: ParameterPart[],
}