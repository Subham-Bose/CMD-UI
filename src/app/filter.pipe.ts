import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: string) {
    if (!items || !value) {
      return items;
    }
    return items.filter(
      (item) =>
        item.Name.toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase()) ||
        item.PhoneNumber.includes(value)
    );
  }
}
