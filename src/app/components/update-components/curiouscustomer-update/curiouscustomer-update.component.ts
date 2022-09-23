import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CuriousCustomer } from 'app/models/curiousCustomer';
import { CuriousCustomerService } from 'app/services/curiouscustomer.service';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-curiouscustomer-update',
  templateUrl: './curiouscustomer-update.component.html',
  styleUrls: ['./curiouscustomer-update.component.scss']
})
export class CuriouscustomerUpdateComponent implements OnInit {
  curiousCustomers:CuriousCustomer[]=[];
  curiousCustomer:CuriousCustomer;
  curiousCustomerUpdateForm:any;
  reactiveForm:ReactiveFormsModule;
  dataLoaded=false;
  isCuriousCustomerLoad=false;
  constructor(private curiousCustomerService:CuriousCustomerService,private formBuilder:FormBuilder,private toastrService:ToastrService,  private activedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getByCuriousCustomer(params["id"])
      }else{
        this.getCuriousCustomers()
      }
     });
    this.createCuriousCustomerUpdateForm();
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
      this.createCuriousCustomerUpdateForm();
      this.isCuriousCustomerLoad = true;
    })   
  }
  createCuriousCustomerUpdateForm(){
    this.curiousCustomerUpdateForm=this.formBuilder.group({
      id:[this.curiousCustomer.id],
      curiousCustomerName:[this.curiousCustomer.curiousCustomerName],
      curiousCustomerSurname:[this.curiousCustomer.curiousCustomerSurname],
      phoneNumber:[this.curiousCustomer.phoneNumber],
      email:[this.curiousCustomer.email],
      adress:[this.curiousCustomer.adress],
      company:[this.curiousCustomer.company],
      position:[this.curiousCustomer.position],
      note:[this.curiousCustomer.note],
      dateOfUpload:[this.curiousCustomer.dateOfUpload]

      


    })
  }

  updateCuriousCustomer(curiousCustomer:CuriousCustomer) {
      if(this.curiousCustomerUpdateForm.valid){
       let curiousCustomerModel= Object.assign({},this.curiousCustomerUpdateForm.value)
        this.curiousCustomerService.updateCuriousCustomer(curiousCustomerModel).subscribe(response=>{
          this.toastrService.success(response.message)
        })
      
      }else{
        this.toastrService.error('Error')
      }

 
    
  }
 
}
