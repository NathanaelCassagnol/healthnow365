import { FHIRResource } from "fhir/R4/types/_resource.types";
import { codeableConceptToString } from "fhir/R4/utilities/validators-tostring.util";

export function getTitle(resource?: FHIRResource): string {
    if (resource == null) return '';
    switch (resource.resourceType) {
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
        case 'FamilyMemberHistory':
            return resource.condition?.map(c => codeableConceptToString(c.code)).join(', ') ?? '';
        case 'DiagnosticReport':
            return codeableConceptToString(resource.code);
        case 'AdverseEvent':
            return codeableConceptToString(resource.event) || codeableConceptToString(resource.category?.[0]) || getTitle(resource.contained?.[0]);
        default:
            return '';
    }
}


export function getDisplayElements(resource: Object) {
    const ret: ObjectDisplayElements[] = [];
    const entries = Object.entries(resource);
    entries.forEach(([key, value]) => {
        if (['resourceType', 'id', 'identifier'].includes(key)) {
            // console.log("Removing "+key+":")
            // console.log(value)
            return;
        }
        if (key === 'text' && typeof value === 'object' && Object.hasOwn(value, 'div')) return;
        if (Array.isArray(value)) {
            const anyObject = value.find(e => typeof e === 'object') != null;
            // console.log(key, value);
            if (anyObject) {
                const addToRet: ObjectDisplayElements[][] = [];
                
                value.forEach(element => {
                //     const subelems = getDisplayElements(element);

                // let cleanedVals = subvalue.map(s => cleanupObject(s, key));
                // // ret.push(...cleanedVals)
                // ret.push({
                //     type: 'object',
                //     title: key,
                //     value: cleanedVals
                // })
                    addToRet.push(getDisplayElements(element));
                    
                    // addToRet.push(getDisplayElements(element).map(x => cleanupObject(x, 'Test')));
                    // const subvalue = element.map((e: Object) => getDisplayElements(e).map(e2 => cleanupObject(e2, 'test')));

                    // // ret.push(...cleanedVals)
                    // addToRet.push({
                    //     type: 'object',
                    //     title: key,
                    //     value: cleanedVals
                    // })
                })
                ret.push({
                    title: key, 
                    type: 'objectArray',
                    value: addToRet
                });
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
            const subvalue = getDisplayElements(value);

            let cleanedVals = subvalue.map(s => cleanupObject(s, key));
            // ret.push(...cleanedVals)
            ret.push({
                type: 'object',
                title: key,
                value: cleanedVals
            })
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
function cleanupObject(element: ObjectDisplayElements, key: string): ObjectDisplayElements {
    // Cleanup text
    if (element.title === 'text' && typeof element.value === 'string') {
        return ({
            type: 'value',
            title: 'Text',
            value: element.value
        })
    }
    // Cleanup coding
    if (element.title === 'coding' && element.type === 'objectArray' && element.value.length === 1) {
        const data = element.value[0];

        // TODO Integrate version and userSelected if desired
        const system = data.find(d => d.title === 'system')?.value as (string | undefined);
        const version = data.find(d => d.title === 'version')?.value as (string | undefined);
        const code = data.find(d => d.title === 'code')?.value as (string | undefined);
        const display = data.find(d => d.title === 'display')?.value as (string | undefined);
        const userSelected = data.find(d => d.title === 'userSelected')?.value as (string | undefined);

        const title = display ?? code ?? 'Unknown';
        let url = system;
        if (code != null && code.length) url += '#'+code
        return ({
            type: 'value',
            title: 'Code',
            value: title,
            url,
        })
    }
    // No cleanups found
    return ({
        title: key,
        type: 'object',
        value: [element]
    })
}

export type ObjectDisplayElements = {
    type: 'value';
    title: string;
    value: string;
    url?: string;
} | {
    type: 'valueArray';
    title: string;
    value: string[];
} | {
    type: 'object';
    title: string;
    value: ObjectDisplayElements[];
} | {
    type: 'objectArray';
    title: string;
    value: ObjectDisplayElements[][];
}