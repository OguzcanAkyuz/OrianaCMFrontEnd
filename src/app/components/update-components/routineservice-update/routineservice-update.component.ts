import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from 'app/models/routineService';
import { RoutineserviceService } from 'app/services/routineservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-routineservice-update',
  templateUrl: './routineservice-update.component.html',
  styleUrls: ['./routineservice-update.component.scss']
})
export class RoutineserviceUpdateComponent implements OnInit {
  routineServiceUpdateForm:any;
  routineService:RoutineService;
  routineServices:RoutineService[]=[];
  dataLoaded=false;
  isRoutineServiceLoad=false;
  constructor(private routineServiceService:RoutineserviceService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getByRoutineService(params["id"])
      }else{
        this.getRoutineServices()
      }
    })
    this.createRoutineServiceUpdateForm();
  }
  getRoutineServices() {
    this.routineServiceService
    .getRoutineServices()
    .subscribe(response=>{
      this.routineServices = response.data;
      this.dataLoaded = true;
    })   
  }
  getByRoutineService(Id:string) {
    this.routineServiceService.getByRoutineService(Id).subscribe(response=>{
      this.routineService = response.data
      this.createRoutineServiceUpdateForm();
      this.isRoutineServiceLoad = true;
    })   
  }
  createRoutineServiceUpdateForm(){
    this.routineServiceUpdateForm=this.formBuilder.group({
      id:[this.routineService.id], 
      customerName:[this.routineService.customerName], 
      routineServiceDescription:[this.routineService.routineServiceDescription], 
      routineServiceDate:[this.routineService.routineServiceDate], 
      routineServiceTime:[this.routineService.routineServiceTime], 
      officer:[this.routineService.officer], 
      productId:[this.routineService.productId], 
      personSurname:[this.routineService.personSurname],

    })
  }
  updateRoutineService(routineService:RoutineService) {
    
    
      if(this.routineServiceUpdateForm.valid){
       let routineServiceModel= Object.assign({},this.routineServiceUpdateForm.value)
       this.routineServiceService .updateRoutineService(routineServiceModel).subscribe(response=>{

        this.toastrService.success(response.message)

      })

    }
    
  }
}
