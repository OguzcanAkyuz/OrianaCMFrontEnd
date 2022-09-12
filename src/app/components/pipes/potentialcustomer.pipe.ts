import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potentialcustomer'
})
export class PotentialcustomerPipe implements PipeTransform {

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
    return it.id.toLocaleLowerCase().indexOf(searchText) > -1 || it.potentialCustomerName .toLocaleLowerCase().indexOf(searchText) > -1 || it.potentialCustomerSurname .toLocaleLowerCase().indexOf(searchText) > -1 
    || it.phoneNumber.toLocaleLowerCase().indexOf(searchText) > -1  || it.email .toLocaleLowerCase().indexOf(searchText) > -1 || it.adress.toLocaleLowerCase().indexOf(searchText) > -1 || it.company
    .toLocaleLowerCase().indexOf(searchText) > -1 || it.position.toLocaleLowerCase().indexOf(searchText) > -1 || it.note.toLocaleLowerCase().indexOf(searchText) > -1 || it.dateOfUpload.toLocaleLowerCase().indexOf(searchText) > -1 

    
    ;
  });
}
}
