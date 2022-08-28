import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { ScheduledmeetingService } from 'app/services/scheduledmeeting.service';


@Component({
  selector: 'app-futuremeeting-list',
  templateUrl: './scheduledmeeting-list.component.html',
  styleUrls: ['./scheduledmeeting-list.component.scss']
})
export class ScheduledmeetingListComponent implements OnInit {
scheduledMeetings:ScheduledMeeting[]=[];
dataLoaded = false;
  constructor(private scheduledMeetingService:ScheduledmeetingService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getScheduledMeeting();
  }
  getScheduledMeeting(){
    this.scheduledMeetingService.getScheduledMeetings().subscribe(response=>{
      this.scheduledMeetings=response.data
      this.dataLoaded=true;
    })
  }
}