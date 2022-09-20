import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'app/models/customer';
import { CustomerService } from 'app/services/customer.service';
import { response } from 'express';
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
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
   this.customerUpdateForms();
   this.activedRoute.params.subscribe(params=>{
    this.customerService.getByCustomer(params["Id"])
   });
  }
  customerUpdateForms() {
    this.customerUpdateForm = this.formBuilder.group({
      id: [''],
      productId: [''],
      purchaseDate: [''],
      licenseTerm: [''],
      lisenceEndDate: [''],
      purchasePrice: [''],
      customerNote: [''],
      productVersion: [''],
      customerCompanyName: [''],
      customerCompanyAdress: [''],
      companyBusinessArea: [''],
      companyWebAdress: [''],
      executiveName: [''],
      executiveSurname: [''],
      executivePhoneNumber: [''],
      executiveEmail: [''],
    });
  }
    

  updateCustomer(Id:string) {
    this.customerService .updateCustomer(Id).subscribe((response) => {
     if(response.success){
      this.customerService.getByCustomer(Id)
      this.toastrService.success(response.message);

       }
     else {
      this.toastrService.error('Update Error');
      console.log('hata');
    }})};
  }

