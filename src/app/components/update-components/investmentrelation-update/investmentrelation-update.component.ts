import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InvestorRelation } from 'app/models/investorRelation';
import { InvestmentrelationService } from 'app/services/investmentrelation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-investmentrelation-update',
  templateUrl: './investmentrelation-update.component.html',
  styleUrls: ['./investmentrelation-update.component.scss']
})
export class InvestmentrelationUpdateComponent implements OnInit {
  investorRelations:InvestorRelation[]=[];
  investorRelationUpdateForm:any;
  reactiveForm:ReactiveFormsModule;
  dataLoaded=false;
  isInvestorRelationLoad=false;
  investorRelation:InvestorRelation;
  constructor(private investorRelationService:InvestmentrelationService,private formBuilder:FormBuilder,private toastrService:ToastrService, private activedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getByInvestmentRelation(params["id"])
      }else{
        this.getInvestmentRelations()
      }
     });
    this.createInvestorRelationAddForm();
  }

  createInvestorRelationAddForm(){
    this.investorRelationUpdateForm=this.formBuilder.group({
      id:[this.investorRelation.id],
      investorName:[this.investorRelation.investorName],
      investorSurname:[this.investorRelation.investorSurname],
      phoneNumber:[this.investorRelation.phoneNumber],
      email:[this.investorRelation.email],
      adress:[this.investorRelation.adress],
      company:[this.investorRelation.company],
      position:[this.investorRelation.position],
      note:[this.investorRelation.note],
      dateOfUpload:[this.investorRelation.dateOfUpload],
    })
  
  }
  getInvestmentRelations(){
    this.investorRelationService.getInvestmentRelations().subscribe(response=>{
      this.investorRelations = response.data;
      this.dataLoaded = true;
    })   
  }
  getByInvestmentRelation(Id:string) {
    this.investorRelationService.getByInvestmentRelation(Id).subscribe(response=>{
      this.investorRelation = response.data
      this.createInvestorRelationAddForm();
      this.isInvestorRelationLoad = true;
    })   
  }
  updateInvestmentRelation(investmentrelation:InvestorRelation) {
    
      if(this.investorRelationUpdateForm.valid){
       let investmentRelationModel= Object.assign({},this.investorRelationUpdateForm.value)
       this.investorRelationService .updateInvestmentRelation(investmentRelationModel).subscribe(response=>{

        this.toastrService.success(response.message)
     
      })}
    
  }
}
