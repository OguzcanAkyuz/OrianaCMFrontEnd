import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { PotentialCustomer } from 'app/models/potentialCustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotentialcustomerService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }
  getPotentialCustomers(): Observable<ListResponseModel<PotentialCustomer>
  > {
    let newPath = this.apiUrl + 'potentialcustomer/getall';
    return this.httpClient.get<ListResponseModel<PotentialCustomer>>(
      this.apiUrl
    );
}
getByPotentialCustomer(
  Id: string
): Observable<ListResponseModel<PotentialCustomer>> {
  let newPath = this.apiUrl + 'potentialcustomer/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<PotentialCustomer>>(
    newPath
  );

}
potentialCustomerAdd(
  potentialCustomer: PotentialCustomer
): Observable<PotentialCustomer> {
  return this.httpClient.post<PotentialCustomer>(
    this.apiUrl + 'potentialcustomer/add',
    potentialCustomer
  );
}
}
