import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date | string, format: string): string {
    const date = typeof value === 'string' ? new Date(value) : value;

    if (isNaN(date.getTime())) {
      return '';
    }

    const datePipe = new DatePipe('en-US');
    const formattedDate: string = datePipe.transform(date, format) || '';

    const dayOfMonth = date.getDate();

    const suffix = this.getDayOfMonthSuffix(dayOfMonth);
    const formattedWithSuffix = formattedDate.replace(dayOfMonth.toString(), dayOfMonth + suffix);

    return formattedWithSuffix;
  }

  private getDayOfMonthSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }

    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}