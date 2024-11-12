
import { code, Reference, base64Binary } from "./_basic-types";
import { Resource } from "./_resource.types";

export type Binary = Resource & {
    resourceType: "Binary",
    contentType: code,
    securityContext?: Reference,
    data?: base64Binary,
};