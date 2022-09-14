import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { PotentialCustomer } from 'app/models/potentialCustomer';
import { ResponseModel } from 'app/models/responseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
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
): Observable<SingleResponseModel<PotentialCustomer>> {
  let newPath = this.apiUrl + 'PotentialCustomer/getbyid?potentialCustomerId' + Id;
  return this.httpClient.get<SingleResponseModel<PotentialCustomer>>(
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
