import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { AbroadInvestmentRelation } from '../models/abroadInvestmentRelation';
import { ResponseModel } from 'app/models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class AbroadInvestmentService {
  apiUrl = 'https://localhost:44300/api/';

  constructor(private httpClient: HttpClient) {}

  getAbroadInvestments(): Observable<
    ListResponseModel<AbroadInvestmentRelation>
  > {
    let newPath = this.apiUrl + 'abroadinvestmentrelation/getall';
    return this.httpClient.get<ListResponseModel<AbroadInvestmentRelation>>(
      this.apiUrl
    );
  }
  getByAbroadInvestmentRelation(
    Id: string
  ): Observable<ListResponseModel<AbroadInvestmentRelation>> {
    let newPath = this.apiUrl + 'abroadinvestmentrelation/getbyid=' + Id;
    return this.httpClient.get<ListResponseModel<AbroadInvestmentRelation>>(
      newPath
    );
  }

  abroadInvestmentAdd(
    abroadInvestmentRelation: AbroadInvestmentRelation
  ): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'AbroadInvestmentRelation/add',
      abroadInvestmentRelation
    );
  }
}
