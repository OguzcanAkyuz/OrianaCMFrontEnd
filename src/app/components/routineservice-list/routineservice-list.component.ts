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
routineServices:RoutineService[]=[];
dataLoaded=false;
  constructor(private routineServiceServices:RoutineserviceService,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getRoutineServices();
  }
  getRoutineServices() {
    this.routineServiceServices
    .getRoutineServices()
    .subscribe(response=>{
      this.routineServices = response.data;
      this.dataLoaded = true;
    })   
  }
}
