import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { RoutineService } from 'app/models/routineService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutineserviceService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }
  getRoutineServices(): Observable<ListResponseModel<RoutineService>
  > {
    let newPath = this.apiUrl + 'RoutineService/getall';
    return this.httpClient.get<ListResponseModel<RoutineService>>(
      newPath
    );
  }
  getByRoutineService(
    Id: string
  ): Observable<ListResponseModel<RoutineService>> {
    let newPath = this.apiUrl + 'RoutineService/getbyid=' + Id;
    return this.httpClient.get<ListResponseModel<RoutineService>>(
      newPath
    );
  
  }
  routineServiceAdd(
    routineService: RoutineService
  ): Observable<RoutineService> {
    return this.httpClient.post<RoutineService>(
      this.apiUrl + 'RoutineService/add',
      routineService
    );
  }
}
