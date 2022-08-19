import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuriousCustomer } from 'app/models/curiousCustomer';
import { CuriousCustomerService } from 'app/services/curiouscustomer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-curiouscustomer-add',
  templateUrl: './curiouscustomer-add.component.html',
  styleUrls: ['./curiouscustomer-add.component.scss']
})
export class CuriouscustomerAddComponent implements OnInit {
curiousCustomer:CuriousCustomer[]=[];
curiousCustomerAddForm:FormGroup;
reactiveForm:ReactiveFormsModule;
currentCuriousCustomer:CuriousCustomer;
  constructor(private curiousCustomerService:CuriousCustomerService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCuriousCustomerAddForm();
  }
  createCuriousCustomerAddForm(){
    this.curiousCustomerAddForm=this.formBuilder.group({
      id:[""],
      curiousCustomerName:["",Validators.required],
      curiousCustomerSurname:["",Validators.required],
      phoneNumber:["",Validators.required],
      email:["",Validators.required],
      adress:["",Validators.required],
      company:["",Validators.required],
      position:["",Validators.required],
      note:["",Validators.required],
      dateOfUpload:["",Validators.required]

      


    })
  }

  curiousCustomerAdd(){
    if(this.curiousCustomerAddForm.valid){
      let curiousCustomerModel=Object.assign({},this.curiousCustomerAddForm.value)
      this.curiousCustomerService.curiousCustomerAdd(curiousCustomerModel).subscribe(response=>{
        this.toastrService.success(response.message,"Succes")
      },responseError=>{
        if(responseError.error.Error.lenght>0){
          for (let i = 0; i <responseError.error.Errors.length; i++)
          this.toastrService.error(responseError.error.Error[i].ErrorMessage,"ErrorResult")
          console.log("succes")
        }
      })
  }else{
      this.toastrService.error("ErrorResult2")
      console.log("hata")
    }
  }


}
