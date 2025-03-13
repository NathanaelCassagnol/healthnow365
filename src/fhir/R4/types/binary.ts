
import { code, Reference, base64Binary } from "./_basic-types";
import { FHIRResource, Resource } from "./_resource.types";

export type Binary = Resource & {
    resourceType: "Binary",
    contentType: code,
    securityContext?: Reference<FHIRResource>,
    data?: base64Binary,
};