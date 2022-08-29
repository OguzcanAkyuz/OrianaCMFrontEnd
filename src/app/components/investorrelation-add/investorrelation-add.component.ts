import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvestorRelation } from 'app/models/investorRelation';
import { InvestmentrelationService } from 'app/services/investmentrelation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-investorrelation-add',
  templateUrl: './investorrelation-add.component.html',
  styleUrls: ['./investorrelation-add.component.scss']
})
export class InvestorrelationAddComponent implements OnInit {
  investorRelations:InvestorRelation[]=[];
  investorRelationAddForm:FormGroup;
  reactiveForm:ReactiveFormsModule;
  currentInvestorRelation:InvestorRelation;
  constructor(private investorRelationService:InvestmentrelationService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createInvestorRelationAddForm();
  }

  createInvestorRelationAddForm(){
    this.investorRelationAddForm=this.formBuilder.group({
      id:["",],
      investorName:["",Validators.required],
      investorSurname:["",Validators.required],
      phoneNumber:["",Validators.required],
      email:["",Validators.required],
      adress:["",Validators.required],
      company:["",Validators.required],
      position:["",Validators.required],
      note:["",Validators.required],
      dateOfUpload:["",Validators.required],
    })
  
  }
  investorRelationAdd(){
    if(this.investorRelationAddForm.valid){
      let investorRelationModel=Object.assign({},this.investorRelationAddForm.value)
      this.investorRelationService.investmentRelationAdd(investorRelationModel).subscribe(response=>{
        this.toastrService.success(response.message,"SuccesResult")
      },responseError=>{
        if(responseError.error.Error.lenght>0){
          for (let i = 0; i <responseError.error.Errors.length; i++)
          this.toastrService.error(responseError.error.Error[i].ErrorMessage,"ErrorResult")
          console.log("succes")
        }
      })
  }else{
      this.toastrService.error("ErrorResult")
      console.log("hata")
    }
  }
  }


