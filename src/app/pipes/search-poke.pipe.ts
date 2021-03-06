import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPoke'
})
export class SearchPipe implements PipeTransform {
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
        const name = item.name;

        const searchName = JSON.stringify(name).toLowerCase().includes(searchText);

        

        if (searchName) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }
}