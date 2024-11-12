import { ContactPoint, instant, BackboneElement, url, code } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Subscription = DomainResource & {
    resourceType: "Subscription",
    status: "requested" | "active" | "error" | "off",
    contact?: ContactPoint[],
    end?: instant,
    reason: string,
    criteria: string,
    error?: string,
    channel: (BackboneElement & {
        type: "rest-hook" | "websocket" | "email" | "sms" | "message",
        endpoint?: url,
        payload?: code,
        header?: string[],
    }),
};