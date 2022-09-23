import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { SingleResponseModel } from 'app/models/singleResponseModel';
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
  ): Observable<SingleResponseModel<ScheduledMeeting>> {
    let newPath = this.apiUrl + 'ScheduledMeeting/getbyid?scheduledMeetingId=' + Id;
    return this.httpClient.get<SingleResponseModel<ScheduledMeeting>>(
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
  deleteScheduledMeeting (Id:string):Observable<ResponseModel>{
  
    return this.httpClient.get<ResponseModel>(
       this.apiUrl+'ScheduledMeeting/delete?scheduledMeetingId='+Id

    )
  }

  updateScheduledMeeting
   (scheduledMeeting:ScheduledMeeting):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'ScheduledMeeting/update',scheduledMeeting
      )
  }
}
