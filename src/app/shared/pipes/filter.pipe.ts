import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(
    items: any[],
    filterItems: {
      gender: string[];
      species: string[];
      origin: string[];
    }[]): any {

    if (!filterItems) return items;

    let genderItems = items.filter(item => filterItems[0].gender.indexOf(item['gender']) > -1);
    let speciesItems = items.filter(item => filterItems[0].species.indexOf(item['species']) > -1);
    let originItems = items.filter(item => filterItems[0].origin.indexOf(item['origin']['name']) > -1);


    let updatedItems1 = [], updatedItems2 = [], finalUpdatedItems = [];
    for (let prop in genderItems) {
      updatedItems1.push(genderItems[prop]);
    }

    for (let prop in speciesItems) {
      for (let p in updatedItems1) {
        if (speciesItems[prop].id == updatedItems1[p].id)
          updatedItems2.push(speciesItems[prop]);
      }
    }

    for (let prop in originItems) {
      for (let p in updatedItems2) {
        if (originItems[prop].id == updatedItems2[p].id)
          finalUpdatedItems.push(originItems[prop]);
      }
    }

    items = finalUpdatedItems;
    return items
  }

}
