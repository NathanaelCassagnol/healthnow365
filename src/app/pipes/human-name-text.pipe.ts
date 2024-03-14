import { Pipe, PipeTransform } from "@angular/core";
import { HumanName } from "fhir/R4/types/_basic-types";

@Pipe({
   name: "HumanNameText",
   standalone: true,
})
export class HumanNameTextPipe implements PipeTransform {
    transform(input: HumanName | HumanName[]) {
        if (Array.isArray(input)) {
            // Find best name
            let notOld = (n: HumanName) => n.use != 'old';
            let validPeriod = (n: HumanName) => true;
            let validNames = input.filter(n => notOld(n) && validPeriod(n));
            // Return it
            if (validNames.length > 0) return this.getNameText(validNames[0]);
            return this.getNameText(input[0]);
        }
        else {
            return this.getNameText(input);
        }
    }

    getNameText(name: HumanName) {
        if (name.text) return name.text;
        let constructedName = [];
        if (name.prefix && name.prefix.length > 0) constructedName.push(...name.prefix);
        if (name.given && name.given.length > 0) constructedName.push(name.given[0]);
        if (name.family) constructedName.push(name.family);
        if (name.suffix && name.suffix.length > 0) constructedName.push(...name.suffix);
        return constructedName.join(" ");
    }
}