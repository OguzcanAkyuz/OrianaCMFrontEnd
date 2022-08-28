import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from 'app/models/customer';
import { CustomerService } from 'app/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  customer:Customer[]=[];
  customerAddForm:FormGroup;
  reactiveForm:ReactiveFormsModule;
  currentCustomer:Customer;
  constructor(private customerService:CustomerService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
this.createCustomerAddForm();
  }
  createCustomerAddForm(){
    this.customerAddForm=this.formBuilder.group({
   id:[""],
   productId:[""],
   purchaseDate:["",Validators.required],
   licenseTerm:["",Validators.required],
   lisenceEndDate:["",Validators.required],
   purchasePrice:["",Validators.required],
   customerNote:["",Validators.required],
   productVersion:["",Validators.required],
   customerCompanyName:["",Validators.required],
   customerCompanyAdress:["",Validators.required],
   companyBusinessArea:["",Validators.required],
   companyWebAdress:["",Validators.required],
   executiveName:["",Validators.required],
   executiveSurname:["",Validators.required],
   executivePhoneNumber:["",Validators.required],
   executiveEmail:["",Validators.required],
  })
  
}
customerAdd(){
  if(this.customerAddForm.valid){
    let customerModel=Object.assign({},this.customerAddForm.value)
    this.customerService.customerAdd(customerModel).subscribe(response=>{
      this.toastrService.success(response.message,"SuccesResult")
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