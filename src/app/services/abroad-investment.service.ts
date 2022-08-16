import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { AbroadInvestmentRelation} from '../models/abroadInvestmentRelation';

@Injectable({
    providedIn:'root'
})

export class AbroadInvestmentService {

    apiUrl='https://localhost:44300/api/AbroadInvestmentRelation/getall';

    constructor(private httpClient: HttpClient) { }

    getAbroadInvestments():Observable<ListResponseModel<AbroadInvestmentRelation>> {
        return this.httpClient.get<ListResponseModel<AbroadInvestmentRelation>>(this.apiUrl);
    }
}