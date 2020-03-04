import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  values: string[] = [];
  filterKeys: string[] = [];

  transform(
    items: any[],
    genders: string[], species: string[], origins: string[], key: string): any {

    if (!(genders && species && origins)) {
      return items;
    }

    this.values = [...genders, ...species, ...origins];

    if (this.filterKeys.indexOf(key) === -1) {
      this.filterKeys = [...this.filterKeys, key]
    }
    console.log(this.values);
    console.log(this.filterKeys);
    this.filterKeys.map((i, index) => {
      items = items.filter(item => {
        return this.values.indexOf(item[i]) > -1
      }); 
    });



    // if (genders) {
    //   var items1 = items.filter(item => genders.indexOf(item['gender']) > -1);
    // }
    // if (species) {
    //   var items2 = items.filter(item => species.indexOf(item['species']) > -1);
    // }
    // if (origins) {
    //   var items3 = items.filter(item => origins.indexOf(item['origin']['name']) > -1);
    // }

    console.log(items)
    return items
  }

}
