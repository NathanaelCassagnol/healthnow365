import { Expression } from "@angular/compiler";
import { Address, Age, Annotation, Attachment, CodeableConcept, Coding, Count, Distance, Duration, HumanName, Identifier, Money, Period, Quantity, SimpleQuantity, Range, Ratio, SampledData, Signature, Timing, ContactDetail, Contributor, DataRequirement, ParameterDefinition, RelatedArtifact, TriggerDefinition, UsageContext, Dosage, ContactPoint, Reference, anyBasicType, date, dateTime, time } from "../types/_basic-types";
import { Meta } from "@angular/platform-browser";

type RosettaStoneType = {
    [key: string]: {
        toString: Function,
        customValidator?: Function,
        params?: {
            name: string,
            type: string,
            codeVals?: string[],
            required: boolean,
            isArray: boolean,
        }[],
    }
}
// Duration, Count, Distance, Age = Quantity 
export const BasicTypesRosettaStone: RosettaStoneType = {
    'Address': {
        toString: addressToString,
        params: [
            {name: 'use', type: 'code', required: false, isArray: false, codeVals: ['home', 'work', 'temp', 'old', 'billing']},
            {name: 'type', type: 'code', required: false, isArray: false, codeVals: ['postal', 'physical', 'both']},
            {name: 'text', type: 'string', required: false, isArray: false},
            {name: 'line', type: 'string', required: false, isArray: true},
            {name: 'city', type: 'string', required: false, isArray: false},
            {name: 'district', type: 'string', required: false, isArray: false},
            {name: 'state', type: 'string', required: false, isArray: false},
            {name: 'postalCode', type: 'string', required: false, isArray: false},
            {name: 'country', type: 'string', required: false, isArray: false},
            {name: 'period', type: 'Period', required: false, isArray: false},
        ]
    },
    "Annotation": {
        toString: annotationToString,
        params: [
            {name: "authorReference", type: "Reference", required: false, isArray: false},
            {name: "authorString", type: "string", required: false, isArray: false},
            {name: "time", type: "dateTime", required: false, isArray: false},
            {name: "text", type: "markdown", required: true, isArray: false}
        ]
    },
    "Attachment": {
        toString: attachmentToString,
        params: [
            {name: "contentType", type: "code", required: false, isArray: false},
            {name: "language", type: "code", required: false, isArray: false},
            {name: "data", type: "base64Binary", required: false, isArray: false},
            {name: "url", type: "url", required: false, isArray: false},
            {name: "size", type: "unsignedInt", required: false, isArray: false},
            {name: "hash", type: "base64Binary", required: false, isArray: false},
            {name: "title", type: "string", required: false, isArray: false},
            {name: "creation", type: "dateTime", required: false, isArray: false}
        ]
    },
    "Money": {
        toString: moneyToString,
        params: [
            {name: "value", type: "decimal", required: false, isArray: false},
            {name: "currency", type: "code", required: false, isArray: false}
        ]
    },
    "CodeableConcept": {
        toString: codeableConceptToString,
        params: [
            {name: "coding", type: "Coding", required: false, isArray: true},
            {name: "text", type: "string", required: false, isArray: false}
        ]
    },
    "Coding": {
        toString: codingToString,
        params: [
            {name: "system", type: "uri", required: false, isArray: false},
            {name: "version", type: "string", required: false, isArray: false},
            {name: "code", type: "code", required: false, isArray: false},
            {name: "display", type: "string", required: false, isArray: false},
            {name: "userSelected", type: "boolean", required: false, isArray: false}
        ]
    },
    "ContactPoint": {
        toString: contactPointToString,
        params: [
            {name: "system", type: "code", required: false, isArray: false, codeVals: ["phone", "fax", "email", "pager", "url", "sms", "other"]},
            {name: "value", type: "string", required: false, isArray: false},
            {name: "use", type: "code", required: false, isArray: false, codeVals: ["home", "work", "temp", "old", "mobile"]},
            {name: "rank", type: "positiveInt", required: false, isArray: false},
            {name: "period", type: "Period", required: false, isArray: false}
        ]
    },
    "HumanName": {
        toString: humanNameToString,
        params: [
            {name: "use", type: "code", required: false, isArray: false, codeVals: ["usual", "official", "temp", "nickname", "anonymous", "old", "maiden"]},
            {name: "text", type: "string", required: false, isArray: false},
            {name: "family", type: "string", required: false, isArray: false},
            {name: "given", type: "string", required: false, isArray: true},
            {name: "prefix", type: "string", required: false, isArray: true},
            {name: "suffix", type: "string", required: false, isArray: true},
            {name: "period", type: "Period", required: false, isArray: false}
        ]
    },
    "Identifier": {
        toString: identifierToString,
        params: [
            {name: "use", type: "code", required: false, isArray: false, codeVals: ["usual", "official", "temp", "secondary", "old"]},
            {name: "type", type: "CodeableConcept", required: false, isArray: false},
            {name: "system", type: "uri", required: false, isArray: false},
            {name: "value", type: "string", required: false, isArray: false},
            {name: "period", type: "Period", required: false, isArray: false},
            {name: "assigner", type: "Reference", required: false, isArray: false}
        ]
    },
    "Quantity": {
        toString: quantityToString,
        params: [
            {name: "value", type: "decimal", required: false, isArray: false},
            {name: "comparator", type: "code", required: false, isArray: false, codeVals: ["<", "<=", ">=", ">"]},
            {name: "unit", type: "string", required: false, isArray: false},
            {name: "system", type: "uri", required: false, isArray: false},
            {name: "code", type: "code", required: false, isArray: false}
        ]
    },
    "Period": {
        toString: periodToString,
        params: [
            {name: "start", type: "dateTime", required: false, isArray: false},
            {name: "end", type: "dateTime", required: false, isArray: false}
        ]
    },
    "Range": {
        toString: rangeToString,
        params: [
            {name: "low", type: "Quantity", required: false, isArray: false},
            {name: "high", type: "Quantity", required: false, isArray: false}
        ]
    },
    "Ratio": {
        toString: ratioToString,
        params: [
            {name: "numerator", type: "Quantity", required: false, isArray: false},
            {name: "denominator", type: "Quantity", required: false, isArray: false}
        ]
    },
    "Reference": {
        toString: referenceToString,
        params: [
            {name: "reference", type: "string", required: false, isArray: false},
            {name: "type", type: "uri", required: false, isArray: false},
            {name: "identifier", type: "Identifier", required: false, isArray: false},
            {name: "display", type: "string", required: false, isArray: false}
        ]
    },
    "SampledData": {
        toString: sampledDataToString,
        params: [
            {name: "origin", type: "Quantity", required: true, isArray: false},
            {name: "period", type: "decimal", required: true, isArray: false},
            {name: "factor", type: "decimal", required: false, isArray: false},
            {name: "lowerLimit", type: "decimal", required: false, isArray: false},
            {name: "upperLimit", type: "decimal", required: false, isArray: false},
            {name: "dimensions", type: "positiveInt", required: true, isArray: false},
            {name: "data", type: "string", required: false, isArray: false}
        ]
    },
    "Signature": {
        toString: signatureToString,
        params: [
            {name: "type", type: "Coding", required: true, isArray: true},
            {name: "when", type: "instant", required: true, isArray: false},
            {name: "who", type: "Reference", required: true, isArray: false},
            {name: "onBehalfOf", type: "Reference", required: false, isArray: false},
            {name: "targetFormat", type: "code", required: false, isArray: false},
            {name: "sigFormat", type: "code", required: false, isArray: false},
            {name: "data", type: "base64Binary", required: false, isArray: false}
        ]
    },
    "Timing": {
        toString: timingToString,
        params: [
            {name: "event", type: "dateTime", required: false, isArray: true},
            {name: "repeat", type: "TimingRepeat", required: false, isArray: false},
            {name: "code", type: "CodeableConcept", required: false, isArray: false}
        ]
    },
    "ContactDetail": {
        toString: contactDetailToString,
        params: [
            {name: "name", type: "string", required: false, isArray: false},
            {name: "telecom", type: "ContactPoint", required: false, isArray: true}
        ]
    },
    "Contributor": {
        toString: contributorToString,
        params: [
            {name: "type", type: "code", required: true, isArray: false, codeVals: ["author", "editor", "reviewer", "endorser"]},
            {name: "name", type: "string", required: true, isArray: false},
            {name: "contact", type: "ContactDetail", required: false, isArray: true}
        ]
    },
    "DataRequirement": {
        toString: dataRequirementToString,
        params: [
            {name: "type", type: "code", required: true, isArray: false},
            {name: "profile", type: "canonical", required: false, isArray: true},
            {name: "subjectCodeableConcept", type: "CodeableConcept", required: false, isArray: false},
            {name: "subjectReference", type: "Reference", required: false, isArray: false},
            {name: "mustSupport", type: "string", required: false, isArray: true},
            {name: "codeFilter", type: "DataRequirementCodeFilter", required: false, isArray: true},
            {name: "dateFilter", type: "DataRequirementDateFilter", required: false, isArray: true},
            {name: "limit", type: "positiveInt", required: false, isArray: false},
            {name: "sort", type: "DataRequirementSort", required: false, isArray: true}
        ]
    },
    "Expression": {
        toString: expressionToString,
        params: [
            {name: "description", type: "string", required: false, isArray: false},
            {name: "name", type: "id", required: false, isArray: false},
            {name: "language", type: "code", required: true, isArray: false},
            {name: "expression", type: "string", required: false, isArray: false},
            {name: "reference", type: "uri", required: false, isArray: false}
        ]
    },
    "ParameterDefinition": {
        toString: parameterDefinitionToString,
        params: [
            {name: "name", type: "code", required: false, isArray: false},
            {name: "use", type: "code", required: true, isArray: false},
            {name: "min", type: "integer", required: false, isArray: false},
            {name: "max", type: "string", required: false, isArray: false},
            {name: "documentation", type: "string", required: false, isArray: false},
            {name: "type", type: "code", required: true, isArray: false},
            {name: "profile", type: "canonical", required: false, isArray: false}
        ]
    },
    "RelatedArtifact": {
        toString: relatedArtifactToString,
        params: [
            {name: "type", type: "code", required: true, isArray: false, codeVals: ["documentation", "justification", "citation", "predecessor", "successor", "derived-from", "depends-on", "composed-of"]},
            {name: "label", type: "string", required: false, isArray: false},
            {name: "display", type: "string", required: false, isArray: false},
            {name: "citation", type: "markdown", required: false, isArray: false},
            {name: "url", type: "url", required: false, isArray: false},
            {name: "document", type: "Attachment", required: false, isArray: false},
            {name: "resource", type: "canonical", required: false, isArray: false}
        ]
    },
    "TriggerDefinition": {
        toString: triggerDefinitionToString,
        params: [
            {name: "type", type: "code", required: true, isArray: false, codeVals: ["named-event", "periodic", "data-changed", "data-added", "data-modified", "data-removed", "data-accessed", "data-access-ended"]},
            {name: "name", type: "string", required: false, isArray: false},
            {name: "timingTiming", type: "Timing", required: false, isArray: false},
            {name: "timingReference", type: "Reference", required: false, isArray: false},
            {name: "timingDate", type: "date", required: false, isArray: false},
            {name: "timingDateTime", type: "dateTime", required: false, isArray: false},
            {name: "data", type: "DataRequirement", required: false, isArray: true},
            {name: "condition", type: "Expression", required: false, isArray: false}
        ]
    },
    "UsageContext": {
        toString: usageContextToString,
        params: [
            {name: "code", type: "Coding", required: true, isArray: false},
            {name: "valueCodeableConcept", type: "CodeableConcept", required: false, isArray: false},
            {name: "valueQuantity", type: "Quantity", required: false, isArray: false},
            {name: "valueRange", type: "Range", required: false, isArray: false},
            {name: "valueReference", type: "Reference", required: false, isArray: false}
        ]
    },
    "Dosage": {
        toString: dosageToString,
        params: [
            {name: "sequence", type: "integer", required: false, isArray: false},
            {name: "text", type: "string", required: false, isArray: false},
            {name: "additionalInstruction", type: "CodeableConcept", required: false, isArray: true},
            {name: "patientInstruction", type: "string", required: false, isArray: false},
            {name: "timing", type: "Timing", required: false, isArray: false},
            {name: "asNeededBoolean", type: "boolean", required: false, isArray: false},
            {name: "asNeededCodeableConcept", type: "CodeableConcept", required: false, isArray: false},
            {name: "site", type: "CodeableConcept", required: false, isArray: false},
            {name: "route", type: "CodeableConcept", required: false, isArray: false},
            {name: "method", type: "CodeableConcept", required: false, isArray: false},
            {name: "doseAndRate", type: "DosageDoseAndRate", required: false, isArray: true},
            {name: "maxDosePerPeriod", type: "Ratio", required: false, isArray: false},
            {name: "maxDosePerAdministration", type: "Quantity", required: false, isArray: false},
            {name: "maxDosePerLifetime", type: "Quantity", required: false, isArray: false}
        ]
    },
    "Meta": {
        toString: metaToString,
        params: [
            {name: "versionId", type: "id", required: false, isArray: false},
            {name: "lastUpdated", type: "instant", required: false, isArray: false},
            {name: "source", type: "uri", required: false, isArray: false},
            {name: "profile", type: "canonical", required: false, isArray: true},
            {name: "security", type: "Coding", required: false, isArray: true},
            {name: "tag", type: "Coding", required: false, isArray: true}
        ]
    },



    'TimingRepeat': {
        toString: () => 'TimingRepeat',
        params: [
            {name: 'boundsDuration', type: 'Quantity', required: false, isArray: false}, // is actually Duration
            {name: 'boundsRange', type: 'Range', required: false, isArray: false},
            {name: 'boundsPeriod', type: 'Period', required: false, isArray: false},
            {name: 'count', type: 'positiveInt', required: false, isArray: false},
            {name: 'countMax', type: 'positiveInt', required: false, isArray: false},
            {name: 'duration', type: 'decimal', required: false, isArray: false},
            {name: 'durationMax', type: 'decimal', required: false, isArray: false},
            {name: 'durationUnit', type: 'code', required: false, isArray: false, codeVals: ["s", "min", "h", "d", "wk", "mo", "a"]},
            {name: 'frequency', type: 'positiveInt', required: false, isArray: false},
            {name: 'frequencyMax', type: 'positiveInt', required: false, isArray: false},
            {name: 'period', type: 'decimal', required: false, isArray: false},
            {name: 'periodMax', type: 'decimal', required: false, isArray: false},
            {name: 'periodUnit', type: 'code', required: false, isArray: false, codeVals: ["s", "min", "h", "d", "wk", "mo", "a"]},
            {name: 'dayOfWeek', type: 'code', required: false, isArray: true, codeVals: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]},
            {name: 'timeOfDay', type: 'time', required: false, isArray: true},
            {name: 'when', type: 'code', required: false, isArray: true},
            {name: 'offset', type: 'unsignedInt', required: false, isArray: false},
        ]
    },
    'DataRequirementCodeFilter': {
        toString: () => 'DataRequirementCodeFilter',
        params: [
            {name: 'path', type: 'string', required: false, isArray: false},
            {name: 'searchParam', type: 'string', required: false, isArray: false},
            {name: 'valueSet', type: 'canonical', required: false, isArray: false},
            {name: 'code', type: 'Coding', required: false, isArray: true},
        ]
    },
    'DataRequirementDateFilter': {
        toString: () => 'DataRequirementDateFilter',
        params: [
            {name: 'path', type: 'string', required: false, isArray: false},
            {name: 'searchParam', type: 'string', required: false, isArray: false},
            {name: 'valueDateTime', type: 'dateTime', required: false, isArray: false},
            {name: 'valuePeriod', type: 'Period', required: false, isArray: false},
            {name: 'valueDuration', type: 'Quantity', required: false, isArray: false}, // is actually Duration
        ]
    },
    'DataRequirementSort': {
        toString: () => 'DataRequirementSort',
        params: [
            {name: 'path', type: 'string', required: true, isArray: false},
            {name: 'direction', type: 'code', required: true, isArray: false, codeVals: ["ascending", "descending"]},
        ]
    },
    'DosageDoseAndRate': {
        toString: () => 'DosageDoseAndRate',
        params: [
            {name: 'type', type: 'CodeableConcept', required: false, isArray: false},
            {name: 'doseRange', type: 'Range', required: false, isArray: false},
            {name: 'doseQuantity', type: 'Quantity', required: false, isArray: false},
            {name: 'rateRatio', type: 'Ratio', required: false, isArray: false},
            {name: 'rateRange', type: 'Range', required: false, isArray: false},
            {name: 'rateQuantity', type: 'Quantity', required: false, isArray: false}, // is actually SimpleQuantity
        ]
    },



    'date': { toString: dateTimeToString, customValidator: isDate },
    'time': { toString: dateTimeToString, customValidator: isTime },
    'dateTime': { toString: dateTimeToString, customValidator: isDateTime },
    'instant': { toString: dateTimeToString, customValidator: isInstant },
    'integer': { toString: (v: number) => v+'', customValidator:
        (input: any) => (typeof input === 'number') && (Math.round(input) === input)},
    'positiveInt': { toString: (v: number) => v+'', customValidator:
        (input: any) => (typeof input === 'number') && (Math.round(input) === input) && input > 0},
    'unsignedInt': { toString: (v: number) => v+'', customValidator:
        (input: any) => (typeof input === 'number') && (Math.round(input) === input) && input >= 0},
    'decimal': { toString: (v: number) => v+'', customValidator: (input: any) => (typeof input === 'number')},
    'boolean': { toString: (v: boolean) => v?'True':'False', customValidator: (input: any) => (typeof input === 'boolean')},
    'base64Binary': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'canonical': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'code': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'id': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'markdown': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'oid': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'string': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'uri': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'url': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
    'uuid': { toString: (v: string) => v, customValidator: (input: any) => typeof input === 'string' },
}

export function addressToString(a: Address) {
    if (a.text) return a.text;
    return [ ...(a.line??[]), a.city, a.district, a.state, a.country, a.postalCode ]
        .filter(x => x != null)
        .join(", ");
}

export function quantityToString(q: Quantity | SimpleQuantity | Age | Distance | Duration | Count) {
    return [q.comparator, q.value, q.unit].filter(x => x != undefined).join(" ");
}

export function annotationToString(a?: Annotation | Annotation[]) {
    // Currently only writes author if it is a string, may add author reference in the future
    if (!a) return '';

    const anMap = (an: Annotation) => {
        let ret = '';
        if(an.authorString || an.time) {
            ret += '[';
            if (an.authorString) ret += an.authorString;
            if (an.authorString && an.time) ret += ' ';
            if (an.time) ret += dateTimeToString(an.time);
            ret += '] ';
        }
        ret += an.text;
        return ret;
    }

    if (Array.isArray(a)) return a.map(anMap);
    return anMap(a);
}

export function attachmentToString(a: Attachment) {
    return a.title ?? 'Unnamed Attachment';
}

export function codeableConceptToString(c?: CodeableConcept | CodeableConcept[]) {
    if (!c) return '';
    let ccMap = (cc: CodeableConcept) => cc.text ?? cc.coding?.[0]?.display ?? '';
    if (Array.isArray(c)) return c.map(ccMap);
    return ccMap(c);
}

export function codingToString(c: Coding) {
    return c.display ?? '';
}

export function humanNameToString(name: HumanName) {
    if (name.text) return name.text;
    let constructedName = [];
    if (name.prefix && name.prefix.length > 0) constructedName.push(...name.prefix);
    if (name.given && name.given.length > 0) constructedName.push(name.given[0]);
    if (name.family) constructedName.push(name.family);
    if (name.suffix && name.suffix.length > 0) constructedName.push(...name.suffix);
    return constructedName.join(" ");
}

export function identifierToString(i: Identifier) {
    return i.value ?? '';
}

export function moneyToString(m: Money) {
    // Should have some sort of lookup to find currency symbols
    return (m.currency??'') + (m.value??'Unknown');
}

export function periodToString(p: Period) {
    if (p.start && !p.end) return dateTimeToString(p.start)+' and later';
    if (!p.start && p.end) return dateTimeToString(p.end)+' and before';
    if (p.start && p.end) return dateTimeToString(p.start)+" - "+dateTimeToString(p.end);
    return "Unknown Time"
}

export function rangeToString(r: Range) {
    let unit = r.low?.unit ?? r.high?.unit ?? '';
    if (r.low?.value != undefined && r.high?.value == undefined) return `${r.low.value} ${unit} and above`;
    if (r.low?.value == undefined && r.high?.value != undefined) return `${r.high.value} ${unit} and below`;
    if (r.low?.value != undefined && r.high?.value != undefined) return `${r.low.value} - ${r.high.value} ${unit}`;
    return 'Unknown'
}

export function ratioToString(r: Ratio) {
    let num = (r.numerator?.value??'Unknown')+(r.numerator?.unit??'');
    let den = (r.denominator?.value??'Unknown')+(r.denominator?.unit??'');
    return num+'/'+den;
}

export function sampledDataToString(d: SampledData) {
    return 'SampledData';
}

export function signatureToString(s: Signature) {
    return 'Signature';
}

export function timingToString(s: Timing) {
    return 'Timing';
}

export function contactPointToString(c: ContactPoint) {
    return 'ContactPoint';
}

export function contactDetailToString(c: ContactDetail) {
    return 'ContactDetail';
}

export function contributorToString(c: Contributor) {
    return 'Contributor';
}
export function dataRequirementToString(r: DataRequirement) {
    return 'DataRequirement';
}
export function expressionToString(e: Expression) {
    return 'Expression';
}
export function parameterDefinitionToString(p: ParameterDefinition) {
    return 'ParameterDefinition';
}
export function relatedArtifactToString(a: RelatedArtifact) {
    return 'RelatedArtifact';
}
export function triggerDefinitionToString(a: TriggerDefinition) {
    return 'TriggerDefinition';
}
export function usageContextToString(a: UsageContext) {
    return 'UsageContext';
}
export function dosageToString(d: Dosage) {
    return 'Doage';
}
export function metaToString(m: Meta) {
    return 'Meta';
}
export function referenceToString(r: Reference) {
    if (r.display) return r.display;
    return '';
}

export function isAnyDateTime(d: string) {
    return isDate(d) || isTime(d) || isDateTime(d) || isInstant(d);
}
export function isDate(d: string) {
    return /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/.test(d);
}
export function isDateTime(d: string) {
    return /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/.test(d);
}
export function isTime(d: string) {
    return /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/.test(d);
}
export function isInstant(d: string) {
    return /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/.test(d);
}
export function dateTimeToString(dt?: date | dateTime | time) {
    if (!dt) return '';
    if (!isAnyDateTime(dt)) return 'Invalid Time';

    if (dt.length === 4) return dt;
    if (dt.length === 7) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let year = Number(dt.slice(0, 4));
        let month = Number(dt.slice(5));
        return `${months[month]} ${year}`;
    }
    let toWrittenDate = (str: string) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let year = Number(str.slice(0, 4));
        let month = Number(str.slice(5, 7));
        let day = Number(str.slice(8, 10));
        return `${monthsShort[month-1]} ${day}, ${year}`;
    }
    if (dt.length === 10) {
        return toWrittenDate(dt);
    }
    let toWrittenTime = (str: string) => {
        // let ret = (str.slice(6, 8) === '00') ? str.slice(0, 5) : str.slice(0, 8);
        let ret = str.slice(0, 5); // Don't show the seconds
        if (ret[0] === '0') ret = ret.slice(1);
        return ret;
    }
    if (dt.length === 8) {
        return toWrittenTime(dt);
    }
    return toWrittenDate(dt.slice(0, 10)) + ' ' + toWrittenTime(dt.slice(11));
}

export function ValidateBasicType(input: anyBasicType, typeName: string) {
    // TODO: Add the validation rules for each data type in FHIR documentation
    if (["Duration", "Count", "Distance", "Age"].includes(typeName)) typeName = 'Quantity';
    const rosetta = BasicTypesRosettaStone[typeName];
    if (!rosetta) return false;
    let isValid = true;
    if (rosetta.customValidator && !rosetta.customValidator(input)) return false;
    if (typeof input === 'object') {
        // Make sure it has all required variables
        if (rosetta.params?.length) {
            rosetta.params.filter(p => p.required).forEach(p => {
                if (!Object.hasOwn(input, p.name)) {
                    isValid = false;
                }
            })
            if (!isValid) return false;
        }
        // Make sure all included properties are in the list, and they have the right types
        // id, extension, and _[extension] are defined in ancestors
        Object.entries(input).filter(e => e[0] != 'id' && e[0] != 'extension' && e[0][0] != '_').forEach(([key, value]) => {
            const param = (rosetta.params??[]).find(p => p.name === key);
            if (!param) isValid = false;
            else if ((param.isArray) != Array.isArray(value)) isValid = false;
            else if (!ValidateBasicType(value, param.type)) isValid = false;
            else if (param.codeVals && !param.codeVals.includes(value)) isValid = false;
        })
        return isValid;
    }
    return true;
}

export function guessType(input: any) {
    let possibleTypes = Object.keys(BasicTypesRosettaStone).filter(t => ValidateBasicType(input, t));
    if (possibleTypes.length != 1) console.log("Value has "+possibleTypes.length+" possible types:", input, possibleTypes);
    if (possibleTypes.length === 0) return 'Unknown';
    return possibleTypes[0];
}