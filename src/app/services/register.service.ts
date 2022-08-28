import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from 'app/models/register';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { TokenModel } from 'app/models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }
  register(registerModel:Register){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"Auth/register",registerModel)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
