import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AbroadInvestmentRelation } from 'app/models/abroadInvestmentRelation';
import { AbroadInvestmentService } from 'app/services/abroad-investment.service';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-abroadinvestment-update',
  templateUrl: './abroadinvestment-update.component.html',
  styleUrls: ['./abroadinvestment-update.component.scss']
})
export class AbroadinvestmentUpdateComponent implements OnInit {
  abroadInvesments:AbroadInvestmentRelation[]=[];
  abroadInvestment:AbroadInvestmentRelation;
  abroadInvesmentUpdateForm:any;
  dataLoaded=false;
  isAbroadInvestmentLoad=false;
  
  constructor(private abroadInvesmtentService:AbroadInvestmentService,private formBuilder:FormBuilder,private toastrService:ToastrService,  private activedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getByAbroadInvestmentRelation(params["id"])
      }else{
        this.getAbroadInvestments()
      }
     });
    this.createAbroadInvestmentUpdateForm();
  }
  createAbroadInvestmentUpdateForm(){
    this. abroadInvesmentUpdateForm=this.formBuilder.group({
      id:[this.abroadInvestment.id],
      abroadInvestorName:[this.abroadInvestment.abroadInvestorName],
      abroadInvestorSurname:[this.abroadInvestment.abroadInvestorSurname],
      phoneNumber:[this.abroadInvestment.phoneNumber],
      email:[this.abroadInvestment.email],
      adress:[this.abroadInvestment.adress],
      company:[this.abroadInvestment.company],
      position:[this.abroadInvestment.position],
      note:[this.abroadInvestment.note],
      dateOfUpload:[this.abroadInvestment.dateOfUpload],
      country:[this.abroadInvestment.country],

    })} 
  getAbroadInvestments() {
    this.abroadInvesmtentService
      .getAbroadInvestments()
      .subscribe((response) => {
        this.abroadInvesments = response.data;
        this.dataLoaded = true;
      });
  }
  getByAbroadInvestmentRelation
  (Id:string) {
    this.abroadInvesmtentService.getByAbroadInvestmentRelation(Id).subscribe(response=>{
      this.abroadInvestment = response.data
      this.createAbroadInvestmentUpdateForm()
      this.isAbroadInvestmentLoad = true;
    })  
     
  }

    updateAbroadInvestment(abroadInvesments:AbroadInvestmentRelation){
        
      if(this.abroadInvesmentUpdateForm.valid){
        let abroadInvestmentModel=Object.assign({},this.abroadInvesmentUpdateForm.value)
        this.abroadInvesmtentService.updateAbroadInvestment(abroadInvestmentModel).subscribe(response=>{

          this.toastrService.success(response.message);
        })
        }
      else {
       this.toastrService.error('Update Error');
       
     }};
  
}
