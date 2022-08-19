import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/models/customer';
import { ListResponseModel } from 'app/models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'Customer/getall';
    return this.httpClient.get<ListResponseModel<Customer>>(
      newPath
    );
}


getByCustomer(
  Id: string
): Observable<ListResponseModel<Customer>> {
  let newPath = this.apiUrl + 'Customer/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<Customer>>(
    newPath
  );

}
customerAdd(
  customer: Customer
): Observable<Customer> {
  return this.httpClient.post<Customer>(
    this.apiUrl + 'Customer/Add',
    customer
  );
}
}
