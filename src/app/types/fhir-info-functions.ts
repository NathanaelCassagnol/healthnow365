import { FHIRResource } from "fhir/R4/types/_resource.types";
import { codeableConceptToString, ValidateBasicType } from "fhir/R4/utilities/validators-tostring.util";

export function getTitle(resource?: FHIRResource): string {
    if (resource == null) return '';
    // return getTitleOrEmpty(resource) || resource.resourceType;
    return getTitleOrEmpty(resource) || 'Untitled';
}
function getTitleOrEmpty(resource?: FHIRResource): string {
    if (resource == null) return '';
    switch (resource.resourceType) {
        case 'AdverseEvent':
            return codeableConceptToString(resource.event) || codeableConceptToString(resource.category?.[0]) || getTitle(resource.contained?.[0]);
        case 'Condition':
            return codeableConceptToString(resource.code) ?? ''
        case 'DetectedIssue':
            return codeableConceptToString(resource.code)
        case 'DiagnosticReport':
            return codeableConceptToString(resource.code);
        case 'FamilyMemberHistory':
            return resource.condition?.map(c => codeableConceptToString(c.code)).join(', ') ?? '';
        case 'ImagingStudy':
            return codeableConceptToString(resource.procedureCode?.[0]) || resource.series?.[0].description || '';
        case 'Immunization':
            return codeableConceptToString(resource.vaccineCode);
        case 'ImmunizationRecommendation':
            return resource.recommendation.map(r => codeableConceptToString(r.vaccineCode?.[0])).join(', ');
        case 'MedicationAdministration':
            return codeableConceptToString(resource.medicationCodeableConcept) || getTitle(resource.contained?.[0]);
        case 'MedicationDispense':
            return codeableConceptToString(resource.medicationCodeableConcept) || getTitle(resource.contained?.[0]);
        case 'Medication':
            return codeableConceptToString(resource.code) || getTitle(resource.contained?.[0]);
        case 'Observation':
            return codeableConceptToString(resource.code);
        case 'Procedure':
            return codeableConceptToString(resource.code) ?? ''
        default:
            return '';
    }
}


export function getDisplayElements(resource: Object) {
    const ret: ObjectDisplayElements[] = [];
    const entries = Object.entries(resource);
    entries.forEach(([key, value]) => {
        if (['resourceType', 'id', 'identifier'].includes(key)) {
            return;
        }
        if (key === 'text' && typeof value === 'object' && Object.hasOwn(value, 'div')) return;
        if (Array.isArray(value)) {
            const anyObject = value.find(e => typeof e === 'object') != null;
            if (anyObject) {
                const addToRet: ObjectDisplayElements[][] = [];
                
                value.forEach(element => {
                    const toPush = getDisplayElements(element)
                        .map(e => cleanupObject(e));
                    addToRet.push(toPush);
                })
                const thisObj: ObjectDisplayElements = {
                    title: key, 
                    type: 'objectArray',
                    value: addToRet
                }
                const cleaned = cleanupObject(thisObj);
                ret.push(cleaned);
            }
            else {
                const addToRet = value.map(v => v+'');
                ret.push({
                    title: key, 
                    type: 'valueArray',
                    value: addToRet
                });
            }
        }
        else if (typeof value === 'object') {
            const thisObject: ObjectDisplayElements = {
                type: 'object',
                title: key,
                value: getDisplayElements(value)
            };
            const cleaned = cleanupObject(thisObject);
            ret.push(cleaned);
        }
        else {
            ret.push({
                title: key,
                type: 'value',
                value: value+''
            });
        }
    });

    return ret;
}
function cleanupObject(inputElement: ObjectDisplayElements): ObjectDisplayElements {
    // Use a clone of this object to make sure we never manipulate the original
    let element: ObjectDisplayElements = JSON.parse(JSON.stringify(inputElement))

    if (element.type === 'reference') return element;

    // Cleanup text
    if (element.type === 'object' && element.value.length === 1 && (element.value[0].title === 'text' || element.value[0].title === 'display')) {
        return ({
            type: 'value',
            title: element.title,
            value: element.value[0].value
        }) as ObjectDisplayElements;
    }
    // Cleanup coding
    if (element.title === 'coding' && element.type === 'objectArray') {
        const codes: {display: string, url?: string}[] = [];
        element.value.forEach(data => {
            // TODO Integrate version and userSelected if desired
            const system = data.find(d => d.title === 'system')?.value as (string | undefined);
            const version = data.find(d => d.title === 'version')?.value as (string | undefined);
            const code = data.find(d => d.title === 'code')?.value as (string | undefined);
            const display = data.find(d => d.title === 'display')?.value as (string | undefined);
            const userSelected = data.find(d => d.title === 'userSelected')?.value as (string | undefined);
            
            const title = display ?? code ?? 'Unknown';
            let url = system;
            if (code != null && code.length) url += '#'+code
            codes.push ({
                display: title,
                url,
            });
        });
        if (codes.length === 1) return {
            type: "value",
            title: "Coding",
            value: codes[0].display,
            url: codes[0].url
        };
        return {
            type: "valueArray",
            title: "Coding",
            value: codes
        } as ObjectDisplayElements;
    }
    // Cleanup arrays of text (Note)
    if (element.type === 'objectArray' && element.value.every(v => v.length === 1 && v[0].title.toLowerCase() === 'text')) {
        if (element.value.length === 1) {
            return {
                type: 'value',
                title: element.title,
                value: element.value[0][0].value
            } as ObjectDisplayElements;
        }
        else {
            return {
                type: 'valueArray',
                title: element.title,
                value: element.value.map(v => v[0].value)
            } as ObjectDisplayElements;
        }
    }

    // Treat object arrays with one element, treat it as an object
    // PLACE CHECKS THAT PREFER ARRAYS ABOVE THIS
    if (element.type === 'objectArray' && element.value.length === 1) {
        element = {
            type: 'object',
            value: element.value[0],
            title: element.title
        }
    }
    // PLACE CHECKS THAT PREFER SINGLED OBJECTS BELOW THIS

    // Cleanup objects that only contain a code
    if (element.type === 'object' &&
        (element.value.length === 1 && element.value[0].title.toLowerCase() === 'coding' ||
        element.value.length === 2 && element.value.every(v => ['coding', 'text'].includes(v.title.toLowerCase())))
    ) {
        const coding = element.value.find(v => v.title.toLowerCase() === 'coding')!;
        const text = element.value.find(v => v.title.toLowerCase() === 'text');
        if (!Array.isArray(coding.value) || coding.value?.length === 1) {
            return {
                type: 'value',
                title: element.title,
                value: text?.value ?? coding.value,
                url: (coding as any).url
            } as ObjectDisplayElements
        }
    }

    // Check against specific object types
    if (element.type === 'object') {
        const myKeys = element.value.map(x => x.title.toLowerCase()).filter(k => k != 'id' && k != 'extension');
        // Quantity
        const quantityMatches = myKeys.filter(k => ['value', 'comparator', 'unit', 'system', 'code'].includes(k)).length;
        if (quantityMatches >= 2 && quantityMatches === myKeys.length) {
            // TODO Add system and code if that's important
            const value = element.value.find(d => d.title.toLowerCase() === 'value')?.value as (string | undefined);
            const comparator = element.value.find(d => d.title.toLowerCase() === 'comparator')?.value as (string | undefined);
            const unit = element.value.find(d => d.title.toLowerCase() === 'unit')?.value as (string | undefined);
            const system = element.value.find(d => d.title.toLowerCase() === 'system')?.value as (string | undefined);
            const code = element.value.find(d => d.title.toLowerCase() === 'code')?.value as (string | undefined);
            // const codeAndSystem = (code != null && system != null) ? `[${code} - ${system}]` : '';
            const realUnit = unit ?? code;
            return {
                type: 'value',
                // value: [comparator, value, unit, codeAndSystem].filter(x => !!x).join(' '),
                value: [comparator, value, realUnit].filter(x => !!x).join(' '),
                title: element.title
            }
        }
        // Reference
        // All properies must be one of these:
        const referenceAllowedKeys = ['reference', 'type', 'identifier', 'display'];
        // Must have at least one of these:
        const referenceManditoryKeys = ['reference', 'identifier', 'display']
        if (
            myKeys.every(key => referenceAllowedKeys.includes(key)) &&
            myKeys.find(key => referenceManditoryKeys.includes(key))
        ) {
            const reference = element.value.find(d => d.title.toLowerCase() === 'reference')?.value as (string | undefined);
            const identifier = element.value.find(d => d.title.toLowerCase() === 'identifier')?.value as (string | undefined);
            const display = element.value.find(d => d.title.toLowerCase() === 'display')?.value as (string | undefined);
            return {
                type: 'reference',
                title: element.title,
                id: reference ?? identifier ?? display ?? '',
                value: display ?? identifier ?? reference,
            }
        }
    }
    // Cleanup references (if its a value not object)
    // if (element.type === 'value') {
    //     if (element.title === 'reference' || element.title === 'identifier' ||  element.title === 'display') {
    //         return {
    //             type: 'reference',
    //             title: element.title,
    //             value: element.value,
    //             id: element.value,
    //         }
    //     }
    // }
    // Cleanup array of references
    if (element.type === 'objectArray') {
        const referenceAllowedKeys = ['reference', 'type', 'identifier', 'display'];
        const referenceManditoryKeys = ['reference', 'identifier', 'display']
        let allAreRefs = element.value.every(obj => {
            const myKeys = obj.map(x => x.title.toLowerCase()).filter(k => k != 'id' && k != 'extension');
            const objIsRef = myKeys.every(key => referenceAllowedKeys.includes(key)) &&
                myKeys.find(key => referenceManditoryKeys.includes(key));
            return objIsRef;
        });
        if (allAreRefs) {
            return {
                type: 'referenceArray',
                title: element.title,
                value: element.value.map(obj => {
                    const reference = obj.find(d => d.title.toLowerCase() === 'reference')?.value as (string | undefined);
                    const identifier = obj.find(d => d.title.toLowerCase() === 'identifier')?.value as (string | undefined);
                    const display = obj.find(d => d.title.toLowerCase() === 'display')?.value as (string | undefined);
                    return {
                        id: reference ?? identifier ?? display ?? '',
                        value: display ?? identifier ?? reference,
                    }
                })
            } as ObjectDisplayElements
        }
    }
    // No cleanups found
    return element;
}

export type ObjectDisplayElements = {
    type: 'value';
    title: string;
    value: string;
    url?: string;
} | {
    type: 'valueArray';
    title: string;
    value: (string | {display: string, url?: string})[];
} | {
    type: 'object';
    title: string;
    value: ObjectDisplayElements[];
} | {
    type: 'objectArray';
    title: string;
    value: ObjectDisplayElements[][];
} | {
    type: 'reference';
    title: string;
    id: string;
    value?: string;
} | {
    type: 'referenceArray';
    title: string;
    value: {id: string, value: string}[];
}