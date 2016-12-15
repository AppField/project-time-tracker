import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(monthNumber: number): string {

    let userLang = navigator.language;
    let helperDate = new Date();
    helperDate.setMonth(monthNumber);

    return helperDate.toLocaleDateString(userLang, {month: 'long'});
  }

}
