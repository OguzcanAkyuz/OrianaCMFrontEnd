import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
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
    let newPath = this.apiUrl + 'scheduledmeeting/getall';
    return this.httpClient.get<ListResponseModel<ScheduledMeeting>>(
      this.apiUrl
    );

  }
  getByScheduledMeeting(
    Id: string
  ): Observable<ListResponseModel<ScheduledMeeting>> {
    let newPath = this.apiUrl + 'scheduledmeeting/getbyid=' + Id;
    return this.httpClient.get<ListResponseModel<ScheduledMeeting>>(
      newPath
    );
  
  }
  scheduledMeetingAdd(
    scheduledMeeting: ScheduledMeeting
  ): Observable<ScheduledMeeting> {
    return this.httpClient.post<ScheduledMeeting>(
      this.apiUrl + 'scheduledmeeting/add',
      scheduledMeeting
    );
  }
}
