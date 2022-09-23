import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PotentialCustomer } from 'app/models/potentialCustomer';
import { PotentialcustomerService } from 'app/services/potentialcustomer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-potentialcustomer-update',
  templateUrl: './potentialcustomer-update.component.html',
  styleUrls: ['./potentialcustomer-update.component.scss']
})
export class PotentialcustomerUpdateComponent implements OnInit {
  potentialCustomerUpdateForm:any;
  potentialCustomers:PotentialCustomer[]=[];
  potentialCustomer:PotentialCustomer;
  reactiveForm:ReactiveFormsModule;
  dataLoaded=false;
  isPotentialCustomerLoad=false;
  constructor(private potentialCustomerService:PotentialcustomerService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getByPotentialCustomer(params["id"])
      }else{
        this.getPotentialCustomers()
      }
    })
    this.createPotentialCustomerUpdateForm();
    
  }
  createPotentialCustomerUpdateForm(){
    this.potentialCustomerUpdateForm=this.formBuilder.group({
      id:[this.potentialCustomer.id],
      potentialCustomerName:[this.potentialCustomer.potentialCustomerName],
      potentialCustomerSurname:[this.potentialCustomer.potentialCustomerSurname],
      phoneNumber:[this.potentialCustomer.phoneNumber],
      email:[this.potentialCustomer.email],
      adress:[this.potentialCustomer.adress],
      company:[this.potentialCustomer.company],
      position:[this.potentialCustomer.position],
      note:[this.potentialCustomer.note],
      dateOfUpload:[this.potentialCustomer.dateOfUpload],
    })
  }
  getPotentialCustomers() {
    this.potentialCustomerService.getPotentialCustomers().subscribe(response=>{
      this.potentialCustomers = response.data
      console.log(response)
      this.dataLoaded = true;
    })   
  }
  getByPotentialCustomer(Id:string) {
    this.potentialCustomerService.getByPotentialCustomer(Id).subscribe(response=>{
      this.potentialCustomer = response.data
      this.createPotentialCustomerUpdateForm();
      this.isPotentialCustomerLoad = true;
    })   
  }
  updatePotentialCustomer(potentaialCustomer:PotentialCustomer) {
      if(this.potentialCustomerUpdateForm.valid){
       let potentialCustomerModel= Object.assign({},this.potentialCustomerUpdateForm.value)
       this.potentialCustomerService .updatePotentialCustomer(potentialCustomerModel).subscribe(response=>{
        this.toastrService.success(response.message)
    
      })

    }
    
  }
}
