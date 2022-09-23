
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/models/customer';
import { CustomerService } from 'app/services/customer.service';
import { response } from 'express';
import { data } from 'jquery';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss'],
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  customerUpdateForm: any;
  customers:Customer[]=[];
  isCustomerLoad=false;
  dataLoaded = false;
  
  constructor(
    private activedRoute:ActivatedRoute,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

   this.activedRoute.params.subscribe(params=>{
    if(params["id"]){
      this.getByCustomer(params["id"])
    }else{
      this.getCustomers()
    }
   });
  
  }
  customerUpdateForms() {
    this.customerUpdateForm = this.formBuilder.group({
      id: [this.customer.id],
      productId: [this.customer.productId],
      purchaseDate: [this.customer.purchaseDate],
      licenseTerm: [this.customer.licenseTerm],
      lisenceEndDate: [this.customer.lisenceEndDate],
      purchasePrice: [this.customer.purchasePrice],
      customerNote: [this.customer.customerNote],
      productVersion: [this.customer.productVersion],
      customerCompanyName: [this.customer.customerCompanyName],
      customerCompanyAdress: [this.customer.customerCompanyAdress],
      companyBusinessArea: [this.customer.companyBusinessArea],
      companyWebAdress: [this.customer.companyWebAdress],
      executiveName: [this.customer.executiveName],
      executiveSurname: [this.customer.executiveSurname],
      executivePhoneNumber: [this.customer.executivePhoneNumber],
      executiveEmail: [this.customer.executiveEmail],
    });
  }
  getByCustomer(Id:string) {

    this.customerService.getByCustomer(Id).subscribe(response=>{
      this.customer = response.data
      console.log(this.customer)
      this.customerUpdateForms();
      this.isCustomerLoad = true;
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
  updateCustomer(customer:Customer) { 
      if(this.customerUpdateForm.valid){
       let customerModel= Object.assign({},this.customerUpdateForm.value)
       this.customerService.updateCustomer(customerModel).subscribe(response=>{
        this.toastrService.success(response.message)
       })
     
    
      }else{
        this.toastrService.error("Güncellenemedi")
      }

    
    
  }
}

