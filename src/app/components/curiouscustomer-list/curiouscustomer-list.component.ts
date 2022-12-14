import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuriousCustomer } from 'app/models/curiousCustomer';
import { CuriousCustomerService } from 'app/services/curiouscustomer.service';
import { ToastrService } from 'ngx-toastr';

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
curiousCustomer:CuriousCustomer
isCuriousCustomerLoad=false
dataLoaded=false;

  constructor(private curiousCustomerService:CuriousCustomerService,
  private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

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
    this.curiousCustomer = response.data
    console.log(response)
    this.isCuriousCustomerLoad = true;
  })   

}
deleteCuriousCustomer(Id:string){
  this.curiousCustomerService.deleteCuriousCustomer(Id).subscribe(response=>{
    if(response.success){
      this.toastrService.success(response.message)
      this.getCuriousCustomers()
    }
  }) 
}
  }
