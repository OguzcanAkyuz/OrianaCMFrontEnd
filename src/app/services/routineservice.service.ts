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
  getRoutineSerivces(): Observable<ListResponseModel<RoutineService>
  > {
    let newPath = this.apiUrl + 'routineservice/getall';
    return this.httpClient.get<ListResponseModel<RoutineService>>(
      this.apiUrl
    );
  }
  getByRoutineService(
    Id: string
  ): Observable<ListResponseModel<RoutineService>> {
    let newPath = this.apiUrl + 'routineservice/getbyid=' + Id;
    return this.httpClient.get<ListResponseModel<RoutineService>>(
      newPath
    );
  
  }
  productAdd(
    routineService: RoutineService
  ): Observable<RoutineService> {
    return this.httpClient.post<RoutineService>(
      this.apiUrl + 'routineservice/add',
      routineService
    );
  }
}
