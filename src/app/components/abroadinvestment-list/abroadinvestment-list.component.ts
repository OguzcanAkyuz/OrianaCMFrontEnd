import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbroadInvestmentRelation } from 'app/models/abroadInvestmentRelation';
import { AbroadInvestmentService } from 'app/services/abroad-investment.service';

@Component({
  selector: 'app-abroadinvestment-list',
  templateUrl: './abroadinvestment-list.component.html',
  styleUrls: ['./abroadinvestment-list.component.scss'],
})
export class AbroadinvestmentListComponent implements OnInit {
  title='angular-text-search-highlight';
  searchText="";
  characters:AbroadInvestmentRelation[];
  abroadInvestments: AbroadInvestmentRelation[] = [];
  dataLoaded = false;

  constructor(
    private abroadInvestmentService: AbroadInvestmentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByAbroadInvestmentRelation(params["Id"])
      } else{
        this.getAbroadInvestments()
      }
    })
  }

  getAbroadInvestments() {
    this.abroadInvestmentService
      .getAbroadInvestments()
      .subscribe((response) => {
        this.abroadInvestments = response.data;
        this.dataLoaded = true;
      });
  }
  getByAbroadInvestmentRelation(Id:string) {
    this.abroadInvestmentService.getByAbroadInvestmentRelation(Id).subscribe(response=>{
      this.abroadInvestments = response.data
      this.dataLoaded = true;
    })   
  }
}
