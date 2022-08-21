import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { PotentialCustomer } from 'app/models/potentialCustomer';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotentialcustomerService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }
  getPotentialCustomers(): Observable<ListResponseModel<PotentialCustomer>
  > {
    let newPath = this.apiUrl + 'PotentialCustomer/getall';
    return this.httpClient.get<ListResponseModel<PotentialCustomer>>(
      newPath
    );
}
getByPotentialCustomer(
  Id: string
): Observable<ListResponseModel<PotentialCustomer>> {
  let newPath = this.apiUrl + 'PotentialCustomer/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<PotentialCustomer>>(
    newPath
  );

}
potentialCustomerAdd(
  potentialCustomer: PotentialCustomer
): Observable<ResponseModel> {
  return this.httpClient.post<ResponseModel>(
    this.apiUrl + 'PotentialCustomer/Add',
    potentialCustomer
  );
}
}
