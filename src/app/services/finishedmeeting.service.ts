import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinishedMeeting } from 'app/models/finishedMeeting';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
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
): Observable<SingleResponseModel<FinishedMeeting>> {
  let newPath = this.apiUrl + 'FinishedMeeting/getbyid?finishedMeetingId=' + Id;
  return this.httpClient.get<SingleResponseModel<FinishedMeeting>>(
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
deleteFinishedMeeting (Id:string):Observable<ResponseModel>{
  
  return this.httpClient.get<ResponseModel>(
     this.apiUrl+'FinishedMeeting/delete?finishedMeetingId='+Id

  )
}

updateFinishedMeeting
 (finishedMeeting:FinishedMeeting):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(
    this.apiUrl + 'FinishedMeeting/update',finishedMeeting
    )
}
}
