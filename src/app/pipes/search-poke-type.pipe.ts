import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPokeType'
})
export class SearchPokeTypePipe implements PipeTransform {
  transform(value: any, searchText?: any): any {
    if (!value) {
      return;
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();

    return value.filter(item => {
      console.log(item);
      
      let matchFound = false;

      if (item.name) {
        const type = item.type;

        const searchType = JSON.stringify(type).toLowerCase().includes(searchText);

        

        if (searchType) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }
}