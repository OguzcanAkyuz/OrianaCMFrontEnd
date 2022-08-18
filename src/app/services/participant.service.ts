import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { Participant } from 'app/models/participant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }

  getParticipants(): Observable<ListResponseModel<Participant>
  > {
    let newPath = this.apiUrl + 'participant/getall';
    return this.httpClient.get<ListResponseModel<Participant>>(
      newPath
    );
}
getByParticipant(
  Id: string
): Observable<ListResponseModel<Participant>> {
  let newPath = this.apiUrl + 'participant/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<Participant>>(
    newPath
  );

}
participantAdd(
  participant: Participant
): Observable<Participant> {
  return this.httpClient.post<Participant>(
    this.apiUrl + 'participant/add',
    participant
  );
}
}
