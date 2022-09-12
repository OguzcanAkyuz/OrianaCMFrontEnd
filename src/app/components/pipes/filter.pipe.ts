import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

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
    return it.customerCompanyName.toLocaleLowerCase().indexOf(searchText) > -1 || it.companyBusinessArea .toLocaleLowerCase().indexOf(searchText) > -1 || it.purchaseDate .toLocaleLowerCase().indexOf(searchText) > -1 
    || it.licenseTerm.toLocaleLowerCase().indexOf(searchText) > -1  || it.lisenceEndDate .toLocaleLowerCase().indexOf(searchText) > -1 || it.executiveName.toLocaleLowerCase().indexOf(searchText) > -1 || it.executiveSurname
    .toLocaleLowerCase().indexOf(searchText) > -1 || it.executivePhoneNumber.toLocaleLowerCase().indexOf(searchText) > -1 || it.executiveEmail.toLocaleLowerCase().indexOf(searchText) > -1 || it.productVersion.toLocaleLowerCase().indexOf(searchText) > -1 
    || it.productId.toLocaleLowerCase().indexOf(searchText) > -1 || it.companyWebAdress.toLocaleLowerCase().indexOf(searchText) > -1 || it.customerNote.toLocaleLowerCase().indexOf(searchText) > -1|| it.purchasePrice.toLocaleLowerCase().indexOf(searchText) > -1 
    
    ;
  });
}
}
