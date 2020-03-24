import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  actualItems: any[];

  transform(items: any[], order: string): any {
    if (!items) {
      return items;
    }

    if (items !== this.actualItems) {
      this.actualItems = items;
    }

    if (order === 'desc') {
      items.sort((a, b) => (a.price > b.price) ? -1 : 1)
      items.sort((a, b) => (a.id > b.id) ? -1 : 1)
    } else {
      items.sort((a, b) => (a.price < b.price) ? 1 : -1)
      items.sort((a, b) => (a.id < b.id) ? 1 : -1)
    }
    return items;
  }
}