import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvestorRelation } from 'app/models/investorRelation';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentrelationService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }

  getInvestmentRelations(): Observable<ListResponseModel<InvestorRelation>
  > {
    let newPath = this.apiUrl + 'ınvestmentrelation/getall';
    return this.httpClient.get<ListResponseModel<InvestorRelation>>(
      this.apiUrl
    );
}
getByInvestmentRelation(
  Id: string
): Observable<ListResponseModel<InvestorRelation>> {
  let newPath = this.apiUrl + 'ınvestmentrelation/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<InvestorRelation>>(
    newPath
  );

}
ınvestmentRelationAdd(
  ınvestmentrelation: InvestmentrelationService
): Observable<ResponseModel> {
  return this.httpClient.post<ResponseModel>(
    this.apiUrl + 'ınvestmentrelation/add',
    ınvestmentrelation
  );
}
}
