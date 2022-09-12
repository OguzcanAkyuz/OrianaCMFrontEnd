import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routineservice'
})
export class RoutineservicePipe implements PipeTransform {
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
    return it.id.toLocaleLowerCase().indexOf(searchText) > -1 || it.customerName .toLocaleLowerCase().indexOf(searchText) > -1 || it.routineServiceDescription .toLocaleLowerCase().indexOf(searchText) > -1 
    || it.routineServiceDate.toLocaleLowerCase().indexOf(searchText) > -1  || it.routineServiceTime .toLocaleLowerCase().indexOf(searchText) > -1 || it.officer.toLocaleLowerCase().indexOf(searchText) > -1 || it.productId
    .toLocaleLowerCase().indexOf(searchText) > -1 || it.personSurname.toLocaleLowerCase().indexOf(searchText) > -1 
    
    
    ;
  });
}
}
