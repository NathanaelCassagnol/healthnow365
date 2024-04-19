import { Pipe, PipeTransform } from "@angular/core";
import { anyBasicType } from "fhir/R4/types/_basic-types";
import { BasicTypesRosettaStone, guessType } from "fhir/R4/utilities/validators-tostring.util";

@Pipe({
   name: "BasicToString",
   standalone: true,
})
export class BasicToStringPipe implements PipeTransform {
    transform(input: anyBasicType, type: string = ''): string {
        if (type === '') type = guessType(input);
        if (type === 'Unknown') return 'Unknown';
        if (!Object.hasOwn(BasicTypesRosettaStone, type)) return 'Unknown Type'; // = Programmer error probably
        return BasicTypesRosettaStone[type].toString(input);
    }
}

@Pipe({
    name: "BasicToStringProp",
    standalone: true,
 })
 export class BasicToStringPropPipe implements PipeTransform {
     transform(input: Object, prefix: string) {
        let suffixes = ["Base64Binary", "Boolean", "Canonical", "Code", "Date", "DateTime", "Decimal", "Id",
        "Instant", "Integer", "Markdown", "Oid", "PositiveInt", "String", "Time", "UnsignedInt", "Uri", "Url", "Uuid",
        "Address", "Age", "Annotation", "Attachment", "CodeableConcept", "Coding", "ContactPoint", "Count", "Distance", "Duration", "HumanName", 
        "Identifier", "Money", "Period", "Quantity", "Range", "Ratio", "Reference", "SampledData", "Signature", "Timing", "ContactDetail", 
        "Contributor", "DataRequirement", "Expression", "ParameterDefinition", "RelatedArtifact", "TriggerDefinition", "UsageContext", "Dosage", "Meta"];
        let finalValue = undefined, finalType = '';
        suffixes.forEach(s => {
            let thisVal = Object.entries(input).find(e => e[0] === prefix+s);
            if (thisVal != undefined) {
                finalValue = thisVal[1];
                finalType = s;
            }
        })
        if (finalValue == undefined) return 'Unknown';
        if (!Object.keys(BasicTypesRosettaStone).includes(finalType)) {
            finalType = finalType[0].toLowerCase()+finalType.slice(1);
            if (!Object.keys(BasicTypesRosettaStone).includes(finalType)) return 'Unknown';
        }
        return BasicTypesRosettaStone[finalType].toString(finalValue);
     }
 }
