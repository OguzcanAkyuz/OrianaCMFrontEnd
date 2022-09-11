import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PotentialCustomer } from 'app/models/potentialCustomer';
import { PotentialcustomerService } from 'app/services/potentialcustomer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-potentialcustomer-add',
  templateUrl: './potentialcustomer-add.component.html',
  styleUrls: ['./potentialcustomer-add.component.scss']
})
export class PotentialCustomerAddComponent implements OnInit {
  potentialCustomer:PotentialCustomer[]=[];
  potentialCustomerAddForm:FormGroup;
  reactiveForm:ReactiveFormsModule;
  currentPotentialCustomer:PotentialCustomer;
  
  constructor(private potentialCustomerService:PotentialcustomerService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPotentialCustomerAddForm();
    
  }
  createPotentialCustomerAddForm(){
    this.potentialCustomerAddForm=this.formBuilder.group({
      id:[""],
      potentialCustomerName:["",Validators.required],
      potentialCustomerSurname:["",Validators.required],
      phoneNumber:["",Validators.required],
      email:["",Validators.required],
      adress:["",Validators.required],
      company:["",Validators.required],
      position:["",Validators.required],
      note:["",Validators.required],
      dateOfUpload:["",Validators.required],
    })
  }
  potentialCustomerAdd(){
    if(this.potentialCustomerAddForm.valid){
      let potentialCustomerModel=Object.assign({},this.potentialCustomerAddForm.value)
      this.potentialCustomerService.potentialCustomerAdd(potentialCustomerModel).subscribe(response=>{
        this.toastrService.success(response.message,"Added Succes")
      },responseError=>{
        if(responseError.error.Error.lenght>0){
          for (let i = 0; i <responseError.error.Errors.length; i++)
          this.toastrService.error(responseError.error.Error[i].ErrorMessage,"Added Unsuccesful ")
          console.log("succes")
        }
      })
  }else{
      this.toastrService.error("Added Unsuccesful ")
      console.log("hata")
    }

  }
}
