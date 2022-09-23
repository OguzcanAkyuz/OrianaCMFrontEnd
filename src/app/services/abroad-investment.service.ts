import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { AbroadInvestmentRelation } from '../models/abroadInvestmentRelation';
import { ResponseModel } from 'app/models/responseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AbroadInvestmentService {
  apiUrl = 'https://localhost:44300/api/';

  constructor(private httpClient: HttpClient) {}

  getAbroadInvestments(): Observable<
    ListResponseModel<AbroadInvestmentRelation>
  > {
    let newPath = this.apiUrl + 'AbroadInvestmentRelation/getall';
    return this.httpClient.get<ListResponseModel<AbroadInvestmentRelation>>(
      newPath
    );
  }
  getByAbroadInvestmentRelation(
    Id: string
  ): Observable<SingleResponseModel<AbroadInvestmentRelation>> {
    let newPath = this.apiUrl + 'AbroadInvestmentRelation/getbyid?abroadInvestmentId=' + Id;
    return this.httpClient.get<SingleResponseModel<AbroadInvestmentRelation>>(
      newPath
    );
  }

  abroadInvestmentAdd(
    abroadInvestmentRelation: AbroadInvestmentRelation
  ): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'AbroadInvestmentRelation/Add',
      abroadInvestmentRelation
    );
  }
  updateAbroadInvestment
  (abroadInvesment:AbroadInvestmentRelation):Observable<ResponseModel>{
   return this.httpClient.post<ResponseModel>(
     this.apiUrl + 'AbroadInvestmentRelation/update',abroadInvesment
     )
 }
 deleteAbroadInvestment (Id:string):Observable<ResponseModel>{
  
  return this.httpClient.get<ResponseModel>(
     this.apiUrl+'AbroadInvestmentRelation/delete?abroadInvestmentRelationId='+Id

  )
}
}
