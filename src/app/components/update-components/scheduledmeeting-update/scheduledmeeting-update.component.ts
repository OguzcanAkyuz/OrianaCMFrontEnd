import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { ScheduledmeetingService } from 'app/services/scheduledmeeting.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-scheduledmeeting-update',
  templateUrl: './scheduledmeeting-update.component.html',
  styleUrls: ['./scheduledmeeting-update.component.scss']
})
export class ScheduledmeetingUpdateComponent implements OnInit {
  scheduledMeetingUpdateForm:any;
  scheduledMeetings:ScheduledMeeting[]=[];
  scheduledMeeting:ScheduledMeeting;
  reactiveForm:ReactiveFormsModule;
  dataLoaded=false;
  isScheduledMeetingLoad=false;

  constructor( private activatedRoute:ActivatedRoute,private scheduledMeetingService:ScheduledmeetingService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getByScheduledMeeting(params["id"])
      }else{
        this.getScheduledMeeting()
      }
    })
    this.createScheduledMeetingUpdateForm();
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
          this.createScheduledMeetingUpdateForm();
          this.isScheduledMeetingLoad = true;
        })   
      }
      createScheduledMeetingUpdateForm(){
        this.scheduledMeetingUpdateForm=this.formBuilder.group({
         id:[this.scheduledMeeting.id],
          customerInformation:[this.scheduledMeeting.customerInformation],
          participants:[this.scheduledMeeting.participants],
          meetingSubject:[this.scheduledMeeting.meetingSubject],
          meetingResult:[this.scheduledMeeting.meetingResult],
          meetingTitle:[this.scheduledMeeting.meetingTitle],
          meetingDate:[this.scheduledMeeting.meetingDate],
          companyName:[this.scheduledMeeting.companyName],
          companyAdress:[this.scheduledMeeting.companyAdress],
          companyBusinessArea:[this.scheduledMeeting.companyBusinessArea],
          companyWebAdress:[this.scheduledMeeting.companyWebAdress],
          executiveName:[this.scheduledMeeting.executiveName],
          executivePhoneNumber:[this.scheduledMeeting.executivePhoneNumber],
          executiveEmail:[this.scheduledMeeting.executiveEmail],
      })
    }
    updateScheduledMeeting(scheduledMeeting:ScheduledMeeting) {
    
    
        if(this.scheduledMeetingUpdateForm.valid){
         let scheduledMeetingModel= Object.assign({},this.scheduledMeetingUpdateForm.value)
         this.scheduledMeetingService .updateScheduledMeeting(scheduledMeetingModel).subscribe(response=>{
          this.toastrService.success(response.message)
        
        })
  
      }else{
        this.toastrService.error('Error')
      }
      
    }
  }

