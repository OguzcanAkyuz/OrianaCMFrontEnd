import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from 'app/models/routineService';
import { RoutineserviceService } from 'app/services/routineservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-routineservice-list',
  templateUrl: './routineservice-list.component.html',
  styleUrls: ['./routineservice-list.component.scss']
})
export class RoutineserviceListComponent implements OnInit {
  title='angular-text-search-highlight';
  searchText="";
  characters:RoutineService[];
  routineServices:RoutineService[]=[];
dataLoaded=false;
isRoutineServiceLoad=false
 routineService:RoutineService;
  constructor(private routineServiceServices:RoutineserviceService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByRoutineService(params["Id"])
      }else{
        this.getRoutineServices()
      }
    })
  }

  getRoutineServices() {
    this.routineServiceServices
    .getRoutineServices()
    .subscribe(response=>{
      this.routineServices = response.data;
      this.dataLoaded = true;
    })   
  }
  getByRoutineService(Id:string) {
    this.routineServiceServices.getByRoutineService(Id).subscribe(response=>{
      this.routineService = response.data
      this.isRoutineServiceLoad = true;
    })   
  }
  deleteRoutineService(Id:string){
    this.routineServiceServices.deleteRoutineService(Id).subscribe(response=>{
      if(response.success){
        this.toastrService.success(response.message)
        this.getRoutineServices()
      }
    }) 
  }
}
