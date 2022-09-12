import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abdroadinvestment'
})
export class AbdroadinvestmentPipe implements PipeTransform {

 /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param value list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(value: any[], searchText: string): any[] {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLocaleLowerCase();
  
    return value.filter(it => {
      console.log(it)
      return it.abroadInvestorName.toLocaleLowerCase().indexOf(searchText) > -1 || it.abroadInvestorSurname .toLocaleLowerCase().indexOf(searchText) > -1 || it.phoneNumber.toLocaleLowerCase().indexOf(searchText) > -1 || it.email.toLocaleLowerCase().indexOf(searchText) > -1|| it.adress.toLocaleLowerCase().indexOf(searchText) > -1
      ||it.company.toLocaleLowerCase().indexOf(searchText) || it.position.toLocaleLowerCase().indexOf(searchText) > -1 || it.note.toLocaleLowerCase().indexOf(searchText) > -1 || it.dateOfUpload.toLocaleLowerCase().indexOf(searchText) > -1||it.country.toLocaleLowerCase().indexOf(searchText) > -1
      ;
    });
  }
}