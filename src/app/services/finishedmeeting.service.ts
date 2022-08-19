import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinishedMeeting } from 'app/models/finishedMeeting';
import { ListResponseModel } from 'app/models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinishedmeetingService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }
  
  getFinishedMeetings(): Observable<ListResponseModel<FinishedMeeting>
  > {
    let newPath = this.apiUrl + 'FinishedMeeting/getall';
    return this.httpClient.get<ListResponseModel<FinishedMeeting>>(
      newPath
    );
}
getByFinishedMeeting(
  Id: string
): Observable<ListResponseModel<FinishedMeeting>> {
  let newPath = this.apiUrl + 'FinishedMeeting/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<FinishedMeeting>>(
    newPath
  );

}
finishedMeetingAdd(
  finishedMeeting: FinishedMeeting
): Observable<FinishedMeeting> {
  return this.httpClient.post<FinishedMeeting>(
    this.apiUrl + 'FinishedMeeting/add',
    finishedMeeting
  );
}
}
