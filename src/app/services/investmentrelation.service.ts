import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvestorRelation } from 'app/models/investorRelation';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentrelationService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }

  getInvestmentRelations(): Observable<ListResponseModel<InvestorRelation>
  > {
    let newPath = this.apiUrl + 'InvestmentRelation/getall';
    return this.httpClient.get<ListResponseModel<InvestorRelation>>(
      newPath
    );
}
getByInvestmentRelation(
  Id: string
): Observable<SingleResponseModel<InvestorRelation>> {
  let newPath = this.apiUrl + 'InvestmentRelation/getbyid?%C4%B1nvestmentRelation%C4%B1d=' + Id;
  return this.httpClient.get<SingleResponseModel<InvestorRelation>>(
    newPath
  );

}
investmentRelationAdd(
  ınvestmentrelation: InvestorRelation
): Observable<ResponseModel> {
  return this.httpClient.post<ResponseModel>(
    this.apiUrl + 'InvestmentRelation/Add',
    ınvestmentrelation
  );
}
}
