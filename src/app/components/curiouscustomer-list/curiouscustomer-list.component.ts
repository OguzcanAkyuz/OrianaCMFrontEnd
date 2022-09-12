import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuriousCustomer } from 'app/models/curiousCustomer';
import { CuriousCustomerService } from 'app/services/curiouscustomer.service';

@Component({
  selector: 'app-curiouscustomer-list',
  templateUrl: './curiouscustomer-list.component.html',
  styleUrls: ['./curiouscustomer-list.component.scss']
})
export class CuriouscustomerListComponent implements OnInit {
title='angular-text-search-highlight';
searchText="";
characters:CuriousCustomer[];
curiousCustomers:CuriousCustomer[]=[];
dataLoaded=false;

  constructor(private curiousCustomerService:CuriousCustomerService,
  private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByCuriousCustomer(params["Id"])
      }else{
        this.getCuriousCustomers()
      }

  })
  }

getCuriousCustomers(){
  this.curiousCustomerService.getCuriousCustomers().subscribe(response=>{
    this.curiousCustomers = response.data
    this.dataLoaded = true;
})
}
getByCuriousCustomer(Id:string) {
  this.curiousCustomerService.getByCuriousCustomer(Id).subscribe(response=>{
    this.curiousCustomers = response.data
    this.dataLoaded = true;
  })   

}
  }
