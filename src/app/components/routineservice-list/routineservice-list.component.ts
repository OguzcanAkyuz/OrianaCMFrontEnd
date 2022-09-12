import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from 'app/models/routineService';
import { RoutineserviceService } from 'app/services/routineservice.service';

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
  constructor(private routineServiceServices:RoutineserviceService,private activatedRoute:ActivatedRoute) { }

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
      this.routineServices = response.data
      this.dataLoaded = true;
    })   
  }
}
