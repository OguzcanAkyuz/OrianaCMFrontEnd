import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginModel } from 'app/models/loginModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { TokenModel } from 'app/models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44300/api/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"Auth/login",loginModel)
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
