import { BackboneElement, Identifier, Signature, decimal, instant, unsignedInt, uri } from "../basic-types";
import { FHIRResource, Resource } from "./resource.types";

export type Bundle = Resource & {
    resourceType: "Bundle";
    identifier?: Identifier; // Not an array in the specs
    type: 'document' | 'message' | 'transaction' | 'transaction-response' | 'batch' | 'batch-response' | 'history' | 'searchset' | 'collection'; // required
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
            method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; // required
            url: uri; // required
            ifNoneMatch?: string;
            ifModifiedSince?: instant;
            ifMatch?: string;
            ifNoneExist?: string;
        }
        response?: BackboneElement & {
            status: string; // required
            location?: uri;
            etag?: string;
            lastModified?: instant;
            outcome?: FHIRResource;
        }
    })[];
    signature?: Signature;
}

type BundleLink = (BackboneElement & {
    relation: string; // required
    url: uri; // required
});