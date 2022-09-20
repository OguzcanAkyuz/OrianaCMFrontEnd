import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/models/customer';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44300/api/';
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'Customer/getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getByCustomer(
    Id: string
    ): Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + 'Customer/getbyid?id=' + Id;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
  
  customerAdd
  (customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'Customer/Add',
      customer
    );
  }
  deleteCustomer (Id:string):Observable<ResponseModel>{
  
    return this.httpClient.get<ResponseModel>(
       this.apiUrl+'Customer/delete?customerId='+Id

    )
  }

  updateCustomer
   (Id:string):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(
      this.apiUrl + 'Customer/update?customerId='+Id
      )
  }
  
}
