import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { Product } from 'app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }
  getProducts(): Observable<ListResponseModel<Product>
  > {
    let newPath = this.apiUrl + 'Product/getall';
    return this.httpClient.get<ListResponseModel<Product>>(
      newPath
    );
}
getByProduct(
  Id: string
): Observable<ListResponseModel<Product>> {
  let newPath = this.apiUrl + 'Product/getbyid=' + Id;
  return this.httpClient.get<ListResponseModel<Product>>(
    newPath
  );

}
productAdd(
  product: Product
): Observable<Product> {
  return this.httpClient.post<Product>(
    this.apiUrl + 'Product/Add',
    product
  );
}
}
