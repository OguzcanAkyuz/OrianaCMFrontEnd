import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuriousCustomer } from 'app/models/curiousCustomer';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';

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
): Observable<ListResponseModel<CuriousCustomer>> {
  let newPath = this.apiUrl + 'CuriousCustomer/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<CuriousCustomer>>(
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
