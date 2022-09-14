import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuriousCustomer } from 'app/models/curiousCustomer';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CuriousCustomerService {
 
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }

  getCuriousCustomers(): Observable<ListResponseModel<CuriousCustomer>
> {
  let newPath = this.apiUrl + 'CuriousCustomer/getall';
  return this.httpClient.get<ListResponseModel<CuriousCustomer>>(
    newPath
  );
}
getByCuriousCustomer(
  Id: string
): Observable<SingleResponseModel<CuriousCustomer>> {
  let newPath = this.apiUrl + 'CuriousCustomer/getbyid?curiousCustomerId=' + Id;
  return this.httpClient.get<SingleResponseModel<CuriousCustomer>>(
    newPath
  );
  
}
curiousCustomerAdd(
  curiousCustomer: CuriousCustomer
): Observable<ResponseModel> {
  return this.httpClient.post<ResponseModel>(
    this.apiUrl + 'CuriousCustomer/Add',
    curiousCustomer
  );
}
}
