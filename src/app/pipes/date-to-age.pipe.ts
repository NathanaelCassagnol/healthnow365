import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: "DateToAgePipe",
   standalone: true,
})
export class DateToAgePipe implements PipeTransform {
    transform(input: string) {
        var ageDifMs = Date.now().valueOf() - new Date(input).valueOf();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970) + ' years';
    }
}