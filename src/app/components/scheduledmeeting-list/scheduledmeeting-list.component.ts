import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { ScheduledmeetingService } from 'app/services/scheduledmeeting.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-futuremeeting-list',
  templateUrl: './scheduledmeeting-list.component.html',
  styleUrls: ['./scheduledmeeting-list.component.scss']
})
export class ScheduledmeetingListComponent implements OnInit {
  title='angular-text-search-highlight';
  searchText="";
  characters:ScheduledMeeting[];
  scheduledMeetings:ScheduledMeeting[]=[];
  scheduledMeeting:ScheduledMeeting;
dataLoaded = false;
isScheduledMeetingLoad=false;
  constructor(private scheduledMeetingService:ScheduledmeetingService,
    private activatedRoute:ActivatedRoute, private toastrService :ToastrService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByScheduledMeeting(params["Id"])
      }else{
        this.getScheduledMeeting()
      }
    })
  }
  getScheduledMeeting(){
    this.scheduledMeetingService.getScheduledMeetings().subscribe(response=>{
      this.scheduledMeetings=response.data
      this.dataLoaded=true;
    })
  }
  getByScheduledMeeting(Id:string) {
    this.scheduledMeetingService.getByScheduledMeeting(Id).subscribe(response=>{
      this.scheduledMeeting = response.data
      this.isScheduledMeetingLoad = true;
    })   
  }
  deleteScheduledMeeting(Id:string){
    this.scheduledMeetingService.deleteScheduledMeeting(Id).subscribe(response=>{
      if(response.success){
        this.toastrService.success(response.message)
        this.getScheduledMeeting()
      }
    }) 
  }
}
