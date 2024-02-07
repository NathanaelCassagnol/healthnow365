import { BackboneElement, Identifier, Signature, decimal, instant, unsignedInt, uri } from "./_basic-types";
import { FHIRResource, Resource } from "./_resource.types";

export type Bundle = Resource & {
    resourceType: "Bundle";
    identifier?: Identifier;
    type: 'document' | 'message' | 'transaction' | 'transaction-response' | 'batch' | 'batch-response' | 'history' | 'searchset' | 'collection';
    timestamp?: instant;
    total?: unsignedInt;
    link?: BundleLink[];
    entry?: (BackboneElement & {
        link?: BundleLink[];
        fullUrl?: uri;
        resource?: FHIRResource;
        search?: BackboneElement & {
            mode?: 'match' | 'include' | 'outcome';
            score?: decimal;
        }
        request?: BackboneElement & {
            method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
            url: uri;
            ifNoneMatch?: string;
            ifModifiedSince?: instant;
            ifMatch?: string;
            ifNoneExist?: string;
        }
        response?: BackboneElement & {
            status: string;
            location?: uri;
            etag?: string;
            lastModified?: instant;
            outcome?: FHIRResource;
        }
    })[];
    signature?: Signature;
}

type BundleLink = (BackboneElement & {
    relation: string;
    url: uri;
});