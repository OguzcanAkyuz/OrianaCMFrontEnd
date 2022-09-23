import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestorRelation } from 'app/models/investorRelation';
import { InvestmentrelationService } from 'app/services/investmentrelation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-investorrelation-list',
  templateUrl: './investorrelation-list.component.html',
  styleUrls: ['./investorrelation-list.component.scss']
})
export class InvestorrelationListComponent implements OnInit {
  title='angular-text-search-highlight';
  searchText="";
  characters:InvestorRelation[];
invesmentRelations:InvestorRelation[]=[];
dataLoaded = false;
isInvestorRelationLoad=false
investmentRelation:InvestorRelation

  constructor( private activatedRoute:ActivatedRoute,
    private invesmentRelationService:InvestmentrelationService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByInvestmentRelation(params["Id"])
      }else{
        this.getInvestmentRelations()
      }
    })
  }

getInvestmentRelations(){
  this.invesmentRelationService.getInvestmentRelations().subscribe(response=>{
    this.invesmentRelations = response.data;
    this.dataLoaded = true;
  })   
}
getByInvestmentRelation(Id:string) {
  this.invesmentRelationService.getByInvestmentRelation(Id).subscribe(response=>{
    this.investmentRelation = response.data
    this.isInvestorRelationLoad = true;
  })   
}
deleteInvestmentRelation(Id:string){
  this.invesmentRelationService.deleteInvestmentRelation(Id).subscribe(response=>{
    if(response.success){
      this.toastrService.success(response.message)
      this.getInvestmentRelations()
    }
  }) 
}
}
