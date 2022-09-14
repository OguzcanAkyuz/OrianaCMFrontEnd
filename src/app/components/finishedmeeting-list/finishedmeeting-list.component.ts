import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinishedMeeting } from 'app/models/finishedMeeting';
import { FinishedmeetingService } from 'app/services/finishedmeeting.service';

@Component({
  selector: 'app-finishedmeeting-list',
  templateUrl: './finishedmeeting-list.component.html',
  styleUrls: ['./finishedmeeting-list.component.scss']
})
export class FinishedmeetingListComponent implements OnInit {
  title='angular-text-search-highlight';
  searchText="";
  characters:FinishedMeeting[];
  finishedMeeting:FinishedMeeting[]=[];
dataLoaded = false;
isFinishedMeetingLoad=false
finishedMeetings:FinishedMeeting;


  constructor(private finishedMeetingService:FinishedmeetingService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"]){
        this.getByFinishedMeeting(params["Id"])
      }else{
        this.getFinishedMeetings()
      }
    })
  }
  getFinishedMeetings() {
    this.finishedMeetingService.getFinishedMeetings().subscribe(response=>{
      this.finishedMeeting = response.data
      this.dataLoaded = true;
    })   
  }
  getByFinishedMeeting(Id:string) {
    this.finishedMeetingService.getByFinishedMeeting(Id).subscribe(response=>{
      this.finishedMeetings = response.data
      console.log(this.finishedMeetings)
      this.isFinishedMeetingLoad = true;
    })   
  }

}
