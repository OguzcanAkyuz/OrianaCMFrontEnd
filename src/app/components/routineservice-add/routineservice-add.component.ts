import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoutineService } from 'app/models/routineService';
import { RoutineserviceService } from 'app/services/routineservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-routineservice-add',
  templateUrl: './routineservice-add.component.html',
  styleUrls: ['./routineservice-add.component.scss']
})
export class RoutineserviceAddComponent implements OnInit {
  routineService:RoutineService[]=[];
  routineServiceAddForm:FormGroup;
  reactiveForm:ReactiveFormsModule;
  currentRoutineService:RoutineService;
  constructor(private routineServiceService:RoutineserviceService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createRoutineServiceAddForm();
  }
  createRoutineServiceAddForm(){
    this.routineServiceAddForm=this.formBuilder.group({
      id:[""], 
      customerName:["",Validators.required], 
      routineServiceDescription:["",Validators.required], 
      routineServiceDate:["",Validators.required], 
      routineServiceTime:["",Validators.required], 
      officer:["",Validators.required], 
      time:["",Validators.required], 
      productId:["",Validators.required], 
     
      personSurname:["",Validators.required],

    })
  }
  routineServiceAdd(){
    if(this.routineServiceAddForm.valid){
      let routineServiceModel=Object.assign({},this.routineServiceAddForm.value)
      this.routineServiceService.routineServiceAdd(routineServiceModel).subscribe(response=>{
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