import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/models/customer';
import { CustomerService } from 'app/services/customer.service';
import { response } from 'express';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
title='angular-text-search-highlight';
searchText="";
customer:Customer
isCustomerLoad = false
characters:Customer[];
customers:Customer[]=[];
dataLoaded = false;
  constructor(private customerService:CustomerService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByCustomer(params["Id"])
      }else{
        this.getCustomers()
      }
    })
  }
  getCustomers() {
    this.customerService
    .getCustomers()
    .subscribe(response=>{
   
      this.customers = response.data
      this.dataLoaded = true;

    })   

  } 
  getByCustomer(Id:string) {
    this.customerService.getByCustomer(Id).subscribe(response=>{
      this.customer = response.data
      console.log(response)
      this.isCustomerLoad = true;
    })   
  }
  deleteCustomer(Id:string){
    this.customerService.deleteCustomer(Id).subscribe(response=>{})
  }
  
  
}


