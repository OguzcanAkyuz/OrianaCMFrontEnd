import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FinishedMeeting } from 'app/models/finishedMeeting';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { FinishedmeetingService } from 'app/services/finishedmeeting.service';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-finishedmeeting-update',
  templateUrl: './finishedmeeting-update.component.html',
  styleUrls: ['./finishedmeeting-update.component.scss']
})
export class FinishedmeetingUpdateComponent implements OnInit {
  finishedMeetings:FinishedMeeting[]=[];
  finishedMeetingUpdateForm:any;
  reactiveForm:ReactiveFormsModule;
  finishedMeeting:FinishedMeeting;
  dataLoaded=false;
  isFinishedMeetingLoad=false;
  constructor(private finishedMeetingService:FinishedmeetingService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getByFinishedMeeting(params["id"])
      }else{
        this.getFinishedMeetings()
      }
     });

    this.createFinishedMeetingUpdateForm();
      }
      createFinishedMeetingUpdateForm(){
        this.finishedMeetingUpdateForm=this.formBuilder.group({
          id:[this.finishedMeeting.id],
          date:[this.finishedMeeting.date],
          customerInformation:[this.finishedMeeting.customerInformation],
          participants:[this.finishedMeeting.participants],
          meetingSubject:[this.finishedMeeting.meetingSubject],
          meetingResult:[this.finishedMeeting.meetingResult],
          meetingTitle:[this.finishedMeeting.meetingTitle],
          companyName:[this.finishedMeeting.companyName],
          companyAdress:[this.finishedMeeting.companyAdress],
          companyBusinessArea:[this.finishedMeeting.companyBusinessArea],
          companyWebAdress:[this.finishedMeeting.companyWebAdress],
          executiveName:[this.finishedMeeting.executiveName],
          executivePhoneNumber:[this.finishedMeeting.executivePhoneNumber],
          executiveEmail:[this.finishedMeeting.executiveEmail],
      })

}
getFinishedMeetings() {
  this.finishedMeetingService.getFinishedMeetings().subscribe(response=>{
    this.finishedMeetings = response.data
    this.dataLoaded = true;
  })   
}
getByFinishedMeeting(Id:string) {
  this.finishedMeetingService.getByFinishedMeeting(Id).subscribe(response=>{
    this.finishedMeeting = response.data
    this.createFinishedMeetingUpdateForm();
    this.isFinishedMeetingLoad = true;
  })   
}
updateCustomer(finishedMeeting:FinishedMeeting) {
    if(this.finishedMeetingUpdateForm.valid){
     let finishedMeetingModel= Object.assign({},this.finishedMeetingUpdateForm.value)
     this.finishedMeetingService .updateFinishedMeeting(finishedMeetingModel).subscribe(response=>{
      this.toastrService.success(response.message)
     }) 
    }
 
}
}