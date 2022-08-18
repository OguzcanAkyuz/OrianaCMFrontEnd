import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { ScheduledmeetingService } from 'app/services/scheduledmeeting.service';
import { response } from 'express';

@Component({
  selector: 'app-futuremeeting-list',
  templateUrl: './futuremeeting-list.component.html',
  styleUrls: ['./futuremeeting-list.component.scss']
})
export class FuturemeetingListComponent implements OnInit {
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
