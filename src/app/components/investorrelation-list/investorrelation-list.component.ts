import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestorRelation } from 'app/models/investorRelation';
import { InvestmentrelationService } from 'app/services/investmentrelation.service';

@Component({
  selector: 'app-investorrelation-list',
  templateUrl: './investorrelation-list.component.html',
  styleUrls: ['./investorrelation-list.component.scss']
})
export class InvestorrelationListComponent implements OnInit {
invesmentRelations:InvestorRelation[]=[];
dataLoaded = false;

  constructor( private activatedRoute:ActivatedRoute,
    private invesmentRelationService:InvestmentrelationService,) { }

  ngOnInit(): void {
this.getInvestmentRelations();
  }

getInvestmentRelations(){
  this.invesmentRelationService.getInvestmentRelations().subscribe(response=>{
    this.invesmentRelations = response.data;
    this.dataLoaded = true;
  })   
}
}
