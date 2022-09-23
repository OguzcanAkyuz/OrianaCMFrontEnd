import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { Product } from 'app/models/product';
import { ResponseModel } from 'app/models/responseModel';
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
  let newPath = this.apiUrl + 'Product/getbyid?productId=' + Id;
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
deleteProduct (Id:string):Observable<ResponseModel>{
  
  return this.httpClient.get<ResponseModel>(
     this.apiUrl+'Product/delete?productId='+Id

  )
}

updateProduct
 (product:Product):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(
    this.apiUrl + 'Product/update',product
    )
}
}
