import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbroadInvestmentRelation } from 'app/models/abroadInvestmentRelation';
import { AbroadInvestmentService } from 'app/services/abroad-investment.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-abroadinvestment-add',
  templateUrl: './abroadinvestment-add.component.html',
  styleUrls: ['./abroadinvestment-add.component.scss']
})

export class AbroadinvestmentAddComponent implements OnInit {
  abroadInvesment:AbroadInvestmentRelation[]=[];
  abroadInvesmentAddForm:FormGroup;
  reactiveForm:ReactiveFormsModule;
  currentAbroadInvesmtent:AbroadInvestmentRelation;
  constructor(private abroadInvesmtentService:AbroadInvestmentService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAbroadInvestmentAddForm();
  }
  createAbroadInvestmentAddForm(){
    this.abroadInvesmentAddForm=this.formBuilder.group({
      id:["",Validators.required],
      abroadInvestorName:["",Validators.required],
      abroadInvestorSurname:["",Validators.required],
      phoneNumber:["",Validators.required],
      email:["",Validators.required],
      adress:["",Validators.required],
      company:["",Validators.required],
      position:["",Validators.required],
      note:["",Validators.required],
      dateOfUpload:["",Validators.required],
      country:["",Validators.required],


      
    })
  

  }
  abroadInvestmentAdd(){
    if(this.abroadInvesmentAddForm.valid){
      let abroadInvestmentModel=Object.assign({},this.abroadInvesmentAddForm.value)
      this.abroadInvesmtentService.abroadInvestmentAdd(abroadInvestmentModel).subscribe(response=>{
        this.toastrService.success(response.message,"Succes")
      },responseError=>{
        if(responseError.error.Error.lenght>0){
          for (let i = 0; i <responseError.error.Errors.length; i++)
          this.toastrService.error(responseError.error.Error[i].ErrorMessage,"ErrorResult")
        }
      })
  }else{
      this.toastrService.error("ErrorResult2")
    }
  }

}


