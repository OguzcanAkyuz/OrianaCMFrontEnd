import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/services/register.service';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private registerService:RegisterService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
     
      email: ["",Validators.required],
      password:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
    })
  }
  register(){
    if(this.registerForm.valid){
      let registerModel=Object.assign({},this.registerForm.value)
      this.registerService.register(registerModel).subscribe(response=>{
        this.toastrService.info(response.message)

      },responseError=>{
        this.toastrService.error((responseError.error));
        
      }
      )

    }
}
}
