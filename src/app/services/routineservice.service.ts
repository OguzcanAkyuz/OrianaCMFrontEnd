import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { RoutineService } from 'app/models/routineService';
import { SingleResponseModel } from 'app/models/singleResponseModel';
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
  ): Observable<SingleResponseModel<RoutineService>> {
    let newPath = this.apiUrl + 'RoutineService/getbyid?routineServiceId=' + Id;
    return this.httpClient.get<SingleResponseModel<RoutineService>>(
      newPath
    );
  
  }
  routineServiceAdd(
    routineService: RoutineService
  ): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'RoutineService/Add',
      routineService
    );
  }
  deleteRoutineService (Id:string):Observable<ResponseModel>{
  
    return this.httpClient.get<ResponseModel>(
       this.apiUrl+'RoutineService/delete?routineServiceId='+Id

    )
  }

  updateRoutineService
   (routineService:RoutineService):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'RoutineService/update',routineService
      )
  }
}
