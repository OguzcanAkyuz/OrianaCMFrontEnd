import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledmeetingService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }
  getScheduledMeetings(): Observable<ListResponseModel<ScheduledMeeting>
  > {
    let newPath = this.apiUrl + 'ScheduledMeeting/getall';
    return this.httpClient.get<ListResponseModel<ScheduledMeeting>>(
      newPath
    );

  }
  getByScheduledMeeting(
    Id: string
  ): Observable<ListResponseModel<ScheduledMeeting>> {
    let newPath = this.apiUrl + 'ScheduledMeeting/getbyid=' + Id;
    return this.httpClient.get<ListResponseModel<ScheduledMeeting>>(
      newPath
    );
  
  }
  scheduledMeetingAdd(
    scheduledMeeting: ScheduledMeeting
  ): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'ScheduledMeeting/Add',
      scheduledMeeting
    );
  }
}
