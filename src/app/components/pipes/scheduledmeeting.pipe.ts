import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scheduledmeeting'
})
export class ScheduledmeetingPipe implements PipeTransform {

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
    return it.id.toLocaleLowerCase().indexOf(searchText) > -1 || it.customerInformation .toLocaleLowerCase().indexOf(searchText) > -1 || it.meetingSubject .toLocaleLowerCase().indexOf(searchText) > -1 
    || it.meetingResult.toLocaleLowerCase().indexOf(searchText) > -1  || it.meetingTitle .toLocaleLowerCase().indexOf(searchText) > -1 || it.meetingDate.toLocaleLowerCase().indexOf(searchText) > -1 || it.companyName
    .toLocaleLowerCase().indexOf(searchText) > -1 || it.companyAdress.toLocaleLowerCase().indexOf(searchText) > -1 || it.companyBusinessArea.toLocaleLowerCase().indexOf(searchText) > -1 || it.companyWebAdress.toLocaleLowerCase().indexOf(searchText) > -1 
    || it.executiveName.toLocaleLowerCase().indexOf(searchText) > -1 || it.executivePhoneNumber.toLocaleLowerCase().indexOf(searchText) > -1 || it.executiveEmail.toLocaleLowerCase().indexOf(searchText) > -1
    
    ;
  });
}
}
