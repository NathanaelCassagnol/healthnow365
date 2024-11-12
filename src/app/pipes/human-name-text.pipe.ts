import { Pipe, PipeTransform } from "@angular/core";
import { HumanName } from "fhir/R4/types/_basic-types";
import { humanNameToString } from "fhir/R4/utilities/validators-tostring.util";

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
            if (validNames.length > 0) return humanNameToString(validNames[0]);
            return humanNameToString(input[0]);
        }
        else {
            return humanNameToString(input);
        }
    }
}