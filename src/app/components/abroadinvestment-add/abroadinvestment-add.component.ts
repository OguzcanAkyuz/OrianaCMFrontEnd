import { Component, OnInit } from '@angular/core';
import { AbroadInvestmentRelation } from 'app/models/abroadInvestmentRelation';
import { AbroadInvestmentService } from 'app/services/abroad-investment.service';

@Component({
  selector: 'app-abroadinvestment-add',
  templateUrl: './abroadinvestment-add.component.html',
  styleUrls: ['./abroadinvestment-add.component.scss']
})

export class AbroadinvestmentAddComponent implements OnInit {
  abroadInvesment:AbroadInvestmentRelation[]=[];
  
  currentAbroadInvesmtent:AbroadInvestmentRelation;
  constructor(private abroadInvesmtentService:AbroadInvestmentService) { }

  ngOnInit(): void {
    this.getAbroadInvestment();
  }

  getAbroadInvestment(){
    this.abroadInvesmtentService.getAbroadInvestments().subscribe(response=>{
      this.abroadInvesment=response.data
    })
    
  }

}
