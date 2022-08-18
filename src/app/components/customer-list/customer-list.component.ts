import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/models/customer';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
customers:Customer[]=[];
dataLoaded = false;
  constructor(private customerService:CustomerService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService
    .getCustomers()
    .subscribe(response=>{
   
      this.customers = response.data
      this.dataLoaded = true;

    })   
  } 
  
  
}


